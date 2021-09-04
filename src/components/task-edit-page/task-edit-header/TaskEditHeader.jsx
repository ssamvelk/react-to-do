import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectTasksList } from '../../../store/taskSlice';

import './TaskEditHeader.scss';

function TaskEditHeader() {
  let { id } = useParams();
  const { title, isDone } = useSelector(selectTasksList).find(
    (item) => item.id === +id
  );

  return (
    <span
      className={
        isDone
          ? 'task-edit-header__logo task-edit-header__logo_done'
          : 'task-edit-header__logo'
      }
    >
      {title}
    </span>
  );
}

export default TaskEditHeader;
