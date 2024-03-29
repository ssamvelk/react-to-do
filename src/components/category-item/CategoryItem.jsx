import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from '../icon/Icon';
import {
  selectActiveCategoryId,
  selectIsEditMode,
  setIsPopupOpen,
} from '../../store/categorySlice';
import { POPUP_MODE } from '../../constants/constants';

import './CategoryItem.scss';

function CategoryItem({ id, title, onClickHandler, nestedItems }) {
  const dispatch = useDispatch();
  const activeCategoryIdState = useSelector(selectActiveCategoryId);
  const isEditModeState = useSelector(selectIsEditMode);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={
        activeCategoryIdState === id ? 'category category_active' : 'category'
      }
    >
      <div className='category__main' onClick={() => onClickHandler(id)}>
        {!isEditModeState && nestedItems.length > 0 && (
          <div className='category__arrow'>
            <Icon
              type='arrow'
              altName='arrow'
              notPropagate={true}
              onClickHandler={() => {
                setIsOpen(!isOpen);
              }}
            />
          </div>
        )}

        <input className='category__title' value={title} readOnly={true} />

        {!isEditModeState && (
          <p className='category__controls'>
            <Icon
              type='delete'
              altName='delete'
              onClickHandler={() =>
                dispatch(setIsPopupOpen(POPUP_MODE.DELETE_MODE))
              }
            />
            <Icon
              type='edit'
              altName='edit'
              onClickHandler={() =>
                dispatch(setIsPopupOpen(POPUP_MODE.EDIT_MODE))
              }
            />
            <Icon
              type='add'
              altName='add'
              onClickHandler={() =>
                dispatch(setIsPopupOpen(POPUP_MODE.ADD_SUBTASK_MODE))
              }
            />
          </p>
        )}

        {isEditModeState && (
          <div className='category__undo'>
            <Icon type='undo' altName='undo' />
          </div>
        )}
      </div>

      {nestedItems.length > 0 && isOpen && (
        <div className='category__children'>
          {nestedItems.map((item) => (
            <CategoryItem
              id={item.id}
              key={item.id}
              nestedItems={item.nestedItems}
              title={item.title}
              onClickHandler={onClickHandler}
            />
          ))}
        </div>
      )}
    </div>
  );
}

CategoryItem.defaultProps = {
  title: 'title',
  nestedItems: [],
};

CategoryItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  nestedItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      isDone: PropTypes.bool,
    })
  ),
  onClickHandler: PropTypes.func,
};

export default CategoryItem;
