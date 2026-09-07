import React from 'react';
import '../public/About.css';
import Card from '../../components/Card';
import { DEPARTMENTS } from '../../utils/constants';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const Departments = () => {
  return (
    <div className="departments-page">
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">Our Departments</h1>
          <p className="page-subtitle">Comprehensive healthcare services across multiple specialties</p>
        </div>
      </section>

      <div className="container" style={{ padding: '4rem 0' }}>
        <div className="values-grid">
          {DEPARTMENTS.map((dept) => (
            <Card key={dept.id} hoverable className="value-card">
              <div className="value-icon" style={{ fontSize: '4rem' }}>{dept.icon}</div>
              <h3>{dept.name}</h3>
              <p>Expert care and treatment in {dept.name.toLowerCase()}</p>
              <Link to="/register">
                <Button variant="primary" size="sm">Book Appointment</Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Departments;
