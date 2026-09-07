import React from 'react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { FiSettings, FiBell, FiLock, FiDatabase } from 'react-icons/fi';

const AdminSettings = () => {
  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="page-title">System Settings</h1>
        <p className="page-subtitle">Configure hospital management system</p>
      </div>

      <div style={{ display: 'grid', gap: '1.5rem' }}>
        <Card title="General Settings" icon={<FiSettings />}>
          <form style={{ display: 'grid', gap: '1rem' }}>
            <div>
              <label className="form-label">Hospital Name</label>
              <input type="text" className="form-control" defaultValue="HealthCare+" />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label className="form-label">Contact Email</label>
                <input type="email" className="form-control" defaultValue="adeelmusa44@gmail.com" />
              </div>
              <div>
                <label className="form-label">Contact Phone</label>
                <input type="tel" className="form-control" defaultValue="03114130033" />
              </div>
            </div>
            <div>
              <label className="form-label">Address</label>
              <textarea className="form-control" rows="2" defaultValue="Lahore"></textarea>
            </div>
            <Button variant="primary">Save Changes</Button>
          </form>
        </Card>

        <Card title="Notification Settings" icon={<FiBell />}>
          <div style={{ display: 'grid', gap: '1rem' }}>
            <label className="checkbox-label" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <input type="checkbox" defaultChecked />
              <span>Email notifications for new appointments</span>
            </label>
            <label className="checkbox-label" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <input type="checkbox" defaultChecked />
              <span>SMS alerts for emergency cases</span>
            </label>
            <label className="checkbox-label" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <input type="checkbox" />
              <span>Daily summary reports</span>
            </label>
            <label className="checkbox-label" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <input type="checkbox" defaultChecked />
              <span>Low stock alerts for pharmacy</span>
            </label>
            <Button variant="primary">Save Preferences</Button>
          </div>
        </Card>

        <Card title="Security Settings" icon={<FiLock />}>
          <form style={{ display: 'grid', gap: '1rem' }}>
            <div>
              <label className="form-label">Session Timeout (minutes)</label>
              <input type="number" className="form-control" defaultValue="30" />
            </div>
            <label className="checkbox-label" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <input type="checkbox" defaultChecked />
              <span>Require two-factor authentication</span>
            </label>
            <label className="checkbox-label" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <input type="checkbox" defaultChecked />
              <span>Enable login activity logs</span>
            </label>
            <Button variant="primary">Update Security</Button>
          </form>
        </Card>

        <Card title="Database Maintenance" icon={<FiDatabase />}>
          <div style={{ display: 'grid', gap: '1rem' }}>
            <p style={{ color: 'var(--dark-gray)' }}>Last backup: January 7, 2026 at 2:00 AM</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Button variant="primary">Backup Now</Button>
              <Button variant="outline-primary">Restore Backup</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminSettings;
