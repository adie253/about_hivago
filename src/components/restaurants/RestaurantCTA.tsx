import React from 'react';
import { Check } from 'lucide-react';

const RestaurantCTA: React.FC = () => {
  return (
    <section className="restaurant-cta">
      <div className="container">
        <div className="cta-content text-center">
          <h2 className="heading-xl mb-4 text-white">
            Ready to take back control?
          </h2>
          <p className="text-lg mb-10 text-white-80 max-w-2xl mx-auto">
            Join restaurants building sustainable delivery businesses with HIVAGO.
          </p>
          
          <button className="btn-white btn-large mb-8" onClick={() => window.dispatchEvent(new CustomEvent('openPartnerModal'))}>
            Partner with HIVAGO
          </button>
          
          <div className="cta-features-inline">
            <div className="cta-feature-item">
              <Check size={16} />
              <span>No hidden fees</span>
            </div>
            <div className="cta-feature-item">
              <Check size={16} />
              <span>Transparent payouts</span>
            </div>
            <div className="cta-feature-item">
              <Check size={16} />
              <span>Dedicated support</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .restaurant-cta {
          padding: 6rem 0;
          background-color: var(--brand-red);
          color: white;
        }

        .cta-content {
          max-width: 48rem;
          margin: 0 auto;
        }

        .text-white { color: white; }
        .text-white-80 { color: rgba(255, 255, 255, 0.9); }

        .btn-white {
          background-color: white;
          color: var(--brand-red);
          border: none;
          border-radius: 9999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          font-weight: 700;
          padding: 1.25rem 3rem;
          font-size: 1.125rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .btn-white:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15);
        }

        .cta-features-inline {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .cta-feature-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .restaurant-cta {
            padding: 4rem 0;
          }
          .cta-features-inline {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default RestaurantCTA;
