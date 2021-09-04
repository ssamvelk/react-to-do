import React, { useState } from 'react';
import Button from '../button/Button';

import './AddItem.scss';

export default function AddItem({
  placeholder,
  onClickHandler,
  additionalClass = '',
}) {
  const [value, setValue] = useState('');

  return (
    <div className={`add-item${additionalClass ? ` ${additionalClass}` : ''}`}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='add-item__input'
        placeholder={placeholder || 'add placeholder'}
        onKeyPress={(e) => {
          if (e.key === 'Enter' && onClickHandler) {
            onClickHandler(value);
            setValue('');
          }
        }}
      />
      <div className='add-item__button'>
        <Button
          text='Add'
          onClickHandle={() => {
            onClickHandler(value);
            setValue('');
          }}
        />
      </div>
    </div>
  );
}
