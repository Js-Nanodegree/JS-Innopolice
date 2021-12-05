/* eslint-disable max-len */
import React from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Auth from 'src/comp/Auth';
import FooterBlock from 'src/comp/Footer';
import HeaderBlock from 'src/comp/Header';
import PostCard from 'src/comp/PostScreen';
import Register from 'src/comp/Register';
import useTheme from 'src/hooks/useTheme';
import {ThemeProvider} from 'styled-components';


const Navigation=({page, current}:any)=>{
  return (
    <div className="p-2 flex justify-end w-full">
        <div className="m-2 bg-white rounded-2xl shadow  flex items-center justify-between">
          <span className="text-sm flex text-center justify-center items-center font-bold p-1 px-2">
            {current}
          </span>
          <span className="text-sm flex text-center justify-center items-center font-bold p-1 px-2 border-l-2 border-gray-200">
            {current+1}
          </span>
          <span className="text-sm flex text-center justify-center items-center font-bold p-1 px-2 border-l-2 border-gray-200">
            {current+2}
          </span>
          <span className="text-sm flex text-center justify-center items-center font-bold p-1 px-2 border-l-2 border-gray-200">
            ...
          </span>
        </div>
      </div>
  );
};

const Post = () => {
  return (
    <div className="w-5/6 flex flex-col flex-grow items-center mx-auto">
      <div className="grid  lg:grid-cols-3  sm:grid-cols-2 gap-1 w-full overflow-y-scroll">
        <PostCard />
      </div>
      <Navigation current={1} page={20}/>
    </div>
  );
};

const User = () => {
  return (
    <div className="w-5/6 flex flex-col flex-grow items-center mx-auto">
      <div className="grid  lg:grid-cols-3  sm:grid-cols-2 gap-3 w-full overflow-y-scroll">
        <PostCard />
      </div>
      <Navigation current={1} page={20}/>
    </div>
  );
};

export const text = {
  'BLACK': 'Темная тема',
  'WHITE': 'Cветлая тема',
};

function App() {
  const {theme} = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <div className="w-screen h-screen flex flex-col bg-white">
        <HeaderBlock />
        <div className="flex flex-col flex-grow bg-gray-300 overflow-y-scroll">
          <Router>
            <Routes>
              <Route element={<Register />} path="/" />
              <Route element={<Auth />} path="/auth" />
              <Route element={<Post />} path="/post" />
              <Route element={<User />} path="/user" />
              <Route element={<User />} path="/profile" />
            </Routes>
          </Router>
        </div>
        <FooterBlock />
      </div>
    </ThemeProvider>
  );
}

export default App;
