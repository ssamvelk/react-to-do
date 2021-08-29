import React from 'react';
import './MainContainer.scss';

function MainContainer({ header, left, right }) {
  return (
    <div className='main-container'>
      <header>{header}</header>
      <main className='main-container__content'>
        <div className='main-container__left'>{left}</div>
        <div className='main-container__right'>{right}</div>
      </main>
    </div>
  );
}

export default MainContainer;
