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
  const textButton = 'text-base md:text-lg md:font-semibold';
  const textAuth = 'text-base md:text-lg md:font-semibold';
  const block = 'w-auto p-1 px-2 m-1 hover:bg-purple-400 hover:text-white flex rounded-xl flex justify-center';

  return (
    <Header className="px-3">
      <div className="hidden sm:inline">
        <span className="font-bold text-2xl">{text.header} </span>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className={block}>
          <div className="img" />
          <span className={textButton}>{text.user}</span>
        </div>
        <div className={block}>
          <div className="img" />
          <span className={textButton}>{text.post}</span>
        </div>
      </div>
      <div className="inline sm:hidden">
        <span className="font-bold text-2xl">{text.header} </span>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className={block}>
          <span className={textAuth}>{text.signIn}</span>
        </div>
        <div className={block}>
          <span className={textAuth}>{text.signUn}</span>
        </div>
      </div>
    </Header>
  );
};

export default HeaderBlock;
