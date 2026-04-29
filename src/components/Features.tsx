import React from 'react';
import { ShieldCheck, Percent, Users } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck size={24} color="var(--brand-red)" strokeWidth={1.5} />,
      title: 'Restaurants come first',
      description: 'We believe the industry should be profitable for those who make the food. Our model is built for your success.'
    },
    {
      icon: <Percent size={24} color="var(--brand-red)" strokeWidth={1.5} />,
      title: 'Transparent commissions',
      description: 'Stop giving away 30% of revenue. We offer a transparent model that lets you keep the lion\'s share.'
    },
    {
      icon: <Users size={24} color="var(--brand-red)" strokeWidth={1.5} />,
      title: 'Own customer relationships',
      description: 'We don\'t hide customer data. Build direct relationships, offer tailored promos, and grow loyal regulars.'
    }
  ];

  return (
    <section className="bg-bg-secondary" id="features">
      {/* Block 1: Why HIVAGO exists */}
      <div className="section-padding" style={{ paddingBottom: '3rem' }}>
        <div className="container text-center">
          <h2 className="heading-lg mb-6">Why HIVAGO exists</h2>
          <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
            The food delivery ecosystem is broken. Platforms take up to 30% of your revenue, leaving restaurants to struggle with margins while taking all the control. <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>We're here to change that.</span> We are building a more equitable, transparent platform where restaurants can actually thrive.
          </p>
        </div>
      </div>

      {/* Block 2: How HIVAGO is different */}
      <div className="section-padding" style={{ paddingTop: '3rem' }}>
        <div className="container">
          <h2 className="heading-lg text-center mb-12" style={{ fontSize: '2.25rem' }}>How HIVAGO is different</h2>
          
          <div className="grid-3 mt-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card-white">
                <div className="icon-circle mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted leading-relaxed" style={{ fontSize: '0.95rem' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .max-w-3xl {
          max-width: 48rem;
        }

        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }

        .feature-card-white {
          padding: 2.5rem 2rem;
          background: white;
          border-radius: 1rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .feature-card-white:hover {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025);
          transform: translateY(-4px);
        }

        .icon-circle {
          width: 3rem;
          height: 3rem;
          background-color: #fee2e2; /* Very faint red */
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .text-xl {
          font-size: 1.15rem;
          font-family: var(--font-sans);
          font-weight: 700;
          color: var(--text-main);
        }

        .leading-relaxed {
          line-height: 1.625;
        }
      `}</style>
    </section>
  );
};

export default Features;
