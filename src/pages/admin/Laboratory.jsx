import React, { useState } from 'react';
import { labReports } from '../../utils/dummyData';
import Table from '../../components/Table';
import Button from '../../components/Button';
import Badge from '../../components/Badge';
import Modal from '../../components/Modal';
import { FiPlus } from 'react-icons/fi';

const Laboratory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    { header: 'Test Name', accessor: 'testName' },
    { header: 'Patient', accessor: 'patient', render: () => 'John Doe' },
    { header: 'Category', accessor: 'category' },
    { header: 'Date', accessor: 'date' },
    { header: 'Ordered By', accessor: 'orderedBy' },
    { 
      header: 'Status', 
      accessor: 'status',
      render: (status) => <Badge variant="success" pill>{status}</Badge>
    },
    { 
      header: 'Actions', 
      accessor: 'id',
      render: () => (
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button size="sm" variant="outline-primary">View</Button>
          <Button size="sm" variant="primary">Upload Report</Button>
        </div>
      )
    },
  ];

  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="page-title">Laboratory Management</h1>
          <p className="page-subtitle">Manage lab tests and reports</p>
        </div>
        <Button variant="primary" icon={<FiPlus />} onClick={() => setIsModalOpen(true)}>Create Test Order</Button>
      </div>

      <Table columns={columns} data={labReports} searchable pagination itemsPerPage={10} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create Lab Test Order" size="lg">
        <form>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label className="form-label">Patient</label>
              <input type="text" className="form-control" required />
            </div>
            <div>
              <label className="form-label">Test Name</label>
              <input type="text" className="form-control" required />
            </div>
            <div>
              <label className="form-label">Category</label>
              <select className="form-control" required>
                <option>Hematology</option>
                <option>Biochemistry</option>
                <option>Microbiology</option>
                <option>Radiology</option>
              </select>
            </div>
            <div>
              <label className="form-label">Ordered By</label>
              <input type="text" className="form-control" required />
            </div>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <label className="form-label">Instructions</label>
            <textarea className="form-control" rows="3"></textarea>
          </div>
        </form>
        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
          <Button variant="outline-primary" onClick={() => setIsModalOpen(false)}>Cancel</Button>
          <Button variant="primary">Create Order</Button>
        </div>
      </Modal>
    </div>
  );
};

export default Laboratory;
