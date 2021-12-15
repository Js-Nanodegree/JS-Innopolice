/* eslint-disable max-len */
import React from 'react';

import s from 'src/style';
import text from 'src/text';

import Bookmark from './bookmark.svg';

export interface iAction {
  name?: string;
  date?: string;
  gender?: string;
  email?: string;
  logo?: string;
  img: string[];
  phone?: string;
  uuid?: string;
  showModal: () => void;
}

const CardProfile = ({
  name,
  date,
  gender,
  email,
  phone,
  img,
  logo,
  uuid,
  showModal,
}: iAction) => {
  return (
    <div className={s.profile.wrapper}>
      <div className={s.profile.nameBlock}>
        <p className={s.profile.main}>{!uuid ? text.Client : text.MyProfile}</p>
        <h2 className={s.profile.title}>{name}</h2>
        {uuid && <p className={s.profile.main}>логин - {uuid}</p>}
      </div>
      <div className={s.profile.col}>
        {[
          {
            'name': text.birthday,
            'title': date,
          },
          {
            'name': text.gender,
            'title': gender,
          },
          {
            'name': text.email,
            'title': email,
          },
          {
            'name': text.mobile,
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
              <span className={['mx-2', s.text.name].join('')}>{x.title}</span>
            </div>
          </div>
        ))}
      </div>
      {uuid && (
        <div
          className="col-start-1 row-start-3 space-y-3 px-4"
        >
          <div
            className={[s.button.black, 'text-center shadow'].join(' ')}
            onClick={showModal}
          >
            {text.Button}
          </div>
        </div>
      )}
      <div className={s.profile.imageGroup}>
        <div className={s.profile.gridImage}>
          <div className={s.profile.imageMainWrapper}>
            <img
              alt=""
              className={[s.profile.mainImage, 'rounded-t-xl'].join(' ')}
              src={logo}
            />
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
