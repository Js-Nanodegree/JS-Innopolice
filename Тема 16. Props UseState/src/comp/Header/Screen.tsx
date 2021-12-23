import React from 'react';

import {Link} from 'react-router-dom';
import ROUTER from 'src/router';
import s from 'src/style';
import text from 'src/text';

interface iRouter {
  router: string;
  header: string;
}

const RouterChange = ({router, header}: iRouter) => {
  return (
    <Link
      className={s.block.select}
      to={router}
    >
      <span className={s.text.name}>{header} </span>
    </Link>
  );
};

export const Screen = ({auth, setProfile, state, onReject}: any) => {
  return (
    <div className="flex w-full p-2 px-4 flex-row items-center">
      <div className={s.block.titleActive}>
        <Link
          className={s.block.title}
          to={ROUTER.HOME}
        >
          <span className={s.text.name}>{text.header} </span>
        </Link>
      </div>
      <div className="flex flex-col text-center w-full sm:w-40">
        <RouterChange header={text.user} router={ROUTER.USER} />
        <RouterChange header={text.post} router={ROUTER.POST} />
      </div>
      <div className={s.block.titleMid}>
      <Link
          className={s.block.title}
          to={ROUTER.HOME}
        >
          <span className={s.text.name}>{text.header} </span>
        </Link>
      </div>
      {!auth?.uuid && (
        <div className="flex flex-col w-auto text-right">
          <RouterChange header={text.signUn} router={ROUTER.REGISTER} />
          <RouterChange header={text.signIn} router={ROUTER.AUTH} />
        </div>
      )}
      {auth?.uuid && (
        <div className="flex flex-col w-auto text-right items-end" onClick={setProfile}>
          <Link to={ROUTER.PROFILE}>
            <div className="flex flex-row">
              <img className={s.image.logoSmall}></img>
              <span className={s.text.name}>{auth?.email}</span>
            </div>
          </Link>
          <div
            className={s.block.select}
            onClick={onReject}
          >
            <span className={s.text.name}>{text.exit}</span>
          </div>
        </div>
      )}
    </div>
  );
};
