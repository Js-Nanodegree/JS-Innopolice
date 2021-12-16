/* eslint-disable max-len */
import React from 'react';

import s from 'src/style';
import text from 'src/text';

import Bookmark from './bookmark';

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
  const arrProfile=[
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
  ];

  return (
    <div className={s.profile.wrapper}>
      <div className={s.profile.nameBlock}>
        <p className={s.profile.main}>{!uuid ? text.Client : text.MyProfile}</p>
        <h2 className={s.profile.title}>{name}</h2>
        {uuid && <p className={s.profile.main}>логин - {uuid}</p>}
      </div>
      <div className="mx-4 mt-4">
      {arrProfile.map((x:any, key:number) => (
        <div
          className="flex flex-row items-center"
          key={key}
        >
          <Bookmark />
          <span className={[s.text.nameProfile, 'w-40 ml-2'].join(' ')}>{x.name}</span>
          <span className={s.text.nameProfile}>{x.title}</span>
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
