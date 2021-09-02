import React from 'react';
import Button from '../../button/Button';
import BasePopup from '../base-popup/BasePopup';

import './AddSubcategoryPopup.scss';

export default function AddSubcategoryPopup() {
  return (
    <BasePopup title='Add new subcategory.'>
      <div className='add-subcategory'>
        <input
          className='add-subcategory__title'
          placeholder='Enter subcategory title'
        />
        <div className='add-subcategory__controls'>
          <Button text='Add' />
          <Button text='Cancel' />
        </div>
      </div>
    </BasePopup>
  );
}
