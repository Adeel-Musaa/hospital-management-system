import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { FiActivity, FiMail, FiLock } from 'react-icons/fi';
import Button from '../../components/Button';
import Alert from '../../components/Alert';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'patient'
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    // Demo login - redirect based on role
    navigate(`/${formData.role}/dashboard`);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-left">
          <div className="auth-brand">
            <FiActivity className="brand-icon" />
            <h1 className="brand-name">HealthCare+</h1>
          </div>
          <h2 className="auth-title">Welcome Back!</h2>
          <p className="auth-subtitle">
            Login to access your healthcare dashboard
          </p>
        </div>

        <div className="auth-right">
          <div className="auth-card">
            <h3 className="form-title">Login to Your Account</h3>

            {error && (
              <Alert variant="danger" dismissible onClose={() => setError('')}>
                {error}
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label className="form-label">Select Role</label>
                <div className="role-selector">
                  {['patient', 'doctor', 'admin', 'staff'].map((role) => (
                    <label key={role} className="role-option">
                      <input
                        type="radio"
                        name="role"
                        value={role}
                        checked={formData.role === role}
                        onChange={handleChange}
                      />
                      <span className="role-label">
                        {role.charAt(0).toUpperCase() + role.slice(1)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <div className="input-group">
                  <FiMail className="input-icon" />
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Password</label>
                <div className="input-group">
                  <FiLock className="input-icon" />
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-footer">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <Link to="/forgot-password" className="link-primary">
                  Forgot Password?
                </Link>
              </div>

              <Button type="submit" variant="primary" size="lg" fullWidth>
                Login
              </Button>

              <p className="form-footer-text">
                Don't have an account? <Link to="/register" className="link-primary">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
