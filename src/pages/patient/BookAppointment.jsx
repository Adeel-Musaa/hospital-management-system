import React, { useState } from 'react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { FiCalendar } from 'react-icons/fi';
import { FaUserMd } from 'react-icons/fa';
import { DEPARTMENTS, TIME_SLOTS } from '../../utils/constants';
import { doctors } from '../../utils/dummyData';
import Alert from '../../components/Alert';

const BookAppointment = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    department: '',
    doctor: '',
    date: '',
    time: '',
    reason: ''
  });
  const [success, setSuccess] = useState(false);

  const filteredDoctors = formData.department 
    ? doctors.filter(d => d.specialization === formData.department)
    : doctors;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setStep(1);
      setFormData({ department: '', doctor: '', date: '', time: '', reason: '' });
    }, 3000);
  };

  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="page-title">Book Appointment</h1>
        <p className="page-subtitle">Schedule a consultation with our specialists</p>
      </div>

      {success && (
        <Alert variant="success">
          Appointment booked successfully! You will receive a confirmation email shortly.
        </Alert>
      )}

      <Card title={`Step ${step} of 3`}>
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div>
              <h3 style={{ marginBottom: '1.5rem' }}>Select Department & Doctor</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label className="form-label">Department</label>
                  <select className="form-control" value={formData.department} onChange={(e) => setFormData({...formData, department: e.target.value})} required>
                    <option value="">Select Department</option>
                    {DEPARTMENTS.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
                  </select>
                </div>
                {formData.department && (
                  <div>
                    <label className="form-label">Doctor</label>
                    <select className="form-control" value={formData.doctor} onChange={(e) => setFormData({...formData, doctor: e.target.value})} required>
                      <option value="">Select Doctor</option>
                      {filteredDoctors.map(d => <option key={d.id} value={d.name}>{d.name} - ${d.fee}</option>)}
                    </select>
                  </div>
                )}
              </div>
              <div style={{ marginTop: '2rem' }}>
                <Button variant="primary" onClick={() => setStep(2)} disabled={!formData.doctor}>Next</Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 style={{ marginBottom: '1.5rem' }}>Select Date & Time</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label className="form-label">Appointment Date</label>
                  <input type="date" className="form-control" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} min={new Date().toISOString().split('T')[0]} required />
                </div>
                <div>
                  <label className="form-label">Preferred Time</label>
                  <select className="form-control" value={formData.time} onChange={(e) => setFormData({...formData, time: e.target.value})} required>
                    <option value="">Select Time</option>
                    {TIME_SLOTS.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                <Button variant="outline-primary" onClick={() => setStep(1)}>Back</Button>
                <Button variant="primary" onClick={() => setStep(3)} disabled={!formData.date || !formData.time}>Next</Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 style={{ marginBottom: '1.5rem' }}>Confirm Details</h3>
              <div style={{ background: 'var(--background)', padding: '1.5rem', borderRadius: 'var(--border-radius-sm)', marginBottom: '1rem' }}>
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                  <p><strong>Department:</strong> {formData.department}</p>
                  <p><strong>Doctor:</strong> {formData.doctor}</p>
                  <p><strong>Date:</strong> {formData.date}</p>
                  <p><strong>Time:</strong> {formData.time}</p>
                </div>
              </div>
              <div>
                <label className="form-label">Reason for Visit (Optional)</label>
                <textarea className="form-control" rows="4" value={formData.reason} onChange={(e) => setFormData({...formData, reason: e.target.value})} placeholder="Briefly describe your symptoms or reason for visit"></textarea>
              </div>
              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                <Button variant="outline-primary" onClick={() => setStep(2)}>Back</Button>
                <Button type="submit" variant="primary">Confirm Booking</Button>
              </div>
            </div>
          )}
        </form>
      </Card>
    </div>
  );
};

export default BookAppointment;
