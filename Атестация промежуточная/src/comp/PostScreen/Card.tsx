/* eslint-disable max-len */
import React from 'react';

const CardRender = () => {
  // const name = 'Slava';
  // const date = Date.now().toLocaleString();
  // const desc = 'adfs';
  // const img = 'https://miro.medium.com/max/1200/0*TpsM6Y0kOQYEgWl1';


  return (
    <div className="flex mx-auto my-4">
      <div className="ring-2 rounded-xl flex flex-col h-full ring-gray-200 shadow-md bg-white">
        <header className="px-3 flex rounded-t-xl flex-row items-center hover:bg-gray-100 py-2">
          <div>
            <img className="p-6 bg-gray-800 shadow rounded-2xl"></img>
          </div>
          <div className="flex flex-col text-medium text-gray-700 m-2">
            <span className="text-gray-800 font-semibold"> Slava Yakimov </span>
            <span className="text-sm text-gray-700"> Slava Yakimov </span>
          </div>
        </header>
        <div className="h-64 w-auto">
          <div className="bg-red-700 h-full hover:bg-indigo-600">ds</div>
        </div>
        <div className="w-full px-3 py-2 pb-3">
          <span className="text-xs flex-wrap text-gray-500">
            Slava da asd ma dma dskcaksd casd a DKAC DA CDK CDA CKAD SCK ASKDC KASD C DAC ASKDC KASCD A DSCAKS
          </span>
        </div>
        <div className="flex justify-around border-t-2 flex-row">
          <div className="p-1">
            <span> GO USER </span>
          </div>
          <div className="p-1">
            <span>   EDIT PROFILE </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRender;
