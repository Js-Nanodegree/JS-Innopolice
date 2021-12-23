import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  'key': 'root',
  storage,
};

const initialState = {
  'brand': true,
  'category': true,
  'coast': true,
  'infernal': true,
  'magazine': true,
  'period': true,
};

interface iConfigStorage {
  category?: boolean,
  brand?: boolean,
  magazine?: boolean,
  period?: boolean,
  coast?: boolean,
  infernal?: boolean,
}

const SET_LOCAL_STORAGE_AUTH = 'SET_LOCAL_STORAGE_AUTH';

export const setConfigStorage = (config: iConfigStorage) => {
  return {
    'payload': config,
    'type': SET_LOCAL_STORAGE_AUTH,
  };
};


const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LOCAL_STORAGE_AUTH:
      return {...state, ...action.payload};
    default:
      return state;
  }
};

const config = persistReducer(persistConfig, rootReducer); ;

export {config};
