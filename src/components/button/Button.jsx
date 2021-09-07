import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

function Button({ text, onClickHandle, autoFocus = false }) {
  return (
    <button className='button' onClick={onClickHandle} autoFocus={autoFocus}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: 'Click me please!',
  onClickHandle: () => console.log('Click'),
};

Button.propTypes = {
  text: PropTypes.string,
  onClickHandle: PropTypes.func,
};

export default Button;
