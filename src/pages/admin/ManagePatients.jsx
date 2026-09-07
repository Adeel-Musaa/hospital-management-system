import React, { useState } from 'react';
import { patients } from '../../utils/dummyData';
import Table from '../../components/Table';
import Button from '../../components/Button';
import Badge from '../../components/Badge';
import Modal from '../../components/Modal';
import { FiPlus, FiEdit, FiEye } from 'react-icons/fi';

const ManagePatients = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    { header: 'Patient ID', accessor: 'patientId' },
    { header: 'Name', accessor: 'name' },
    { header: 'Age', accessor: 'age' },
    { header: 'Gender', accessor: 'gender' },
    { header: 'Blood Group', accessor: 'bloodGroup', render: (bg) => <Badge variant="secondary">{bg}</Badge> },
    { header: 'Phone', accessor: 'phone' },
    { header: 'Last Visit', accessor: 'lastVisit' },
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
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="page-title">Manage Patients</h1>
          <p className="page-subtitle">View and manage patient records</p>
        </div>
        <Button variant="primary" icon={<FiPlus />} onClick={() => setIsModalOpen(true)}>Register Patient</Button>
      </div>

      <Table columns={columns} data={patients} searchable pagination itemsPerPage={10} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Register New Patient" size="lg">
        <form>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" required />
            </div>
            <div>
              <label className="form-label">Age</label>
              <input type="number" className="form-control" required />
            </div>
            <div>
              <label className="form-label">Gender</label>
              <select className="form-control" required>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="form-label">Blood Group</label>
              <select className="form-control" required>
                <option>O+</option>
                <option>O-</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
              </select>
            </div>
            <div>
              <label className="form-label">Phone</label>
              <input type="tel" className="form-control" required />
            </div>
            <div>
              <label className="form-label">Email</label>
              <input type="email" className="form-control" required />
            </div>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <label className="form-label">Address</label>
            <textarea className="form-control" rows="2"></textarea>
          </div>
        </form>
        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
          <Button variant="outline-primary" onClick={() => setIsModalOpen(false)}>Cancel</Button>
          <Button variant="primary">Register Patient</Button>
        </div>
      </Modal>
    </div>
  );
};

export default ManagePatients;
