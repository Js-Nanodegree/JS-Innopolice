import React from 'react';

import PostCard from 'src/comp/PostScreen';
import s from 'src/style';


import {Navigation} from '../Navigation';

export const Post = () => {
  return (
    <div className={s.card.main}>
      <div className={s.card.grid}>
        <PostCard />
      </div>
      <Navigation current={1} page={20} />
    </div>
  );
};
