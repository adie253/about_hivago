import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Partner with HIVAGO',
      description: 'List your restaurant with transparent commercials and clear expectations.'
    },
    {
      number: '2',
      title: 'Receive delivery orders',
      description: 'Reach customers without sacrificing profitability or control.'
    },
    {
      number: '3',
      title: 'Build repeat business',
      description: 'Own your customer relationships and grow sustainably.'
    }
  ];

  return (
    <section className="section-padding" id="how-it-works">
      <div className="container">
        <h2 className="heading-lg text-center mb-12">How HIVAGO works</h2>
        
        <div className="grid-3 relative">
          {/* Connector line for desktop */}
          <div className="absolute hidden lg:block" style={{ top: '3rem', left: '16.66%', right: '16.66%', height: '2px', background: 'var(--border-color)', zIndex: 0 }}></div>
          
          {steps.map((step, index) => (
            <div key={index} className="text-center relative" style={{ zIndex: 1 }}>
              <div className="step-number">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .relative { position: relative; }
        .absolute { position: absolute; }
        .hidden { display: none; }
        @media (min-width: 1024px) {
          .lg\\:block { display: block; }
        }
        .text-xl { font-size: 1.25rem; font-family: var(--font-serif); }
        .font-bold { font-weight: 700; color: var(--text-main); }
        
        .step-number {
          width: 6rem;
          height: 6rem;
          background-color: var(--brand-red);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: 700;
          font-family: var(--font-serif);
          margin: 0 auto 2rem auto;
          box-shadow: 0 10px 15px -3px rgba(215, 43, 31, 0.3);
          border: 8px solid white;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
