import React from 'react';
import { useSelector } from 'react-redux';
import { selectProgress } from '../../store/taskSlice';

import './ProgressBar.scss';

export default function ProgressBar() {
  const progress = useSelector(selectProgress);
  return (
    <div>
      <progress value={progress || 0} max={100} />
    </div>
  );
}
