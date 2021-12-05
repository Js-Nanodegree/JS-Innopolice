/* eslint-disable max-len */
import React from 'react';

import {Input, Radio} from 'antd';
import * as R from 'ramda';
import s from 'src/style';

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

interface iClickForm {
  onSubmit: (e: iState) => void,
  onReject: () => void,
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


  return (
    <div className={s.modal.block}>
      <div className={s.container.block}>
        <div className="mt-3 mb-5">
          <h2 className={s.text.title}>{text.register}</h2>
        </div>
        <div className={s.container.width}>
          <div className={s.container.reg}>
            <label htmlFor="name">{text.name}</label>
            <Input
              className={s.input.main}
              name="name"
              placeholder={text.placeholderName}
              value={state?.name}
              onChange={onChange}
            />
          </div>
          <div className={s.container.reg}>
            <label>{text.gender}</label>
            <div className={s.container.radioGroup}>
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
          <div className={s.container.reg}>
            <label htmlFor="birthday">{text.birthday}</label>
            <Input
              className={s.input.main}
              name="birthday"
              placeholder={text.placeholderBirthday}
              value={state?.birthday}
              onChange={onChange}
            />
          </div>
          <div className={s.container.reg}>
            <label htmlFor="email">{text.email}</label>
            <Input
              className={s.input.main}
              name="email"
              placeholder={text.placeholderEmail}
              value={state?.email}
              onChange={onChange}
            />
          </div>
          <div className={s.container.reg}>
            <label htmlFor="phone">{text.phone}</label>
            <Input
              className={s.input.main}
              name="phone"
              placeholder={text.placeholderPhone}
              value={state?.phone}
              onChange={onChange}
            />
          </div>
          <div className={s.container.error}>
            {error.map((x, key) => (
              <span
                className={s.text.name}
                key={key}
              >
                {errorMessage(x)}
              </span>
            ))}
          </div>
          <div className="w-full">
            <button
              className={s.button.black}
              disabled={loading}
              onClick={onSuccessSubmit}
            >
              {text.registerButton}
            </button>
            <button
              className={s.button.transparent}
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
    </div>
  );
};

export default FormBlock;
