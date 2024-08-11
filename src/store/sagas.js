import { all } from 'redux-saga/effects';
import cartSagas from './cart/sagas';
import categoriesSagas from './categories/sagas';

export default function* rootSagas() {
  yield all([cartSagas(), categoriesSagas()]);
}
