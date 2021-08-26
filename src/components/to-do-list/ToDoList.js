import React from 'react';
import Header from '../header/Header';
import './ToDoList.scss';

function ToDoList(props) {
  return (
    <div className='to-do-list'>
      <Header />
      to-do-list
      <main className='to-do-list__content'>
        <div className='to-do-list__left'>{props.left}</div>
        <div className='to-do-list__right'>{props.right}</div>
      </main>
    </div>
  );
}

export default ToDoList;
