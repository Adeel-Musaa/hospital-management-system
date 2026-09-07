import React, { useState } from 'react';
import { doctors } from '../../utils/dummyData';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Badge from '../../components/Badge';
import './ViewDoctors.css';
import { FiStar, FiMapPin, FiDollarSign, FiFilter } from 'react-icons/fi';

const ViewDoctors = () => {
  const [filters, setFilters] = useState({ specialization: '', city: '', fee: '' });
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  const specializations = [...new Set(doctors.map(d => d.specialization))];
  const cities = [...new Set(doctors.map(d => d.city))];

  const applyFilters = () => {
    let filtered = doctors;
    if (filters.specialization) {
      filtered = filtered.filter(d => d.specialization === filters.specialization);
    }
    if (filters.city) {
      filtered = filtered.filter(d => d.city === filters.city);
    }
    if (filters.fee) {
      filtered = filtered.filter(d => d.fee <= parseInt(filters.fee));
    }
    setFilteredDoctors(filtered);
  };

  return (
    <div className="view-doctors-page">
      <div className="page-header">
        <h1 className="page-title">Find Doctors</h1>
        <p className="page-subtitle">Search and book appointments with our specialists</p>
      </div>

      <Card title="Filter Doctors" icon={<FiFilter />} className="mb-4">
        <div className="filter-grid">
          <div className="form-group">
            <label className="form-label">Specialization</label>
            <select className="form-control" value={filters.specialization} onChange={(e) => setFilters({...filters, specialization: e.target.value})}>
              <option value="">All Specializations</option>
              {specializations.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">City</label>
            <select className="form-control" value={filters.city} onChange={(e) => setFilters({...filters, city: e.target.value})}>
              <option value="">All Cities</option>
              {cities.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Max Fee</label>
            <input type="number" className="form-control" placeholder="Enter max fee" value={filters.fee} onChange={(e) => setFilters({...filters, fee: e.target.value})} />
          </div>
          <div className="form-group" style={{ alignSelf: 'flex-end' }}>
            <Button variant="primary" onClick={applyFilters}>Apply Filters</Button>
          </div>
        </div>
      </Card>

      <div className="doctors-grid">
        {filteredDoctors.map(doctor => (
          <Card key={doctor.id} hoverable className="doctor-card">
            <div className="doctor-header">
              <img src={doctor.image} alt={doctor.name} className="doctor-avatar" />
              {doctor.available ? (
                <Badge variant="success" pill>Available</Badge>
              ) : (
                <Badge variant="danger" pill>Busy</Badge>
              )}
            </div>
            <h3 className="doctor-name">{doctor.name}</h3>
            <p className="doctor-specialty">{doctor.specialization}</p>
            <p className="doctor-qualification">{doctor.qualification}</p>
            <div className="doctor-info">
              <div><FiStar style={{ color: 'var(--warning)' }} /> {doctor.rating} ({doctor.reviews} reviews)</div>
              <div><FiMapPin /> {doctor.city}</div>
              <div><FiDollarSign /> ${doctor.fee}</div>
            </div>
            <p className="doctor-experience">{doctor.experience} years experience</p>
            <Button variant="primary" fullWidth>Book Appointment</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ViewDoctors;
