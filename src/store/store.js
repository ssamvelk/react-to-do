import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categorySlice';
import taskReducer from './taskSlice';
import spinnerReducer from './spinner';

export const store = configureStore({
  reducer: {
    spinner: spinnerReducer,
    categories: categoryReducer,
    tasks: taskReducer,
  },
});
