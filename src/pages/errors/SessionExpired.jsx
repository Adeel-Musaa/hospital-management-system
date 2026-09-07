import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiClock } from 'react-icons/fi';
import Button from '../../components/Button';
import './ErrorPage.css';

const SessionExpired = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <div className="error-icon-large">
          <FiClock size={80} />
        </div>
        <h1 className="error-title">Session Expired</h1>
        <p className="error-message">
          Your session has expired due to inactivity. Please log in again to continue.
        </p>
        <Link to="/login">
          <Button variant="primary" icon={<FiLogIn />}>
            Log In Again
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SessionExpired;
