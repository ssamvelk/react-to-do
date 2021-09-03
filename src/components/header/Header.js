import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../search/Search';

import './Header.scss';

function Header({ type = 'default', title = null }) {
  return (
    <header className='header'>
      <div className='header__top'>
        <Link to='/' className='header__logo'>
          To-Do List
        </Link>
        {type === 'taskEditPage' ? title : <Search />}
      </div>
    </header>
  );
}
export default Header;
