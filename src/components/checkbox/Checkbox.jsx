import React from 'react';
import PropTypes from 'prop-types';

import './Checkbox.scss';

function Checkbox({ text, isCheck, onClickHandler }) {
  return (
    <div className='checkbox'>
      <input
        className='checkbox__control'
        type='checkbox'
        checked={isCheck}
        onChange={(e) => {
          onClickHandler(e.target.checked);
        }}
      />
      {text ? <span className='checkbox__text'>{text}</span> : null}
    </div>
  );
}

Checkbox.defaultProps = {
  isCheck: false,
  onClickHandler: () => {},
};

Checkbox.propTypes = {
  isCheck: PropTypes.bool,
  text: PropTypes.string,
};

export default Checkbox;
