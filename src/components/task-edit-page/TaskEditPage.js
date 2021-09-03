import React from 'react';
import Header from '../header/Header';
import TaskEditHeader from './task-edit-header/TaskEditHeader';
import MainContainer from '../main-container/MainContainer';

import './TaskEditPage.scss';

function TaskEditPage({ left, right }) {
  return (
    <div className='task-edit-page'>
      <MainContainer
        header={<Header type='taskEditPage' title={<TaskEditHeader />} />}
        left={left}
        right={right}
        withoutProgress={true}
      />
    </div>
  );
}

export default TaskEditPage;
