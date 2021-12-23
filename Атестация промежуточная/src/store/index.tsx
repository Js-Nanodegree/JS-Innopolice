/* eslint-disable no-unused-vars */
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk';

import {config} from './reducer/config';
import {createSegment} from './reducer/createSegment';
import {theme} from './reducer/theme';
import {token} from './reducer/token';

const reducers = combineReducers({
    config,
    createSegment,
    theme,
    token,
});

export type RootState = ReturnType<typeof reducers>;
 const store = createStore(reducers, {}, applyMiddleware(thunk));
 const persistor = persistStore(store, null);

 export {persistor, store};
