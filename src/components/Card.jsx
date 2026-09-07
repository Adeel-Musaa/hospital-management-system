import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ 
  children, 
  title, 
  subtitle,
  icon,
  className = '',
  hoverable = false,
  footer = null,
  headerAction = null,
}) => {
  return (
    <div className={`custom-card ${hoverable ? 'hoverable' : ''} ${className}`}>
      {(title || icon || headerAction) && (
        <div className="custom-card-header">
          <div className="d-flex align-items-center gap-2">
            {icon && <span className="card-icon">{icon}</span>}
            <div>
              {title && <h5 className="card-title mb-0">{title}</h5>}
              {subtitle && <p className="card-subtitle text-muted mb-0">{subtitle}</p>}
            </div>
          </div>
          {headerAction && <div className="card-header-action">{headerAction}</div>}
        </div>
      )}
      <div className="custom-card-body">
        {children}
      </div>
      {footer && <div className="custom-card-footer">{footer}</div>}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icon: PropTypes.node,
  className: PropTypes.string,
  hoverable: PropTypes.bool,
  footer: PropTypes.node,
  headerAction: PropTypes.node,
};

export default Card;
