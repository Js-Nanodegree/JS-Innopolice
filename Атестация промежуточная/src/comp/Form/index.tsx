/* eslint-disable max-len */
import React from 'react';

import {Input, Radio} from 'antd';

import FormRegister from './Form';

const text = {
  'register': 'Регистрация',
};

const FormBlock = () => {
  return (
    <FormRegister className="container p-6">
      <div className="w-full h-full my-3 rounded-xl bg-white flex-col align-center p-3 justify-center flex">
        <h2 className="text-2xl my-3 font-black">
          {text.register}
        </h2>
        <div>
        <Input placeholder="Basic usage" />
        <div className="flex items-center">
        <Radio>Radio</Radio>
        <Radio>Radio</Radio>
        </div>
        <Input placeholder="Basic usage" />
        <Input placeholder="Basic usage" />
        <Input placeholder="Basic usage" />
      </div>
    </FormRegister>
  );
};

export default FormBlock;
