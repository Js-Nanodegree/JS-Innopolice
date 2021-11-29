import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import useTheme from 'src/hooks/useTheme';
import Register from 'src/screen/home';
import {ThemeProvider} from 'styled-components';

const Post = () => {
  return (<div />);
};

const User = () => {
  return (<div />);
};

export const text = {
  'BLACK': 'Темная тема',
  'WHITE': 'Cветлая тема',
};

function App() {
  const {theme} = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route element={<Register />} path="/" />
          <Route element={<Register />} path="/register" />
          <Route element={<Post />} path="/post" />
          <Route element={<User />} path="/user" />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}


export default App;
