import { combineReducers } from '@reduxjs/toolkit'

import pizzasSlice from './slices/pizzas';
import filterSlice from './slices/filter';
import sortSlice from './slices/sort';


const rootReducer = combineReducers({
    pizzas: pizzasSlice,
    filter: filterSlice,
    sort: sortSlice
  })

export default rootReducer