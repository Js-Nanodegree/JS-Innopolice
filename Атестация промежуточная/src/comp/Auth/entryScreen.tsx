/* eslint-disable max-len */
import React from 'react';

import {Input} from 'antd';
import s from 'src/style';


const text = {
  'id': 'id',
  'placeholderId': 'placeholderId',
  'register': 'Авторизоваться',
  'registerButton': 'Войти',
  'registerChange': 'Зарегистрировать аккаунт',
};

export interface iRegState {
  id?: string;
}

const initial = {
  'id': '123213011-123123-1231231132',
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
    <div className={s.modal.auth}>
      <div className={s.container.block}>
        <div className="mt-3">
          <h2 className={s.text.title}>{text.register}</h2>
        </div>
        <div className={s.container.width}>
          <div className={s.container.reg}>
            <label htmlFor="name">{text.id}</label>
            <Input
              className={s.input.main}
              name="id"
              placeholder={text.placeholderId}
              value={state?.id}
              onChange={onChange}
            />
          </div>
          <div className="w-full">
            <button
              className={s.button.black}
              onClick={() => onSubmit(state)}
            >
              {text.registerButton}
            </button>
            <button
              className={s.button.transparent}
              onClick={() => {
                setState(initial);
                onReject();
              }}>
                {text.registerChange}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormBlock;
