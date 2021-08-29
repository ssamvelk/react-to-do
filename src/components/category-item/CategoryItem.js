import React, { useState } from 'react';
import Icon from '../icon/Icon';
import PropTypes from 'prop-types';

import './CategoryItem.scss';
import undo from './img/undo.png';
import del from './img/delete.png';
import edit from './img/edit.png';
import arrow from './img/arrow.png';
import add from './img/add.png';

function CategoryItem(props) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`category${props.isActive && ' category_active'}`}>
      <div
        className='category__main'
        onClick={() => props.onClickHandler(props.id)}
      >
        {!props.isEditMode && props.isNested && (
          <div className='category__arrow'>
            <Icon
              source={arrow}
              altName='arrow'
              onClickHandler={() => {
                console.log('Open/close');
                setIsOpen(!isOpen);
              }}
            />
          </div>
        )}

        <input
          className='category__title'
          value={props.title || 'Category #'}
          onChange={() => console.log('CategoryItem')}
        />

        {!props.isEditMode && (
          <p className='category__controls'>
            <Icon source={del} altName='delete' />
            <Icon source={edit} altName='edit' />
            <Icon source={add} altName='add' />
          </p>
        )}
        {props.isEditMode && (
          <img
            src={undo}
            className='category__undo'
            alt='undo'
            width='20px'
            height='20px'
          />
        )}
      </div>
      {props.isNested && props.nestedItems && isOpen && (
        <div className='category__children'>
          {props.nestedItems.map((item) => (
            <CategoryItem
              id={item.id}
              key={item.id}
              isEditMode={item.isEditMode}
              isNested={item.isNested}
              nestedItems={item.nestedItems}
              title={item.title}
              onClickHandler={props.onClickHandler}
            />
          ))}
        </div>
      )}
    </div>
  );
}

CategoryItem.defaultProps = {
  // id: Date.now(),
  isActive: false,
  title: 'title',
  tasks: [],
  isEditMode: false,
  isNested: false,
  nestedItems: [],
};

CategoryItem.propTypes = {
  id: PropTypes.number,
  isActive: PropTypes.bool,
  title: PropTypes.string,
  isEditMode: PropTypes.bool,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      isDone: PropTypes.bool,
    })
  ),
  isNested: PropTypes.bool,
  nestedItems: PropTypes.array,
  onClickHandler: PropTypes.func,
};

export default CategoryItem;
