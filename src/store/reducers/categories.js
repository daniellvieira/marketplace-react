import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoriesService from 'services/categories';
import { createStandaloneToast } from '@chakra-ui/react';
import { resetCart } from './cart';

const { toast } = createStandaloneToast();

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
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.fulfilled, (_state, { payload }) => {
        toast({
          title: 'Categories loaded.',
          description: "We've loaded all categories.",
          status: 'success',
          duration: 2000,
          isClosable: true,
        });

        return payload;
      })
      .addCase(getCategories.pending, (_state, { payload }) => {
        toast({
          title: 'Loading categories.',
          description: "We're loading you categories.",
          status: 'loading',
          duration: 2000,
          isClosable: true,
        });
      })
      .addCase(getCategories.rejected, (_state, { payload }) => {
        toast({
          title: 'An error occurred.',
          description: 'Unable to loaded categories.',
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      })
      .addCase(resetCart.type, (_state, { payload }) => {
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

export const { incrementByAmount } = categoriesSlice.actions;

export default categoriesSlice.reducer;
