import { createSlice } from '@reduxjs/toolkit';
import { categories as categoryList } from '../__mock__/categories';
import {
  deleteCategoryById,
  editCategoryById,
  addSubcategoryById,
} from '../utils';

const initialState = {
  categoryList: categoryList,
  activeCategoryId: 0,
  isPopupOpen: false,
  isEditMode: false,
};

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
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
    addSubcategoryItemById: (state, action) => {
      state.categoryList = addSubcategoryById(
        state.categoryList,
        action.payload.id,
        action.payload.subcategory
      );
    },
    setActiveCategoryId: (state, action) => {
      state.activeCategoryId = action.payload;
    },
    setIsPopupOpen: (state, action) => {
      state.isPopupOpen = action.payload;
    },
    setIsEditMode: (state, action) => {
      state.isEditMode = action.payload;
    },
  },
});

export const {
  setIsEditMode,
  addSubcategoryItemById,
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
export const selectIsEditMode = (state) => state.categories.isEditMode;

export default categorySlice.reducer;
