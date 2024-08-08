import { createSlice } from '@reduxjs/toolkit';

import automotiveThumb from 'assets/categories/thumbnail/automotive.png';
import electronicsThumb from 'assets/categories/thumbnail/electronics.png';
import officeThumb from 'assets/categories/thumbnail/office.png';
import gamesThumb from 'assets/categories/thumbnail/games.png';
import soundThumb from 'assets/categories/thumbnail/sound.png';
import automotiveHeader from 'assets/categories/header/automotive.png';
import electronicsHeader from 'assets/categories/header/electronics.png';
import officeHeader from 'assets/categories/header/office.png';
import gamesHeader from 'assets/categories/header/games.png';
import soundHeader from 'assets/categories/header/sound.png';

const INITIAL_STATE = [
  {
    name: 'Electronics',
    thumbnail: electronicsThumb,
    header: electronicsHeader,
    id: 'electronics',
    description: 'The best and most current electronic devices are here!',
  },
  {
    name: 'Automotive',
    thumbnail: automotiveThumb,
    header: automotiveHeader,
    id: 'automotive',
    description: 'Find equipment here to make your car uniquely yours!',
  },
  {
    name: 'Games',
    thumbnail: gamesThumb,
    header: gamesHeader,
    id: 'games',
    description: 'Get the most current consoles and games on the market!',
  },
  {
    name: 'Office',
    thumbnail: officeThumb,
    header: officeHeader,
    id: 'office',
    description: 'Everything to make your office amazing!',
  },
  {
    name: 'Sound and Image',
    thumbnail: soundThumb,
    header: soundHeader,
    id: 'sound',
    description: 'Enjoy your music and movies with the best quality!',
  },
];

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: INITIAL_STATE,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { incrementByAmount } = categoriesSlice.actions;

export default categoriesSlice.reducer;
