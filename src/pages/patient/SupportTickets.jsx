import React, { useState } from 'react';
import { FiPlus, FiMessageSquare, FiClock, FiCheckCircle } from 'react-icons/fi';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Badge from '../../components/Badge';
import Modal from '../../components/Modal';
import Table from '../../components/Table';
import './SupportTickets.css';

const SupportTickets = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tickets] = useState([
    { id: 'T001', subject: 'Appointment booking issue', status: 'Open', priority: 'High', created: 'Jan 5, 2026' },
    { id: 'T002', subject: 'Unable to download prescription', status: 'In Progress', priority: 'Medium', created: 'Jan 3, 2026' },
    { id: 'T003', subject: 'Billing query', status: 'Resolved', priority: 'Low', created: 'Dec 28, 2025' },
  ]);

  const getPriorityVariant = (priority) => {
    const map = { 'High': 'danger', 'Medium': 'warning', 'Low': 'info' };
    return map[priority] || 'secondary';
  };

  const getStatusIcon = (status) => {
    const map = { 'Open': <FiMessageSquare />, 'In Progress': <FiClock />, 'Resolved': <FiCheckCircle /> };
    return map[status] || <FiMessageSquare />;
  };

  const columns = [
    { header: 'Ticket ID', accessor: 'id' },
    { header: 'Subject', accessor: 'subject' },
    { header: 'Priority', accessor: 'priority', render: (p) => <Badge variant={getPriorityVariant(p)} pill>{p}</Badge> },
    { header: 'Status', accessor: 'status', render: (s) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        {getStatusIcon(s)} {s}
      </div>
    )},
    { header: 'Created', accessor: 'created' },
    { 
      header: 'Actions', 
      accessor: 'id',
      render: () => (
        <Button size="sm" variant="outline-primary">View Details</Button>
      )
    },
  ];

  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="page-title">Support Tickets</h1>
          <p className="page-subtitle">Track your support requests and issues</p>
        </div>
        <Button variant="primary" icon={<FiPlus />} onClick={() => setIsModalOpen(true)}>Create Ticket</Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <Card title="Open Tickets" icon={<FiMessageSquare />}>
          <h2 style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: 700 }}>1</h2>
        </Card>
        <Card title="In Progress" icon={<FiClock />}>
          <h2 style={{ fontSize: '2rem', color: 'var(--warning)', fontWeight: 700 }}>1</h2>
        </Card>
        <Card title="Resolved" icon={<FiCheckCircle />}>
          <h2 style={{ fontSize: '2rem', color: 'var(--success)', fontWeight: 700 }}>1</h2>
        </Card>
      </div>

      <Table columns={columns} data={tickets} searchable pagination itemsPerPage={10} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create Support Ticket" size="lg">
        <form>
          <div style={{ display: 'grid', gap: '1rem' }}>
            <div>
              <label className="form-label">Subject</label>
              <input type="text" className="form-control" placeholder="Brief description of your issue" required />
            </div>
            <div>
              <label className="form-label">Category</label>
              <select className="form-control" required>
                <option>Technical Issue</option>
                <option>Billing</option>
                <option>Appointment</option>
                <option>Medical Records</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="form-label">Priority</label>
              <select className="form-control" required>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
            <div>
              <label className="form-label">Description</label>
              <textarea className="form-control" rows="4" placeholder="Please describe your issue in detail" required></textarea>
            </div>
          </div>
        </form>
        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
          <Button variant="outline-primary" onClick={() => setIsModalOpen(false)}>Cancel</Button>
          <Button variant="primary">Create Ticket</Button>
        </div>
      </Modal>
    </div>
  );
};

export default SupportTickets;
