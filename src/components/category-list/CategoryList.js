import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryItem from '../category-item/CategoryItem';
import {
  selectActiveCategoryId,
  setActiveCategoryId,
  updateCategoryList,
} from '../../store/categorySlice';

function CategoryList({ categories, isEditMode }) {
  const dispatch = useDispatch();
  const _id = useSelector(selectActiveCategoryId);

  const [activeItem, setActiveItem] = useState(_id);
  const onClickHandler = (id) => {
    setActiveItem(id);
    dispatch(setActiveCategoryId(id));
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
          nestedItems={
            category.nestedItems.length > 0
              ? category.nestedItems.map((el) => ({
                  ...el,
                  isEditMode,
                }))
              : category.nestedItems
          }
          onClickHandler={onClickHandler}
        />
      ))}
    </div>
  );
}

export default CategoryList;
