import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoriesService from 'services/categories';
import { createStandaloneToast } from '@chakra-ui/react';
import { resetCart } from './cart';

const { toast } = createStandaloneToast();

export const getListCategories = createAction('categories/getList');
export const getCategory = createAction('categories/get');

// https://redux-toolkit.js.org/api/createAsyncThunk
export const getCategories = createAsyncThunk(
  'categories/search',
  categoriesService.search,
);

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    addAllCategories: (state, { payload }) => {
      return payload;
    },
    add: (state, { payload }) => {
      state.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetCart.type, (_state, { payload }) => {
      toast({
        title: 'Checkout finished.',
        description: 'Your order has been created.',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    });
  },
});

export const { incrementByAmount, addAllCategories, add } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
