import { createListenerMiddleware } from '@reduxjs/toolkit';
import { add, GET_CATEGORY } from 'store/reducers/categories';
import createTask from './utils/createTask';
import categoriesService from 'services/categories';

export const categoriesListener = createListenerMiddleware();

categoriesListener.startListening({
  actionCreator: GET_CATEGORY,
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
