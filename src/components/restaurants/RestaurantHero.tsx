import React from 'react';

const RestaurantHero: React.FC = () => {
  return (
    <section className="restaurant-hero">
      <div className="container">
        <div className="hero-content text-center">
          <h1 className="heading-xl mb-4">
            For Restaurants Who Want Control Back
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Honest answers to questions you've been asking about HIVAGO.
          </p>
        </div>
      </div>

      <style>{`
        .restaurant-hero {
          padding: 6rem 0;
          background-color: #fffafa; /* Faint pink */
          border-bottom: 1px solid var(--border-color);
        }

        .hero-content {
          max-width: 48rem;
          margin: 0 auto;
        }

        .heading-xl {
          font-family: var(--font-serif);
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.1;
          color: var(--text-main);
          letter-spacing: -0.02em;
        }

        @media (max-width: 768px) {
          .restaurant-hero {
            padding: 4rem 0;
          }
          .heading-xl {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default RestaurantHero;
