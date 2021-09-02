import { createSlice } from '@reduxjs/toolkit';
import { categoryList } from '../constants/constants';
import { deleteCategoryById, editCategoryById } from '../utils';

const initialState = {
  categoryList: categoryList,
  activeCategoryId: 0,
  isPopupOpen: false,
};

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      // state.categoryList.unshift(action.payload); // тут можно мутировать)
      state.categoryList = [action.payload, ...state.categoryList];
    },
    deleteCategory: (state, action) => {
      state.categoryList = deleteCategoryById(
        state.categoryList,
        action.payload
      );
    },
    updateCategoryList: (state, action) => {
      state.categoryList = action.payload;
    },
    updateCategoryItemById: (state, action) => {
      state.categoryList = editCategoryById(
        state.categoryList,
        action.payload.id,
        action.payload.value
      );
    },
    setActiveCategoryId: (state, action) => {
      state.activeCategoryId = action.payload;
    },
    setIsPopupOpen: (state, action) => {
      state.isPopupOpen = action.payload;
    },
  },
});

export const {
  updateCategoryItemById,
  setIsPopupOpen,
  addCategory,
  deleteCategory,
  setActiveCategoryId,
  updateCategoryList,
} = categorySlice.actions;

export const selectCategories = (state) => state.categories;
export const selectCategoriesList = (state) => state.categories.categoryList;
export const selectActiveCategoryId = (state) =>
  state.categories.activeCategoryId;
export const selectIsPopupOpen = (state) => state.categories.isPopupOpen;

export default categorySlice.reducer;
