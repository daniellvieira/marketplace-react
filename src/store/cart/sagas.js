import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { addAllCategories } from 'store/categories/reducer';
import { createStandaloneToast } from '@chakra-ui/react';
import categoriesService from 'services/categories';
import { LOAD_CHECKOUT_REQUEST } from './cart';

const { toast } = createStandaloneToast();

const TOAST_SHOW_TIME_IN_MILLISECONDS = 2000;

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* loadCheckout(action) {
  try {
    toast({
      title: 'Loading categories.',
      status: 'loading',
      duration: TOAST_SHOW_TIME_IN_MILLISECONDS,
      isClosable: true,
    });
    yield delay(1000);

    const categories = yield call(categoriesService.search);
    toast({
      title: 'Categories loaded.',
      status: 'success',
      duration: TOAST_SHOW_TIME_IN_MILLISECONDS,
      isClosable: true,
    });
    yield put(addAllCategories(categories));
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
}

export default cartSagas;
