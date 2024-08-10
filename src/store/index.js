import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categories from './reducers/categories';
import items from './reducers/items';
import cart from './reducers/cart';
import search from './reducers/search';
import categoriesMiddleware from './middlewares/categories';

const reducer = combineReducers({ categories, items, cart, search });
const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(categoriesMiddleware);

const store = configureStore({ reducer, middleware });
export default store;
