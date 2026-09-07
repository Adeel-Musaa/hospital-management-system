import React, { useState } from 'react';
import { staff } from '../../utils/dummyData';
import Table from '../../components/Table';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import { FiPlus, FiEdit, FiTrash2 } from 'react-icons/fi';

const ManageStaff = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Role', accessor: 'role' },
    { header: 'Department', accessor: 'department' },
    { header: 'Shift', accessor: 'shift' },
    { header: 'Phone', accessor: 'phone' },
    { header: 'Join Date', accessor: 'joinDate' },
    { 
      header: 'Actions', 
      accessor: 'id',
      render: () => (
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button size="sm" variant="outline-primary" icon={<FiEdit />}>Edit</Button>
          <Button size="sm" variant="danger" icon={<FiTrash2 />}>Remove</Button>
        </div>
      )
    },
  ];

  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="page-title">Staff Management</h1>
          <p className="page-subtitle">Manage hospital staff and employees</p>
        </div>
        <Button variant="primary" icon={<FiPlus />} onClick={() => setIsModalOpen(true)}>Add Staff Member</Button>
      </div>

      <Table columns={columns} data={staff} searchable pagination itemsPerPage={10} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add Staff Member" size="lg">
        <form>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" required />
            </div>
            <div>
              <label className="form-label">Role</label>
              <select className="form-control" required>
                <option>Nurse</option>
                <option>Technician</option>
                <option>Pharmacist</option>
                <option>Receptionist</option>
                <option>Lab Assistant</option>
              </select>
            </div>
            <div>
              <label className="form-label">Department</label>
              <input type="text" className="form-control" required />
            </div>
            <div>
              <label className="form-label">Shift</label>
              <select className="form-control" required>
                <option>Morning</option>
                <option>Evening</option>
                <option>Night</option>
              </select>
            </div>
            <div>
              <label className="form-label">Phone</label>
              <input type="tel" className="form-control" required />
            </div>
            <div>
              <label className="form-label">Join Date</label>
              <input type="date" className="form-control" required />
            </div>
          </div>
        </form>
        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
          <Button variant="outline-primary" onClick={() => setIsModalOpen(false)}>Cancel</Button>
          <Button variant="primary">Add Staff</Button>
        </div>
      </Modal>
    </div>
  );
};

export default ManageStaff;
