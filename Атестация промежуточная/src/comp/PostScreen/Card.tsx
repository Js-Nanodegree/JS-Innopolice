/* eslint-disable max-len */
import React from 'react';

import {Link} from 'react-router-dom';
import s from 'src/style';
const CardRender = () => {
  // const name = 'Slava';
  // const date = Date.now().toLocaleString();
  // const desc = 'adfs';
  // const img = 'https://miro.medium.com/max/1200/0*TpsM6Y0kOQYEgWl1';


  return (
    <div className={s.render.wrapper}>
      <div className={s.container.border}>
        <Link to='/profile'>
          <header className={s.render.header}>
            <img className={s.image.logo}></img>
            <div className={s.render.header_name}>
              <span className={s.text.name}> Slava Yakimov </span>
              <span className={s.text.date}> Slava Yakimov </span>
            </div>
          </header>
        </Link>
        <div className={s.container.image}>
          <div className={s.container.mock}>ds</div>
        </div>
        <div className={s.container.desc}>
          <span className={s.text.desc_light}>
            Slava da asd ma dma dskcaksd casd a DKAC DA CDK CDA CKAD SCK ASKDC KASD C DAC ASKDC KASCD A DSCAKS
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardRender;
