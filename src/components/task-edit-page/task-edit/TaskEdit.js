import React, { useCallback, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../button/Button';
import { selectTasksList, updateTaskById } from '../../../store/taskSlice';
import { selectActiveCategoryId } from '../../../store/categorySlice';
import Checkbox from '../../checkbox/Checkbox';

import './TaskEdit.scss';
function TaskEdit() {
  const dispatch = useDispatch();
  let { id } = useParams();
  const task = useSelector(selectTasksList).find((item) => item.id === +id);
  const activeCategoryId = useSelector(selectActiveCategoryId);

  const [value, setValue] = useState(task.title);
  const [_isDone, setIsDone] = useState(task.isDone);

  const editTask = useCallback(
    ({ id = +id, title = '111', isDone = false, categoryId = 111 }) => {
      dispatch(updateTaskById({ id, title, isDone, categoryId }));
    }
  );

  return (
    <div className='task-edit'>
      <div className='task-edit__controls'>
        <Link to='/' className='task-edit__link'>
          <Button
            text='Save changes'
            onClickHandle={() =>
              editTask({
                id: +id,
                title: value || task.title,
                isDone: _isDone,
                categoryId: activeCategoryId,
              })
            }
          />
        </Link>
        <Link to='/' className='task-edit__link'>
          <Button text='Cancel' onClickHandle={() => console.log('Cancel')} />
        </Link>
      </div>
      <input
        className='task-edit__title'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Task title'
        autoFocus={true}
      />
      <div className='task-edit__done'>
        <Checkbox
          isCheck={_isDone}
          onClickHandler={setIsDone}
          text='Done'
        ></Checkbox>
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
