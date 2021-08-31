import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectActiveCategoryId } from '../../store/categorySlice';
import TaskItem from '../task-item/Task-item';

import './TaskList.scss';
import { selectSearchValue, selectShowOnlyDone } from '../../store/taskSlice';

function TaskList({ tasks }) {
  const _id = useSelector(selectActiveCategoryId);
  let _tasks = tasks.filter((item) => item.categoryId === _id);
  const taskFilter = useSelector(selectSearchValue);
  const showOnlyDone = useSelector(selectShowOnlyDone);

  if (taskFilter)
    _tasks = _tasks.filter((task) => task.title.includes(taskFilter));
  if (showOnlyDone) _tasks = _tasks.filter((task) => task.isDone === true);

  return (
    <div className='task-list'>
      {_tasks.length > 0
        ? _tasks.map((task) => (
            <TaskItem
              key={task.id}
              id={task.id}
              isDone={task.isDone}
              title={task.title}
              categoryId={task.categoryId}
            />
          ))
        : null}
    </div>
  );
}

TaskList.defaultProps = {
  tasks: [],
};

TaskList.propTypes = {
  tasks: PropTypes.array,
};

export default TaskList;
