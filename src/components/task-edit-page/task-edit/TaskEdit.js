import React from 'react';
import Button from '../../button/Button';
import PropTypes from 'prop-types';

import './TaskEdit.scss';
import Checkbox from '../../checkbox/Checkbox';
import { Link } from 'react-router-dom';

function TaskEdit(props) {
  return (
    <div className='task-edit'>
      <div className='task-edit__controls'>
        {/* {<Link to='/'>Home</Link>} */}
        <Link to='/' className='task-edit__link'>
          <Button
            text='Save changes'
            onClickHandle={() => console.log('Save changes')}
          />
        </Link>
        <Link to='/' className='task-edit__link'>
          <Button text='Cancel' onClickHandle={() => console.log('Cancel')} />
        </Link>
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
