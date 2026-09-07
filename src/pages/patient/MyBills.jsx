import React from 'react';
import { bills } from '../../utils/dummyData';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Badge from '../../components/Badge';
import { FiDollarSign, FiDownload, FiCreditCard } from 'react-icons/fi';

const MyBills = () => {
  const getPaymentVariant = (status) => {
    const map = { 'Paid': 'success', 'Pending': 'warning', 'Partial': 'info', 'Overdue': 'danger' };
    return map[status] || 'secondary';
  };

  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="page-title">Bills & Payments</h1>
        <p className="page-subtitle">Manage your medical bills and payments</p>
      </div>

      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {bills.map(bill => (
          <Card key={bill.id} title={`Invoice: ${bill.invoiceNo}`} icon={<FiDollarSign />} headerAction={
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {bill.status !== 'Paid' && <Button size="sm" variant="primary" icon={<FiCreditCard />}>Pay Now</Button>}
              <Button size="sm" variant="outline-primary" icon={<FiDownload />}>Download</Button>
            </div>
          }>
            <div style={{ marginBottom: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div>
                <p style={{ fontSize: '0.875rem', color: 'var(--dark-gray)' }}>Date</p>
                <p style={{ fontWeight: '600' }}>{bill.date}</p>
              </div>
              <div>
                <p style={{ fontSize: '0.875rem', color: 'var(--dark-gray)' }}>Total Amount</p>
                <p style={{ fontWeight: '600', fontSize: '1.25rem', color: 'var(--primary)' }}>${bill.total}</p>
              </div>
              <div>
                <p style={{ fontSize: '0.875rem', color: 'var(--dark-gray)' }}>Amount Paid</p>
                <p style={{ fontWeight: '600', fontSize: '1.25rem', color: 'var(--success)' }}>${bill.paid}</p>
              </div>
              <div>
                <p style={{ fontSize: '0.875rem', color: 'var(--dark-gray)' }}>Status</p>
                <Badge variant={getPaymentVariant(bill.status)} pill>{bill.status}</Badge>
              </div>
            </div>

            <h4 style={{ marginBottom: '1rem' }}>Bill Details:</h4>
            <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'var(--background)', borderBottom: '2px solid var(--light-gray)' }}>
                    <th style={{ padding: '0.75rem', textAlign: 'left' }}>Description</th>
                    <th style={{ padding: '0.75rem', textAlign: 'center' }}>Qty</th>
                    <th style={{ padding: '0.75rem', textAlign: 'right' }}>Rate</th>
                    <th style={{ padding: '0.75rem', textAlign: 'right' }}>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {bill.items.map((item, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--light-gray)' }}>
                      <td style={{ padding: '0.75rem' }}>{item.description}</td>
                      <td style={{ padding: '0.75rem', textAlign: 'center' }}>{item.quantity}</td>
                      <td style={{ padding: '0.75rem', textAlign: 'right' }}>${item.rate}</td>
                      <td style={{ padding: '0.75rem', textAlign: 'right', fontWeight: '600' }}>${item.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem', padding: '1rem', background: 'var(--background)', borderRadius: 'var(--border-radius-sm)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '250px' }}>
                <span>Subtotal:</span>
                <strong>${bill.subtotal}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '250px' }}>
                <span>Tax:</span>
                <strong>${bill.tax}</strong>
              </div>
              {bill.discount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '250px', color: 'var(--success)' }}>
                  <span>Discount:</span>
                  <strong>-${bill.discount}</strong>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '250px', fontSize: '1.25rem', paddingTop: '0.5rem', borderTop: '2px solid var(--light-gray)' }}>
                <span>Total:</span>
                <strong style={{ color: 'var(--primary)' }}>${bill.total}</strong>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyBills;
