import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIsPopupOpen } from '../../../store/categorySlice';
import Button from '../../button/Button';
import BasePopup from '../base-popup/BasePopup';

import './ConfirmCategoryDeletion.scss';

export default function ConfirmCategoryDeletion({ okHandler = null }) {
  const dispatch = useDispatch();

  return (
    <BasePopup title='Are you want to delete the category?'>
      <div className='confirm-category-deletion'>
        <Button
          text='Yes'
          onClickHandle={() => {
            okHandler();
          }}
        />
        <Button
          text='Cancel'
          onClickHandle={() => dispatch(setIsPopupOpen(false))}
        />
      </div>
    </BasePopup>
  );
}
