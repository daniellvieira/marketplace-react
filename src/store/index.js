import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categories from './categories/reducer';
import items from './reducers/items';
import cart from './cart/cart';
import search from './reducers/search';
import categoriesListener from './middlewares/categories';
import itemsListener from './middlewares/items';
import createSagaMiddleware from 'redux-saga';
import rootSagas from './sagas';

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
sagaMiddleware.run(rootSagas);

export default store;
