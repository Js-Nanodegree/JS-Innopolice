import React from 'react';

import {useDispatch, useSelector} from 'react-redux';
import Api from 'src/api';
import {setLocalStorage} from 'src/store/reducer/token';

import Screen, {iState} from './regScreen';

// interface iResponse {
//   data:iState
// }

const FormBlock = () => {
  const [state, setState] = React.useState<iState>({});
  const auth = useSelector((state: any) => state?.token?.token || null);
  const dispatch = useDispatch();

  const createAccount = async (e: iState) => {
    try {
      Api.register(e).then(({data}: any) => {
        const profile = data[0];
        setState(profile);
        dispatch(setLocalStorage(profile?.uuid));
      });
    } catch (err) {
      console.log((prev: iState) => ({...prev, 'error': err}));
    }
  };

  if (auth) {
    return (<div />);
  }

  console.log(state);

  return (
    <Screen onReject={() => console.log(true)} onSubmit={createAccount} />
  );
};

export default FormBlock;
