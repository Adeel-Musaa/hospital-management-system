import React from 'react';
import { FiUser, FiHardDrive, FiSettings, FiLock } from 'react-icons/fi';
import Table from '../../components/Table';
import './AuditLogs.css';

const AuditLogs = () => {
  const logs = [
    { id: 1, user: 'Dr. Sarah Johnson', action: 'Added Prescription', resource: 'Patient #1234', timestamp: 'Jan 7, 2026 - 2:45 PM', ipAddress: '192.168.1.1' },
    { id: 2, user: 'Admin User', action: 'Modified Patient Record', resource: 'Patient #5678', timestamp: 'Jan 7, 2026 - 1:20 PM', ipAddress: '192.168.1.5' },
    { id: 3, user: 'Pharmacy Manager', action: 'Updated Inventory', resource: 'Medicine #ABC123', timestamp: 'Jan 7, 2026 - 11:30 AM', ipAddress: '192.168.1.3' },
    { id: 4, user: 'Dr. John Smith', action: 'Viewed Patient History', resource: 'Patient #9012', timestamp: 'Jan 6, 2026 - 4:15 PM', ipAddress: '192.168.1.2' },
  ];

  const getActionIcon = (action) => {
    const map = {
      'Added Prescription': <FiLock />,
      'Modified Patient Record': <FiSettings />,
      'Updated Inventory': <FiHardDrive />,
      'Viewed Patient History': <FiUser />,
    };
    return map[action] || <FiUser />;
  };

  const columns = [
    { header: 'User', accessor: 'user' },
    { header: 'Action', accessor: 'action', render: (action) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        {getActionIcon(action)} {action}
      </div>
    )},
    { header: 'Resource', accessor: 'resource' },
    { header: 'Timestamp', accessor: 'timestamp' },
    { header: 'IP Address', accessor: 'ipAddress' },
  ];

  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="page-title">Audit Logs</h1>
        <p className="page-subtitle">System activity and user action history</p>
      </div>
      <Table columns={columns} data={logs} searchable pagination itemsPerPage={15} />
    </div>
  );
};

export default AuditLogs;
