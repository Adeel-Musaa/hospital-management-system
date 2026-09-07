import React from 'react';
import { appointments } from '../../utils/dummyData';
import Table from '../../components/Table';
import Badge from '../../components/Badge';
import Button from '../../components/Button';
import { FiEye, FiEdit } from 'react-icons/fi';

const DoctorAppointments = () => {
  const columns = [
    { header: 'Time', accessor: 'time' },
    { header: 'Patient', accessor: 'patientName' },
    { header: 'Type', accessor: 'type' },
    { header: 'Reason', accessor: 'reason' },
    { 
      header: 'Status', 
      accessor: 'status',
      render: (status) => <Badge variant="primary" pill>{status}</Badge>
    },
    { 
      header: 'Actions', 
      accessor: 'id',
      render: () => (
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button size="sm" variant="outline-primary" icon={<FiEye />}>View</Button>
          <Button size="sm" variant="primary" icon={<FiEdit />}>Notes</Button>
        </div>
      )
    },
  ];

  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="page-title">My Appointments</h1>
        <p className="page-subtitle">Manage your patient appointments</p>
      </div>
      <Table columns={columns} data={appointments} searchable pagination itemsPerPage={10} />
    </div>
  );
};

export default DoctorAppointments;
