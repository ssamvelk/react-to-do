import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { popupMode } from '../../../constants/constants';
import {
  selectIsPopupOpen,
  setIsPopupOpen,
} from '../../../store/categorySlice';
import Button from '../../button/Button';
import BasePopup from '../base-popup/BasePopup';

import './AddSubcategoryPopup.scss';

export default function AddSubcategoryPopup({
  okHandler = null,
  oldTitle = '',
}) {
  const dispatch = useDispatch();
  const mode = useSelector(selectIsPopupOpen);
  console.log(mode);

  const [title, setTitle] = useState(oldTitle);

  return (
    <BasePopup
      title={
        mode === popupMode.EDIT_MODE
          ? `Edit "${oldTitle}" category.`
          : 'Add new subcategory.'
      }
    >
      <div className='add-subcategory'>
        <input
          className='add-subcategory__title'
          placeholder={
            mode === popupMode.EDIT_MODE
              ? 'Edit category title'
              : 'Enter subcategory title'
          }
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className='add-subcategory__controls'>
          <Button
            text='Add'
            onClickHandle={() => {
              okHandler(title);
            }}
          />
          <Button
            text='Cancel'
            onClickHandle={() => dispatch(setIsPopupOpen(false))}
          />
        </div>
      </div>
    </BasePopup>
  );
}
