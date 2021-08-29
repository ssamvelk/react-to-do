import React from 'react';
import Button from '../../button/Button';
import PropTypes from 'prop-types';

import './TaskEdit.scss';
import Checkbox from '../../checkbox/Checkbox';

function TaskEdit(props) {
  return (
    <div className='task-edit'>
      <div className='task-edit__controls'>
        <Button
          text='Save changes'
          onClickHandle={() => console.log('Save changes')}
        />
        <Button text='Cancel' onClickHandle={() => console.log('Cancel')} />
      </div>
      <input className='task-edit__title' placeholder='Task title'></input>
      <div className='task-edit__done'>
        <Checkbox text='Done'></Checkbox>
      </div>
      <textarea
        className='task-edit__description'
        placeholder='Desription'
      ></textarea>
    </div>
  );
}

TaskEdit.propTypes = {};

export default TaskEdit;
