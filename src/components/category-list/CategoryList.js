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
  // console.log('init _id', _id, activeItem);
  const onClickHandler = (id) => {
    setActiveItem(id);
    dispatch(setActiveCategoryId(id));
    console.log('_id', _id, activeItem);
  };

  const changeActiveCategory = useCallback((arr) => {
    return arr.map((item) => {
      if (item.isNested === false) {
        if (item.id === activeItem) {
          // item.isActive = true;
          console.log('active Id =', item.id);
          console.log('active item', item);
          return { ...item, isActive: true };
        }
        return { ...item, isActive: false };
      }
      return changeActiveCategory(item.nestedItems);
    });
  });

  useEffect(() => {
    const _categories = changeActiveCategory(categories);
    console.log(_categories);
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

CategoryList.propTypes = {
  categories: PropTypes.array,
  isEditMode: PropTypes.bool,
};

export default CategoryList;
