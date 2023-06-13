import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {MenuState} from './types';
import {DishesModel} from '../../../models/dishes';

export const initialState: MenuState = {
  dishes: null,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setDishes(state, action: PayloadAction<Nullable<DishesModel[]>>) {
      state.dishes = action.payload;
    },
  },
});

export const menuReducer = menuSlice.reducer;
export const {setDishes} = menuSlice.actions;
