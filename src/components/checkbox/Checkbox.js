import React from 'react';
import PropTypes from 'prop-types';

import './Checkbox.scss';

function Checkbox(props) {
  return (
    <div className='checkbox'>
      <input
        className='checkbox__control'
        type='checkbox'
        checked={props.isCheck}
        onChange={(e) => {
          props.onClickHandler(e.target.checked);
        }}
      />
      {props.text ? <span className='checkbox__text'>{props.text}</span> : null}
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
