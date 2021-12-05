import React from 'react';

import {Navigation} from 'src/comp/Navigation';
import PostCard from 'src/comp/PostScreen';


export const Profile = () => {
  return (
    <div className="w-5/6 flex flex-col flex-grow items-center mx-auto">
      <div className="grid  lg:grid-cols-3  sm:grid-cols-2 gap-1 w-full overflow-y-scroll">
        <PostCard />
      </div>
      <Navigation current={1} page={20} />
    </div>
  );
};
