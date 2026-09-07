import React from 'react';
import PropTypes from 'prop-types';
import './Badge.css';

const Badge = ({ 
  children, 
  variant = 'primary', 
  pill = false,
  className = '',
}) => {
  const classes = `custom-badge badge-${variant} ${pill ? 'badge-pill' : ''} ${className}`.trim();

  return (
    <span className={classes}>
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  pill: PropTypes.bool,
  className: PropTypes.string,
};

export default Badge;
