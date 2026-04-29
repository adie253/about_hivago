import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="section-padding bg-bg-primary" id="about">
      <div className="container">
        <div className="mission-content">
          <div className="quote-mark">"</div>
          <h2 className="heading-xl text-center quote-text mb-6">
            A more sustainable way forward
          </h2>
          <p className="text-lg text-muted text-center max-w-2xl mx-auto">
            HIVAGO isn't just another platform. We are a community of restaurant owners, tech innovators, and food lovers committed to bringing fairness back to the delivery ecosystem. When you win, we win.
          </p>
          <p className="text-center mt-6 font-bold" style={{ color: 'var(--text-main)' }}>
            — A restaurant partner
          </p>
        </div>
      </div>

      <style>{`
        .mission-content {
          padding: 6rem 2rem;
          background-color: var(--bg-secondary);
          border-radius: 2rem;
          position: relative;
          max-width: 64rem;
          margin: 0 auto;
        }

        .quote-mark {
          position: absolute;
          top: -2rem;
          left: 2rem;
          font-family: var(--font-serif);
          font-size: 8rem;
          color: transparent;
          -webkit-text-stroke: 2px #fca5a5; /* faint red outline */
          opacity: 0.5;
          line-height: 1;
        }

        .quote-text {
          position: relative;
          z-index: 10;
        }

        .max-w-2xl {
          max-width: 42rem;
        }

        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }

        .mt-8 {
          margin-top: 2rem;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
