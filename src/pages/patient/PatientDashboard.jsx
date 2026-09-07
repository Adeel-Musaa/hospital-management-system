import React from 'react';
import './PatientDashboard.css';
import Card from '../../components/Card';
import { FiCalendar, FiFileText, FiDollarSign, FiBell, FiActivity } from 'react-icons/fi';
import { FaFlask } from 'react-icons/fa';
import { appointments, prescriptions, bills } from '../../utils/dummyData';
import Badge from '../../components/Badge';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const PatientDashboard = () => {
  const stats = [
    { title: 'Upcoming Appointments', value: '3', icon: <FiCalendar />, color: 'primary', link: '/patient/appointments' },
    { title: 'Active Prescriptions', value: '2', icon: <FiFileText />, color: 'secondary', link: '/patient/prescriptions' },
    { title: 'Pending Bills', value: '$5,990', icon: <FiDollarSign />, color: 'warning', link: '/patient/bills' },
    { title: 'Lab Reports', value: '2', icon: <FaFlask />, color: 'info', link: '/patient/lab-reports' },
  ];

  const getStatusVariant = (status) => {
    const statusMap = {
      'Scheduled': 'primary',
      'Confirmed': 'success',
      'In Progress': 'info',
      'Completed': 'secondary',
      'Cancelled': 'danger',
    };
    return statusMap[status] || 'secondary';
  };

  return (
    <div className="patient-dashboard">
      <div className="dashboard-header-section">
        <div>
          <h1 className="page-title">Welcome Back, John!</h1>
          <p className="page-subtitle">Here's what's happening with your health today</p>
        </div>
        <Link to="/patient/book-appointment">
          <Button variant="primary" icon={<FiCalendar />}>Book Appointment</Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <Link to={stat.link} key={index} style={{ textDecoration: 'none' }}>
            <Card hoverable className="stat-card">
              <div className="stat-content">
                <div className={`stat-icon stat-icon-${stat.color}`}>
                  {stat.icon}
                </div>
                <div className="stat-details">
                  <h3 className="stat-value">{stat.value}</h3>
                  <p className="stat-label">{stat.title}</p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="dashboard-grid">
        {/* Upcoming Appointments */}
        <Card 
          title="Upcoming Appointments" 
          icon={<FiCalendar />}
          headerAction={<Link to="/patient/appointments"><Button size="sm" variant="outline-primary">View All</Button></Link>}
        >
          <div className="appointment-list">
            {appointments.slice(0, 3).map((apt) => (
              <div key={apt.id} className="appointment-item">
                <div className="appointment-info">
                  <h4 className="appointment-doctor">{apt.doctorName}</h4>
                  <p className="appointment-department">{apt.department}</p>
                  <div className="appointment-datetime">
                    <FiCalendar /> {apt.date} at {apt.time}
                  </div>
                </div>
                <Badge variant={getStatusVariant(apt.status)} pill>
                  {apt.status}
                </Badge>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Prescriptions */}
        <Card 
          title="Recent Prescriptions" 
          icon={<FiFileText />}
          headerAction={<Link to="/patient/prescriptions"><Button size="sm" variant="outline-primary">View All</Button></Link>}
        >
          <div className="prescription-list">
            {prescriptions.map((presc) => (
              <div key={presc.id} className="prescription-item">
                <div className="prescription-header">
                  <strong>{presc.diagnosis}</strong>
                  <span className="prescription-date">{presc.date}</span>
                </div>
                <p className="prescription-doctor">Prescribed by {presc.doctorName}</p>
                <p className="prescription-medicines">{presc.medicines.length} medicines prescribed</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card title="Quick Actions" icon={<FiActivity />}>
          <div className="quick-actions">
            <Link to="/patient/book-appointment" className="quick-action-item">
              <FiCalendar className="action-icon" />
              <span>Book Appointment</span>
            </Link>
            <Link to="/patient/doctors" className="quick-action-item">
              <FiFileText className="action-icon" />
              <span>Find Doctors</span>
            </Link>
            <Link to="/patient/lab-reports" className="quick-action-item">
              <FaFlask className="action-icon" />
              <span>Lab Reports</span>
            </Link>
            <Link to="/patient/bills" className="quick-action-item">
              <FiDollarSign className="action-icon" />
              <span>Pay Bills</span>
            </Link>
          </div>
        </Card>

        {/* Notifications */}
        <Card title="Recent Notifications" icon={<FiBell />}>
          <div className="notification-list">
            <div className="notification-item">
              <div className="notification-dot dot-primary"></div>
              <div>
                <p className="notification-text">Your appointment with Dr. Sarah Johnson is tomorrow at 10:00 AM</p>
                <span className="notification-time">2 hours ago</span>
              </div>
            </div>
            <div className="notification-item">
              <div className="notification-dot dot-success"></div>
              <div>
                <p className="notification-text">Your lab report is ready for download</p>
                <span className="notification-time">5 hours ago</span>
              </div>
            </div>
            <div className="notification-item">
              <div className="notification-dot dot-warning"></div>
              <div>
                <p className="notification-text">Payment reminder: Invoice #INV-2026-002 is pending</p>
                <span className="notification-time">1 day ago</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PatientDashboard;
