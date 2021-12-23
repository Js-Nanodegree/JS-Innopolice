import React from 'react';

import * as R from 'ramda';

import CardRender from './Card';

const Connected = ({state}: any) => {
  console.log(state);

  return (
    <>
      {!R.isEmpty(state) && state.map((x: any, key: number) => (
        <div key={key}>
          <CardRender {...x} />
        </div>
      ))}
    </>
  );
};

export default Connected;
