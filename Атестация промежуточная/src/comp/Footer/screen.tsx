import React from 'react';

import {Switch} from 'antd';
import s from 'src/style';

export const text = {
  'BLACK': 'Темная тема',
  'Title': 'Delta World @ 1970-2077',
  'WHITE': 'Cветлая тема',

};

interface iFooter{
  onChange:()=>void;
  theme:string;
}

 const FooterBlock = ({onChange, theme}:iFooter) => {
  const label=theme === 'WHITE' ? text.WHITE : text.BLACK;

  return (
    <div className={s.container.footer}>
      <div className="md:flex-none">
        <span className={s.text.name}>{text.Title}</span>
      </div>
      <div className="">
        <span className={[s.text.name, 'mr-5'].join(' ')}>{label}</span>
        <Switch checked={theme === 'WHITE'} onChange={onChange} />
      </div>
    </div>
  );
};

export default FooterBlock;
