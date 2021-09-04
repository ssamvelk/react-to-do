import React from 'react';
import MainContainer from '../main-container/MainContainer';
import Header from '../header/Header';
import TaskList from '../task-list/TaskList';

import './ToDoListPage.scss';

function ToDoListPage() {
  return (
    <div className='to-do-list'>
      <MainContainer header={<Header />}>
        <TaskList />
      </MainContainer>
    </div>
  );
}

export default ToDoListPage;
