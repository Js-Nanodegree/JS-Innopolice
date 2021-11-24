import React from 'react';

import {Switch} from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import {updateGlobalTheme} from 'src/store/reducer/theme';

import Footer from './Footer';

export const text = {
  'BLACK': 'Темная тема',
  'WHITE': 'Cветлая тема',
};

 const FooterBlock = () => {
  const dispatch = useDispatch();
  const {theme} = useSelector((state: any) => state.theme);
  const onChange = () => {
    dispatch(updateGlobalTheme(theme === 'WHITE' ? 'BLACK' : 'WHITE'));
  };

  return (
    <Footer>
      <div className="footer_name">
        <span>Delta World @ 1970-2077</span>
      </div>
      <div className="footer_theme">
        <span>{theme === 'WHITE' ? text.WHITE : text.BLACK}</span>
        <Switch checked={theme === 'WHITE'} onChange={onChange} />
      </div>
    </Footer>
  );
};

export default FooterBlock;
