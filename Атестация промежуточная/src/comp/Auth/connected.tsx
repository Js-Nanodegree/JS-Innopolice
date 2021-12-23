/* eslint-disable max-len */
import React from 'react';

import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Api from 'src/api';
import ROUTER from 'src/router';
import {setLocalStorage} from 'src/store/reducer/token';

import EntryScreen, {iRegState} from './screen';

const FormBlock = () => {
  const [state, setState] = React.useState<iRegState>({'id': ''});
  const [error, setError] = React.useState<any>({});
  const dispatch =useDispatch();
  const history = useNavigate();
  const onChange = (e: any) => {
    setError({});
    setState((prev: iRegState) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const loginAccount = async () => {
    if (!state?.id) return;
    const {data, error}:any = await Api.auth(state.id);
    if (error) {
      setError(error);
      return;
    }
    dispatch(setLocalStorage(data[0].uuid));
    history(ROUTER.HOME);
  };

  return (
    <EntryScreen
      error={error}
      state={state}
      onChange={onChange}
      onSubmit={loginAccount}
    />
  );
};

export default FormBlock;
