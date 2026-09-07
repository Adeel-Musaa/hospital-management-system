import React, { useState } from 'react';
import { FiBell, FiX, FiCheckCircle, FiAlertCircle, FiInfo } from 'react-icons/fi';
import './Notifications.css';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'success', title: 'Appointment Confirmed', message: 'Your appointment with Dr. Smith is confirmed for tomorrow', time: '5 mins ago' },
    { id: 2, type: 'warning', title: 'Prescription Expiring', message: 'Your current prescription expires in 3 days', time: '1 hour ago' },
    { id: 3, type: 'info', title: 'Lab Results Ready', message: 'Your recent blood test results are now available', time: '2 hours ago' },
    { id: 4, type: 'alert', title: 'System Maintenance', message: 'Scheduled maintenance on Sunday at 2 AM', time: '1 day ago' },
  ]);

  const removeNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const getNotificationIcon = (type) => {
    const map = {
      success: <FiCheckCircle />,
      warning: <FiAlertCircle />,
      info: <FiInfo />,
      alert: <FiAlertCircle />,
    };
    return map[type] || <FiInfo />;
  };

  return (
    <div className="notifications-dropdown">
      <div className="notifications-header">
        <h3>Notifications</h3>
        <span className="notification-badge">{notifications.length}</span>
      </div>

      <div className="notifications-list">
        {notifications.length > 0 ? (
          notifications.map(notif => (
            <div key={notif.id} className={`notification-item notification-${notif.type}`}>
              <div className="notification-icon">
                {getNotificationIcon(notif.type)}
              </div>
              <div className="notification-content">
                <h4 className="notification-title">{notif.title}</h4>
                <p className="notification-message">{notif.message}</p>
                <span className="notification-time">{notif.time}</span>
              </div>
              <button 
                className="notification-close"
                onClick={() => removeNotification(notif.id)}
              >
                <FiX />
              </button>
            </div>
          ))
        ) : (
          <div className="empty-notifications">
            <FiBell size={40} />
            <p>No notifications</p>
          </div>
        )}
      </div>

      <div className="notifications-footer">
        <a href="#mark-all">Mark all as read</a>
      </div>
    </div>
  );
};

export default Notifications;
