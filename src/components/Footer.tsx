import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-white">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="logo-text-footer">HIVAGO</span>
            <p className="footer-desc mt-4 text-muted">
              A food delivery platform built for restaurants, not commissions.
            </p>
          </div>
          
          <div className="footer-links-row">
            <a href="#features" className="footer-link">Features</a>
            <a href="#comparison" className="footer-link">Pricing</a>
            <Link to="/about" className="footer-link">About Us</Link>
            <a href="#contact" className="footer-link">Contact</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="text-muted">&copy; {new Date().getFullYear()} HIVAGO. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#" className="footer-link-small">Terms of Service</a>
            <a href="#" className="footer-link-small">Privacy Policy</a>
          </div>
        </div>
      </div>

      <style>{`
        .bg-white {
          background-color: #ffffff;
          border-top: 1px solid var(--border-color);
        }
        
        .footer {
          padding: 4rem 0 2rem 0;
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 4rem;
        }

        .logo-text-footer {
          font-family: var(--font-serif);
          font-size: 2rem;
          font-weight: 800;
          letter-spacing: -0.025em;
          color: var(--text-main);
        }

        .footer-desc {
          max-width: 20rem;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .footer-links-row {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .footer-link {
          color: var(--text-main);
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .footer-link:hover {
          color: var(--brand-red);
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.875rem;
        }

        .footer-legal {
          display: flex;
          gap: 1.5rem;
        }

        .footer-link-small {
          color: var(--text-muted);
        }

        .footer-link-small:hover {
          color: var(--text-main);
        }

        @media (max-width: 768px) {
          .footer-top {
            flex-direction: column;
            gap: 2.5rem;
          }
          .footer-links-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
