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
    <Footer className="px-3">
      <div className="md:flex-none">
        <span className="font-bold text-base">Delta World @ 1970-2077</span>
      </div>
      <div className="">
        <span className="font-bold text-medium mr-2">{theme === 'WHITE' ? text.WHITE : text.BLACK}</span>
        <Switch checked={theme === 'WHITE'} onChange={onChange} />
      </div>
    </Footer>
  );
};

export default FooterBlock;
