/* eslint-disable max-len */
import React from 'react';

import EntryScreen, {iRegState} from './entryScreen';

const FormBlock = () => {
  const [state, setState] = React.useState<boolean>(false);
  console.log(state);

  const loginAccount = (e: iRegState) => {
    console.log(e);
  };

  return (
    <EntryScreen onReject={() => setState(false)} onSubmit={loginAccount} />
  );
};

export default FormBlock;
