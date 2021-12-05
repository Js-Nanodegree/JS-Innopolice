import React from 'react';

import {
  Link,
  useLocation,
} from 'react-router-dom';

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
  const location = useLocation();

  console.log(location?.pathname);


  return (
    <Header className="px-3 sticky">
      <Link to="/">
      <div className="hidden sm:inline">
        <span className="font-bold text-2xl">{text.header} </span>
      </div>
      </Link>
      <div className="flex flex-col sm:flex-row">
        {location?.pathname !== '/user' && <Link to="/user">
          <div className={block}>
            <div className="img" />
            <span className={textButton}>{text.user}</span>
          </div>
        </Link>}
        {location?.pathname !== '/post' && <Link to="/post">
          <div className={block}>
            <div className="img" />
            <span className={textButton}>{text.post}</span>
          </div>
        </Link>}
      </div>
      <div className="inline sm:hidden">
        <span className="font-bold text-2xl">{text.header} </span>
      </div>
      <div className="flex flex-col md:flex-row">
        {location?.pathname !== '/register' && <div className={block}>
          <Link to="/register">
            <span className={textAuth}>{text.signIn}</span>
          </Link>
        </div>}
        {location?.pathname !== '/auth' && <div className={block}>
          <Link to="/auth">
            <span className={textAuth}>{text.signUn}</span>
          </Link>
        </div>}
      </div>
    </Header>
  );
};

export default HeaderBlock;
