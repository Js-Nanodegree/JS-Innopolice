/* eslint-disable max-len */
import React from 'react';

import {Input} from 'antd';
import {Link} from 'react-router-dom';
import ROUTER from 'src/router';
import s from 'src/style';
import text from 'src/text';

export interface iRegState {
  id: string;
}

interface iClickForm {
  onSubmit: () => void;
  onChange: (e:any) => void;
  state:any;
  error:any;
}

const FormBlock = ({onSubmit, state, onChange, error}: iClickForm) => {
  return (
    <div className={s.modal.auth}>
      <div className={s.container.block}>
        <div className="mt-3">
          <h2 className={s.text.title}>{text.authorization}</h2>
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
          {error?.message &&(
            <div>{error.message}</div>
          )}
          <div className="w-full">
            <button
              className={s.button.black}
              onClick={onSubmit}
            >
              {text.authButton}
            </button>
            <div
              className={s.button.transparent}
            >
              <Link to={ROUTER.REGISTER}>
                {text.registerChange}
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormBlock;
