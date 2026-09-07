import React, { useState } from 'react';
import { beds } from '../../utils/dummyData';
import Table from '../../components/Table';
import Button from '../../components/Button';
import Badge from '../../components/Badge';
import Modal from '../../components/Modal';
import { FiPlus } from 'react-icons/fi';
import { FaBed } from 'react-icons/fa';

const BedManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getStatusVariant = (status) => {
    const map = { 'Available': 'success', 'Occupied': 'danger', 'Maintenance': 'warning', 'Reserved': 'info' };
    return map[status] || 'secondary';
  };

  const columns = [
    { header: 'Bed No', accessor: 'bedNo' },
    { header: 'Ward', accessor: 'ward' },
    { header: 'Floor', accessor: 'floor' },
    { 
      header: 'Status', 
      accessor: 'status',
      render: (status) => <Badge variant={getStatusVariant(status)} pill>{status}</Badge>
    },
    { header: 'Patient', accessor: 'patient', render: (p) => p || '-' },
    { header: 'Admission Date', accessor: 'admissionDate', render: (d) => d || '-' },
    { 
      header: 'Actions', 
      accessor: 'id',
      render: (_, row) => (
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {row.status === 'Available' && <Button size="sm" variant="primary">Allocate</Button>}
          {row.status === 'Occupied' && <Button size="sm" variant="danger">Release</Button>}
        </div>
      )
    },
  ];

  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="page-title">Bed Management</h1>
          <p className="page-subtitle">Monitor and manage bed availability</p>
        </div>
        <Button variant="primary" icon={<FiPlus />} onClick={() => setIsModalOpen(true)}>Add Bed</Button>
      </div>

      <Table columns={columns} data={beds} searchable pagination itemsPerPage={10} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Bed">
        <form>
          <div style={{ display: 'grid', gap: '1rem' }}>
            <div>
              <label className="form-label">Bed Number</label>
              <input type="text" className="form-control" required />
            </div>
            <div>
              <label className="form-label">Ward</label>
              <select className="form-control" required>
                <option>General Ward</option>
                <option>ICU</option>
                <option>Private Room</option>
              </select>
            </div>
            <div>
              <label className="form-label">Floor</label>
              <input type="text" className="form-control" required />
            </div>
          </div>
        </form>
        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
          <Button variant="outline-primary" onClick={() => setIsModalOpen(false)}>Cancel</Button>
          <Button variant="primary">Add Bed</Button>
        </div>
      </Modal>
    </div>
  );
};

export default BedManagement;
