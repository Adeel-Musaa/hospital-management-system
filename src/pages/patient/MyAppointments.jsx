import React from 'react';
import { appointments } from '../../utils/dummyData';
import Table from '../../components/Table';
import Badge from '../../components/Badge';
import Button from '../../components/Button';
import { FiCalendar, FiEye } from 'react-icons/fi';

const MyAppointments = () => {
  const getStatusVariant = (status) => {
    const map = { 'Scheduled': 'primary', 'Confirmed': 'success', 'In Progress': 'info', 'Completed': 'secondary', 'Cancelled': 'danger' };
    return map[status] || 'secondary';
  };

  const columns = [
    { header: 'Date', accessor: 'date' },
    { header: 'Time', accessor: 'time' },
    { header: 'Doctor', accessor: 'doctorName' },
    { header: 'Department', accessor: 'department' },
    { header: 'Type', accessor: 'type' },
    { 
      header: 'Status', 
      accessor: 'status',
      render: (status) => <Badge variant={getStatusVariant(status)} pill>{status}</Badge>
    },
    { 
      header: 'Actions', 
      accessor: 'id',
      render: () => <Button size="sm" variant="outline-primary" icon={<FiEye />}>View</Button>
    },
  ];

  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="page-title">My Appointments</h1>
        <p className="page-subtitle">View and manage your appointments</p>
      </div>
      <Table columns={columns} data={appointments} searchable pagination itemsPerPage={10} />
    </div>
  );
};

export default MyAppointments;
