import React from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {Link, useLocation} from 'react-router-dom';
import Api from 'src/api';
import {selectProfileUser} from 'src/store/reducer/createSegment';
import {rejectLocalStorage} from 'src/store/reducer/token';
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
  const [state, setState] = React.useState<any>({});
  const dispatch = useDispatch();

  const auth = useSelector((state: any) => state?.token?.token || null);

  React.useLayoutEffect(() => {
    if (auth) {
      try {
        Api.getCurrentUser(auth).then(({data}: any) => setState(data?.[0] || {}));
      } catch (e) {
        console.log(e);
      }
    }
  }, [auth]);

  return (
    <div className="p-3 flex flex-row justify-around items-center  ">
      <Link to="/">
        <div className="hidden sm:inline">
          <span className="font-bold text-2xl">{text.header} </span>
        </div>
      </Link>
      <div className="flex flex-col sm:flex-row">
        {location?.pathname !== '/user' && (
          <Link to="/user">
            <div className={s.container.header}>
              <div className="img" />
              <span className={s.text.name}>{text.user}</span>
            </div>
          </Link>
        )}
        {location?.pathname !== '/post' && (
          <Link to="/post">
            <div className={s.container.header}>
              <div className="img" />
              <span className={s.text.name}>{text.post}</span>
            </div>
          </Link>
        )}
      </div>
      <Link to="/">
        <div className="inline sm:hidden">
          <span className="font-bold text-2xl">{text.header} </span>
        </div>
      </Link>
      {!auth && (
        <div className="flex flex-col md:flex-row">
          {location?.pathname !== '/register' && (
            <div className={s.container.header}>
              <Link to="/register">
                <span className={s.text.name}>{text.signIn}</span>
              </Link>
            </div>
          )}
          {location?.pathname !== '/auth' && (
            <div className={s.container.header}>
              <Link to="/auth">
                <span className={s.text.name}>{text.signUn}</span>
              </Link>
            </div>
          )}
        </div>
      )}
      {auth && (
        <div
          className="flex flex-col md:flex-row items-center"
          onClick={() => dispatch(selectProfileUser(state?.uuid))}
        >
          <img className={s.image.logoSmall}></img>
          <Link to="/profile">
            <div className={s.container.header}>
              <span className={s.text.name}>{state?.name}</span>
            </div>
          </Link>
          <div
            className={s.container.header}
            onClick={() => dispatch(rejectLocalStorage())}
          >
            <span className={s.text.name}>Выход</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderBlock;
