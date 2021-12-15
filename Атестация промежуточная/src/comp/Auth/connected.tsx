/* eslint-disable max-len */
import React from 'react';

import EntryScreen, {iRegState} from './screen';

const FormBlock = () => {
  const [state, setState] = React.useState<iRegState>({'id': ''});

  const onChange = (e: any) => {
    setState((prev: iRegState) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const loginAccount = () => {
    console.log(state);
  };

  return (
    <EntryScreen
      state={state}
      onChange={onChange}
      onSubmit={loginAccount}
    />
  );
};

export default FormBlock;
