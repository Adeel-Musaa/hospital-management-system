import React from 'react';
import { appointments } from '../../utils/dummyData';
import Table from '../../components/Table';
import Badge from '../../components/Badge';
import Button from '../../components/Button';
import { FiEye, FiEdit } from 'react-icons/fi';

const AdminAppointments = () => {
  const getStatusVariant = (status) => {
    const map = { 'Scheduled': 'primary', 'Confirmed': 'success', 'In Progress': 'info', 'Completed': 'secondary', 'Cancelled': 'danger' };
    return map[status] || 'secondary';
  };

  const columns = [
    { header: 'Patient', accessor: 'patientName' },
    { header: 'Doctor', accessor: 'doctorName' },
    { header: 'Department', accessor: 'department' },
    { header: 'Date', accessor: 'date' },
    { header: 'Time', accessor: 'time' },
    { header: 'Type', accessor: 'type' },
    { 
      header: 'Status', 
      accessor: 'status',
      render: (status) => <Badge variant={getStatusVariant(status)} pill>{status}</Badge>
    },
    { 
      header: 'Actions', 
      accessor: 'id',
      render: () => (
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button size="sm" variant="outline-primary" icon={<FiEye />}>View</Button>
          <Button size="sm" variant="primary" icon={<FiEdit />}>Edit</Button>
        </div>
      )
    },
  ];

  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="page-title">Appointment Management</h1>
        <p className="page-subtitle">View and manage all appointments</p>
      </div>
      <Table columns={columns} data={appointments} searchable pagination itemsPerPage={10} />
    </div>
  );
};

export default AdminAppointments;
