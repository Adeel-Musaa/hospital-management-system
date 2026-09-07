import React from 'react';
import Card from '../../components/Card';
import { FiCalendar, FiClock } from 'react-icons/fi';
import Badge from '../../components/Badge';

const DoctorSchedule = () => {
  const schedule = [
    { day: 'Monday', slots: ['09:00 AM - 12:00 PM', '02:00 PM - 06:00 PM'], status: 'Available' },
    { day: 'Tuesday', slots: ['09:00 AM - 12:00 PM', '02:00 PM - 06:00 PM'], status: 'Available' },
    { day: 'Wednesday', slots: ['09:00 AM - 12:00 PM'], status: 'Available' },
    { day: 'Thursday', slots: ['09:00 AM - 12:00 PM', '02:00 PM - 06:00 PM'], status: 'Available' },
    { day: 'Friday', slots: ['09:00 AM - 12:00 PM', '02:00 PM - 06:00 PM'], status: 'Available' },
    { day: 'Saturday', slots: ['09:00 AM - 01:00 PM'], status: 'Available' },
    { day: 'Sunday', slots: [], status: 'Off' },
  ];

  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="page-title">My Schedule</h1>
        <p className="page-subtitle">Manage your weekly availability</p>
      </div>

      <div style={{ display: 'grid', gap: '1rem' }}>
        {schedule.map((day, index) => (
          <Card key={index} title={day.day} icon={<FiCalendar />} headerAction={
            <Badge variant={day.status === 'Available' ? 'success' : 'danger'} pill>{day.status}</Badge>
          }>
            {day.slots.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {day.slots.map((slot, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', background: 'var(--background)', borderRadius: 'var(--border-radius-sm)' }}>
                    <FiClock style={{ color: 'var(--primary)' }} />
                    <span>{slot}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: 'var(--dark-gray)' }}>No scheduled hours</p>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DoctorSchedule;
