import React from 'react';
import { useSelector } from 'react-redux';
import CategoryList from '../category-list/CategoryList';
import ProgressBar from '../progress-bar/ProgressBar';
import Spinner from '../spinner/Spinner';
import { selectIsSpinner } from '../../store/spinner/selectors';

import './MainContainer.scss';

function MainContainer({ header, children, withoutProgress = false }) {
  const isSpinner = useSelector(selectIsSpinner);

  return (
    <>
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
      {isSpinner && <Spinner />}
    </>
  );
}

export default MainContainer;
