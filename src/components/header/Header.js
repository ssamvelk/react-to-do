import React from 'react';
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
    </header>
  );
}
export default Header;
