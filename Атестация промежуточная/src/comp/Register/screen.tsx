/* eslint-disable max-len */
import React from 'react';

import {Input, Radio} from 'antd';
import {Link} from 'react-router-dom';
import ROUTER from 'src/router';
import s from 'src/style';
import text from 'src/text';

export interface iState {
  birthday?: string;
  uuid?: string;
  createAt?: string;
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
  onSubmit: () => void;
  onReject: () => void;
  onChange: (e: any) => void;
  state: any;
  loading: boolean;
  error: any;
}

const FormBlock = ({onSubmit, onChange, state, onReject, error}: iClickForm) => {
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
                <Radio value={true}>{text.male}</Radio>
                <Radio value={false}>{text.female}</Radio>
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
            {error.map((x: any, key: number) => (
              <span className={s.text.name} key={key}>
                {errorMessage(x)}
              </span>
            ))}
          </div>
          <div className="w-full">
            <button
              className={s.button.black}
              onClick={onSubmit}
            >
              {text.registerButton}
            </button>
            <div
              className={`${s.button.transparent} w-full items-center`}
            >
              <Link
                to={ROUTER.AUTH}
              >
                {text.authChange}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormBlock;
