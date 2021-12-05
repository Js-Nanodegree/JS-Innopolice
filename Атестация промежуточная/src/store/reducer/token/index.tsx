import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  'key': 'root',
  storage,
};

const initialState = '';

interface iLocalStorage {
  token:string
}

const SET_LOCAL_CONFIG_PLANED = 'SET_LOCAL_CONFIG_PLANED';
const REJECT_LOCAL_CONFIG_PLANED='REJECT_LOCAL_CONFIG_PLANED';

export const setLocalStorage = (token: iLocalStorage) => {
  return {
    'payload': {token},
    'type': SET_LOCAL_CONFIG_PLANED,
  };
};

export const rejectLocalStorage = () => {
  return {
    'type': REJECT_LOCAL_CONFIG_PLANED,
  };
};


const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LOCAL_CONFIG_PLANED:
      return action.payload;
      case REJECT_LOCAL_CONFIG_PLANED:
        return initialState;
    default:
      return state;
  }
};

const token = persistReducer(persistConfig, rootReducer); ;

export {token};
