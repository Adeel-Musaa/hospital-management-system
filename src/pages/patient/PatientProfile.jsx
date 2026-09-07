import React, { useState } from 'react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Alert from '../../components/Alert';
import { FiUser, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const PatientProfile = () => {
  const [editing, setEditing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+1-234-567-8900',
    dob: '1981-05-15',
    gender: 'Male',
    bloodGroup: 'O+',
    address: '123 Main St',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
  });

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
            <p className="page-subtitle">Manage your personal information</p>
          </div>
          {!editing && (
            <Button variant="primary" onClick={() => setEditing(true)}>Edit Profile</Button>
          )}
        </div>
      </div>

      {success && <Alert variant="success" dismissible onClose={() => setSuccess(false)}>Profile updated successfully!</Alert>}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
        <Card title="Personal Information" icon={<FiUser />}>
          <form onSubmit={handleSave}>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <div>
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" value={profile.name} onChange={(e) => setProfile({...profile, name: e.target.value})} disabled={!editing} />
              </div>
              <div>
                <label className="form-label">Email</label>
                <input type="email" className="form-control" value={profile.email} onChange={(e) => setProfile({...profile, email: e.target.value})} disabled={!editing} />
              </div>
              <div>
                <label className="form-label">Phone</label>
                <input type="tel" className="form-control" value={profile.phone} onChange={(e) => setProfile({...profile, phone: e.target.value})} disabled={!editing} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label className="form-label">Date of Birth</label>
                  <input type="date" className="form-control" value={profile.dob} onChange={(e) => setProfile({...profile, dob: e.target.value})} disabled={!editing} />
                </div>
                <div>
                  <label className="form-label">Gender</label>
                  <select className="form-control" value={profile.gender} onChange={(e) => setProfile({...profile, gender: e.target.value})} disabled={!editing}>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="form-label">Blood Group</label>
                <select className="form-control" value={profile.bloodGroup} onChange={(e) => setProfile({...profile, bloodGroup: e.target.value})} disabled={!editing}>
                  <option>O+</option>
                  <option>O-</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                </select>
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

        <Card title="Address Information" icon={<FiMapPin />}>
          <form onSubmit={handleSave}>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <div>
                <label className="form-label">Street Address</label>
                <input type="text" className="form-control" value={profile.address} onChange={(e) => setProfile({...profile, address: e.target.value})} disabled={!editing} />
              </div>
              <div>
                <label className="form-label">City</label>
                <input type="text" className="form-control" value={profile.city} onChange={(e) => setProfile({...profile, city: e.target.value})} disabled={!editing} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label className="form-label">State</label>
                  <input type="text" className="form-control" value={profile.state} onChange={(e) => setProfile({...profile, state: e.target.value})} disabled={!editing} />
                </div>
                <div>
                  <label className="form-label">ZIP Code</label>
                  <input type="text" className="form-control" value={profile.zipCode} onChange={(e) => setProfile({...profile, zipCode: e.target.value})} disabled={!editing} />
                </div>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default PatientProfile;
