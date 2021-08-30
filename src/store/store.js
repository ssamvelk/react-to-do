import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categorySlice';
import taskReducer from './taskSlice';

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    tasks: taskReducer,
  },
});
