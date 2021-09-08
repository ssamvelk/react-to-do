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
import { POPUP_MODE } from '../../constants/constants';
import { ConfirmCategoryDeletion, AddSubcategoryPopup } from '../popups';
import {
  findCategoryTitleById,
  getSelfAndNestedCategoryIds,
  getActiveCategoryById,
} from '../../utils';
import AddItem from '../add-item/AddItem';

import './CategoryList.scss';
import { deleteTasksByCategoryId } from '../../store/taskSlice';

function CategoryList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isPopupOpen = useSelector(selectIsPopupOpen);
  const categoriesState = useSelector(selectCategoriesList);
  const activeCategoryIdState = useSelector(selectActiveCategoryId);

  const [activeItem, setActiveItem] = useState(activeCategoryIdState);

  const onClickHandler = (id) => {
    setActiveItem(id);
    dispatch(setActiveCategoryId(id));
    id !== null ? history.push(`${id}`) : history.replace('');
  };

  const addNewCategory = useCallback((value) => {
    const id = Date.now();
    dispatch(
      addCategory({
        id,
        title: value || `Category ${id}`,
        nestedItems: [],
      })
    );
    onClickHandler(id);
  });

  const deleteCategoryHandler = useCallback(() => {
    const ids = getSelfAndNestedCategoryIds(
      getActiveCategoryById(categoriesState, activeItem)
    );

    dispatch(deleteCategory(activeItem));
    ids.forEach((id) => dispatch(deleteTasksByCategoryId(id)));

    if (categoriesState.length > 1) {
      if (activeItem === categoriesState[0].id) {
        onClickHandler(categoriesState[1].id);
      } else onClickHandler(categoriesState[0].id);
    } else if (categoriesState.length === 1) {
      onClickHandler(null);
    }
    dispatch(setIsPopupOpen(false));
  }, [activeItem, categoriesState, categoriesState.length, dispatch]);

  const editCategoryHandler = useCallback(
    (id, value) => {
      dispatch(updateCategoryItemById({ id, value })); // update Category
      dispatch(setIsPopupOpen(false));
    },
    [dispatch]
  );

  const addSubcategoryHandler = useCallback(
    (id, subcategory) => {
      dispatch(addSubcategoryItemById({ id, subcategory }));
      dispatch(setIsPopupOpen(false));
      onClickHandler(subcategory.id);
    },
    [dispatch, onClickHandler]
  );

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

      {isPopupOpen === POPUP_MODE.DELETE_MODE && (
        <ConfirmCategoryDeletion okHandler={deleteCategoryHandler} />
      )}

      {isPopupOpen === POPUP_MODE.EDIT_MODE && (
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

      {isPopupOpen === POPUP_MODE.ADD_SUBTASK_MODE && (
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
