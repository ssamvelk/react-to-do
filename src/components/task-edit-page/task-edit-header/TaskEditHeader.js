import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectTasksList } from '../../../store/taskSlice';

import './TaskEditHeader.scss';

function TaskEditHeader() {
  let { id } = useParams();
  const { title } = useSelector(selectTasksList).find(
    (item) => item.id === +id
  );
  return <span className='task-edit-header__logo'>{title}</span>;
}

export default TaskEditHeader;
