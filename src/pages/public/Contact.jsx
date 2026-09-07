import React, { useState } from 'react';
import '../public/About.css';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Alert from '../../components/Alert';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <div className="contact-page">
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">We're here to help and answer any questions you might have</p>
        </div>
      </section>

      <div className="container" style={{ padding: '4rem 0' }}>
        <div className="row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <Card title="Get in Touch">
            {success && <Alert variant="success">Your message has been sent successfully!</Alert>}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label className="form-label">Name</label>
                <input type="text" className="form-control" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
              </div>
              <div>
                <label className="form-label">Email</label>
                <input type="email" className="form-control" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
              </div>
              <div>
                <label className="form-label">Subject</label>
                <input type="text" className="form-control" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} required />
              </div>
              <div>
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="5" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required></textarea>
              </div>
              <Button type="submit" variant="primary">Send Message</Button>
            </form>
          </Card>

          <div>
            <Card title="Contact Information" className="mb-3">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <FiMapPin style={{ fontSize: '1.5rem', color: 'var(--primary)', marginTop: '0.25rem' }} />
                  <div>
                    <strong>Address</strong>
                    <p style={{ margin: '0.25rem 0 0 0', color: 'var(--dark-gray)' }}>Lahore</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <FiPhone style={{ fontSize: '1.5rem', color: 'var(--primary)', marginTop: '0.25rem' }} />
                  <div>
                    <strong>Phone</strong>
                    <p style={{ margin: '0.25rem 0 0 0', color: 'var(--dark-gray)' }}>03114130033</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <FiMail style={{ fontSize: '1.5rem', color: 'var(--primary)', marginTop: '0.25rem' }} />
                  <div>
                    <strong>Email</strong>
                    <p style={{ margin: '0.25rem 0 0 0', color: 'var(--dark-gray)' }}>adeelmusa44@gmail.com</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <FiClock style={{ fontSize: '1.5rem', color: 'var(--primary)', marginTop: '0.25rem' }} />
                  <div>
                    <strong>Working Hours</strong>
                    <p style={{ margin: '0.25rem 0 0 0', color: 'var(--dark-gray)' }}>Mon-Fri: 8:00 AM - 8:00 PM<br />Sat-Sun: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card title="Emergency Services">
              <p style={{ marginBottom: '1rem' }}>For medical emergencies, please call:</p>
              <h2 style={{ color: 'var(--danger)', fontSize: '2rem', fontWeight: '700' }}>911</h2>
              <p style={{ marginTop: '1rem', color: 'var(--dark-gray)' }}>24/7 Emergency Department</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
