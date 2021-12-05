/* eslint-disable max-len */
import React from 'react';

import s from 'src/style';

const Bookmark = () => {
  return (
    <svg className="text-violet-600" fill="currentColor" height="20" width="20">
      <path d="M9.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.784-.57-.381-1.81.587-1.81H7.03a1 1 0 00.95-.69L9.05 3.69z" />
    </svg>
  );
};

export interface iAction {
  name?: string;
  date?: string;
  gender?: string;
  email?: string;
  logo?: string;
  img: string[];
  phone?: string;
  uuid?: string;
  setModal: () => void;
}

const text = {
  'Button': 'Редактировать профиль',
  'Client': 'Клиентский профиль',
};

const CardProfile = ({
  name,
  date,
  gender,
  email,
  phone,
  img,
  logo,
  uuid,
  setModal,
}: iAction) => {
  const openModal = () => {
    setModal();
  };

  console.log([
    {
      'name': 'Дата рождения',
      'title': date,
    },
    {
      'name': 'Пол',
      'title': gender,
    },
    {
      'name': 'E-mail',
      'title': email,
    },
    {
      'name': 'Номер Телефона',
      'title': phone,
    },
  ]);

  return (
    <div className={s.profile.wrapper}>
      <div className={s.profile.nameBlock}>
        <p className={s.profile.main}>{text.Client}</p>
        <h2 className={s.profile.title}>{name}</h2>
        <p className={s.profile.main}>логин - {uuid}</p>
      </div>
      <div className={s.profile.col}>
        {[
          {
            'name': 'Дата рождения',
            'title': date,
          },
          {
            'name': 'Пол',
            'title': gender,
          },
          {
            'name': 'E-mail',
            'title': email,
          },
          {
            'name': 'Номер Телефона',
            'title': phone,
          },
        ].map((x, key) => (
          <div
            className={[s.text.helperSvg, 'items-center'].join(' ')}
            key={key}
          >
            <Bookmark />
            <div className="ml-2 flex flex-row">
              <span className={s.text.name}>{x.name}</span>
              <div className={[s.text.name, 'mx-1'].join(' ')}>·</div>
              <span className={['mx-2', s.text.name].join('')}>
                {x.title}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="col-start-1 row-start-3 space-y-3 px-4">
        <div
          className={[s.button.black, 'text-center shadow'].join(' ')}
          onClick={openModal}
        >
          {text.Button}
        </div>
      </div>
      <div className={s.profile.imageGroup}>
        <div className={s.profile.gridImage}>
          <div className={s.profile.imageMainWrapper}>
            <img alt="" className={[s.profile.mainImage, 'rounded-t-xl'].join(' ')} src={logo} />
          </div>
          {img.map((x, key) => (
            <div className={s.profile.imageHiddenWrapper} key={key}>
              <img alt="" className={s.profile.image} src={x} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
