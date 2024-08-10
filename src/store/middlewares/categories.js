import { createListenerMiddleware } from '@reduxjs/toolkit';
import categoriesService from 'services/categories';
import { addAllCategories, loadCategories } from 'store/reducers/categories';
import { createStandaloneToast } from '@chakra-ui/react';

export const listener = createListenerMiddleware();
const { toast } = createStandaloneToast();

listener.startListening({
  actionCreator: loadCategories,
  effect: async (action, { dispatch, fork }) => {
    const task = fork(async (api) => {
      return await categoriesService.search();
    });

    const response = await task.result;
    if (response.status === 'ok') {
      dispatch(addAllCategories(response.value));
      toast({
        title: 'Categories loaded.',
        description: "We've loaded all categories.",
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    }
  },
});

export default listener.middleware;
