import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../auth/Login.css';
import { FiActivity, FiMail } from 'react-icons/fi';
import Button from '../../components/Button';
import Alert from '../../components/Alert';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your email address');
      return;
    }

    setSuccess(true);
  };

  return (
    <div className="auth-page">
      <div className="auth-container" style={{ gridTemplateColumns: '1fr' }}>
        <div className="auth-right" style={{ maxWidth: '500px', margin: '0 auto' }}>
          <div className="auth-card">
            <div className="text-center mb-4">
              <div className="auth-brand" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
                <FiActivity className="brand-icon" style={{ color: 'var(--primary)' }} />
                <h1 className="brand-name" style={{ color: 'var(--text)' }}>HealthCare+</h1>
              </div>
              <h3 className="form-title">Forgot Password?</h3>
              <p style={{ color: 'var(--dark-gray)' }}>
                Enter your email and we'll send you instructions to reset your password
              </p>
            </div>

            {error && (
              <Alert variant="danger" dismissible onClose={() => setError('')}>
                {error}
              </Alert>
            )}

            {success ? (
              <Alert variant="success">
                <strong>Email Sent!</strong><br />
                Please check your email for password reset instructions.
                <div className="mt-3">
                  <Link to="/login">
                    <Button variant="primary" fullWidth>Back to Login</Button>
                  </Link>
                </div>
              </Alert>
            ) : (
              <form onSubmit={handleSubmit} className="auth-form">
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <div className="input-group">
                    <FiMail className="input-icon" />
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <Button type="submit" variant="primary" size="lg" fullWidth>
                  Send Reset Link
                </Button>

                <p className="form-footer-text">
                  Remember your password? <Link to="/login" className="link-primary">Login</Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
