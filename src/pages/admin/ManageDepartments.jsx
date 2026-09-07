import React, { useState } from 'react';
import { DEPARTMENTS } from '../../utils/constants';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import { FiPlus, FiEdit, FiTrash2 } from 'react-icons/fi';

const ManageDepartments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="page-title">Department Management</h1>
          <p className="page-subtitle">Manage hospital departments and services</p>
        </div>
        <Button variant="primary" icon={<FiPlus />} onClick={() => setIsModalOpen(true)}>Add Department</Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {DEPARTMENTS.map((dept) => (
          <Card key={dept.id} title={dept.name} icon={<span style={{ fontSize: '2rem' }}>{dept.icon}</span>} hoverable>
            <p style={{ color: 'var(--dark-gray)', marginBottom: '1rem' }}>Department ID: {dept.id}</p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Button size="sm" variant="outline-primary" icon={<FiEdit />} fullWidth>Edit</Button>
              <Button size="sm" variant="danger" icon={<FiTrash2 />} fullWidth>Delete</Button>
            </div>
          </Card>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Department">
        <form>
          <div style={{ display: 'grid', gap: '1rem' }}>
            <div>
              <label className="form-label">Department Name</label>
              <input type="text" className="form-control" required />
            </div>
            <div>
              <label className="form-label">Head of Department</label>
              <input type="text" className="form-control" required />
            </div>
            <div>
              <label className="form-label">Description</label>
              <textarea className="form-control" rows="3"></textarea>
            </div>
          </div>
        </form>
        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
          <Button variant="outline-primary" onClick={() => setIsModalOpen(false)}>Cancel</Button>
          <Button variant="primary">Add Department</Button>
        </div>
      </Modal>
    </div>
  );
};

export default ManageDepartments;
