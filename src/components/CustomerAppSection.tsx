import React from 'react';

const CustomerAppSection: React.FC = () => {
  return (
    <section className="customer-app-section">
      <div className="container">
        <div className="text-center mx-auto max-w-3xl">
          <h2 className="heading-lg mb-4" style={{ fontSize: '2.25rem' }}>
            For customers who care where their food comes from
          </h2>
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
            HIVAGO connects you directly with the restaurants you love. Say goodbye to excessive delivery fees and hidden charges.
          </p>
          <button className="btn-outline-red btn-large mb-4">
            Join the customer waitlist
          </button>
          <p className="text-sm text-light">
            We'll notify you when HIVAGO launches in your city.          </p>
        </div>
      </div>

      <style>{`
        .customer-app-section {
          padding: 8rem 0;
          background: linear-gradient(to bottom, #ffffff 0%, #fff5f5 100%);
        }

        .max-w-3xl { max-width: 48rem; }
        .max-w-2xl { max-width: 42rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }

        .btn-outline-red {
          background-color: white;
          color: var(--brand-red);
          border: 1px solid var(--brand-red);
          border-radius: 9999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          font-weight: 600;
        }

        .btn-outline-red:hover {
          background-color: #fef2f2;
          box-shadow: 0 4px 6px -1px rgba(215, 43, 31, 0.1);
        }

        .text-sm {
          font-size: 0.875rem;
        }

        .text-light {
          color: var(--text-light);
        }
      `}</style>
    </section>
  );
};

export default CustomerAppSection;
