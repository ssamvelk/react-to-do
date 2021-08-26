import React from 'react';
import Checkbox from '../checkbox/Checkbox';

import './Search.scss';

export default function Search() {
  return (
    <div className='search'>
      <Checkbox text='Show done'></Checkbox>
      <input className='search__input' type='text'></input>
      <span className='search__delete'>❌</span>
    </div>
  );
}
