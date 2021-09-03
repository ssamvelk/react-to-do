import React from 'react';
import ProgressBar from '../progress-bar/ProgressBar';
import './MainContainer.scss';

function MainContainer({ header, left, right, withoutProgress = false }) {
  return (
    <div className='main-container'>
      <header>{header}</header>
      {withoutProgress ? null : <ProgressBar />}
      <main className='main-container__content'>
        <div className='main-container__left'>{left}</div>
        <div className='main-container__right'>{right}</div>
      </main>
    </div>
  );
}

export default MainContainer;
