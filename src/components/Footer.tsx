import React from 'react';
import { Globe, Send, Briefcase, Camera } from 'lucide-react';
import logo from '../assets/hivago_logo.svg';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <img src={logo} alt="Hivago" className="logo-red" style={{ height: '35px' }} />
            </div>
            <p>Empowering the next generation of restaurateurs with elite management tools.</p>
            <div className="social-links">
              <a href="#"><Globe size={20} /></a>
              <a href="#"><Send size={20} /></a>
              <a href="#"><Briefcase size={20} /></a>
              <a href="#"><Camera size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Product</h4>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Dashboard</a>
            <a href="#">Mobile App</a>
          </div>

          <div className="footer-links">
            <h4>Company</h4>
            <a href="#about">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Press</a>
          </div>

          <div className="footer-links">
            <h4>Support</h4>
            <a href="#">Help Center</a>
            <a href="#">Contact Us</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Hivago. All rights reserved.</p>
          <p>Made with ❤️ for food lovers.</p>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--slate-900);
          color: white;
          padding: 80px 0 40px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 4rem;
          margin-bottom: 60px;
        }

        .footer-brand .logo {
          color: white;
          margin-bottom: 1.5rem;
        }

        .footer-brand p {
          color: var(--slate-400);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .social-links {
          display: flex;
          gap: 1.25rem;
        }

        .social-links a {
          width: 40px;
          height: 40px;
          background: var(--slate-800);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: var(--slate-300);
          transition: all 0.3s ease;
        }

        .social-links a:hover {
          background: var(--brand-500);
          color: white;
          transform: translateY(-3px);
        }

        .footer-links h4 {
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          color: white;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-links a {
          color: var(--slate-400);
          font-size: 0.95rem;
        }

        .footer-links a:hover {
          color: white;
          padding-left: 5px;
        }

        .footer-bottom {
          padding-top: 40px;
          border-top: 1px solid var(--slate-800);
          display: flex;
          justify-content: space-between;
          color: var(--slate-500);
          font-size: 0.9rem;
        }

        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .footer-bottom { flex-direction: column; gap: 1rem; text-align: center; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
