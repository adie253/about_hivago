import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="section-padding about-section-enhanced" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual">
            <div className="quote-mark">"</div>
            <h2 className="heading-xl quote-text">
              Fairness isn't a feature. <br/>
              <span className="text-brand-red">It's our foundation.</span>
            </h2>
          </div>
          <div className="about-content-box">
            <p className="text-xl leading-relaxed">
              We're rebuilding food delivery from the ground up. No predatory commissions. No hidden fees. Just direct connections between you and the local spots you love.
            </p>
            <div className="about-stats mt-8">
              <div className="stat-item">
                <span className="stat-value">0%</span>
                <span className="stat-label">Commissions</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">100%</span>
                <span className="stat-label">Transparency</span>
              </div>
            </div>
            <p className="text-muted mt-6">
              HIVAGO is more than an app—it's a community of restaurant owners, tech innovators, and food lovers committed to bringing fairness back to the ecosystem.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .about-section-enhanced {
          background-color: var(--bg-primary);
          position: relative;
          overflow: hidden;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          padding: 4rem 0;
        }

        .about-visual {
          position: relative;
        }

        .quote-mark {
          position: absolute;
          top: -4rem;
          left: -1rem;
          font-family: var(--font-serif);
          font-size: 10rem;
          color: var(--brand-red);
          opacity: 0.1;
          line-height: 1;
          pointer-events: none;
        }

        .quote-text {
          font-weight: 800;
          line-height: 1.1;
        }

        .about-content-box {
          background: white;
          padding: 3rem;
          border-radius: 2rem;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
          border: 1px solid var(--border-color);
        }

        .about-stats {
          display: flex;
          gap: 3rem;
          border-top: 1px solid var(--border-color);
          padding-top: 2rem;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
        }

        .stat-value {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--brand-red);
          line-height: 1;
        }

        .stat-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-top: 0.5rem;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }
          .about-stats {
            justify-content: center;
          }
          .quote-mark {
            left: 50%;
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
