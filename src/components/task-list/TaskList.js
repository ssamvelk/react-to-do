import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectActiveCategoryId } from '../../store/categorySlice';
import TaskItem from '../task-item/Task-item';

import './TaskList.scss';

function TaskList({ tasks }) {
  const _id = useSelector(selectActiveCategoryId);
  const _tasks = tasks.filter((item) => item.categoryId === _id);
  return (
    <div>
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
