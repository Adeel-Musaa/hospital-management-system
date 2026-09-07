import React, { useState } from 'react';
import { doctors } from '../../utils/dummyData';
import Table from '../../components/Table';
import Button from '../../components/Button';
import Badge from '../../components/Badge';
import Modal from '../../components/Modal';
import { FiPlus, FiEdit, FiTrash2 } from 'react-icons/fi';

const ManageDoctors = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Specialization', accessor: 'specialization' },
    { header: 'Experience', accessor: 'experience', render: (exp) => `${exp} years` },
    { header: 'Fee', accessor: 'fee', render: (fee) => `$${fee}` },
    { header: 'Rating', accessor: 'rating', render: (rating) => `⭐ ${rating}` },
    { 
      header: 'Status', 
      accessor: 'available',
      render: (available) => <Badge variant={available ? 'success' : 'danger'} pill>{available ? 'Available' : 'Busy'}</Badge>
    },
    { 
      header: 'Actions', 
      accessor: 'id',
      render: () => (
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button size="sm" variant="outline-primary" icon={<FiEdit />}>Edit</Button>
          <Button size="sm" variant="danger" icon={<FiTrash2 />}>Delete</Button>
        </div>
      )
    },
  ];

  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="page-title">Manage Doctors</h1>
          <p className="page-subtitle">Add, edit, or remove doctors from the system</p>
        </div>
        <Button variant="primary" icon={<FiPlus />} onClick={() => setIsModalOpen(true)}>Add New Doctor</Button>
      </div>

      <Table columns={columns} data={doctors} searchable pagination itemsPerPage={10} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Doctor" size="lg">
        <form>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" required />
            </div>
            <div>
              <label className="form-label">Specialization</label>
              <input type="text" className="form-control" required />
            </div>
            <div>
              <label className="form-label">Qualification</label>
              <input type="text" className="form-control" required />
            </div>
            <div>
              <label className="form-label">Experience (years)</label>
              <input type="number" className="form-control" required />
            </div>
            <div>
              <label className="form-label">Consultation Fee</label>
              <input type="number" className="form-control" required />
            </div>
            <div>
              <label className="form-label">City</label>
              <input type="text" className="form-control" required />
            </div>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <label className="form-label">About</label>
            <textarea className="form-control" rows="3"></textarea>
          </div>
        </form>
        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
          <Button variant="outline-primary" onClick={() => setIsModalOpen(false)}>Cancel</Button>
          <Button variant="primary">Add Doctor</Button>
        </div>
      </Modal>
    </div>
  );
};

export default ManageDoctors;
