import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectActiveCategoryId } from '../../store/categorySlice';
import TaskItem from '../task-item/Task-item';

import './TaskList.scss';
import {
  selectSearchValue,
  selectShowOnlyDone,
  setProgress,
} from '../../store/taskSlice';

function TaskList({ tasks }) {
  const dispatch = useDispatch();
  const _id = useSelector(selectActiveCategoryId);
  let _tasks = tasks.filter((item) => item.categoryId === _id);
  const taskFilter = useSelector(selectSearchValue);
  const showOnlyDone = useSelector(selectShowOnlyDone);

  const calculateProgress = useCallback(
    (allTasks) => {
      const doneTasks = allTasks.reduce((acc, cur) => {
        if (cur.isDone) acc += 1;
        // console.log('acc', acc);
        return acc;
      }, 0);
      const progress = (doneTasks * 100) / _tasks.length;
      dispatch(setProgress(progress));
    },
    [_tasks]
  );

  if (taskFilter)
    _tasks = _tasks.filter((task) => task.title.includes(taskFilter));
  if (showOnlyDone) _tasks = _tasks.filter((task) => task.isDone === true);

  calculateProgress(_tasks);

  return (
    <div className='task-list'>
      {_tasks.length > 0 ? (
        _tasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            isDone={task.isDone}
            title={task.title}
            categoryId={task.categoryId}
          />
        ))
      ) : (
        <h3 className='joke'>Add some tasks Bro! 😎</h3>
      )}
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
