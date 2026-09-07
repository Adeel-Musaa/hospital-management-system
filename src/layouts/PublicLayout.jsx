import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './PublicLayout.css';
import { FiActivity, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const PublicLayout = ({ children }) => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/departments', label: 'Departments' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="public-layout">
      {/* Header */}
      <header className="public-header">
        <div className="container">
          <nav className="navbar">
            <Link to="/" className="logo">
              <FiActivity className="logo-icon" />
              <span className="logo-text">HealthCare+</span>
            </Link>

            <ul className="nav-menu">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="nav-actions">
              <Link to="/login" className="btn btn-outline">Login</Link>
              <Link to="/register" className="btn btn-primary">Sign Up</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="public-main">
        {children}
      </main>

      {/* Footer */}
      <footer className="public-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <FiActivity className="logo-icon" />
                <span className="logo-text">HealthCare+</span>
              </div>
              <p className="footer-desc">
                Your trusted partner in healthcare. Providing world-class medical services
                with compassion and excellence.
              </p>
              <div className="social-links">
                <a href="#" className="social-link"><FaFacebookF /></a>
                <a href="#" className="social-link"><FaTwitter /></a>
                <a href="#" className="social-link"><FaLinkedinIn /></a>
                <a href="#" className="social-link"><FaInstagram /></a>
              </div>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/departments">Departments</Link></li>
                <li><Link to="/doctors">Find Doctors</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Services</h4>
              <ul className="footer-links">
                <li><Link to="#">Emergency Care</Link></li>
                <li><Link to="#">Laboratory</Link></li>
                <li><Link to="#">Pharmacy</Link></li>
                <li><Link to="#">Ambulance</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Contact Info</h4>
              <ul className="contact-info">
                <li>
                  <FiMapPin />
                  <span>Lahore</span>
                </li>
                <li>
                  <FiPhone />
                  <span>03114130033</span>
                </li>
                <li>
                  <FiMail />
                  <span>adeelmusa44@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 HealthCare+. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

PublicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicLayout;
