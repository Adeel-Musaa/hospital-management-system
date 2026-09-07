import React from 'react';
import './About.css';
import Card from '../../components/Card';
import { FiAward, FiUsers, FiHeart, FiTarget } from 'react-icons/fi';

const About = () => {
  const values = [
    { icon: <FiHeart />, title: 'Patient-Centered Care', desc: 'We put patients at the heart of everything we do' },
    { icon: <FiAward />, title: 'Excellence', desc: 'Committed to delivering the highest quality healthcare' },
    { icon: <FiUsers />, title: 'Teamwork', desc: 'Collaborative approach for comprehensive care' },
    { icon: <FiTarget />, title: 'Innovation', desc: 'Embracing modern technology and medical advances' },
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">About HealthCare+</h1>
          <p className="page-subtitle">Leading the way in healthcare excellence for over 15 years</p>
        </div>
      </section>

      <div className="container about-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            At HealthCare+, our mission is to provide accessible, high-quality healthcare services to our community.
            We are dedicated to improving the health and well-being of all our patients through compassionate care,
            advanced medical technology, and a commitment to excellence.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <Card key={index} hoverable className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="about-section">
          <h2>Why Choose Us</h2>
          <ul className="features-list">
            <li>State-of-the-art medical facilities and equipment</li>
            <li>Experienced and highly qualified medical professionals</li>
            <li>24/7 emergency and critical care services</li>
            <li>Comprehensive range of medical specialties</li>
            <li>Patient-focused approach to healthcare delivery</li>
            <li>Commitment to continuous improvement and innovation</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
