import React from 'react';
import TaskItem from '../task-item/Task-item';

import './TaskList.scss';

const taskList = [
  {
    id: 0,
    title: 'To-Do item # 0',
    isDone: true,
  },
  {
    id: 1,
    title: 'To-Do item # 1',
    isDone: false,
  },
  {
    id: 2,
    title: 'To-Do item # 2',
    isDone: true,
  },
  {
    id: 3,
    title: 'To-Do item # 1',
    isDone: false,
  },
  {
    id: 4,
    title: 'To-Do item # 4',
    isDone: false,
  },
];

export default function TaskList(props) {
  return (
    <div>
      {taskList.map((task) => (
        <TaskItem key={task.id} isDone={task.isDone} title={task.title} />
      ))}
    </div>
  );
}
