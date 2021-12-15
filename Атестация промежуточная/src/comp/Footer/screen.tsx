import React from 'react';

import {Switch} from 'antd';
import s from 'src/style';
import text from 'src/text';

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
