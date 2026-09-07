import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import Button from '../../components/Button';
import './ErrorPage.css';

const NotFound = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <div className="error-code">404</div>
        <h1 className="error-title">Page Not Found</h1>
        <p className="error-message">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="error-illustration">
          <div className="error-icon">📄</div>
        </div>
        <Link to="/">
          <Button variant="primary" icon={<FiHome />}>
            Go to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
