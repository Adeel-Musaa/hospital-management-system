import React from 'react';
import Card from '../../components/Card';
import { FiUsers, FiDollarSign, FiActivity, FiCalendar } from 'react-icons/fi';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { analyticsData } from '../../utils/dummyData';

const Analytics = () => {
  const COLORS = ['#2F80ED', '#27AE60', '#F2994A', '#EB5757', '#56CCF2'];

  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="page-title">Analytics & Reports</h1>
        <p className="page-subtitle">Comprehensive hospital performance metrics</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
        <Card title="Patient Growth Trend" icon={<FiUsers />}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={analyticsData.patientGrowth}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="patients" stroke="var(--primary)" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <p style={{ color: 'var(--dark-gray)', fontSize: '0.9rem' }}>
              Total Growth: <strong style={{ color: 'var(--success)' }}>+113%</strong> over 7 months
            </p>
          </div>
        </Card>

        <Card title="Revenue Analysis" icon={<FiDollarSign />}>
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
          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <p style={{ color: 'var(--dark-gray)', fontSize: '0.9rem' }}>
              Average Monthly Revenue: <strong style={{ color: 'var(--success)' }}>$62,571</strong>
            </p>
          </div>
        </Card>

        <Card title="Department Load Distribution" icon={<FiActivity />}>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie 
                data={analyticsData.departmentLoad} 
                cx="50%" 
                cy="50%" 
                labelLine={false}
                label={(entry) => `${entry.name}: ${entry.value}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {analyticsData.departmentLoad.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <p style={{ color: 'var(--dark-gray)', fontSize: '0.9rem' }}>
              Most active: <strong style={{ color: 'var(--primary)' }}>Cardiology (25%)</strong>
            </p>
          </div>
        </Card>

        <Card title="Weekly Appointment Statistics" icon={<FiCalendar />}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={analyticsData.appointmentsPerDay}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="appointments" fill="var(--info)" />
            </BarChart>
          </ResponsiveContainer>
          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <p style={{ color: 'var(--dark-gray)', fontSize: '0.9rem' }}>
              Average daily appointments: <strong style={{ color: 'var(--primary)' }}>47</strong>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
