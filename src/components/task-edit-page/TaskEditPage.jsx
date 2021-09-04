import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../header/Header';
import { setIsEditMode } from '../../store/categorySlice';
import TaskEditHeader from './task-edit-header/TaskEditHeader';
import MainContainer from '../main-container/MainContainer';
import TaskEdit from './task-edit/TaskEdit';

import './TaskEditPage.scss';

function TaskEditPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsEditMode(true));
    return () => {
      dispatch(setIsEditMode(false));
    };
  }, []);

  return (
    <div className='task-edit-page'>
      <MainContainer
        header={<Header type='taskEditPage' title={<TaskEditHeader />} />}
        withoutProgress={true}
      >
        <TaskEdit />
      </MainContainer>
    </div>
  );
}

export default TaskEditPage;
