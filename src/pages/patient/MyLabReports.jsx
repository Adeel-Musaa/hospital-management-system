import React from 'react';
import { labReports } from '../../utils/dummyData';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Badge from '../../components/Badge';
import { FaFlask } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

const MyLabReports = () => {
  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="page-title">Lab Reports</h1>
        <p className="page-subtitle">View your test results and reports</p>
      </div>

      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {labReports.map(report => (
          <Card key={report.id} title={report.testName} icon={<FaFlask />} headerAction={
            <Button size="sm" variant="primary" icon={<FiDownload />}>Download Report</Button>
          }>
            <div style={{ marginBottom: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div>
                <p style={{ fontSize: '0.875rem', color: 'var(--dark-gray)' }}>Test Date</p>
                <p style={{ fontWeight: '600' }}>{report.date}</p>
              </div>
              <div>
                <p style={{ fontSize: '0.875rem', color: 'var(--dark-gray)' }}>Ordered By</p>
                <p style={{ fontWeight: '600' }}>{report.orderedBy}</p>
              </div>
              <div>
                <p style={{ fontSize: '0.875rem', color: 'var(--dark-gray)' }}>Category</p>
                <p style={{ fontWeight: '600' }}>{report.category}</p>
              </div>
              <div>
                <p style={{ fontSize: '0.875rem', color: 'var(--dark-gray)' }}>Status</p>
                <Badge variant="success" pill>{report.status}</Badge>
              </div>
            </div>

            <h4 style={{ marginBottom: '1rem' }}>Test Results:</h4>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'var(--background)', borderBottom: '2px solid var(--light-gray)' }}>
                    <th style={{ padding: '0.75rem', textAlign: 'left' }}>Parameter</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left' }}>Value</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left' }}>Unit</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left' }}>Reference Range</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {report.results.map((result, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--light-gray)' }}>
                      <td style={{ padding: '0.75rem' }}>{result.parameter}</td>
                      <td style={{ padding: '0.75rem', fontWeight: '600' }}>{result.value}</td>
                      <td style={{ padding: '0.75rem' }}>{result.unit}</td>
                      <td style={{ padding: '0.75rem' }}>{result.range}</td>
                      <td style={{ padding: '0.75rem' }}>
                        <Badge variant={result.status === 'Normal' ? 'success' : 'warning'}>{result.status}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyLabReports;
