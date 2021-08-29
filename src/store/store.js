import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import categoryReducer from './categorySlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    categories: categoryReducer,
  },
});
