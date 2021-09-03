import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CategoryItem from '../category-item/CategoryItem';
import {
  addCategory,
  addSubcategoryItemById,
  deleteCategory,
  selectActiveCategoryId,
  selectCategoriesList,
  selectIsPopupOpen,
  setActiveCategoryId,
  setIsPopupOpen,
  updateCategoryItemById,
  updateCategoryList,
} from '../../store/categorySlice';
import { popupMode } from '../../constants/constants';

import { ConfirmCategoryDeletion, AddSubcategoryPopup } from '../popups';
import { findCategoryTitleById } from '../../utils';
import AddButton from '../add-button/addButton';

import './CategoryList.scss';

function CategoryList({ isEditMode }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const _id = useSelector(selectActiveCategoryId);
  const isPopupOpen = useSelector(selectIsPopupOpen);
  const categories2 = useSelector(selectCategoriesList);

  const [activeItem, setActiveItem] = useState(_id);
  const onClickHandler = (id) => {
    setActiveItem(id);
    dispatch(setActiveCategoryId(id));
    history.push(`${id}`);
  };

  const changeActiveCategory = useCallback((arr) => {
    return arr.map((item) => {
      if (item.isNested === false) {
        if (item.id === activeItem) {
          return { ...item, isActive: true };
        }
        return { ...item, isActive: false };
      }
      return {
        ...item,
        isActive: item.id === activeItem,
        nestedItems: changeActiveCategory(item.nestedItems),
      };
    });
  });

  const addNewCategory = useCallback((value) => {
    dispatch(
      addCategory({
        id: Date.now(),
        title: value,
        isActive: false,
        isEditMode: false,
        isNested: false,
        nestedItems: [],
      })
    );
  });

  const changeMode = useCallback((arr) => {
    if (arr) {
      return arr.map((item) => ({
        ...item,
        isEditMode,
        nestedItems: changeMode(item.nestedItems),
      }));
    }
  }, categories2);

  const deleteCategoryHandler = useCallback(() => {
    dispatch(deleteCategory(activeItem));
    if (categories2.length > 0) {
      dispatch(setActiveCategoryId(categories2[0].id));
    } else {
      dispatch(setActiveCategoryId(null));
    }
    dispatch(setIsPopupOpen(false));
  });

  const editCategoryHandler = useCallback((id, value) => {
    dispatch(updateCategoryItemById({ id, value })); // update Category
    dispatch(setIsPopupOpen(false));
  });

  const addSubcategoryHandler = useCallback((id, subcategory) => {
    dispatch(addSubcategoryItemById({ id, subcategory }));
    dispatch(setIsPopupOpen(false));
  });

  useEffect(() => {
    const _categories = changeActiveCategory(categories2);
    dispatch(updateCategoryList(_categories));
  }, [activeItem, _id]);

  return (
    <div className='category-list'>
      <AddButton
        additionalClass='category-list__add-button'
        onClickHandler={addNewCategory}
        placeholder='Enter category title'
      />
      {categories2 &&
        categories2.map((category) => (
          <CategoryItem
            {...category}
            key={category.id}
            isEditMode={isEditMode}
            nestedItems={changeMode(category.nestedItems)}
            onClickHandler={onClickHandler}
          />
        ))}
      {isPopupOpen === popupMode.DELETE_MODE && (
        <ConfirmCategoryDeletion okHandler={deleteCategoryHandler} />
      )}
      {isPopupOpen === popupMode.EDIT_MODE && (
        <AddSubcategoryPopup
          okHandler={(value) => {
            editCategoryHandler(_id, value);
          }}
          oldTitle={findCategoryTitleById(categories2, _id)}
        />
      )}
      {isPopupOpen === popupMode.ADD_SUBTASK_MODE && (
        <AddSubcategoryPopup
          okHandler={(sub) => {
            addSubcategoryHandler(_id, sub);
          }}
          oldTitle='Subcategory'
        />
      )}
    </div>
  );
}

export default CategoryList;
