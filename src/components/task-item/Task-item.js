import React from 'react';
import Checkbox from '../checkbox/Checkbox';
import Icon from '../icon/Icon';

import edit from './edit.png';
import './Task-item.scss';

export default function TaskItem(props) {
  return (
    <div className='task-item'>
      <div className='task-item__checkbox'>
        <Checkbox />
      </div>
      <input
        className={`task-item__title ${
          props.isDone && 'task-item__title_done'
        }`}
        value={props.title || 'To-Do Item '}
        onChange={() => console.log('ff')}
      />
      <span className='task-item__edit'>
        <Icon
          source={edit}
          altName='arrow'
          onClickHandler={() => {
            console.log('Task edit!');
          }}
        />
      </span>
    </div>
  );
}
