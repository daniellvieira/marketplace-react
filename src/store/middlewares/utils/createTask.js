import { createListenerMiddleware } from '@reduxjs/toolkit';
import { createStandaloneToast } from '@chakra-ui/react';

export const listener = createListenerMiddleware();

const { toast } = createStandaloneToast();

const TOAST_SHOW_TIME_IN_MILLISECONDS = 2000;

const createTask = async ({ fork, dispatch, action, search, messages }) => {
  toast({
    title: messages?.loading || 'Loading categories.',
    status: 'loading',
    duration: TOAST_SHOW_TIME_IN_MILLISECONDS,
    isClosable: true,
  });

  const task = fork(async (forkApi) => {
    // const TIME_IN_MILLISECONDS = 1000;
    // await forkApi.delay(TIME_IN_MILLISECONDS);

    return await search();
  });

  const response = await task.result;
  if (response.status === 'ok') {
    dispatch(action(response.value));
    toast({
      title: messages?.success || 'Loaded successfully.',
      status: 'success',
      duration: TOAST_SHOW_TIME_IN_MILLISECONDS,
      isClosable: true,
    });
  }

  if (response.status === 'rejected') {
    toast({
      title: messages?.error || 'An error occurred.',
      status: 'error',
      duration: TOAST_SHOW_TIME_IN_MILLISECONDS,
      isClosable: true,
    });
  }

  return response;
};

export default createTask;
