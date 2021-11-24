import React from 'react';

import {Header} from './Header';

const text = {
  'header': 'Delta World',
  'post': 'Посты',
  'signIn': 'Вход',
  'signUn': 'Регистрация',
  'user': 'Пользователи',
};

const HeaderBlock = () => {
  return (
    <Header>
      <div className="logo_block">
        <div className="logo_img"></div>
        <span>{text.header} </span>
      </div>
      <div className="menu_block">
        <div className="user_block">
          <div className="img" />
          <span>{text.user}</span>
        </div>
        <div className="post_block">
          <div className="img" />
          <span>{text.post}</span>
        </div>
      </div>
      <div className="audience_block">
        <div className="signIn_block">
          <span>{text.signIn}</span>
        </div>
        <div className="signUp_block">
          <span>{text.signUn}</span>
        </div>
      </div>
    </Header>
  );
};

export default HeaderBlock;
