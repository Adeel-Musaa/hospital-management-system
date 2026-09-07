import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import Button from '../../components/Button';
import './ErrorPage.css';

const Unauthorized = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <div className="error-code">401</div>
        <h1 className="error-title">Unauthorized Access</h1>
        <p className="error-message">
          You need to log in to access this page. Please authenticate first.
        </p>
        <div className="error-illustration">
          <div className="error-icon">🔒</div>
        </div>
        <Link to="/login">
          <Button variant="primary" icon={<FiLogIn />}>
            Go to Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Unauthorized;
