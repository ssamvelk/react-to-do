import React from 'react';
import MainContainer from '../main-container/MainContainer';
import Header from '../header/Header';
import './ToDoListPage.scss';

function ToDoListPage({ left, right }) {
  return (
    <div className='to-do-list'>
      <MainContainer header={<Header />} left={left} right={right} />
    </div>
  );
}

export default ToDoListPage;
