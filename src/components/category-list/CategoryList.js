import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CategoryItem from '../category-item/CategoryItem';
import {
  selectActiveCategoryId,
  setActiveCategoryId,
  updateCategoryList,
} from '../../store/categorySlice';
import Backdrop from '../backdrop/Backdrop';

function CategoryList({ categories, isEditMode }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const _id = useSelector(selectActiveCategoryId);

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

  const changeMode = useCallback((arr) => {
    return arr.map((item) => ({
      ...item,
      isEditMode,
      nestedItems: changeMode(item.nestedItems),
    }));
  });

  useEffect(() => {
    const _categories = changeActiveCategory(categories);
    dispatch(updateCategoryList(_categories));
  }, [activeItem]);

  return (
    <div>
      {categories.map((category) => (
        <CategoryItem
          {...category}
          key={category.id}
          isEditMode={isEditMode}
          nestedItems={changeMode(category.nestedItems)}
          onClickHandler={onClickHandler}
        />
      ))}
      <Backdrop>
        <h1>Modal!!!!!!</h1>
      </Backdrop>
    </div>
  );
}

export default CategoryList;
