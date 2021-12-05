/* eslint-disable max-len */
import React from 'react';

import s from 'src/style';

export const Navigation = ({page, current}: any) => {
  return (
    <div className={s.render.card}>
      <div className={s.container.nav}>
        <span className={s.text.navActionText}>
          {current}
        </span>
        <span className={s.text.navText}>
          {current + 1}
        </span>
        <span className={s.text.navText}>
          {current + 2}
        </span>
        <span className={s.text.navText}>
          ...
        </span>
      </div>
    </div>
  );
};
