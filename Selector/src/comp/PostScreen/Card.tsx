/* eslint-disable max-len */
import React from 'react';

import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {selectProfileUser} from 'src/store/reducer/createSegment';
import s from 'src/style';

const CardRender = ({image, profile, message}: any) => {
  const dispatch = useDispatch();

  return (
    <div className={s.render.wrapper}>
      <div className={s.container.border}>
        <div onClick={()=>dispatch(selectProfileUser(profile?.uuid))}>
        <Link to={`/profile/${profile.uuid}`}>
          <header className={s.render.header}>
            <img className={s.image.logo} src={image?.url}></img>
            <div className={s.render.header_name}>
              <span className={s.text.name}>{profile?.name}</span>
              <span className={s.text.date}>{profile?.phone}</span>
            </div>
          </header>
        </Link>
        </div>
        {image.url && (
          <img
            alt={image?.title}
            className={[
              s.container.mock, s.image.imageLight,
            ].join(' ')}
            src={image?.url}
          />
        )}
        {!image.url && <div className={s.container.image}>
          <div className={s.container.mock}>ds</div>
        </div>}
        <div className={s.container.desc}>
          <span className={s.text.desc_light}>
            {message}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardRender;
