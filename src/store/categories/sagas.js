import {
  all,
  call,
  delay,
  put,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import {
  addAllCategories,
  GET_CATEGORY,
  GET_LIST_CATEGORIES,
} from 'store/categories/reducer';
import { createStandaloneToast } from '@chakra-ui/react';
import categoriesService from 'services/categories';

const { toast } = createStandaloneToast();

const TOAST_SHOW_TIME_IN_MILLISECONDS = 2000;

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchListCategoriesRequest(action) {
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

function* categoriesSagas() {
  const task = yield takeLatest(
    GET_LIST_CATEGORIES,
    fetchListCategoriesRequest,
  );
  yield takeLatest(addAllCategories, () => task.cancel());
}

// export default billingPanelSagas;

// function* mySaga() {
//   yield takeEvery(GET_LIST_CATEGORIES, fetchCategoriesSaga);
// }

export default categoriesSagas;
