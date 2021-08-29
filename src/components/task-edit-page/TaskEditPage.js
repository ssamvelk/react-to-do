import React from 'react';
import MainContainer from '../main-container/MainContainer';
import TaskEditHeader from './task-edit-header/TaskEditHeader';

import './TaskEditPage.scss';

function TaskEditPage({ left, right }) {
  return (
    <div className='task-edit-page'>
      <MainContainer header={<TaskEditHeader />} left={left} right={right} />
    </div>
  );
}

export default TaskEditPage;
