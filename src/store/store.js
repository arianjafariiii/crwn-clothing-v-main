import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import { thunk } from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import { rootReducer, rootReducers } from './root-reducer';
import { rootSaga } from './root-saga';


const sagaMiddleware = createSagaMiddleware();
const middleWares = [process.env.NODE_ENV === 'development' && logger,  sagaMiddleware].filter(
  Boolean
);

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistore = persistStore(store);

sagaMiddleware.run(rootSaga); 