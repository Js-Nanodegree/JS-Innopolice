/* eslint-disable max-len */
import React from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Auth from 'src/comp/Auth';
import FooterBlock from 'src/comp/Footer';
import HeaderBlock from 'src/comp/Header';
import {Post} from 'src/comp/Post';
import {Profile} from 'src/comp/Profile';
import Register from 'src/comp/Register';
import {User} from 'src/comp/User';
import useTheme from 'src/hooks/useTheme';
import ROUTER from 'src/router';
import s from 'src/styled';
import {ThemeProvider} from 'styled-components';

function App() {
  const {theme} = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={s.view.main}>
          <HeaderBlock />
          <div className={s.view.content}>
            <Routes>
              <Route element={<Post />} path={ROUTER.HOME} />
              <Route element={<Register />} path={ROUTER.REGISTER} />
              <Route element={<Auth />} path={ROUTER.AUTH} />
              <Route element={<Post />} path={ROUTER.POST} />
              <Route element={<User />} path={ROUTER.USER} />
              <Route element={<Profile />} path={ROUTER.PROFILE} />
            </Routes>
          </div>
          <FooterBlock />
        </div>
      </Router>

    </ThemeProvider>
  );
}

export default App;
