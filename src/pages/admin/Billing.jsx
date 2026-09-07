import React from 'react';
import { bills } from '../../utils/dummyData';
import Table from '../../components/Table';
import Button from '../../components/Button';
import Badge from '../../components/Badge';
import { FiEye, FiDownload } from 'react-icons/fi';

const Billing = () => {
  const getPaymentVariant = (status) => {
    const map = { 'Paid': 'success', 'Pending': 'warning', 'Partial': 'info', 'Overdue': 'danger' };
    return map[status] || 'secondary';
  };

  const columns = [
    { header: 'Invoice No', accessor: 'invoiceNo' },
    { header: 'Patient', accessor: 'patient', render: () => 'John Doe' },
    { header: 'Date', accessor: 'date' },
    { header: 'Total', accessor: 'total', render: (total) => `$${total}` },
    { header: 'Paid', accessor: 'paid', render: (paid) => `$${paid}` },
    { 
      header: 'Status', 
      accessor: 'status',
      render: (status) => <Badge variant={getPaymentVariant(status)} pill>{status}</Badge>
    },
    { 
      header: 'Actions', 
      accessor: 'id',
      render: () => (
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button size="sm" variant="outline-primary" icon={<FiEye />}>View</Button>
          <Button size="sm" variant="primary" icon={<FiDownload />}>Download</Button>
        </div>
      )
    },
  ];

  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="page-title">Billing Management</h1>
        <p className="page-subtitle">Manage invoices and payments</p>
      </div>
      <Table columns={columns} data={bills} searchable pagination itemsPerPage={10} />
    </div>
  );
};

export default Billing;
