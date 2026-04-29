import React, { useState } from 'react';
import heroImg from '../assets/hero.png';
import WaitlistModal from './WaitlistModal';

const Hero: React.FC = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Text Content */}
          <div className="hero-content">
            <h1 className="heading-xl mb-6">
              A food delivery platform built for restaurants not commissions.
            </h1>
            <p className="text-lg text-muted mb-8 max-w-lg">
              Take back control of your business. HIVAGO connects you with customers directly, with transparent pricing and zero exploitative commissions.
            </p>
            <div className="hero-actions">
              <button className="btn-primary btn-large" onClick={() => window.dispatchEvent(new CustomEvent('openPartnerModal'))}>
                Partner with HIVAGO
              </button>
              <button className="btn-outline btn-large" onClick={() => setIsWaitlistOpen(true)}>
                Join early as a customer
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="hero-image-wrapper">
            <img 
              src={heroImg} 
              alt="Restaurant Kitchen" 
              className="hero-image"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2000&auto=format&fit=crop';
              }}
            />
          </div>
        </div>
      </div>

      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />

      <style>{`
        .hero-section {
          padding: 6rem 0 4rem 0;
          min-height: calc(100vh - 80px);
          display: flex;
          align-items: center;
          background: var(--bg-primary); /* Changed to pure white to match screenshot */
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: center;
        }

        .max-w-lg {
          max-width: 32rem;
        }
        
        .hero-actions {
          display: flex;
          gap: 1rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .btn-large {
          padding: 1rem 2rem;
          font-size: 1.125rem;
          font-weight: 600;
        }
        
        .btn-outline {
          background-color: transparent;
          color: var(--text-main);
          border: 1px solid var(--border-color);
          border-radius: 9999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        
        .btn-outline:hover {
          border-color: var(--text-muted);
          background-color: var(--bg-secondary);
        }
        
        .hero-disclaimer {
          font-size: 0.875rem;
          color: var(--text-light);
        }

        .mt-4 { margin-top: 1rem; }

        .hero-image-wrapper {
          position: relative;
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
        }

        .hero-image {
          width: 100%;
          height: auto;
          display: block;
          filter: grayscale(100%) contrast(1.1) brightness(0.9);
          transition: filter 0.5s ease;
        }

        .hero-image:hover {
          filter: grayscale(80%) contrast(1.1) brightness(0.95);
        }

        @media (max-width: 1024px) {
          .hero-section {
            padding: 4rem 0;
            min-height: auto;
          }
          
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .hero-actions {
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
