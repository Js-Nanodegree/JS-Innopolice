/* eslint-disable max-len */
import React from 'react';

import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import ROUTER from 'src/router';
import {selectProfileUser} from 'src/store/reducer/createSegment';
import s from 'src/style';

const CardRender = ({name, birthday, createdAt, uuid, img}: any) => {
  const dispatch = useDispatch();

  return (
    <div className={[s.render.wrapper, 'w-3/3 flex'].join(' ')}>
      <div className={s.container.border}>
        <div onClick={() => dispatch(selectProfileUser(uuid))}>
        <Link to={`${ROUTER.PROFILE}/${uuid}`}>
          <header className={s.render.header}>
            <div className={s.render.header_name}>
              <span className={s.text.name}>{name}</span>
            </div>
          </header>
        </Link>
      </div>
      <div className={s.container.image}>
        <div className={s.container.mock}>{ }</div>
      </div>
      <div className={[s.container.desc, 'w-full'].join('')}>
        <span className={s.text.desc_light}>
          {birthday} - {createdAt}
        </span>
      </div>
    </div>
    </div >
  );
};

export default CardRender;
