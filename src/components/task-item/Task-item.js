import React, { useState } from 'react';
import Checkbox from '../checkbox/Checkbox';
import Icon from '../icon/Icon';
import PropTypes from 'prop-types';

import edit from './edit.png';
import './Task-item.scss';
import { Link } from 'react-router-dom';

function TaskItem(props) {
  const [isDone, setIsDone] = useState(props.isDone);

  return (
    <div className='task-item'>
      <div className='task-item__checkbox'>
        <Checkbox isCheck={isDone} onClickHandler={setIsDone} />
      </div>
      <input
        className={`task-item__title ${isDone && 'task-item__title_done'}`}
        value={props.title || 'To-Do Item '}
        readOnly
      />
      <span className='task-item__edit'>
        <Link to={`/task/${props.id}`}>
          <Icon
            source={edit}
            altName='edit'
            onClickHandler={() => {
              console.log('Task edit!', props.id);
            }}
          />
        </Link>
      </span>
    </div>
  );
}

TaskItem.defaultProps = {
  id: Date.now(),
  title: 'To-Do default title',
  isDone: false,
  categoryId: null,
};

TaskItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  isDone: PropTypes.bool,
  categoryId: PropTypes.number,
};

export default TaskItem;
