import React, { useState } from 'react';
import { FiPlus, FiFile, FiCheckCircle, FiClock, FiX } from 'react-icons/fi';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Badge from '../../components/Badge';
import Modal from '../../components/Modal';
import Table from '../../components/Table';

const InsuranceClaims = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [claims] = useState([
    { id: 'CLM001', patient: 'John Doe', amount: 5000, status: 'Approved', insurer: 'Blue Cross', date: 'Jan 5, 2026' },
    { id: 'CLM002', patient: 'Jane Smith', amount: 3500, status: 'Pending', insurer: 'Aetna', date: 'Jan 3, 2026' },
    { id: 'CLM003', patient: 'Mike Johnson', amount: 2000, status: 'Rejected', insurer: 'Cigna', date: 'Dec 28, 2025' },
    { id: 'CLM004', patient: 'Sarah Davis', amount: 4500, status: 'In Review', insurer: 'UnitedHealth', date: 'Dec 25, 2025' },
  ]);

  const getStatusVariant = (status) => {
    const map = { 'Approved': 'success', 'Pending': 'warning', 'Rejected': 'danger', 'In Review': 'info' };
    return map[status] || 'secondary';
  };

  const getStatusIcon = (status) => {
    const map = { 'Approved': <FiCheckCircle />, 'Pending': <FiClock />, 'Rejected': <FiX /> };
    return map[status] || <FiFile />;
  };

  const columns = [
    { header: 'Claim ID', accessor: 'id' },
    { header: 'Patient', accessor: 'patient' },
    { header: 'Amount', accessor: 'amount', render: (amount) => `$${amount}` },
    { header: 'Insurer', accessor: 'insurer' },
    { header: 'Date', accessor: 'date' },
    { 
      header: 'Status', 
      accessor: 'status',
      render: (status) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {getStatusIcon(status)}
          <Badge variant={getStatusVariant(status)} pill>{status}</Badge>
        </div>
      )
    },
    { 
      header: 'Actions', 
      accessor: 'id',
      render: () => (
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button size="sm" variant="outline-primary">View</Button>
          <Button size="sm" variant="outline-primary">Edit</Button>
        </div>
      )
    },
  ];

  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="page-title">Insurance Claims Management</h1>
          <p className="page-subtitle">Track and manage insurance claims</p>
        </div>
        <Button variant="primary" icon={<FiPlus />} onClick={() => setIsModalOpen(true)}>New Claim</Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <Card title="Total Claims" icon={<FiFile />}>
          <h2 style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: 700 }}>4</h2>
          <p style={{ color: 'var(--dark-gray)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Total: $15,000</p>
        </Card>
        <Card title="Approved" icon={<FiCheckCircle />}>
          <h2 style={{ fontSize: '2rem', color: 'var(--success)', fontWeight: 700 }}>1</h2>
          <p style={{ color: 'var(--dark-gray)', fontSize: '0.9rem', marginTop: '0.5rem' }}>$5,000</p>
        </Card>
        <Card title="Pending" icon={<FiClock />}>
          <h2 style={{ fontSize: '2rem', color: 'var(--warning)', fontWeight: 700 }}>1</h2>
          <p style={{ color: 'var(--dark-gray)', fontSize: '0.9rem', marginTop: '0.5rem' }}>$3,500</p>
        </Card>
        <Card title="Rejected" icon={<FiX />}>
          <h2 style={{ fontSize: '2rem', color: 'var(--danger)', fontWeight: 700 }}>1</h2>
          <p style={{ color: 'var(--dark-gray)', fontSize: '0.9rem', marginTop: '0.5rem' }}>$2,000</p>
        </Card>
      </div>

      <Table columns={columns} data={claims} searchable pagination itemsPerPage={10} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create Insurance Claim" size="lg">
        <form>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label className="form-label">Patient</label>
              <input type="text" className="form-control" required />
            </div>
            <div>
              <label className="form-label">Insurer Name</label>
              <input type="text" className="form-control" required />
            </div>
            <div>
              <label className="form-label">Claim Amount</label>
              <input type="number" step="0.01" className="form-control" required />
            </div>
            <div>
              <label className="form-label">Claim Date</label>
              <input type="date" className="form-control" required />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label className="form-label">Description</label>
              <textarea className="form-control" rows="3" required></textarea>
            </div>
          </div>
        </form>
        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
          <Button variant="outline-primary" onClick={() => setIsModalOpen(false)}>Cancel</Button>
          <Button variant="primary">Create Claim</Button>
        </div>
      </Modal>
    </div>
  );
};

export default InsuranceClaims;
