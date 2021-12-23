/* eslint-disable max-len */
import React from 'react';

import CardProfile from 'src/comp/CardProfile';
import {Navigation} from 'src/comp/Navigation';
import PostCard from 'src/comp/PostScreen';
import s from 'src/style';

export const Profile = () => {
  return (
    <div className={s.card.main}>
      <div className={s.card.profile}>
        <CardProfile />
      </div>
      <div className={s.card.grid}>
        <PostCard />
      </div>
      <Navigation current={1} page={20} />
    </div>
  );
};
