import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { selectActiveCategoryId } from '../../store/categorySlice';
import TaskItem from '../task-item/Task-item';

import './TaskList.scss';

function TaskList({ tasks }) {
  // const dispatch = useDispatch();
  const _id = useSelector(selectActiveCategoryId);
  const _tasks = tasks.filter((item) => item.categoryId === _id);
  // console.log('TaskList', _id, _tasks);
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
