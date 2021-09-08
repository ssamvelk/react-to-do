import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectActiveCategoryId } from '../../store/categorySlice';
import TaskItem from '../task-item/Task-item';
import AddItem from '../add-item/AddItem';
import {
  addTask,
  selectSearchValue,
  selectShowOnlyDone,
  selectTasksList,
  setProgress,
} from '../../store/taskSlice';

import './TaskList.scss';

function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasksList);
  const activeCategoryId = useSelector(selectActiveCategoryId);
  const taskFilter = useSelector(selectSearchValue);
  const showOnlyDone = useSelector(selectShowOnlyDone);

  let currentTasks = tasks.filter(
    (item) => item.categoryId === activeCategoryId
  );

  const calculateProgress = useCallback(
    (allTasks) => {
      if (!allTasks) {
        dispatch(setProgress(0));
      } else {
        const doneTasks = allTasks.reduce((acc, cur) => {
          if (cur.isDone) acc += 1;
          return acc;
        }, 0);
        const progress = (doneTasks * 100) / currentTasks.length;
        dispatch(setProgress(progress));
      }
    },
    [currentTasks]
  );

  const addNewTask = useCallback(
    (value) => {
      const id = Date.now();
      dispatch(
        addTask({
          id,
          title: value || `To-Do ${id}`,
          isDone: false,
          categoryId: activeCategoryId,
        })
      );
    },
    [activeCategoryId]
  );

  useEffect(() => {
    if (taskFilter)
      currentTasks = currentTasks.filter((task) =>
        task.title.toLowerCase().includes(taskFilter.toLowerCase().trim())
      );
    if (showOnlyDone)
      currentTasks = currentTasks.filter((task) => task.isDone === true);

    calculateProgress(currentTasks);
  }, [currentTasks, taskFilter]);

  return (
    <div className='task-list'>
      <AddItem
        additionalClass='task-list__add-button'
        onClickHandler={addNewTask}
        placeholder='Enter new To-Do'
      />
      {currentTasks.length > 0 ? (
        currentTasks.map((task) => (
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
