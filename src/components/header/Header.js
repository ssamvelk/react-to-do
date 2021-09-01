import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddButton from '../add-button/addButton';
import ProgressBar from '../progress-bar/ProgressBar';
import { addCategory } from '../../store/categorySlice';
import { addTask, selectProgress } from '../../store/taskSlice';
import Search from '../search/Search';
import { selectActiveCategoryId } from '../../store/categorySlice';

import './Header.scss';

function Header() {
  const dispatch = useDispatch();
  const _id = useSelector(selectActiveCategoryId);
  const progress = useSelector(selectProgress);

  const addNewCategory = useCallback((value) => {
    dispatch(
      addCategory({
        id: Date.now(),
        title: value,
        isActive: false,
        isEditMode: false,
        isNested: false,
        nestedItems: [],
      })
    );
  });

  const addNewTask = useCallback(
    (value) => {
      dispatch(
        addTask({
          id: Date.now(),
          title: value,
          isDone: false,
          categoryId: _id,
        })
      );
    },
    [_id]
  );

  return (
    <header className='header'>
      <div className='header__top'>
        <span className='header__logo'>To-Do List</span>
        <Search />
      </div>
      <ProgressBar value={progress} />
      <div className='header__add-buttons'>
        <AddButton
          onClickHandler={addNewCategory}
          placeholder='Enter category title'
        />
        <AddButton onClickHandler={addNewTask} placeholder='Enter new To-Do' />
      </div>
    </header>
  );
}
export default Header;
