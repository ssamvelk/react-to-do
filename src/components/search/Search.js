import React, { useState } from 'react';
import Checkbox from '../checkbox/Checkbox';
import Icon from '../icon/Icon';

import clear from './clear.png';
import './Search.scss';

export default function Search() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className='search'>
      <Checkbox text='Show done'></Checkbox>
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
            console.log('Clear');
            setSearchValue('');
          }}
        />
      </span>
    </div>
  );
}
