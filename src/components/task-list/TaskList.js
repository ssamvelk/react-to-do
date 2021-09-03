import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectActiveCategoryId } from '../../store/categorySlice';
import TaskItem from '../task-item/Task-item';

import './TaskList.scss';
import {
  addTask,
  selectSearchValue,
  selectShowOnlyDone,
  setProgress,
} from '../../store/taskSlice';
import AddButton from '../add-button/addButton';

function TaskList({ tasks }) {
  const dispatch = useDispatch();
  const activeCategoryId = useSelector(selectActiveCategoryId);

  const taskFilter = useSelector(selectSearchValue);
  const showOnlyDone = useSelector(selectShowOnlyDone);

  let _tasks = tasks.filter((item) => item.categoryId === activeCategoryId);

  const calculateProgress = useCallback(
    (allTasks) => {
      const doneTasks = allTasks.reduce((acc, cur) => {
        if (cur.isDone) acc += 1;
        return acc;
      }, 0);
      const progress = (doneTasks * 100) / _tasks.length;
      dispatch(setProgress(progress));
    },
    [_tasks]
  );

  const addNewTask = useCallback(
    (value) => {
      dispatch(
        addTask({
          id: Date.now(),
          title: value,
          isDone: false,
          categoryId: activeCategoryId,
        })
      );
    },
    [activeCategoryId]
  );

  if (taskFilter)
    _tasks = _tasks.filter((task) => task.title.includes(taskFilter));
  if (showOnlyDone) _tasks = _tasks.filter((task) => task.isDone === true);

  calculateProgress(_tasks);

  return (
    <div className='task-list'>
      <AddButton
        additionalClass='task-list__add-button'
        onClickHandler={addNewTask}
        placeholder='Enter new To-Do'
      />
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
