import React from 'react';
import './Checkbox.scss';

export default function Checkbox(props) {
  return (
    <div className='checkbox'>
      <input className='checkbox__control' type='checkbox' />
      {props.text ? <span className='checkbox__text'>{props.text}</span> : null}
    </div>
  );
}
