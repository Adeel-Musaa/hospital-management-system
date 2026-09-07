import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';
import { FiX, FiAlertCircle, FiCheckCircle, FiInfo, FiAlertTriangle } from 'react-icons/fi';

const Alert = ({ 
  children, 
  variant = 'info', 
  dismissible = false,
  onClose,
  className = '',
  icon = true,
}) => {
  const getIcon = () => {
    switch (variant) {
      case 'success': return <FiCheckCircle />;
      case 'danger': return <FiAlertCircle />;
      case 'warning': return <FiAlertTriangle />;
      case 'info': return <FiInfo />;
      default: return <FiInfo />;
    }
  };

  return (
    <div className={`custom-alert alert-${variant} ${className}`}>
      {icon && <span className="alert-icon">{getIcon()}</span>}
      <div className="alert-content">{children}</div>
      {dismissible && (
        <button className="alert-close" onClick={onClose}>
          <FiX />
        </button>
      )}
    </div>
  );
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['success', 'danger', 'warning', 'info']),
  dismissible: PropTypes.bool,
  onClose: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.bool,
};

export default Alert;
