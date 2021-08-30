import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { categoryList } from '../constants/constants';

const initialState = {
  categoryList: categoryList,
  activeCategoryId: 0,
};

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categoryList.push(action.payload);
    },
    deleteCategory: (state, action) => {
      state.categoryList = state.categoryList.filter(
        (item) => item.id !== action.id
      );
    },
    updateCategoryList: (state, action) => {
      state.categoryList = action.payload;
    },
    setActiveCategoryId: (state, action) => {
      state.activeCategoryId = action.payload;
    },
  },
});

export const {
  addCategory,
  deleteCategory,
  setActiveCategoryId,
  updateCategoryList,
} = categorySlice.actions;

export const selectCategories = (state) => state.categories;
export const selectCategoriesList = (state) => state.categories.categoryList;
export const selectActiveCategoryId = (state) =>
  state.categories.activeCategoryId;

export default categorySlice.reducer;
