// This utility creates stub pages with basic structure
import React from 'react';
import Card from '../../components/Card';
import Button from '../../components/Button';

export const createStubPage = (title, subtitle, icon) => {
  return () => (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="page-title">{title}</h1>
        <p className="page-subtitle">{subtitle}</p>
      </div>
      <Card title={title} icon={icon}>
        <p>This page is under construction. Content will be added soon.</p>
        <div style={{ marginTop: '1rem' }}>
          <Button variant="primary">Take Action</Button>
        </div>
      </Card>
    </div>
  );
};
