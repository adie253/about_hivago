import React from 'react';
import { Check, X } from 'lucide-react';

const WhoIsItFor: React.FC = () => {
  const isFor = [
    'You want to control your pricing and discounts',
    'You value sustainable margins over vanity metrics',
    'You want to own your customer relationships',
    "You're willing to build delivery the right way",
    'You want a true partner, not just another vendor'
  ];

  const isNotFor = [
    'You need massive order volume immediately',
    "You're okay with shrinking margins for growth",
    'You rely on excessive discounts to drive sales',
    "You want a 'spray and pray' marketing approach",
    "You don't care about customer ownership"
  ];

  return (
    <section className="section-padding bg-faint-pink">
      <div className="container">
        <h2 className="heading-lg text-center mb-12" style={{ fontSize: '2.25rem' }}>
          Who HIVAGO is for (and who it's not for)
        </h2>

        <div className="who-grid mx-auto max-w-5xl">
          {/* IS FOR Card */}
          <div className="who-card">
            <h3 className="who-heading">HIVAGO is for you if:</h3>
            <ul className="who-list">
              {isFor.map((item, idx) => (
                <li key={idx} className="who-list-item">
                  <Check size={20} className="who-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* IS NOT FOR Card */}
          <div className="who-card">
            <h3 className="who-heading">HIVAGO is NOT for you if:</h3>
            <ul className="who-list">
              {isNotFor.map((item, idx) => (
                <li key={idx} className="who-list-item">
                  <X size={20} className="who-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .bg-faint-pink {
          background-color: #fffafa;
        }

        .max-w-5xl { max-width: 64rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }

        .who-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }

        .who-card {
          background: white;
          padding: 3rem 2.5rem;
          border-radius: 1rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }

        .who-heading {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--brand-red);
          margin-bottom: 2rem;
        }

        .who-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .who-list-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          font-size: 1.05rem;
          line-height: 1.5;
          color: var(--text-main);
        }

        .who-icon {
          color: var(--brand-red);
          flex-shrink: 0;
          margin-top: 0.125rem;
        }

        @media (max-width: 768px) {
          .who-grid {
            grid-template-columns: 1fr;
          }
          .who-card {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default WhoIsItFor;
