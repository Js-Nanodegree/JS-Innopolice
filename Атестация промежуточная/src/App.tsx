/* eslint-disable max-len */
import React from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Auth from 'src/comp/Auth';
import FooterBlock from 'src/comp/Footer';
import HeaderBlock from 'src/comp/Header';
import Register from 'src/comp/Register';
import useTheme from 'src/hooks/useTheme';
import {ThemeProvider} from 'styled-components';

import {Post} from './comp/Post';
import {Profile} from './comp/Profile';
import {User} from './comp/User';


export const text = {
  'BLACK': 'Темная тема',
  'WHITE': 'Cветлая тема',
};

function App() {
  const {theme} = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="w-screen h-screen flex flex-col bg-white">
          <HeaderBlock />
          <div className="flex flex-col flex-grow bg-gray-300 overflow-y-scroll">
            <Routes>
              <Route element={<Post />} path="/" />
              <Route element={<Register />} path="/register" />
              <Route element={<Auth />} path="/auth" />
              <Route element={<Post />} path="/post" />
              <Route element={<User />} path="/user" />
              <Route element={<Profile />} path="/profile" />
            </Routes>
          </div>
          <FooterBlock />
        </div>
      </Router>

    </ThemeProvider>
  );
}

export default App;
