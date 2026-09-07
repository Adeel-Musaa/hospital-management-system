import React, { useState } from 'react';
import { medicines } from '../../utils/dummyData';
import Table from '../../components/Table';
import Button from '../../components/Button';
import Badge from '../../components/Badge';
import Modal from '../../components/Modal';
import { FiPlus, FiEdit, FiAlertTriangle } from 'react-icons/fi';

const Pharmacy = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    { header: 'Medicine Name', accessor: 'name' },
    { header: 'Category', accessor: 'category' },
    { header: 'Stock', accessor: 'stock', render: (stock, row) => {
      const isLow = stock < row.minStock;
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>{stock}</span>
          {isLow && <FiAlertTriangle style={{ color: 'var(--danger)' }} />}
        </div>
      );
    }},
    { header: 'Unit', accessor: 'unit' },
    { header: 'Price', accessor: 'price', render: (price) => `$${price}` },
    { header: 'Expiry Date', accessor: 'expiryDate' },
    { 
      header: 'Status', 
      accessor: 'stock',
      render: (stock, row) => {
        const isLow = stock < row.minStock;
        return <Badge variant={isLow ? 'warning' : 'success'} pill>{isLow ? 'Low Stock' : 'In Stock'}</Badge>;
      }
    },
    { 
      header: 'Actions', 
      accessor: 'id',
      render: () => (
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button size="sm" variant="outline-primary" icon={<FiEdit />}>Update</Button>
        </div>
      )
    },
  ];

  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="page-title">Pharmacy Management</h1>
          <p className="page-subtitle">Manage medicine inventory and stock</p>
        </div>
        <Button variant="primary" icon={<FiPlus />} onClick={() => setIsModalOpen(true)}>Add Medicine</Button>
      </div>

      <Table columns={columns} data={medicines} searchable pagination itemsPerPage={10} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add Medicine" size="lg">
        <form>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label className="form-label">Medicine Name</label>
              <input type="text" className="form-control" required />
            </div>
            <div>
              <label className="form-label">Category</label>
              <input type="text" className="form-control" required />
            </div>
            <div>
              <label className="form-label">Initial Stock</label>
              <input type="number" className="form-control" required />
            </div>
            <div>
              <label className="form-label">Unit</label>
              <select className="form-control" required>
                <option>Tablets</option>
                <option>Capsules</option>
                <option>Syrup</option>
                <option>Injection</option>
              </select>
            </div>
            <div>
              <label className="form-label">Price per Unit</label>
              <input type="number" step="0.01" className="form-control" required />
            </div>
            <div>
              <label className="form-label">Minimum Stock</label>
              <input type="number" className="form-control" required />
            </div>
            <div>
              <label className="form-label">Expiry Date</label>
              <input type="date" className="form-control" required />
            </div>
          </div>
        </form>
        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
          <Button variant="outline-primary" onClick={() => setIsModalOpen(false)}>Cancel</Button>
          <Button variant="primary">Add Medicine</Button>
        </div>
      </Modal>
    </div>
  );
};

export default Pharmacy;
