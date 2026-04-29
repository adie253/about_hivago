import React from 'react';
import { Check, X } from 'lucide-react';

const PlatformComparison: React.FC = () => {
  const features = [
    'Commissions per order',
    'You own pricing',
    'You own customer data',
    'Payment settlements',
    'Transparent commercials',
    'No long-term contracts'
  ];

  return (
    <section className="section-padding bg-bg-secondary">
      <div className="container">
        <h2 className="heading-lg text-center mb-12" style={{ fontSize: '2.25rem' }}>
          HIVAGO vs Traditional Platforms
        </h2>
        
        <div className="table-card mx-auto max-w-4xl">
          <table className="comparison-simple-table">
            <thead>
              <tr>
                <th className="text-left">Feature</th>
                <th className="text-center text-brand-red">HIVAGO</th>
                <th className="text-center text-brand-red">Traditional Apps</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'row-even' : 'row-odd'}>
                  <td className="text-left font-medium text-main">{feature}</td>
                  <td className="text-center">
                    <Check size={20} className="mx-auto" style={{ color: 'var(--brand-red)' }} />
                  </td>
                  <td className="text-center">
                    <X size={20} className="mx-auto" style={{ color: 'var(--brand-red)' }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        .table-card {
          background-color: white;
          border-radius: 1rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.02);
          overflow: hidden;
        }

        .comparison-simple-table {
          width: 100%;
          border-collapse: collapse;
        }

        .comparison-simple-table th {
          padding: 1.5rem;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 700;
          border-bottom: 1px solid var(--border-color);
          background-color: #f8fafc;
        }

        .comparison-simple-table td {
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid var(--border-color);
        }

        .comparison-simple-table tr:last-child td {
          border-bottom: none;
        }

        .row-even { background-color: #ffffff; }
        .row-odd { background-color: #fafafa; }

        .text-brand-red { color: var(--brand-red); }
        .text-main { color: var(--text-main); }
        .font-medium { font-weight: 500; }
        
        .max-w-4xl { max-width: 56rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }

        @media (max-width: 600px) {
          .table-card {
            overflow-x: auto;
          }
          .comparison-simple-table {
            min-width: 500px;
          }
          .comparison-simple-table th, .comparison-simple-table td {
            padding: 1rem;
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
};

export default PlatformComparison;
