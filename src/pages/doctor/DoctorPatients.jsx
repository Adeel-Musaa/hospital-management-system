import React from 'react';
import { patients } from '../../utils/dummyData';
import Table from '../../components/Table';
import Button from '../../components/Button';
import Badge from '../../components/Badge';
import { FiEye, FiFileText } from 'react-icons/fi';

const DoctorPatients = () => {
  const columns = [
    { header: 'Patient ID', accessor: 'patientId' },
    { header: 'Name', accessor: 'name' },
    { header: 'Age', accessor: 'age' },
    { header: 'Gender', accessor: 'gender' },
    { header: 'Blood Group', accessor: 'bloodGroup', render: (bg) => <Badge variant="secondary">{bg}</Badge> },
    { header: 'Last Visit', accessor: 'lastVisit' },
    { 
      header: 'Actions', 
      accessor: 'id',
      render: () => (
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button size="sm" variant="outline-primary" icon={<FiEye />}>View</Button>
          <Button size="sm" variant="primary" icon={<FiFileText />}>History</Button>
        </div>
      )
    },
  ];

  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="page-title">My Patients</h1>
        <p className="page-subtitle">View and manage your patients</p>
      </div>
      <Table columns={columns} data={patients} searchable pagination itemsPerPage={10} />
    </div>
  );
};

export default DoctorPatients;
