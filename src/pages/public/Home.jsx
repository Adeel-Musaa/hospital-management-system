import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { FiCalendar, FiAward, FiUsers, FiClock } from 'react-icons/fi';
import { FaUserMd, FaHospital, FaAmbulance } from 'react-icons/fa';
import { doctors } from '../../utils/dummyData';
import Button from '../../components/Button';
import Card from '../../components/Card';

const Home = () => {
  const features = [
    {
      icon: <FaUserMd />,
      title: 'Expert Doctors',
      description: 'Highly qualified and experienced medical professionals'
    },
    {
      icon: <FaHospital />,
      title: 'Modern Facilities',
      description: 'State-of-the-art equipment and infrastructure'
    },
    {
      icon: <FaAmbulance />,
      title: '24/7 Emergency',
      description: 'Round-the-clock emergency and critical care services'
    },
    {
      icon: <FiAward />,
      title: 'Quality Care',
      description: 'Patient-focused care with proven outcomes'
    }
  ];

  const stats = [
    { icon: <FiUsers />, value: '50K+', label: 'Happy Patients' },
    { icon: <FaUserMd />, value: '200+', label: 'Expert Doctors' },
    { icon: <FiAward />, value: '15+', label: 'Years Experience' },
    { icon: <FiClock />, value: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Your Health, <span className="text-primary">Our Priority</span>
              </h1>
              <p className="hero-subtitle">
                Experience world-class healthcare with compassion and excellence. 
                Book your appointment with top specialists today.
              </p>
              <div className="hero-actions">
                <Link to="/register">
                  <Button variant="primary" size="lg" icon={<FiCalendar />}>
                    Book Appointment
                  </Button>
                </Link>
                <Link to="/departments">
                  <Button variant="outline-primary" size="lg">
                    View Departments
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-card floating">
                <FiCalendar className="card-icon" />
                <div>
                  <h4>24/7 Support</h4>
                  <p>Emergency services available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">
              We provide exceptional healthcare services with patient satisfaction at the core
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <Card key={index} hoverable className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Doctors */}
      <section className="doctors-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Meet Our Specialists</h2>
            <p className="section-subtitle">
              Experienced and dedicated healthcare professionals
            </p>
          </div>
          <div className="doctors-grid">
            {doctors.slice(0, 3).map((doctor) => (
              <Card key={doctor.id} hoverable className="doctor-card">
                <div className="doctor-image">
                  <img src={doctor.image} alt={doctor.name} />
                </div>
                <h4 className="doctor-name">{doctor.name}</h4>
                <p className="doctor-specialty">{doctor.specialization}</p>
                <p className="doctor-experience">{doctor.experience} years experience</p>
                <div className="doctor-rating">
                  ⭐ {doctor.rating} ({doctor.reviews} reviews)
                </div>
                <Link to="/register">
                  <Button variant="primary" fullWidth>Book Appointment</Button>
                </Link>
              </Card>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/register">
              <Button variant="outline-primary" size="lg">View All Doctors</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-subtitle">
              Join thousands of satisfied patients who trust us with their health
            </p>
            <Link to="/register">
              <Button variant="secondary" size="lg" icon={<FiCalendar />}>
                Book Your Appointment Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
