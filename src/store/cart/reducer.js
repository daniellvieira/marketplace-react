import { createAction, createSlice } from '@reduxjs/toolkit';

export const LOAD_CHECKOUT_REQUEST = createAction('cart/LOAD_CHECKOUT');
export const FINISH_CHECKOUT_REQUEST = createAction('cart/FINISH_CHECKOUT');

const INITIAL_STATE = { data: [], total: 0 };

export const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    // https://redux-toolkit.js.org/usage/immer-reducers
    changeCart: (state, { payload }) => {
      const hasItem = state.data.some((item) => item.id === payload);
      if (!hasItem)
        return {
          total: state.total,
          data: [...state.data, { id: payload, amount: 1 }],
        };

      return {
        total: state.total,
        data: state.data.filter((item) => item.id !== payload),
      };
    },
    changeAmount: (state, { payload }) => {
      state.data.map((itemInCart) => {
        if (itemInCart.id === payload.id) itemInCart.amount += payload.amount;
        return itemInCart;
      });
    },
    resetCart: () => INITIAL_STATE,
    updateTotal: (state, { payload }) => {
      state.total = payload;
    },
  },
});

export const { changeCart, changeAmount, resetCart, updateTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
