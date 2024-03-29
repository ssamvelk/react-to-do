import React, { useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import Checkbox from '../checkbox/Checkbox';
import Icon from '../icon/Icon';
import {
  toggleShowOnlyDone,
  setSearchValueAction,
  selectShowOnlyDone,
} from '../../store/taskSlice';

import './Search.scss';

export default function Search() {
  const dispatch = useDispatch();
  let location = useLocation();
  let history = useHistory();

  const showOnlyDone = useSelector(selectShowOnlyDone);

  const onChangeSearchValueHandler = useCallback(
    _.debounce((value) => {
      dispatch(setSearchValueAction(value));
      if (value) {
        history.push({ ...location, search: `?search=${value}` });
      } else if (value === '') {
        history.push({ ...location, search: null });
      }
    }, 500)
  );

  const toggle = useCallback((isChecked) => {
    dispatch(toggleShowOnlyDone(isChecked));
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
        onChange={(e) => onChangeSearchValueHandler(e.target.value)}
      />
      <span className='search__delete'>
        <Icon
          type='clear'
          altName='arrow'
          onClickHandler={() => {
            onChangeSearchValueHandler('');
          }}
        />
      </span>
    </div>
  );
}
