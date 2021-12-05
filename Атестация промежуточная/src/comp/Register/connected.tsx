/* eslint-disable max-len */
import React from 'react';

import Screen, {iState} from './regScreen';

const FormBlock = () => {
  const [state, setState] = React.useState<boolean>(false);


  const createAccount = (e: iState) => {
    console.log(e);
  };

 console.log(state);

  return (
    <Screen onReject={() => setState(true)} onSubmit={createAccount} />
  );
};

export default FormBlock;
