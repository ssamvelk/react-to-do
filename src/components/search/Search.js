import React, { useState } from 'react';
import Checkbox from '../checkbox/Checkbox';
import Icon from '../icon/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { toggleShowOnlyDone, selectShowOnlyDone } from '../../store/taskSlice';
import clear from './clear.png';
import './Search.scss';

export default function Search() {
  const dispatch = useDispatch();
  const _showOnlyDone = useSelector(selectShowOnlyDone);
  const [searchValue, setSearchValue] = useState('');
  const [showOnlyDone, setShowOnlyDone] = useState(_showOnlyDone);

  const toggle = (_) => {
    dispatch(toggleShowOnlyDone(!showOnlyDone));
    setShowOnlyDone(_showOnlyDone);
  };

  return (
    <div className='search'>
      <Checkbox
        isCheck={showOnlyDone}
        text='Show done'
        onClickHandler={toggle}
      ></Checkbox>
      <input
        className='search__input'
        type='text'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      ></input>
      <span className='search__delete'>
        <Icon
          source={clear}
          altName='arrow'
          onClickHandler={() => {
            setSearchValue('');
          }}
        />
      </span>
    </div>
  );
}
