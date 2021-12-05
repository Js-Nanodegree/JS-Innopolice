import React from 'react';

import {
  Link,
  useLocation,
} from 'react-router-dom';
import s from 'src/style';

const text = {
  'header': 'Delta World',
  'post': 'Посты',
  'signIn': 'Вход',
  'signUn': 'Регистрация',
  'user': 'Пользователи',
};

const HeaderBlock = () => {
  const location = useLocation();

  return (
    <div className="p-3 flex flex-row justify-around items-center  ">
      <Link to="/">
      <div className="hidden sm:inline">
        <span className="font-bold text-2xl">{text.header} </span>
      </div>
      </Link>
      <div className="flex flex-col sm:flex-row">
        {location?.pathname !== '/user' && <Link to="/user">
          <div className={s.container.header}>
            <div className="img" />
            <span className={s.text.name}>{text.user}</span>
          </div>
        </Link>}
        {location?.pathname !== '/post' && <Link to="/post">
          <div className={s.container.header}>
            <div className="img" />
            <span className={s.text.name}>{text.post}</span>
          </div>
        </Link>}
      </div>
      <div className="inline sm:hidden">
        <span className="font-bold text-2xl">{text.header} </span>
      </div>
      <div className="flex flex-col md:flex-row">
        {location?.pathname !== '/register' && <div className={s.container.header}>
          <Link to="/register">
            <span className={s.text.name}>{text.signIn}</span>
          </Link>
        </div>}
        {location?.pathname !== '/auth' && <div className={s.container.header}>
          <Link to="/auth">
            <span className={s.text.name}>{text.signUn}</span>
          </Link>
        </div>}
      </div>
    </div>
  );
};

export default HeaderBlock;
