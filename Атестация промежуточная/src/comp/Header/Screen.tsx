import React from 'react';

import {Link} from 'react-router-dom';
import ROUTER from 'src/router';
import s from 'src/style';
import text from 'src/text';

export const style = {
  'inline': 'sm:inline',
  'rowFlex': 'flex flex-col md:flex-row items-center w-full',
  'rowSelect': 'p-3 flex flex-row justify-between items-center',
};

interface iRouter{
  router:string;
  header:string;
}

const RouterChange = ({router, header}: iRouter) => {
  return (
    <Link className="flex w-36 items-center hover:bg-gray-200 shadow my-1 rounded-xl" to={router}>
      <span className={s.text.name}>{header} </span>
    </Link>
  );
};

export const Screen = ({auth, setProfile, state, onReject}: any) => {
  return (
    <div className="flex w-full p-2 px-4 flex-row items-center">
      <div className="sm:hidden">
        <RouterChange header={text.header} router={ROUTER.HOME} />
      </div>
      <div className="flex flex-col text-center w-full sm:w-40">
        <RouterChange header={text.user} router={ROUTER.USER} />
        <RouterChange header={text.post} router={ROUTER.POST} />
      </div>
      <div className="hidden sm:flex sm:w-full sm:justify-center text-xl sm:text-black">
        <RouterChange header={text.header} router={ROUTER.HOME} />
      </div>
      {!auth && (
        <div className="flex flex-col w-auto text-right">
          <RouterChange header={text.signUn} router={ROUTER.REGISTER} />
          <RouterChange header={text.signIn} router={ROUTER.AUTH} />
        </div>
      )}
      {auth && (
        <div className="flex flex-col w-auto text-right" onClick={setProfile}>
          <img className={s.image.logoSmall}></img>
          <RouterChange header={state?.name} router={ROUTER.PROFILE} />
          <div className={s.container.header} onClick={onReject}>
            <span className={s.text.name}>{text.exit}</span>
          </div>
        </div>
      )}
    </div>
  );
};
