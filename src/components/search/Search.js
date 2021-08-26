import React from 'react';
import Checkbox from '../checkbox/Checkbox';
import Icon from '../icon/Icon';

import clear from './clear.png';
import './Search.scss';

export default function Search() {
  return (
    <div className='search'>
      <Checkbox text='Show done'></Checkbox>
      <input className='search__input' type='text'></input>
      <span className='search__delete'>
        <Icon
          source={clear}
          altName='arrow'
          onClickHandler={() => {
            console.log('Clear');
            // setIsOpen(!isOpen);
          }}
        />
      </span>
    </div>
  );
}
