/* eslint-disable max-len */
import React from 'react';

import {Input} from 'antd';


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
  const inputStyle = `
      focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 
      px-3 bg-gray-300 py-2 shadow-md rounded-md 
      font-medium text-gray-900 text-md font-semibold placeholder-gray-500`;
  const container = 'flex flex-col my-2 mb-1';
  const block = `
  w-full  my-3 rounded-xl items-center 
  bg-white flex-col align-center p-3 flex px-6
  overflow-y-scroll
`;

  return (
    <div className="p-5 flex-col max-w-1/2 w-full items-center justify-center">
      <div className={block}>
        <div className="mt-3 mb-5">
          <h2 className="text-2xl my-3 font-black">{text.register}</h2>
        </div>
        <div className="flex flex-col w-full max-w-md my-3 ">
          <div className={container}>
            <label htmlFor="name">{text.id}</label>
            <Input
              className={inputStyle}
              name="id"
              placeholder={text.placeholderId}
              value={state?.id}
              onChange={onChange}
            />
          </div>
          <div className="w-full">
            <button
              className="w-full p-2 mt-4 bg-black text-base font-medium rounded-md text-white"
              onClick={() => onSubmit(state)}
            >
              {text.registerButton}
            </button>
            <button
              className="w-full p-2 text-black text-base font-medium my-3 mt-1"
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
