import React from 'react';

import {useDispatch, useSelector} from 'react-redux';
import Api from 'src/api';
import {setLocalStorage} from 'src/store/reducer/token';
import text from 'src/text';

import Screen, {iState} from './screen';

export const initial = {
  'birthday': '14.07.1990',
  'email': 'js-nanodegree@outlook.com',
  'gender': 'male',
  'name': '',
  'phone': '',
};

const FormBlock = () => {
  const auth = useSelector((state: any) => state?.token?.token || null);
  const dispatch = useDispatch();


  const [state, setState] = React.useState<iState>(initial);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string[]>([]);

  const onChange = (e: any) => {
    setState((prev: iState) => ({...prev, [e.target.name]: e.target.value}));
  };

  React.useLayoutEffect(() => {
    setError([]);
  }, [state]);

  const onSuccessSubmit = () => {
    setLoading(true);
    const data = ({
      state,
      update() {
        if (this.state?.gender) {
          return {...this.state, 'gender': this.state?.gender === text.male};
        }
        return {};
      },
    }).update();
    try {
      Api.register(data).then(({data}: any) => {
        const profile = data[0];
        dispatch(setLocalStorage(profile?.uuid));
      });
    } catch (err) {
      console.log((prev: iState) => ({...prev, 'error': err}));
    }
  };

  React.useLayoutEffect(() => {
    return () => setLoading(false);
  }, []);

  if (auth) {
    return <div />;
  }
  return (
    <Screen
      error={error}
      loading={loading}
      state={state}
      onChange={onChange}
      onReject={() => {
        setState(initial);
        dispatch(setLocalStorage());
      }}
      onSubmit={onSuccessSubmit}
    />
  );
};

export default FormBlock;
