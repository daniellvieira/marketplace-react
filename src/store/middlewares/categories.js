import { createListenerMiddleware } from '@reduxjs/toolkit';
import {
  add,
  addAllCategories,
  getCategory,
  getListCategories,
} from 'store/reducers/categories';
import createTask from './utils/createTask';
import categoriesService from 'services/categories';

export const categoriesListener = createListenerMiddleware();

categoriesListener.startListening({
  actionCreator: getListCategories,
  effect: async (_action, { dispatch, fork, unsubscribe }) => {
    const response = await createTask({
      dispatch,
      fork,
      action: addAllCategories,
      search: categoriesService.search,
      messages: {
        loading: 'Loading categories.',
        success: 'Categories loaded.',
      },
    });
    if (response.status === 'ok') unsubscribe();
  },
});

categoriesListener.startListening({
  actionCreator: getCategory,
  effect: async (action, { dispatch, fork, getState }) => {
    const { categories } = getState();
    const categoryName = action.payload;
    const isLoaded = categories.some(
      (category) => category.id === categoryName,
    );

    if (isLoaded) return;
    await createTask({
      dispatch,
      fork,
      action: add,
      search: () => categoriesService.get(categoryName),
      messages: {
        loading: `Loading category ${categoryName}.`,
        success: `Category ${categoryName} loaded.`,
      },
    });
  },
});
export default categoriesListener.middleware;
