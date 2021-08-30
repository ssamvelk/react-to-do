import React, { useState } from 'react';

import './addButton.scss';

export default function AddButton({ placeholder, onClickHandler }) {
  const [value, setValue] = useState('');

  return (
    <div className='add-button'>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='add-button__input'
        placeholder={placeholder || 'add placeholder'}
        onKeyPress={(e) => {
          if (e.key === 'Enter' && onClickHandler) {
            onClickHandler(value);
            setValue('');
          }
        }}
      />
      <button
        className='add-button__button'
        onClick={
          onClickHandler
            ? () => {
                onClickHandler(value);
                setValue('');
              }
            : () => console.log('clickHandler')
        }
      >
        Add
      </button>
    </div>
  );
}
