import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false, 
  onClick, 
  disabled = false,
  type = 'button',
  className = '',
  icon = null,
}) => {
  const classes = `
    custom-btn 
    btn-${variant} 
    btn-${size} 
    ${fullWidth ? 'w-100' : ''} 
    ${className}
  `.trim();

  return (
    <button 
      type={type}
      className={classes} 
      onClick={onClick} 
      disabled={disabled}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'outline-primary']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.node,
};

export default Button;
