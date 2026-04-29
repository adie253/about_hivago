import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const typicalData = [
  { name: 'Commission', value: 300, color: '#ef4444' },
  { name: 'Ads/Promo', value: 100, color: '#f97316' },
  { name: 'Your Earning', value: 600, color: '#10b981' },
];

const hivagoData = [
  { name: 'Fees & Charges', value: 50, color: '#e2e8f0' },
  { name: 'Your Earning', value: 950, color: '#10b981' },
];

// Helper to render the label outside the pie slice
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 20;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="#4b5563" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" fontSize="12" fontWeight="600">
      ₹{value}
    </text>
  );
};

const ResultChart: React.FC = () => {
  return (
    <section className="section-padding bg-bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-main)', fontSize: '2.5rem' }}>
            The Result: Make 30% more on every single order
          </h2>
          <p className="text-lg text-muted">
            On a typical ₹1,000 order
          </p>
        </div>

        <div className="chart-card mx-auto">
          <div className="charts-container">
            {/* Typical App Chart */}
            <div className="chart-section">
              <h3 className="chart-title">Typical App</h3>
              
              <div className="donut-wrapper">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={typicalData}
                      cx="50%"
                      cy="50%"
                      innerRadius={65}
                      outerRadius={85}
                      paddingAngle={2}
                      dataKey="value"
                      startAngle={90}
                      endAngle={-270}
                      label={renderCustomizedLabel}
                      labelLine={false}
                      stroke="none"
                    >
                      {typicalData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="donut-inner">
                  <span className="donut-label">YOU KEEP</span>
                  <span className="donut-value">₹600</span>
                </div>
              </div>

              <div className="chart-legend">
                {typicalData.map((item, idx) => (
                  <div className="legend-item" key={idx}>
                    <div className="legend-label">
                      <span className="dot" style={{ backgroundColor: item.color }}></span>
                      {item.name}
                    </div>
                    <div className="legend-value">₹{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="chart-divider"></div>

            {/* HIVAGO Chart */}
            <div className="chart-section">
              <h3 className="chart-title">HIVAGO</h3>
              
              <div className="donut-wrapper">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={hivagoData}
                      cx="50%"
                      cy="50%"
                      innerRadius={65}
                      outerRadius={85}
                      paddingAngle={2}
                      dataKey="value"
                      startAngle={90}
                      endAngle={-270}
                      label={renderCustomizedLabel}
                      labelLine={false}
                      stroke="none"
                    >
                      {hivagoData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="donut-inner">
                  <span className="donut-label">YOU KEEP</span>
                  <span className="donut-value">₹950+</span>
                </div>
              </div>

              <div className="chart-legend">
                {hivagoData.map((item, idx) => (
                  <div className="legend-item" key={idx}>
                    <div className="legend-label">
                      <span className="dot" style={{ backgroundColor: item.color }}></span>
                      {item.name}
                    </div>
                    <div className="legend-value">₹{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="chart-footer">
            <div className="badge-pill-green">
              Make 30% more on every single order
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .mx-auto { margin-left: auto; margin-right: auto; }
        
        .chart-card {
          max-width: 900px;
          background: white;
          border-radius: 1.5rem;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01);
          padding: 3rem 2rem;
        }

        .charts-container {
          display: flex;
          align-items: stretch;
          justify-content: space-between;
        }

        .chart-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 2rem;
        }

        .chart-divider {
          width: 1px;
          background-color: var(--border-color);
          margin: 0 1rem;
        }

        .chart-title {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--text-main);
        }

        .donut-wrapper {
          position: relative;
          width: 250px;
          height: 250px;
          margin-bottom: 2rem;
        }

        .donut-inner {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        .donut-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-light);
          letter-spacing: 0.05em;
          margin-bottom: 0.25rem;
        }

        .donut-value {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-main);
        }

        /* Legends */
        .chart-legend {
          width: 100%;
          max-width: 250px;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .legend-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.875rem;
        }

        .legend-label {
          display: flex;
          align-items: center;
          color: var(--text-muted);
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-right: 0.75rem;
        }

        .legend-value {
          font-weight: 600;
          color: var(--text-main);
        }

        /* Footer badge */
        .chart-footer {
          margin-top: 3rem;
          padding-top: 2.5rem;
          text-align: center;
        }

        .badge-pill-green {
          display: inline-block;
          background-color: #ecfdf5;
          color: #059669;
          padding: 0.75rem 2rem;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 1rem;
          border: 1px solid #d1fae5;
        }

        @media (max-width: 768px) {
          .charts-container {
            flex-direction: column;
          }

          .chart-divider {
            width: 100%;
            height: 1px;
            margin: 3rem 0;
          }

          .chart-section {
            padding: 0;
          }
          
          .chart-card {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ResultChart;
