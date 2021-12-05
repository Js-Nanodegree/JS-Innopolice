import React from 'react';

import Api from 'src/api';
import PostCard from 'src/comp/UserCard';
import s from 'src/style';

import {Navigation} from '../Navigation';

export const User = () => {
  const [state, setState] = React.useState<any>([]);

  React.useEffect(() => {
    try {
      Api.getAllUser().then(({data}: any) => {
        setState(data);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  console.log(state);


  return (
    <div className={s.card.main}>
      <div className={s.card.grid}>
        <PostCard state={state} />
      </div>
      <Navigation current={1} page={20} />
    </div>
  );
};
