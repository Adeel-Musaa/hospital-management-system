import React from 'react';
import { prescriptions } from '../../utils/dummyData';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { FiFileText, FiDownload, FiPrinter } from 'react-icons/fi';

const MyPrescriptions = () => {
  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="page-title">My Prescriptions</h1>
        <p className="page-subtitle">View and download your prescriptions</p>
      </div>

      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {prescriptions.map(presc => (
          <Card key={presc.id} title={`Prescription - ${presc.date}`} icon={<FiFileText />} headerAction={
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Button size="sm" variant="outline-primary" icon={<FiDownload />}>Download</Button>
              <Button size="sm" variant="outline-primary" icon={<FiPrinter />}>Print</Button>
            </div>
          }>
            <div style={{ marginBottom: '1rem' }}>
              <p><strong>Doctor:</strong> {presc.doctorName}</p>
              <p><strong>Diagnosis:</strong> {presc.diagnosis}</p>
            </div>

            <h4 style={{ marginBottom: '1rem' }}>Medications:</h4>
            <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '1rem' }}>
              {presc.medicines.map((med, idx) => (
                <div key={idx} style={{ padding: '1rem', background: 'var(--background)', borderRadius: 'var(--border-radius-sm)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <strong>{med.name}</strong>
                    <span style={{ color: 'var(--primary)' }}>{med.dosage}</span>
                  </div>
                  <p style={{ margin: '0', fontSize: '0.9rem', color: 'var(--dark-gray)' }}>
                    <strong>Frequency:</strong> {med.frequency} | <strong>Duration:</strong> {med.duration}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ padding: '1rem', background: 'rgba(47, 128, 237, 0.05)', borderRadius: 'var(--border-radius-sm)', borderLeft: '3px solid var(--primary)' }}>
              <strong>Instructions:</strong>
              <p style={{ margin: '0.5rem 0 0 0' }}>{presc.instructions}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyPrescriptions;
