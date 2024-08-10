import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import itemsService from 'services/items';
import { v4 as uuid } from 'uuid';

// https://redux-toolkit.js.org/api/createAsyncThunk
export const getItems = createAsyncThunk('items/search', itemsService.search);

export const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    changeWishList: (state, { payload }) => {
      state.map((item) => {
        if (item.id === payload) item.favorite = !item.favorite;
        return item;
      });
    },
    createItem: (state, { payload }) => {
      state.push({ ...payload, id: uuid() });
    },
    changeItem: (state, { payload }) => {
      // https://immerjs.github.io/immer/update-patterns/#array-mutations
      const index = state.findIndex((item) => item.id === payload.id);
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
      if (index !== -1) Object.assign(state[index], payload.item);
    },
    deleteItem: (state, { payload }) => {
      const index = state.findIndex((item) => item.id === payload);
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
      if (index !== -1) state.splice(index, 1);
    },
    addItems: (state, { payload }) => {
      state.push(...payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getItems.fulfilled, (_state, { payload }) => {
      return payload;
    });
  },
});

export const { changeWishList, createItem, changeItem, deleteItem, addItems } =
  itemsSlice.actions;

export default itemsSlice.reducer;
