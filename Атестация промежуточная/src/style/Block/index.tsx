/* eslint-disable max-len */
export default {
  'button': {
    'black': 'w-full p-2 mt-4 bg-black text-base font-medium rounded-md text-white',
    'transparent': 'w-full p-2  text-black text-base font-medium my-3 mt-1',
  },
  'card': {
    'grid': 'grid  lg:grid-cols-3  sm:grid-cols-2 w-full overflow-y-scroll',
    'main': 'w-5/6 flex flex-col flex-grow items-center mx-auto',
    'profile': 'bg-white flex mt-5 m-1 flex-col ring-2 ring-rose-500 w-full rounded-xl shadow-md',
  },
  'container': {
    'block': `
    w-auto lg:w-2/3 mx-auto rounded-xl items-center 
    bg-white flex-col align-center p-3 flex px-6
    overflow-y-scroll
    h-full
    `,
    'border': 'ring-2 rounded-xl flex flex-col h-full ring-rose-500 shadow-md bg-white',
    'desc': 'w-full px-3 py-2 pb-3',
    'error': 'flex flex-col',
    'footer': 'p-3 flex flex-row justify-around',
    'header': 'w-auto p-1 px-2 m-1 hover:bg-purple-400 hover:text-white flex rounded-xl flex justify-center',
  'image': 'h-64 w-auto',
    'mock': 'bg-red-700 h-full hover:bg-indigo-600',
    'nav': 'm-2 bg-white rounded-2xl shadow  flex items-center justify-between',
    'radioGroup': 'flex items-center my-3',
    'reg': 'flex flex-col my-2 mb-1',
    'width': 'flex flex-col w-full max-w-md my-3',
  },
  'image': {
    'logo': 'p-6 bg-gray-800 shadow rounded-2xl',
    'logoSmall': 'w-6 h-6 rounded-full mr-2 bg-gray-100',
  },
  'input': {
    'main': `
    focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 
    px-3 bg-gray-300 py-2 shadow-md rounded-md 
    font-medium text-gray-900 text-md font-semibold placeholder-gray-500`,
  },
  'modal': {
    'auth': 'p-5 flex-col max-w-1/2 w-full items-center justify-center',
    'block': 'p-5 max-w-1/2 h-full',
  },
  'profile': {
    'col': 'col-start-1 row-start-2 px-4 sm:pb-16',
    'gridImage': 'w-full grid grid-cols-3 grid-rows-2 gap-2',
    'image': 'absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100',
    'imageGroup': 'col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3',
    'imageHiddenWrapper': 'relative hidden md:block',
    'imageMainWrapper': 'relative col-span-3 row-span-2 md:col-span-2',
    'main': 'text-sm font-medium text-white sm:mb-1 sm:text-gray-500',
    'mainImage': 'absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg',
    'nameBlock': 'relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t from-black sm:bg-none',
    'title': 'text-xl font-semibold text-white sm:text-2xl sm:leading-7 sm:text-black md:text-3xl',
    'wrapper': 'grid rounded-xl pb-4 grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16',
  },
  'render': {
    'card': 'p-2 flex justify-end w-full',
    'header': 'px-3 flex rounded-t-xl flex-row items-center hover:bg-gray-300 py-2',
    'header_name': 'flex flex-col text-medium text-gray-700 mx-2',
    'wrapper': 'flex mx-auto my-4 p-1',
  },
  'text': {
    'date': 'text-sm text-gray-700',
    'desc_light': 'text-xs flex-wrap text-gray-500',
    'helperSvg': 'flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4',
    'hiddenSmall': 'sm:hidden md:inline',
    'name': 'text-gray-800 font-semibold',
    'navActionText': 'text-sm flex text-center justify-center items-center text-pink-500 font-bold p-1 px-2 border-l-2 border-gray-200',
    'navText': 'text-sm flex text-center justify-center items-center font-bold p-1 px-2 border-l-2 border-gray-200',
    'title': 'text-2xl my-3 font-black',
  },
};
