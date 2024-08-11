import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { createStandaloneToast } from '@chakra-ui/react';
import {
  changeAmount,
  changeCart,
  LOAD_CHECKOUT_REQUEST,
  updateTotal,
} from './reducer';
import usersService from 'services/users';
import cardsService from 'services/cards';
import bandsService from 'services/bands';
import { addUser } from 'store/user/reducer';

const { toast } = createStandaloneToast();
const TOAST_SHOW_TIME_IN_MILLISECONDS = 2000;

const loggedUserId = 1;

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* loadCheckout(action) {
  try {
    const user = yield call(usersService.searchById, loggedUserId);
    const cards = yield call(cardsService.searchByUserId, loggedUserId);
    const bandIds = cards.map((card) => card.bandId);
    const bands = yield call(bandsService.searchById, bandIds);

    const cardsWithBands = cards.map((card) => {
      const bandCard = bands.find((band) => parseInt(band.id) === card.bandId);
      return { ...card, tax: bandCard.tax, band: bandCard.name };
    });

    yield put(addUser({ ...user, cards: cardsWithBands }));
  } catch (e) {
    toast({
      title: 'An error occurred.',
      status: 'error',
      duration: TOAST_SHOW_TIME_IN_MILLISECONDS,
      isClosable: true,
    });
  }
}

function* updateCheckoutTotal(action) {
  try {
    const state = yield select();

    const total = state.cart.data.reduce((total, itemInCart) => {
      const item = state.items.find((item) => item.id === itemInCart.id);
      return total + item.price * itemInCart.amount;
    }, 0);

    yield put(updateTotal(total));
  } catch (e) {
    toast({
      title: 'An error occurred.',
      status: 'error',
      duration: TOAST_SHOW_TIME_IN_MILLISECONDS,
      isClosable: true,
    });
  }
}

/*
  watcher Saga: Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* cartSagas() {
  yield takeLatest(LOAD_CHECKOUT_REQUEST, loadCheckout);
  yield takeEvery([changeAmount, changeCart], updateCheckoutTotal);
}

export default cartSagas;
