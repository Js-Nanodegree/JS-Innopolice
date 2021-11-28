/* eslint-disable max-len */
import React from 'react';

import {Input, Radio} from 'antd';
import * as R from 'ramda';

import FormRegister from './Form';

const text = {
  'birthday': 'birthday',
  'birthdayError': 'birthdayError',
  'email': 'email',
  'emailError': 'emailError',
  'female': 'female',
  'formErrors': 'formErrors',
  'gender': 'gender',
  'genderError': 'genderError',
  'male': 'male',
  'name': 'name',
  'nameError': 'nameError',
  'phone': 'phone',
  'phoneError': 'phoneError',
  'placeholderBirthday': 'placeholderBirthday',
  'placeholderEmail': 'placeholderEmail',
  'placeholderName': 'placeholderName',
  'placeholderPhone': 'placeholderPhone',
  'register': 'Регистрация',
  'registerButton': 'Зарегистрировать',
  'registerChange': 'Уже есть аккаунт войти',
};

export interface iState {
  birthday?: string;
  email?: string;
  name?: string;
  phone?: string;
  gender?: string;
}

export const initial = {
  'birthday': '14.07.1990',
  'email': 'js-nanodegree@outlook.com',
  'gender': 'male',
  'name': '',
  'phone': '',
};

const errorMessage = (key: string) => {
  switch (key) {
    case 'name':
      return text.nameError;
    case 'phone':
      return text.phoneError;
    case 'email':
      return text.emailError;
    case 'gender':
      return text.genderError;
    case 'birthday':
      return text.birthdayError;
    default:
      return '';
  }
};

interface iClickForm{
  onSubmit:(e:iState)=>void,
  onReject:()=>void,
}

const FormBlock = ({onSubmit, onReject}: iClickForm) => {
  const [state, setState] = React.useState<iState>(initial);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string[]>([]);

  const onChange = (e: any) => {
    setState((prev: iState) => ({...prev, [e.target.name]: e.target.value}));
  };

  React.useLayoutEffect(() => {
    setError([]);
  }, [state]);

  const onSuccessSubmit = () => {
    setLoading(true);
    const input = R.reject(R.anyPass([R.isEmpty, R.isNil]))(state);
    if (Object.keys(input) === Object.keys(state)) {
      onSubmit(input);
      return;
    }
    setError(R.difference(Object.keys(initial), Object.keys(input)));
  };

  React.useLayoutEffect(() => {
    return () => setLoading(false);
  }, []);

  const inputStyle = `
      focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 
      px-3 bg-gray-300 py-2 shadow-md rounded-md 
      font-medium text-gray-900 text-md font-semibold placeholder-gray-500`;
  const container = 'flex flex-col my-2 mb-1';
  const block = `
  w-full  my-3 rounded-xl items-center 
  bg-white flex-col align-center p-3 flex px-6
  overflow-y-scroll
  h-full
`;

  return (
    <FormRegister className="h-20 p-6 relative">
      <div className={block}>
        <div className="mt-3 mb-5">
          <h2 className="text-2xl my-3 font-black">{text.register}</h2>
        </div>
        <div className="flex flex-col w-full max-w-md my-3 ">
          <div className={container}>
            <label htmlFor="name">{text.name}</label>
            <Input
              className={inputStyle}
              name="name"
              placeholder={text.placeholderName}
              value={state?.name}
              onChange={onChange}
            />
          </div>
          <div className={container}>
            <label>{text.gender}</label>
            <div className="flex items-center my-3">
              <Radio.Group
                name="gender"
                value={state?.gender}
                onChange={onChange}
              >
                <Radio value={text.male}>{text.male}</Radio>
                <Radio value={text.female}>{text.female}</Radio>
              </Radio.Group>
            </div>
          </div>
          <div className={container}>
            <label htmlFor="birthday">{text.birthday}</label>
            <Input
              className={inputStyle}
              name="birthday"
              placeholder={text.placeholderBirthday}
              value={state?.birthday}
              onChange={onChange}
            />
          </div>
          <div className={container}>
            <label htmlFor="email">{text.email}</label>
            <Input
              className={inputStyle}
              name="email"
              placeholder={text.placeholderEmail}
              value={state?.email}
              onChange={onChange}
            />
          </div>
          <div className={container}>
            <label htmlFor="phone">{text.phone}</label>
            <Input
              className={inputStyle}
              name="phone"
              placeholder={text.placeholderPhone}
              value={state?.phone}
              onChange={onChange}
            />
          </div>
          <div className="flex flex-col">
            {error.map((x, key) => (
              <span
                className="text-pink-500 text-left py-1 font-normal"
                key={key}
              >
                {errorMessage(x)}
              </span>
            ))}
          </div>
          <div className="w-full">
            <button
              className="w-full p-2 mt-4 bg-black text-base font-medium rounded-md text-white"
              disabled={loading}
              onClick={onSuccessSubmit}
            >
              {text.registerButton}
            </button>
            <button
              className="w-full p-2  text-black text-base font-medium my-3 mt-1"
              disabled={loading}
              onClick={() => {
                setState(initial);
                onReject();
              }}
            >
              {text.registerChange}
            </button>
          </div>
        </div>
      </div>
    </FormRegister>
  );
};

export default FormBlock;
