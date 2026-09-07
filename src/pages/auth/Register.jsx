import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../auth/Login.css';
import { FiActivity, FiMail, FiLock, FiUser, FiPhone } from 'react-icons/fi';
import Button from '../../components/Button';
import Alert from '../../components/Alert';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'patient'
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
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

    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill in all required fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setSuccess(true);
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <div className="auth-page">
      <div className="auth-container register-container">
        <div className="auth-left">
          <div className="auth-brand">
            <FiActivity className="brand-icon" />
            <h1 className="brand-name">HealthCare+</h1>
          </div>
          <h2 className="auth-title">Join Us Today!</h2>
          <p className="auth-subtitle">
            Create an account and start your journey to better health
          </p>
        </div>

        <div className="auth-right">
          <div className="auth-card">
            <h3 className="form-title">Create Your Account</h3>

            {error && (
              <Alert variant="danger" dismissible onClose={() => setError('')}>
                {error}
              </Alert>
            )}

            {success && (
              <Alert variant="success">
                Registration successful! Redirecting to login...
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label className="form-label">I want to register as</label>
                <div className="role-selector">
                  {['patient', 'doctor'].map((role) => (
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
                <label className="form-label">Full Name *</label>
                <div className="input-group">
                  <FiUser className="input-icon" />
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email Address *</label>
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
                <label className="form-label">Phone Number</label>
                <div className="input-group">
                  <FiPhone className="input-icon" />
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Password *</label>
                <div className="input-group">
                  <FiLock className="input-icon" />
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Confirm Password *</label>
                <div className="input-group">
                  <FiLock className="input-icon" />
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <Button type="submit" variant="primary" size="lg" fullWidth>
                Create Account
              </Button>

              <p className="form-footer-text">
                Already have an account? <Link to="/login" className="link-primary">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
