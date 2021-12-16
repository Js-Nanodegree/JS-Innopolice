import React from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Api from 'src/api';
import ROUTER from 'src/router';
import {setLocalStorage} from 'src/store/reducer/token';
import text from 'src/text';

import Screen, {iState} from './screen';

export const initial = {
  'birthday': '14.07.1990',
  'email': '',
  'gender': '',
  'name': '',
  'phone': '',
};

const FormBlock = () => {
  const auth = useSelector((state: any) => state?.token?.token || null);
  const dispatch = useDispatch();
  const [state, setState] = React.useState<iState>(initial);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<any>({});
  const history = useNavigate();
  const onChange = (e: any) => {
    setError({});
    setState((prev: iState) => ({...prev, [e.target.name]: e.target.value}));
  };

  const onSuccessSubmit = () => {
    setLoading(true);
    const inputModel = ({
      state,
      update() {
        const valid: any = this.validate();
        if (valid) {
          setError(valid);
        }

        if (this.state?.gender) {
          return {...this.state, 'gender': this.state?.gender === text.male};
        }
        return {};
      },
      validate() {
        if (!this.state.name) {
          setError({'message': text.errorName});
          return true;
        }
        if (this.state.name && this.state.name.length < 5) {
          setError({'message': text.errorName});
          return true;
        }
        if (!this.state.email) {
          setError({'message': text.errorEmail});
          return true;
        }
        if (!this.state.gender) {
          setError({'message': text.errorGender});
          return true;
        }
        if (this.state.email && this.state.email.length < 3) {
          setError({'message': text.errorEmail});
          return true;
        }
        if (!this.state.phone) {
          setError({'message': text.errorPhone});
          return true;
        }
        if (this.state.phone && this.state.phone.length !== 12) {
          setError({'message': text.errorPhone});
          return true;
        }
        if (this.state.phone && !this.state.phone.includes('+7')) {
          setError({'message': text.errorPhoneIndex});
          return true;
        }
        return false;
      },
    });
    const valid = inputModel.validate();
    if (valid) {
      return;
    }
    Api.register(inputModel.update()).then(({data, error}: any) => {
      if (error) {
        setError(error);
        return;
      }
      dispatch(setLocalStorage(data[0]?.uuid));
      history(ROUTER.HOME);
    });
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
