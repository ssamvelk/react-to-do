import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { POPUP_MODE } from '../../../constants/constants';
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
  const [title, setTitle] = useState(oldTitle);

  return (
    <BasePopup
      title={
        mode === POPUP_MODE.EDIT_MODE
          ? `Edit "${oldTitle}" category.`
          : 'Add new subcategory.'
      }
    >
      <div className='add-subcategory'>
        <input
          className='add-subcategory__title'
          placeholder={
            mode === POPUP_MODE.EDIT_MODE
              ? 'Edit category title'
              : 'Enter subcategory title'
          }
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus={true}
        />
        <div className='add-subcategory__controls'>
          <Button
            text='Add'
            autoFocus={true}
            onClickHandle={() => {
              if (mode === POPUP_MODE.EDIT_MODE) {
                okHandler(title);
              }
              if (mode === POPUP_MODE.ADD_SUBTASK_MODE) {
                okHandler({
                  id: Date.now(),
                  title: title,
                  nestedItems: [],
                });
              }
              () => dispatch(setIsPopupOpen(false));
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
