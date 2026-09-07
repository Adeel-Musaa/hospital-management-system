import React from 'react';
import { FiCheck, FiEdit, FiPlus, FiTrash2 } from 'react-icons/fi';
import './ActivityTimeline.css';

const ActivityTimeline = ({ activities = [] }) => {
  const defaultActivities = [
    { id: 1, action: 'Appointment Booked', description: 'With Dr. Sarah Johnson', time: '2 hours ago', icon: <FiPlus />, type: 'success' },
    { id: 2, action: 'Prescription Added', description: 'Amoxicillin 500mg', time: '5 hours ago', icon: <FiEdit />, type: 'info' },
    { id: 3, action: 'Lab Report Uploaded', description: 'Blood Test Results', time: '1 day ago', icon: <FiCheck />, type: 'success' },
    { id: 4, action: 'Payment Processed', description: '$150.00 for appointment', time: '3 days ago', icon: <FiCheck />, type: 'success' },
  ];

  const data = activities.length > 0 ? activities : defaultActivities;

  return (
    <div className="timeline">
      {data.map((item, index) => (
        <div key={item.id} className="timeline-item">
          <div className={`timeline-dot timeline-${item.type}`}>
            {item.icon}
          </div>
          <div className="timeline-content">
            <div className="timeline-header">
              <h4 className="timeline-title">{item.action}</h4>
              <span className="timeline-time">{item.time}</span>
            </div>
            <p className="timeline-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityTimeline;
