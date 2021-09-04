import React from 'react';
import CategoryList from '../category-list/CategoryList';
import ProgressBar from '../progress-bar/ProgressBar';

import './MainContainer.scss';

function MainContainer({ header, children, withoutProgress = false }) {
  return (
    <div className='main-container'>
      <header>{header}</header>
      {!withoutProgress && <ProgressBar />}
      <main className='main-container__content'>
        <div className='main-container__left'>
          <CategoryList />
        </div>
        <div className='main-container__right'>{children}</div>
      </main>
    </div>
  );
}

export default MainContainer;
