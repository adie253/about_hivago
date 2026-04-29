import React from 'react';

const Comparison: React.FC = () => {
  const comparisonData = [
    {
      feature: 'Cost to You',
      typical: '24%-30% Commission',
      hivago: '0% Commission',
    },
    {
      feature: 'Customer Data',
      typical: 'Hidden from you',
      hivago: 'Yours to keep',
    },
    {
      feature: 'Settlement',
      typical: 'Weekly / Delayed',
      hivago: 'T+1 (Next Day)',
    },
    {
      feature: 'Loyalty Logic',
      typical: 'Mercenary (Discount driven)',
      hivago: 'Loyal to your food',
    },
    {
      feature: 'Control',
      typical: 'Pay to Play',
      hivago: 'Merit-Based',
    },
    {
      feature: 'Result',
      typical: 'You work for the platform',
      hivago: 'The platform works for you',
    },
  ];

  return (
    <section className="section-padding bg-bg-primary" id="comparison">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-main)', fontSize: '3rem' }}>
            Don't Let Commissions Eat Your Margins
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            The old model was built for their growth. HIVAGO is built for yours.
          </p>
        </div>

        <div className="table-container mx-auto">
          <div className="comparison-table">
            {/* Header Row */}
            <div className="table-header">
              <div className="th-empty">COMPARISON</div>
              <div className="th-col th-typical">Typical Food Apps</div>
              <div className="th-col th-hivago">HIVAGO</div>
            </div>

            {/* Data Rows */}
            {comparisonData.map((row, index) => (
              <div key={index} className={`table-row ${index % 2 === 0 ? 'row-even' : 'row-odd'}`}>
                <div className="td-feature">{row.feature}</div>
                <div className="td-typical">{row.typical}</div>
                <div className="td-hivago">{row.hivago}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .max-w-2xl { max-width: 42rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        
        .table-container {
          max-width: 1000px;
          margin-top: 3rem;
          background: white;
          border-radius: 1rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
          overflow: hidden;
        }

        .comparison-table {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .table-header {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          border-bottom: 1px solid var(--border-color);
        }

        .th-empty {
          background-color: #ffffff;
          padding: 1.5rem;
          color: #94a3b8;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
        }

        .th-col {
          background-color: var(--brand-red);
          color: white;
          padding: 1.5rem;
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 700;
          display: flex;
          align-items: center;
        }

        /* The right side headers should match the red block */
        .th-typical {
          border-right: 1px solid rgba(255,255,255,0.2);
        }

        .table-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        }

        .row-even {
          background-color: #ffffff;
        }

        .row-odd {
          background-color: #fffafa; /* Faint red/pink */
        }

        .td-feature {
          padding: 1.5rem;
          font-family: var(--font-serif);
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--text-main);
          border-right: 1px solid var(--border-color);
          background-color: #ffffff; 
        }

        .td-typical {
          padding: 1.5rem;
          color: #ef4444; /* Light red */
          font-weight: 500;
          font-size: 1rem;
          border-right: 1px solid var(--border-color);
          display: flex;
          align-items: center;
        }

        .td-hivago {
          padding: 1.5rem;
          color: #b91c1c; /* Darker red */
          font-weight: 700;
          font-size: 1rem;
          display: flex;
          align-items: center;
        }

        @media (max-width: 768px) {
          .table-header, .table-row {
            grid-template-columns: 1fr;
          }
          
          .th-empty {
            display: none;
          }

          .th-col {
            padding: 1rem;
            justify-content: center;
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.2);
          }

          .table-row {
            display: flex;
            flex-direction: column;
            border-bottom: 2px solid var(--border-color);
          }

          .td-feature {
            background-color: #f1f5f9;
            text-align: center;
            border-right: none;
            border-bottom: 1px solid var(--border-color);
          }

          .td-typical, .td-hivago {
            justify-content: center;
            text-align: center;
            border-right: none;
            border-bottom: 1px solid var(--border-color);
          }
          
          .td-typical::before {
            content: "Typical: ";
            color: #94a3b8;
            margin-right: 0.5rem;
            font-weight: 400;
          }
          
          .td-hivago::before {
            content: "HIVAGO: ";
            color: #94a3b8;
            margin-right: 0.5rem;
            font-weight: 400;
          }
        }
      `}</style>
    </section>
  );
};

export default Comparison;
