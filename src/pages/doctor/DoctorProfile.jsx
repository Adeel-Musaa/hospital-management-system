import React, { useState } from 'react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Alert from '../../components/Alert';
import { FiUser } from 'react-icons/fi';

const DoctorProfile = () => {
  const [editing, setEditing] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSuccess(true);
    setEditing(false);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="page-title">My Profile</h1>
            <p className="page-subtitle">Manage your professional information</p>
          </div>
          {!editing && <Button variant="primary" onClick={() => setEditing(true)}>Edit Profile</Button>}
        </div>
      </div>

      {success && <Alert variant="success" dismissible onClose={() => setSuccess(false)}>Profile updated successfully!</Alert>}

      <Card title="Professional Information" icon={<FiUser />}>
        <form onSubmit={handleSave}>
          <div style={{ display: 'grid', gap: '1rem' }}>
            <div>
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" defaultValue="Dr. Sarah Johnson" disabled={!editing} />
            </div>
            <div>
              <label className="form-label">Specialization</label>
              <input type="text" className="form-control" defaultValue="Cardiology" disabled={!editing} />
            </div>
            <div>
              <label className="form-label">Qualification</label>
              <input type="text" className="form-control" defaultValue="MBBS, MD, DM (Cardiology)" disabled={!editing} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label className="form-label">Experience (years)</label>
                <input type="number" className="form-control" defaultValue="15" disabled={!editing} />
              </div>
              <div>
                <label className="form-label">Consultation Fee</label>
                <input type="number" className="form-control" defaultValue="800" disabled={!editing} />
              </div>
            </div>
            <div>
              <label className="form-label">About</label>
              <textarea className="form-control" rows="4" defaultValue="Specialized in interventional cardiology with extensive experience in complex cardiac procedures." disabled={!editing}></textarea>
            </div>
          </div>
          {editing && (
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
              <Button type="submit" variant="primary">Save Changes</Button>
              <Button variant="outline-primary" onClick={() => setEditing(false)}>Cancel</Button>
            </div>
          )}
        </form>
      </Card>
    </div>
  );
};

export default DoctorProfile;
