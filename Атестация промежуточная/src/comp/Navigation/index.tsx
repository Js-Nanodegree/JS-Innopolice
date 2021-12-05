/* eslint-disable max-len */
import React from 'react';


export const Navigation = ({page, current}: any) => {
  return (
    <div className="p-2 flex justify-end w-full">
      <div className="m-2 bg-white rounded-2xl shadow  flex items-center justify-between">
        <span className="text-sm flex text-center justify-center items-center font-bold p-1 px-2">
          {current}
        </span>
        <span className="text-sm flex text-center justify-center items-center font-bold p-1 px-2 border-l-2 border-gray-200">
          {current + 1}
        </span>
        <span className="text-sm flex text-center justify-center items-center font-bold p-1 px-2 border-l-2 border-gray-200">
          {current + 2}
        </span>
        <span className="text-sm flex text-center justify-center items-center font-bold p-1 px-2 border-l-2 border-gray-200">
          ...
        </span>
      </div>
    </div>
  );
};
