/* eslint-disable max-len */
import React from 'react';

import {Input} from 'antd';
import s from 'src/styled';
import text from 'src/text';

import FormRegister from './styled';
export interface iRegState {
  id?: string;
}

const initial = {
  'id': '',
};

interface iClickForm {
  onSubmit: (e: iRegState) => void;
  onReject: () => void;
}


const FormBlock = ({onSubmit, onReject}: iClickForm) => {
  const [state, setState] = React.useState<iRegState>(initial);

  const onChange = (e: any) => {
    setState((prev: iRegState) => ({...prev, [e.target.name]: e.target.value}));
  };

  return (
    <FormRegister className={s.input.formRegister}>
      <div className={s.input.block}>
        <div className="mt-3 mb-5">
          <h2 className="text-2xl my-3 font-black">{text.register}</h2>
        </div>
        <div className={s.input.blockrow}>
          <div className={s.input.container}>
            <label htmlFor="name">{text.id}</label>
            <Input
              className={s.input.mainHome}
              name="id"
              placeholder={text.placeholderId}
              value={state?.id}
              onChange={onChange}
            />
          </div>
          <div className="w-full">
            <button
              className={s.input.button}
              onClick={() => onSubmit(state)}
            >
              {text.registerButton}
            </button>
            <button
              className={s.input.select}
              onClick={() => {
                setState(initial);
                onReject();
              }}>
              {text.registerChange}
            </button>
          </div>
        </div>
      </div>
    </FormRegister>
  );
};

export default FormBlock;
