import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setIsPopupOpen } from '../../../store/categorySlice';
import Button from '../../button/Button';
import BasePopup from '../base-popup/BasePopup';

import './ConfirmCategoryDeletion.scss';

export default function ConfirmCategoryDeletion({ okHandler = null }) {
  const dispatch = useDispatch();
  const cancelHandler = useCallback(
    () => dispatch(setIsPopupOpen(false)),
    [dispatch]
  );

  return (
    <BasePopup title='Are you want to delete the category?'>
      <div className='confirm-category-deletion'>
        <Button
          text='Yes'
          autoFocus={true}
          onClickHandle={() => {
            okHandler();
          }}
        />
        <Button text='Cancel' onClickHandle={cancelHandler} />
      </div>
    </BasePopup>
  );
}
