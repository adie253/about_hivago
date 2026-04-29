import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WaitlistModal from '../components/WaitlistModal';
import { ShieldCheck, HeartHandshake, Eye, HandCoins, Smartphone, UtensilsCrossed, Zap } from 'lucide-react';

const AboutPage: React.FC = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="about-page">
      <Navbar />
      
      <header className="about-header">
        <div className="container">
          <h1 className="heading-xl mb-6">
            We're building a fairer food <span style={{ color: 'var(--brand-red)' }}>ecosystem</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Learn why we started HIVAGO, what we stand for, and how we're changing food delivery for the better—for you and the restaurants you love.
          </p>
        </div>
      </header>

      <section className="about-content section-padding bg-bg-secondary">
        <div className="container">
          <div className="story-card full-width">
            <h2 className="heading-lg mb-6">The HIVAGO Story</h2>
            <p className="text-lg text-muted mb-4">
              Have you ever noticed how a ₹300 meal suddenly becomes ₹450 at checkout? Between inflated menu prices, hidden service charges, and exorbitant delivery fees, ordering food has become frustratingly expensive.
            </p>
            <p className="text-lg text-muted mb-4">
              At the same time, the restaurants you love are struggling. Traditional delivery apps take up to 30% of every order in commissions, forcing local businesses to either cut corners on quality or raise prices just to survive.
            </p>
            <p className="text-lg text-muted">
              <strong style={{ color: 'var(--text-main)' }}>We decided enough was enough.</strong> HIVAGO was built to cut out the exploitative middlemen. By connecting you directly with restaurants, we ensure that you get transparent, fair pricing, and your favorite local spots get to keep the money they earn. When you order on HIVAGO, you're voting for a sustainable, honest food ecosystem.
            </p>
          </div>
        </div>
      </section>

      <section className="values-section section-padding bg-white">
        <div className="container">
          <h2 className="heading-lg text-center mb-12">Our Core <span style={{ color: 'var(--brand-red)' }}>Values</span></h2>
          <div className="values-grid">
            {[
              { 
                icon: <Eye size={32} strokeWidth={1.5} />, 
                title: 'Radical Transparency', 
                desc: 'No hidden fees, no surprise service charges, and no silent menu markups. What you see is exactly what you pay.' 
              },
              { 
                icon: <HeartHandshake size={32} strokeWidth={1.5} />, 
                title: 'Supporting Local', 
                desc: 'We don\'t squeeze restaurants for 30% margins. Your money goes directly to the people actually making your food.' 
              },
              { 
                icon: <ShieldCheck size={32} strokeWidth={1.5} />, 
                title: 'Uncompromised Quality', 
                desc: 'Because restaurants aren\'t losing money to massive commissions, they can focus on delivering the highest quality ingredients to you.' 
              },
              { 
                icon: <HandCoins size={32} strokeWidth={1.5} />, 
                title: 'Fairness for All', 
                desc: 'We are building a delivery network that works for everyone—you get a fair price, restaurants get a fair margin, and drivers get a fair wage.' 
              }
            ].map((value, i) => (
              <div key={i} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-desc">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="customer-benefits section-padding bg-bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Why order on HIVAGO?</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              We've redesigned the delivery experience from the ground up to prioritize you and the food you love.
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon-sm"><Zap size={24} /></div>
              <h3>Honest Pricing</h3>
              <p>Forget the "convenience fees" and markups. Order at the same prices you'd find if you walked into the restaurant.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon-sm"><UtensilsCrossed size={24} /></div>
              <h3>Freshness First</h3>
              <p>By optimizing routes and working directly with kitchens, we ensure your food spends less time in a bag and more time on your plate.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon-sm"><Smartphone size={24} /></div>
              <h3>Direct Connection</h3>
              <p>Have a special request? Need an update? You have a direct line to the people preparing your meal.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="join-movement section-padding bg-white">
        <div className="container text-center">
          <div className="cta-box mx-auto">
            <h2 className="heading-lg mb-6">Ready to join the movement?</h2>
            <p className="text-lg text-muted mb-10 max-w-xl mx-auto">
              Be among the first to experience a fairer way to enjoy your favorite local food. Join the waitlist and we'll notify you when we launch in your city.
            </p>
            <button className="btn-primary btn-large" onClick={() => setIsWaitlistOpen(true)}>
              Join early as a customer
            </button>
          </div>
        </div>
      </section>

      <Footer />

      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />

      <style>{`
        .about-header {
          padding: 8rem 0 4rem;
          background: white;
          text-align: center;
        }
        
        .max-w-2xl { max-width: 42rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .max-w-xl { max-width: 36rem; }

        .story-card.full-width {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        .story-card h2 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
        }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2.5rem;
        }

        .story-card p {
          line-height: 1.7;
        }

        .value-card {
          padding: 3rem 2rem;
          background: var(--bg-secondary);
          border-radius: 1.5rem;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-8px);
        }

        .value-icon {
          width: 5rem;
          height: 5rem;
          margin: 0 auto 1.5rem;
          background: white;
          color: var(--brand-red);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          box-shadow: 0 10px 15px -3px rgba(215, 43, 31, 0.1);
        }

        .value-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 1rem;
        }

        .value-desc {
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* Benefits Styles */
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }

        .benefit-item {
          text-align: left;
        }

        .benefit-icon-sm {
          width: 3.5rem;
          height: 3.5rem;
          background: var(--brand-red);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
          margin-bottom: 1.5rem;
        }

        .benefit-item h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-main);
        }

        .benefit-item p {
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* CTA Box Styles */
        .cta-box {
          padding: 5rem 3rem;
          background: var(--bg-secondary);
          border-radius: 2.5rem;
          max-width: 56rem;
        }

        @media (max-width: 1024px) {
          .benefits-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .cta-box { padding: 3rem 1.5rem; }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
