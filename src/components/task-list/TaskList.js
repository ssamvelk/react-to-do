import React from 'react';
import TaskItem from '../task-item/Task-item';
import PropTypes from 'prop-types';

import './TaskList.scss';

function TaskList({ tasks }) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} isDone={task.isDone} title={task.title} />
      ))}
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
