/* eslint-disable max-len */
import React from 'react';

import * as R from 'ramda';

import EntryScreen, {iRegState} from './entryScreen';
import Screen, {iState, initial} from './regScreen';

const SelecterData={
  register() {
    return R.reject(R.anyPass([R.isNil, R.isEmpty]))({
      'birthday': this.state?.birthday,
      'email': this.state?.email,
      'gender': this.state?.gender||'male',
      'name': this.state?.name,
      'phone': this.state?.phone,
    });
  },
  'state': initial,
};


const FormBlock = () => {
  const [state, setState] = React.useState<boolean>(false);

  console.log(SelecterData);

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
