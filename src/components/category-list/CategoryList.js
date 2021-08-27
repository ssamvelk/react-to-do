import React from 'react';
import PropTypes from 'prop-types';
import CategoryItem from '../category-item/CategoryItem';

function CategoryList({ categoreis }) {
  return (
    <div>
      {categoreis.map((category) => (
        <CategoryItem {...category} key={category.id} />
      ))}
    </div>
  );
}

CategoryList.defaultProps = {
  categoreis: [],
};

CategoryList.propTypes = {
  categoreis: PropTypes.array,
};

export default CategoryList;
