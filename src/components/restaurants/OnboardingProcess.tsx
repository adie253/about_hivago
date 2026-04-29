import React from 'react';

const OnboardingProcess: React.FC = () => {
  const steps = [
    {
      title: 'Apply to partner',
      desc: 'Tell us about your restaurant and business. We review every application personally.'
    },
    {
      title: 'Discuss commercials',
      desc: 'We share our transparent commercial structure. No hidden fees, no surprises.'
    },
    {
      title: 'Set up your listing',
      desc: 'We assist with menu, pricing, and all operational admin needs.'
    },
    {
      title: 'Go live',
      desc: 'Start receiving profitable orders from customers who value quality.'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <h2 className="heading-lg text-center mb-16" style={{ fontSize: '2.25rem' }}>
          Simple onboarding, transparent process
        </h2>

        <div className="process-list max-w-2xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="process-step">
              <div className="process-number">{idx + 1}</div>
              <div className="process-content">
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc text-muted">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .max-w-2xl { max-width: 42rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }

        .process-list {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          position: relative;
        }

        /* Connecting line */
        .process-list::before {
          content: '';
          position: absolute;
          top: 1rem;
          bottom: 1rem;
          left: 1.45rem;
          width: 2px;
          background-color: #fca5a5; /* Light red line */
          z-index: 0;
        }

        .process-step {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .process-number {
          flex-shrink: 0;
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background-color: var(--brand-red);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 700;
          box-shadow: 0 0 0 4px white; /* To cut out the line behind it */
        }

        .process-content {
          padding-top: 0.5rem;
        }

        .process-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 0.25rem;
        }

        .process-desc {
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .process-list::before {
            left: 1.2rem;
          }
          .process-number {
            width: 2.5rem;
            height: 2.5rem;
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default OnboardingProcess;
