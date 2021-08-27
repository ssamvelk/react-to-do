import React from 'react';

export default function Icon(props) {
  return (
    <img
      src={props.source}
      className={props.additionalClass || 'icon'}
      alt={props.altName || 'image'}
      width='20px'
      height='20px'
      onClick={props.onClickHandler}
    />
  );
}