import React from 'react';

import './ProgressBar.scss';

export default function ProgressBar(props) {
  return (
    <div>
      <progress value={props.value || 0} max={100} />
    </div>
  );
}
