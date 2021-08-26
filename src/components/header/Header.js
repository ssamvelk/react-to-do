import React from 'react';
import AddButton from '../add-button/addButton';
import ProgressBar from '../progress-bar/ProgressBar';
import Search from '../search/Search';

import './Header.scss';

function Header() {
  return (
    <header className='header'>
      <div className='header__top'>
        <span className='header__logo'>To-Do List</span>
        <Search></Search>
      </div>
      <ProgressBar value={15} />
      <div className='header__add-buttons'>
        <AddButton />
        <AddButton placeholder='Enter new To-Do' />
      </div>
    </header>
  );
}
export default Header;
