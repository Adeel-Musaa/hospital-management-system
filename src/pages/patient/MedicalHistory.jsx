import React from 'react';
import Card from '../../components/Card';
import { FiFileText, FiCalendar } from 'react-icons/fi';

const MedicalHistory = () => {
  const visits = [
    { id: 1, date: '2026-01-05', doctor: 'Dr. Sarah Johnson', diagnosis: 'Hypertension', treatment: 'Medication prescribed' },
    { id: 2, date: '2025-12-15', doctor: 'Dr. Michael Chen', diagnosis: 'Migraine', treatment: 'Pain management' },
    { id: 3, date: '2025-11-20', doctor: 'Dr. Emily Davis', diagnosis: 'General Checkup', treatment: 'Routine examination' },
  ];

  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="page-title">Medical History</h1>
        <p className="page-subtitle">Your complete medical records and history</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        <Card title="Patient Information" icon={<FiFileText />}>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            <p><strong>Patient ID:</strong> P12345</p>
            <p><strong>Blood Group:</strong> O+</p>
            <p><strong>Age:</strong> 45 years</p>
            <p><strong>Allergies:</strong> None</p>
            <p><strong>Chronic Conditions:</strong> Hypertension</p>
          </div>
        </Card>

        <Card title="Emergency Contact" icon={<FiFileText />}>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            <p><strong>Name:</strong> Jane Doe</p>
            <p><strong>Relationship:</strong> Spouse</p>
            <p><strong>Phone:</strong> +1-234-567-8901</p>
          </div>
        </Card>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Card title="Visit History" icon={<FiCalendar />}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {visits.map(visit => (
              <div key={visit.id} style={{ padding: '1rem', border: '1px solid var(--light-gray)', borderRadius: 'var(--border-radius-sm)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <strong>{visit.date}</strong>
                  <span style={{ color: 'var(--primary)' }}>{visit.doctor}</span>
                </div>
                <p style={{ margin: '0.25rem 0' }}><strong>Diagnosis:</strong> {visit.diagnosis}</p>
                <p style={{ margin: '0.25rem 0', color: 'var(--dark-gray)' }}>{visit.treatment}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MedicalHistory;
