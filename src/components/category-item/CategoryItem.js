import React, { useState } from 'react';
import Icon from '../icon/Icon';

import './CategoryItem.scss';
import undo from './img/undo.png';
import del from './img/delete.png';
import edit from './img/edit.png';
import arrow from './img/arrow.png';
import add from './img/add.png';

function CategoryItem(props) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className='category'>
      <div className='category__main'>
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
          value={props.title || 'Category 1'}
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
              key={item.id}
              isEditMode={item.isEditMode}
              isNested={item.isNested}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryItem;
