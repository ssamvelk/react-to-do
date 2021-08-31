import React, { useCallback, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Checkbox from '../checkbox/Checkbox';
import Icon from '../icon/Icon';
import {
  toggleShowOnlyDone,
  setSearchValueAction,
  selectShowOnlyDone,
  selectSearchValue,
} from '../../store/taskSlice';
import clear from './clear.png';

import './Search.scss';

export default function Search() {
  const dispatch = useDispatch();
  let location = useLocation();
  let history = useHistory();

  const _showOnlyDone = useSelector(selectShowOnlyDone);
  const [showOnlyDone, setShowOnlyDone] = useState(_showOnlyDone);

  const _searchValue = useSelector(selectSearchValue);
  const [searchValue, setSearchValue] = useState(_searchValue);

  const onChangeSearchValueHandler = useCallback((value) => {
    dispatch(setSearchValueAction(value));
    setSearchValue(value);
    if (value) history.push({ ...location, search: `?search=${value}` });
    else if (value === '') history.push({ ...location, search: null });
  });

  const toggle = useCallback((isChecked) => {
    dispatch(toggleShowOnlyDone(isChecked));
    setShowOnlyDone(isChecked);
  });

  return (
    <div className='search'>
      <Checkbox
        isCheck={showOnlyDone}
        text='Show done'
        onClickHandler={toggle}
      />
      <input
        className='search__input'
        type='text'
        value={searchValue}
        onChange={(e) => onChangeSearchValueHandler(e.target.value)}
      />
      <span className='search__delete'>
        <Icon
          source={clear}
          altName='arrow'
          onClickHandler={() => {
            onChangeSearchValueHandler('');
          }}
        />
      </span>
    </div>
  );
}
