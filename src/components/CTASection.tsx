import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content mx-auto text-center">
          <h2 className="cta-heading mb-6">
            Built for restaurant owners and operators
          </h2>
          
          <p className="cta-subheading mb-8 max-w-3xl mx-auto">
            Whether you run a single outlet or multiple locations, HIVAGO is
            designed to support <span className="font-bold">long-term, profitable delivery</span> — not short-term discount spikes.
          </p>
          
          <button className="btn-primary btn-large mb-12" onClick={() => window.dispatchEvent(new CustomEvent('openPartnerModal'))}>
            Partner with HIVAGO
          </button>
          
          <div className="cta-features">
            <div className="cta-feature-item">
              <CheckCircle2 size={20} color="#22c55e" className="cta-icon" />
              <span>No long-term contracts</span>
            </div>
            <div className="cta-feature-item">
              <CheckCircle2 size={20} color="#22c55e" className="cta-icon" />
              <span>No forced discounting</span>
            </div>
            <div className="cta-feature-item">
              <CheckCircle2 size={20} color="#22c55e" className="cta-icon" />
              <span>Transparent commercials</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cta-section {
          padding: 8rem 0;
          background: radial-gradient(circle at center, #1e293b 0%, #0f172a 100%);
          color: white;
        }

        .cta-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .cta-heading {
          font-family: var(--font-serif);
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.1;
          color: white;
          max-width: 48rem;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-subheading {
          font-size: 1.25rem;
          color: #cbd5e1; /* slate-300 */
          line-height: 1.6;
        }

        .max-w-3xl {
          max-width: 48rem;
        }

        .font-bold {
          font-weight: 700;
          color: white;
        }

        .btn-large {
          padding: 1.25rem 2.5rem;
          font-size: 1.125rem;
          font-weight: 600;
          box-shadow: 0 10px 15px -3px rgba(215, 43, 31, 0.4);
        }

        .btn-large:hover {
          box-shadow: 0 20px 25px -5px rgba(215, 43, 31, 0.5);
          transform: translateY(-2px);
        }

        .cta-features {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2.5rem;
          flex-wrap: wrap;
        }

        .cta-feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.05rem;
          color: #e2e8f0; /* slate-200 */
        }

        @media (max-width: 768px) {
          .cta-section {
            padding: 5rem 0;
          }
          .cta-heading {
            font-size: 2.5rem;
          }
          .cta-features {
            flex-direction: column;
            gap: 1.5rem;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};

export default CTASection;
