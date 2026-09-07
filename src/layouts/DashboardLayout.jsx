import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './DashboardLayout.css';
import { 
  FiMenu, FiX, FiBell, FiSearch, FiUser, FiLogOut, FiSettings,
  FiHome, FiCalendar, FiUsers, FiFileText, FiDollarSign,
  FiActivity, FiShoppingBag, FiGrid, FiBriefcase, FiPieChart, FiMoon, FiSun
} from 'react-icons/fi';
import { FaUserMd, FaBed, FaFlask } from 'react-icons/fa';
import Notifications from '../components/Notifications';

const DashboardLayout = ({ children, role }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const patientMenu = [
    { path: '/patient/dashboard', icon: <FiHome />, label: 'Dashboard' },
    { path: '/patient/book-appointment', icon: <FiCalendar />, label: 'Book Appointment' },
    { path: '/patient/doctors', icon: <FaUserMd />, label: 'Find Doctors' },
    { path: '/patient/appointments', icon: <FiCalendar />, label: 'My Appointments' },
    { path: '/patient/medical-history', icon: <FiFileText />, label: 'Medical History' },
    { path: '/patient/prescriptions', icon: <FiFileText />, label: 'Prescriptions' },
    { path: '/patient/lab-reports', icon: <FaFlask />, label: 'Lab Reports' },
    { path: '/patient/bills', icon: <FiDollarSign />, label: 'Bills & Payments' },
    { path: '/patient/support', icon: <FiActivity />, label: 'Support Tickets' },
    { path: '/patient/profile', icon: <FiSettings />, label: 'Profile Settings' },
  ];

  const doctorMenu = [
    { path: '/doctor/dashboard', icon: <FiHome />, label: 'Dashboard' },
    { path: '/doctor/appointments', icon: <FiCalendar />, label: 'Appointments' },
    { path: '/doctor/patients', icon: <FiUsers />, label: 'Patients' },
    { path: '/doctor/prescriptions', icon: <FiFileText />, label: 'Write Prescription' },
    { path: '/doctor/schedule', icon: <FiCalendar />, label: 'My Schedule' },
    { path: '/doctor/profile', icon: <FiSettings />, label: 'Profile Settings' },
  ];

  const adminMenu = [
    { path: '/admin/dashboard', icon: <FiHome />, label: 'Dashboard' },
    { path: '/admin/doctors', icon: <FaUserMd />, label: 'Manage Doctors' },
    { path: '/admin/patients', icon: <FiUsers />, label: 'Manage Patients' },
    { path: '/admin/staff', icon: <FiBriefcase />, label: 'Staff Management' },
    { path: '/admin/appointments', icon: <FiCalendar />, label: 'Appointments' },
    { path: '/admin/departments', icon: <FiGrid />, label: 'Departments' },
    { path: '/admin/beds', icon: <FaBed />, label: 'Bed Management' },
    { path: '/admin/laboratory', icon: <FaFlask />, label: 'Laboratory' },
    { path: '/admin/pharmacy', icon: <FiShoppingBag />, label: 'Pharmacy' },
    { path: '/admin/billing', icon: <FiDollarSign />, label: 'Billing' },
    { path: '/admin/claims', icon: <FiFileText />, label: 'Insurance Claims' },
    { path: '/admin/analytics', icon: <FiPieChart />, label: 'Analytics' },
    { path: '/admin/audit-logs', icon: <FiActivity />, label: 'Audit Logs' },
    { path: '/admin/settings', icon: <FiSettings />, label: 'Settings' },
  ];

  const getMenu = () => {
    switch (role) {
      case 'patient': return patientMenu;
      case 'doctor': return doctorMenu;
      case 'admin': return adminMenu;
      default: return patientMenu;
    }
  };

  const menu = getMenu();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className={`dashboard-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="logo">
            <FiActivity className="logo-icon" />
            <span className="logo-text">HealthCare+</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          {menu.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="user-role-badge">
            {role.charAt(0).toUpperCase() + role.slice(1)} Portal
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`dashboard-main ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        {/* Top Header */}
        <header className="dashboard-header">
          <div className="header-left">
            <button className="menu-toggle" onClick={toggleSidebar}>
              {sidebarOpen ? <FiX /> : <FiMenu />}
            </button>
            <div className="search-bar">
              <FiSearch className="search-icon" />
              <input type="text" placeholder="Search..." />
            </div>
          </div>

          <div className="header-right">
            <button 
              className="header-icon-btn"
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              style={{ position: 'relative' }}
            >
              <FiBell />
              <span className="notification-badge">3</span>
              {notificationsOpen && (
                <div style={{ position: 'relative' }}>
                  <Notifications />
                </div>
              )}
            </button>

            <button 
              className="header-icon-btn"
              onClick={toggleDarkMode}
              title={darkMode ? 'Light Mode' : 'Dark Mode'}
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>

            <div className="profile-dropdown">
              <button 
                className="profile-btn"
                onClick={() => setProfileDropdown(!profileDropdown)}
              >
                <div className="avatar">
                  <FiUser />
                </div>
                <span className="profile-name">John Doe</span>
              </button>

              {profileDropdown && (
                <div className="dropdown-menu">
                  <Link to={`/${role}/profile`} className="dropdown-item">
                    <FiUser /> Profile
                  </Link>
                  <Link to={`/${role}/settings`} className="dropdown-item">
                    <FiSettings /> Settings
                  </Link>
                  <button className="dropdown-item" onClick={handleLogout}>
                    <FiLogOut /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="dashboard-content">
          {children}
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div className="mobile-overlay" onClick={toggleSidebar}></div>
      )}
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
  role: PropTypes.oneOf(['patient', 'doctor', 'admin']).isRequired,
};

export default DashboardLayout;
