import {useEffect, useState} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {updateGlobalTheme, typeColor} from 'src/store/reducer/theme';

const configTheme={
  'BLACK': {},
  'GRAY': {},
  'WHITE': {},
};

const useTheme = () => {
  const [themeLoaded, setThemeLoaded] = useState(false);
  const [theme, setTheme]=useState<any>({});
  const selectTheme = useSelector<typeColor>((state:any) => state?.theme);
  const dispatch = useDispatch();

  const setMode = (mode: typeColor) => {
    dispatch(updateGlobalTheme(mode));
  };

  console.log(selectTheme);

  useEffect(() => {
    setTheme(configTheme['WHITE']);
    setThemeLoaded(true);
  }, [selectTheme]);

  return {setMode, theme, themeLoaded};
};


export default useTheme;
