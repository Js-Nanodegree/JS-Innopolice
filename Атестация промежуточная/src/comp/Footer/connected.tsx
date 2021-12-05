import React from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {updateGlobalTheme} from 'src/store/reducer/theme';

import Screen from './screen';

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
    <Screen theme={theme} onChange={onChange}/>
  );
};

export default FooterBlock;
