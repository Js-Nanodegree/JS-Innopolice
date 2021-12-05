/* eslint-disable max-len */
import React from 'react';

import {Link} from 'react-router-dom';

const CardRender = () => {
  // const name = 'Slava';
  // const date = Date.now().toLocaleString();
  // const desc = 'adfs';
  // const img = 'https://miro.medium.com/max/1200/0*TpsM6Y0kOQYEgWl1';


  return (
    <div className="flex mx-auto my-4 p-1">
      <div className="ring-2 rounded-xl flex flex-col h-full ring-rose-500 shadow-md bg-white">
        <Link to='user'>
          <header className="px-3 flex rounded-t-xl flex-row items-center hover:bg-gray-300 py-2">
            <div>
              <img className="p-6 bg-gray-800 shadow rounded-2xl"></img>
            </div>
            <div className="flex flex-col text-medium text-gray-700 m-2">
              <span className="text-gray-800 font-semibold"> Slava Yakimov </span>
              <span className="text-sm text-gray-700"> Slava Yakimov </span>
            </div>
          </header>
        </Link>
        <div className="h-64 w-auto">
          <div className="bg-red-700 h-full hover:bg-indigo-600">ds</div>
        </div>
        <div className="w-full px-3 py-2 pb-3">
          <span className="text-xs flex-wrap text-gray-500">
            Slava da asd ma dma dskcaksd casd a DKAC DA CDK CDA CKAD SCK ASKDC KASD C DAC ASKDC KASCD A DSCAKS
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardRender;
