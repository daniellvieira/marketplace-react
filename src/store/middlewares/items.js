import { createListenerMiddleware } from '@reduxjs/toolkit';
import itemsService from 'services/items';

import createTask from './utils/createTask';
import { getCategory } from 'store/reducers/categories';
import { addItems } from 'store/reducers/items';

export const itemsListener = createListenerMiddleware();

itemsListener.startListening({
  actionCreator: getCategory,
  effect: async (action, { dispatch, fork, unsubscribe, getState }) => {
    const { items } = getState();
    const categoryName = action.payload;

    const isLoaded = items.some((item) => item.category === categoryName);
    if (isLoaded) return;

    await createTask({
      dispatch,
      fork,
      action: addItems,
      search: () => itemsService.getByCategory(categoryName),
      messages: {
        loading: `Loading items by category ${categoryName}.`,
        success: `Items by category ${categoryName} loaded.`,
      },
    });
  },
});

export default itemsListener.middleware;
