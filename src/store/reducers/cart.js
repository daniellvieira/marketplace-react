import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = [];

export const cartSlice = createSlice({
  name: 'categories',
  initialState: INITIAL_STATE,
  reducers: {
    // https://redux-toolkit.js.org/usage/immer-reducers
    changeCart: (state, { payload }) => {
      const hasItem = state.some((item) => item.id === payload);
      if (!hasItem) return [...state, { id: payload, amount: 1 }];

      return state.filter((item) => item.id !== payload);
    },
    changeAmount: (state, { payload }) => {
      state = state.map((itemInCart) => {
        if (itemInCart.id === payload.id) itemInCart.amount += payload.amount;
        return itemInCart;
      });
    },
    resetCart: () => INITIAL_STATE,
  },
});

export const { changeCart, changeAmount, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
