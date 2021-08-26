import React from 'react';

import './addButton.scss';

export default function AddButton(props) {
  return (
    <div className='add-button'>
      <input
        className='add-button__input'
        placeholder={props.placeholder || 'Enter category title'}
      />
      <button
        className='add-button__button'
        onClick={
          props.clickHandler
            ? () => props.clickHandler()
            : () => console.log('clickHandler')
        }
      >
        Add
      </button>
    </div>
  );
}
