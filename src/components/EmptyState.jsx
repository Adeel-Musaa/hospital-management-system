import React from 'react';
import PropTypes from 'prop-types';
import './EmptyState.css';
import { FiInbox } from 'react-icons/fi';

const EmptyState = ({ 
  icon = <FiInbox />, 
  title = 'No data found',
  message = 'There are no items to display at the moment.',
  action = null,
}) => {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">{icon}</div>
      <h4 className="empty-state-title">{title}</h4>
      <p className="empty-state-message">{message}</p>
      {action && <div className="empty-state-action">{action}</div>}
    </div>
  );
};

EmptyState.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  message: PropTypes.string,
  action: PropTypes.node,
};

export default EmptyState;
