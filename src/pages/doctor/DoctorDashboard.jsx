import React from 'react';
import Card from '../../components/Card';
import Badge from '../../components/Badge';
import '../patient/PatientDashboard.css';
import { FiCalendar, FiUsers, FiFileText, FiClock, FiActivity } from 'react-icons/fi';
import { appointments, patients } from '../../utils/dummyData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const DoctorDashboard = () => {
  const stats = [
    { title: "Today's Appointments", value: '8', icon: <FiCalendar />, color: 'primary' },
    { title: 'Total Patients', value: '124', icon: <FiUsers />, color: 'secondary' },
    { title: 'Prescriptions Written', value: '45', icon: <FiFileText />, color: 'info' },
    { title: 'Available Hours', value: '6h', icon: <FiClock />, color: 'warning' },
  ];

  const weekData = [
    { day: 'Mon', patients: 12 },
    { day: 'Tue', patients: 15 },
    { day: 'Wed', patients: 10 },
    { day: 'Thu', patients: 18 },
    { day: 'Fri', patients: 14 },
  ];

  return (
    <div className="patient-dashboard">
      <div className="dashboard-header-section">
        <div>
          <h1 className="page-title">Welcome Back, Dr. Sarah!</h1>
          <p className="page-subtitle">Here's your schedule for today</p>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <Card key={index} hoverable className="stat-card">
            <div className="stat-content">
              <div className={`stat-icon stat-icon-${stat.color}`}>{stat.icon}</div>
              <div className="stat-details">
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.title}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="dashboard-grid">
        <Card title="Today's Appointments" icon={<FiCalendar />}>
          <div className="appointment-list">
            {appointments.slice(0, 4).map((apt) => (
              <div key={apt.id} className="appointment-item">
                <div className="appointment-info">
                  <h4 className="appointment-doctor">{apt.patientName}</h4>
                  <p className="appointment-department">{apt.type}</p>
                  <div className="appointment-datetime"><FiClock /> {apt.time}</div>
                </div>
                <Badge variant="primary" pill>{apt.status}</Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Weekly Patient Statistics" icon={<FiActivity />}>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={weekData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="patients" fill="var(--primary)" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
};

export default DoctorDashboard;
