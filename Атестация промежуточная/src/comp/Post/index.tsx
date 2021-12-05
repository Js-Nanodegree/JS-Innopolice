import React from 'react';

import PostCard from 'src/comp/PostScreen';

import {Navigation} from '../Navigation';

export const Post = () => {
  return (
    <div className="w-5/6 flex flex-col flex-grow items-center mx-auto">
      <div className="grid  lg:grid-cols-3  sm:grid-cols-2 w-full overflow-y-scroll">
        <PostCard />
      </div>
      <Navigation current={1} page={20} />
    </div>
  );
};
