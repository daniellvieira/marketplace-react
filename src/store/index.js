import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categories from './reducers/categories';
import items from './reducers/items';
import cart from './reducers/cart';
import search from './reducers/search';
import categoriesListener from './middlewares/categories';
import itemsListener from './middlewares/items';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas/categories';

const reducer = combineReducers({ categories, items, cart, search });
const sagaMiddleware = createSagaMiddleware();

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(
    categoriesListener,
    itemsListener,
    sagaMiddleware,
  );
const store = configureStore({ reducer, middleware });

// then run the saga
sagaMiddleware.run(mySaga);

export default store;
