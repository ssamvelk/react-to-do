import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import './TaskEditHeader.scss';

function TaskEditHeader(props) {
  let { id } = useParams();
  return (
    <span className='task-edit-header__logo'>{props.title + ' id: ' + id}</span>
  );
}

TaskEditHeader.defaultProps = {
  title: 'To-Do Item default title',
};

TaskEditHeader.propTypes = {
  title: PropTypes.string,
};

export default TaskEditHeader;
