/* eslint-disable max-len */
import React from 'react';

import {DatePicker, Input, Radio} from 'antd';
import moment from 'moment';
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
interface iClickForm {
  onSubmit: () => void;
  onReject: () => void;
  onChange: (e: any) => void;
  state: any;
  loading: boolean;
  error: any;
}

const FormBlock = ({onSubmit, onChange, state, onReject, error}: iClickForm) => {
  const onChangeCalendar = (e: any) => {
    onChange({'target': {'name': 'birthday', 'value': moment(e).format('DD.MM.YYYY')}});
  };

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

            <DatePicker
              className={s.input.main}
              format={'DD.MM.YYYY'}
              picker="week"
              placeholder={text.placeholderBirthday}
              value={moment(state?.birthday, 'DD.MM.YYYY')}
              onChange={onChangeCalendar}

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
            {error.message && (
              <div>
                {error.message}
              </div>
            )}
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
