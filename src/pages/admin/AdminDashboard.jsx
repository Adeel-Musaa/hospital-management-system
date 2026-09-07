import React from 'react';
import Card from '../../components/Card';
import '../patient/PatientDashboard.css';
import { FiUsers, FiCalendar, FiDollarSign, FiActivity, FiTrendingUp } from 'react-icons/fi';
import { FaUserMd, FaBed, FaFlask } from 'react-icons/fa';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { analyticsData } from '../../utils/dummyData';

const AdminDashboard = () => {
  const stats = [
    { title: 'Total Patients', value: '2,543', change: '+12%', icon: <FiUsers />, color: 'primary' },
    { title: 'Total Doctors', value: '156', change: '+5%', icon: <FaUserMd />, color: 'secondary' },
    { title: "Today's Appointments", value: '89', change: '+8%', icon: <FiCalendar />, color: 'info' },
    { title: 'Monthly Revenue', value: '$85,000', change: '+15%', icon: <FiDollarSign />, color: 'success' },
    { title: 'Available Beds', value: '45/120', change: '37%', icon: <FaBed />, color: 'warning' },
    { title: 'Lab Tests Today', value: '67', change: '+10%', icon: <FaFlask />, color: 'info' },
  ];

  const COLORS = ['#2F80ED', '#27AE60', '#F2994A', '#EB5757', '#56CCF2'];

  return (
    <div className="patient-dashboard">
      <div className="dashboard-header-section">
        <div>
          <h1 className="page-title">Admin Dashboard</h1>
          <p className="page-subtitle">Hospital management overview</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        {stats.map((stat, index) => (
          <Card key={index} hoverable>
            <div className="stat-content">
              <div className={`stat-icon stat-icon-${stat.color}`}>{stat.icon}</div>
              <div className="stat-details">
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.title}</p>
                <span style={{ fontSize: '0.875rem', color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <FiTrendingUp /> {stat.change}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
        <Card title="Patient Growth" icon={<FiUsers />}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={analyticsData.patientGrowth}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="patients" stroke="var(--primary)" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Revenue Trend" icon={<FiDollarSign />}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={analyticsData.revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="var(--secondary)" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Department Load" icon={<FiActivity />}>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={analyticsData.departmentLoad} cx="50%" cy="50%" labelLine={false} label={(entry) => entry.name} outerRadius={80} fill="#8884d8" dataKey="value">
                {analyticsData.departmentLoad.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Appointments Per Day" icon={<FiCalendar />}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={analyticsData.appointmentsPerDay}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="appointments" fill="var(--info)" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
