import React from 'react';

import {Modal, Input, Radio} from 'antd';
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

interface iModalProfile{
  fileChange:(e:any)=>void;
  onChenUpdateAnge:(e:any)=>void;
  handleOk:(e:any)=>void;
  handleCancel:(e:any)=>void;
  state:any;
  isModalVisible: boolean;
}

const ScreenModal = ({
  fileChange, isModalVisible, handleOk, handleCancel, state, onChenUpdateAnge,
}: iModalProfile) => {
  return (
    <Modal
      title="Basic Modal"
      visible={isModalVisible}
      onCancel={handleCancel}
      onOk={handleOk}
    >
      <div className={[s.render.wrapper, 'scroll'].join(' ')}>
        <div className={[s.container.borderProfile, 'ring-0 border-0'].join(' ')}>
          <div className={s.render.header}>
            <img alt={state?.logo?.title} className={s.image.logo} src={state?.logo?.url}></img>
            <div className={s.render.header_name}>
              <span className={s.text.name}>{state?.name}</span>
              <span className={s.text.date}> {state?.uuid} </span>
            </div>
          </div>
          <div className={[s.container.image, s.container.imageSet].join(' ')}>
            {state?.logo?.url && (
              <img
                alt={state?.logo?.title}
                className={[s.container.mock, s.image.imageLight].join(' ')}
                src={state?.logo?.url} />
            )}
            <div className="mx-2 flex h-40">
              <input
                accept="image/*"
                className={[s.button.black, 'w-auto mt-0'].join(' ')}
                id="fileInput"
                type="file"
                onChange={fileChange} />
            </div>
            <div className={s.container.reg}>
              <label htmlFor="name">{text.name}</label>
              <Input
                className={s.input.main}
                name="name"
                placeholder={text.placeholderName}
                value={state?.name}
                onChange={onChenUpdateAnge}
              />
            </div>
            <div className={s.container.reg}>
              <label>{text.gender}</label>
              <div className={s.container.radioGroup}>
                <Radio.Group
                  name="gender"
                  value={state?.gender}
                  onChange={onChenUpdateAnge}
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
                onChange={onChenUpdateAnge}
              />
            </div>
            <div className={s.container.reg}>
              <label htmlFor="email">{text.email}</label>
              <Input
                className={s.input.main}
                name="email"
                placeholder={text.placeholderEmail}
                value={state?.email}
                onChange={onChenUpdateAnge}
              />
            </div>
            <div className={s.container.reg}>
              <label htmlFor="phone">{text.phone}</label>
              <Input
                className={s.input.main}
                name="phone"
                placeholder={text.placeholderPhone}
                value={state?.phone}
                onChange={onChenUpdateAnge}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ScreenModal;
