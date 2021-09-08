import React from 'react';

import './Icon.scss';

export default function Icon({
  type,
  onClickHandler,
  notPropagate = false,
  additionalClass = 'icon',
  altName = 'image',
  size = 20,
}) {
  return (
    <img
      src={`/img/${type}.png`}
      className={additionalClass}
      alt={altName}
      width={`${size}px`}
      height={`${size}px`}
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
