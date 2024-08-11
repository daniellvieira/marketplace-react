import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    addUser: (state, { payload }) => {
      return payload;
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
