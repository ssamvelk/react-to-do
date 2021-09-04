import React from 'react';

import './Icon.scss';

export default function Icon({
  type,
  onClickHandler,
  notPropagate = false,
  additionalClass = 'icon',
  altName = 'image',
}) {
  return (
    <img
      src={`/img/${type}.png`}
      className={additionalClass}
      alt={altName}
      width='20px'
      height='20px'
      onClick={(e) => {
        if (notPropagate) {
          e.preventDefault();
          e.stopPropagation();
        }
        if (onClickHandler) {
          onClickHandler();
        }
      }}
    />
  );
}
