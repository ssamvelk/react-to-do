import React, { useState, useCallback } from 'react';
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
} from '../../store/categorySlice';
import { popupMode } from '../../constants/constants';
import { ConfirmCategoryDeletion, AddSubcategoryPopup } from '../popups';
import { findCategoryTitleById } from '../../utils';
import AddItem from '../add-item/AddItem';

import './CategoryList.scss';

function CategoryList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const activeCategoryIdState = useSelector(selectActiveCategoryId);
  const isPopupOpen = useSelector(selectIsPopupOpen);
  const categoriesState = useSelector(selectCategoriesList);

  const [activeItem, setActiveItem] = useState(activeCategoryIdState);

  const onClickHandler = (id) => {
    setActiveItem(id);
    dispatch(setActiveCategoryId(id));
    history.push(`${id}`);
  };

  const addNewCategory = useCallback((value) => {
    dispatch(
      addCategory({
        id: Date.now(),
        title: value,
        nestedItems: [],
      })
    );
  });

  const deleteCategoryHandler = useCallback(() => {
    dispatch(deleteCategory(activeItem));
    if (categoriesState.length > 0) {
      dispatch(setActiveCategoryId(categoriesState[0].id));
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

  return (
    <div className='category-list'>
      <AddItem
        additionalClass='category-list__add-button'
        onClickHandler={addNewCategory}
        placeholder='Enter category title'
      />
      {categoriesState &&
        categoriesState.map((category) => (
          <CategoryItem
            {...category}
            key={category.id}
            nestedItems={category.nestedItems}
            onClickHandler={onClickHandler}
          />
        ))}

      {isPopupOpen === popupMode.DELETE_MODE && (
        <ConfirmCategoryDeletion okHandler={deleteCategoryHandler} />
      )}

      {isPopupOpen === popupMode.EDIT_MODE && (
        <AddSubcategoryPopup
          okHandler={(value) => {
            editCategoryHandler(activeCategoryIdState, value);
          }}
          oldTitle={findCategoryTitleById(
            categoriesState,
            activeCategoryIdState
          )}
        />
      )}

      {isPopupOpen === popupMode.ADD_SUBTASK_MODE && (
        <AddSubcategoryPopup
          okHandler={(sub) => {
            addSubcategoryHandler(activeCategoryIdState, sub);
          }}
          oldTitle='Subcategory'
        />
      )}
    </div>
  );
}

export default CategoryList;
