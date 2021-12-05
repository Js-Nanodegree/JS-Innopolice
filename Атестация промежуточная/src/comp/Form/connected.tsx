import React from 'react';

import EntryScreen, {iRegState} from './entryScreen';
import Screen, {iState} from './regScreen';


const FormBlock = () => {
  const [state, setState] = React.useState<boolean>(false);


  const createAccount = (e: iState) => {
    console.log(e);
  };

  const registerAccount = (e: iRegState) => {
    console.log(e);
  };

  if (state) {
    return (
      <EntryScreen onReject={() => setState(false)} onSubmit={registerAccount} />
    );
  }

  return (
    <Screen onReject={() => setState(true)} onSubmit={createAccount} />
  );
};

export default FormBlock;
