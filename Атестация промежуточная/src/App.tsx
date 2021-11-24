import React from 'react';

import useTheme from 'src/hooks/useTheme';
import Register from 'src/screen/home';
import {ThemeProvider} from 'styled-components';


export const text = {
  'BLACK': 'Темная тема',
  'WHITE': 'Cветлая тема',
};

function App() {
  const {theme} = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Register />
    </ThemeProvider>
  );
}

export default App;
