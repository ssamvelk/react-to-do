import React from 'react';
import Backdrop from '../../backdrop/Backdrop';

import './BasePopup.scss';

export default function BasePopup({ title = 'Title', children }) {
  return (
    <Backdrop>
      <div className='popup'>
        <h2 className='popup__title'>{title}</h2>
        <div className='popup__content'>{children}</div>
      </div>
    </Backdrop>
  );
}
