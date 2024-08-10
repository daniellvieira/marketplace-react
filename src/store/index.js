import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categories from './reducers/categories';
import items from './reducers/items';
import cart from './reducers/cart';
import search from './reducers/search';
import categoriesListener from './middlewares/categories';
import itemsListener from './middlewares/items';

const reducer = combineReducers({ categories, items, cart, search });
const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(categoriesListener, itemsListener);

const store = configureStore({ reducer, middleware });
export default store;
