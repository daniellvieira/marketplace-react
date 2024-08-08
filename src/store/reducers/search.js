import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = [];

export const searchSlice = createSlice({
  name: 'search',
  initialState: INITIAL_STATE,
  reducers: {
    changeSearch: (state, { payload }) => payload,
    resetSearch: () => INITIAL_STATE,
  },
});

export const { changeSearch, resetSearch } = searchSlice.actions;

export default searchSlice.reducer;
