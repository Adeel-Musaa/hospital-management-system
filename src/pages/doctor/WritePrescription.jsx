import React, { useState } from 'react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Alert from '../../components/Alert';
import { FiFileText, FiPlus, FiTrash2 } from 'react-icons/fi';

const WritePrescription = () => {
  const [success, setSuccess] = useState(false);
  const [medicines, setMedicines] = useState([{ name: '', dosage: '', frequency: '', duration: '' }]);

  const addMedicine = () => {
    setMedicines([...medicines, { name: '', dosage: '', frequency: '', duration: '' }]);
  };

  const removeMedicine = (index) => {
    setMedicines(medicines.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="page-title">Write Prescription</h1>
        <p className="page-subtitle">Create a new prescription for your patient</p>
      </div>

      {success && <Alert variant="success">Prescription created successfully!</Alert>}

      <Card title="Prescription Form" icon={<FiFileText />}>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <label className="form-label">Patient Name</label>
              <input type="text" className="form-control" required />
            </div>
            <div>
              <label className="form-label">Patient ID</label>
              <input type="text" className="form-control" required />
            </div>
            <div>
              <label className="form-label">Date</label>
              <input type="date" className="form-control" defaultValue={new Date().toISOString().split('T')[0]} required />
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label className="form-label">Diagnosis</label>
            <textarea className="form-control" rows="3" placeholder="Enter diagnosis" required></textarea>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h4>Medications</h4>
              <Button type="button" variant="primary" size="sm" icon={<FiPlus />} onClick={addMedicine}>Add Medicine</Button>
            </div>

            {medicines.map((med, index) => (
              <div key={index} style={{ padding: '1rem', background: 'var(--background)', borderRadius: 'var(--border-radius-sm)', marginBottom: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label className="form-label">Medicine Name</label>
                    <input type="text" className="form-control" placeholder="Name" required />
                  </div>
                  <div>
                    <label className="form-label">Dosage</label>
                    <input type="text" className="form-control" placeholder="e.g., 500mg" required />
                  </div>
                  <div>
                    <label className="form-label">Frequency</label>
                    <select className="form-control" required>
                      <option value="">Select</option>
                      <option>Once daily</option>
                      <option>Twice daily</option>
                      <option>Three times daily</option>
                      <option>As needed</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Duration</label>
                    <input type="text" className="form-control" placeholder="e.g., 7 days" required />
                  </div>
                  {medicines.length > 1 && (
                    <div style={{ alignSelf: 'flex-end' }}>
                      <Button type="button" variant="danger" size="sm" icon={<FiTrash2 />} onClick={() => removeMedicine(index)}>Remove</Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label className="form-label">Special Instructions</label>
            <textarea className="form-control" rows="3" placeholder="Any special instructions or notes"></textarea>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button type="submit" variant="primary">Create Prescription</Button>
            <Button type="button" variant="outline-primary">Save as Draft</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default WritePrescription;
