import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from '../icon/Icon';
import PropTypes from 'prop-types';
import { selectIsPopupOpen, setIsPopupOpen } from '../../store/categorySlice';
import { popupMode } from '../../constants/constants';
import './CategoryItem.scss';

function CategoryItem(props) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`category${props.isActive && ' category_active'}`}>
      <div
        className='category__main'
        onClick={() => props.onClickHandler(props.id)}
      >
        {!props.isEditMode && props.isNested && (
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

        <input
          className='category__title'
          value={props.title || 'Category #'}
          onChange={() => console.log('CategoryItem')}
          readOnly={true}
        />

        {!props.isEditMode && (
          <p className='category__controls'>
            <Icon
              type='delete'
              altName='delete'
              onClickHandler={() =>
                dispatch(setIsPopupOpen(popupMode.DELETE_MODE))
              }
            />
            <Icon
              type='edit'
              altName='edit'
              onClickHandler={() =>
                dispatch(setIsPopupOpen(popupMode.EDIT_MODE))
              }
            />
            <Icon
              type='add'
              altName='add'
              onClickHandler={() =>
                dispatch(setIsPopupOpen(popupMode.ADD_SUBTASK_MODE))
              }
            />
          </p>
        )}
        {props.isEditMode && (
          <div className='category__undo'>
            <Icon
              type='undo'
              altName='undo'
              // onClickHandler={}
            />
          </div>
        )}
      </div>
      {props.isNested && props.nestedItems && isOpen && (
        <div className='category__children'>
          {props.nestedItems.map((item) => (
            <CategoryItem
              id={item.id}
              key={item.id}
              isActive={item.isActive}
              isEditMode={item.isEditMode}
              isNested={item.isNested}
              nestedItems={item.nestedItems}
              title={item.title}
              onClickHandler={props.onClickHandler}
            />
          ))}
        </div>
      )}
    </div>
  );
}

CategoryItem.defaultProps = {
  // id: Date.now(),
  isActive: false,
  title: 'title',
  tasks: [],
  isEditMode: false,
  isNested: false,
  nestedItems: [],
};

CategoryItem.propTypes = {
  id: PropTypes.number,
  isActive: PropTypes.bool,
  title: PropTypes.string,
  isEditMode: PropTypes.bool,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      isDone: PropTypes.bool,
    })
  ),
  isNested: PropTypes.bool,
  nestedItems: PropTypes.array,
  onClickHandler: PropTypes.func,
};

export default CategoryItem;
