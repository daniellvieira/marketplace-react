import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoriesService from 'services/categories';

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
    builder.addCase(getCategories.fulfilled, (_state, { payload }) => {
      return payload;
    });
  },
});

export const { incrementByAmount } = categoriesSlice.actions;

export default categoriesSlice.reducer;
