/* eslint-disable max-len */
import React from 'react';

import {Link} from 'react-router-dom';
import s from 'src/style';

const CardRender = ({name, birthday, createdAt, img}:any) => {
  // const name = 'Slava';
  // const date = Date.now().toLocaleString();
  // const desc = 'adfs';
  // const img = 'https://miro.medium.com/max/1200/0*TpsM6Y0kOQYEgWl1';


  return (
    <div className={[s.render.wrapper, 'w-3/3 flex'].join(' ')}>
      <div className={s.container.border}>
        <Link to="/profile">
          <header className={s.render.header}>
            <div className={s.render.header_name}>
              <span className={s.text.name}>{name}</span>
            </div>
          </header>
        </Link>
        <div className={s.container.image}>
          <div className={s.container.mock}>{}</div>
        </div>
        <div className={[s.container.desc, 'w-full'].join('')}>
          <span className={s.text.desc_light}>
           {birthday} - {createdAt}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardRender;
