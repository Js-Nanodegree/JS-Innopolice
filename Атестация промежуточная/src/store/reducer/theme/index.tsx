import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  'key': 'theme',
  storage,
};

const SET_THEME_FONT = 'SET_THEME_FONT';

export type typeColor = {
  BLACK: 'BLACK',
  WHITE: 'WHITE',
  GRAY: 'GRAY'
}

export const updateGlobalTheme = (theme: string) => ({
  'payload': theme,
  'type': SET_THEME_FONT,
});

const initialState = {'theme': 'WHITE'};

const themeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_THEME_FONT:
      return action.payload;
    default:
      return state;
  }
};

const theme = persistReducer(persistConfig, themeReducer); ;

export {theme};
