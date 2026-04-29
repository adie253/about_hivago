import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PartnerModal from './PartnerModal';
import hivagoLogo from '../assets/hivago_logo.svg';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    const handleOpenPartner = () => setIsPartnerModalOpen(true);
    window.addEventListener('openPartnerModal', handleOpenPartner);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('openPartnerModal', handleOpenPartner);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.querySelector(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <div className="logo">
          <Link to="/">
            <img src={hivagoLogo} alt="HIVAGO" className="nav-logo-img" />
          </Link>
        </div>

        <div className="nav-links desktop-only">
          <Link to="/for-restaurants" className="nav-link">For Restaurants</Link>
          <Link to="/about" className="nav-link">About</Link>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="nav-link">Contact</a>
          <button className="btn-primary" onClick={() => setIsPartnerModalOpen(true)}>
            Partner with HIVAGO
          </button>
        </div>

        <button 
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/for-restaurants" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>For Restaurants</Link>
          <Link to="/about" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <a href="#contact" className="mobile-link" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
          <button className="btn-primary mt-4" onClick={() => { setIsMobileMenuOpen(false); setIsPartnerModalOpen(true); }}>
            Partner with HIVAGO
          </button>
        </div>
      )}

      <PartnerModal 
        isOpen={isPartnerModalOpen} 
        onClose={() => setIsPartnerModalOpen(false)} 
      />

      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 50;
          background-color: var(--bg-primary);
          transition: all 0.2s ease;
          border-bottom: 1px solid transparent;
        }
        
        .navbar.scrolled {
          border-bottom-color: var(--border-color);
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        }

        .nav-logo-img {
          height: 2.5rem;
          width: auto;
          display: block;
          /* Filter to turn any color SVG into brand red #d72b1f */
          filter: brightness(0) invert(18%) sepia(88%) saturate(5437%) hue-rotate(354deg) brightness(90%) contrast(104%);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 5rem; /* 80px */
        }

        .logo-text {
          font-family: var(--font-serif);
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--text-main);
          letter-spacing: -0.025em;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-main);
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: var(--brand-red);
        }

        .mobile-toggle {
          display: none;
          color: var(--text-main);
        }

        .mobile-menu {
          position: absolute;
          top: 5rem;
          left: 0;
          right: 0;
          background: var(--bg-primary);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          border-bottom: 1px solid var(--border-color);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .mobile-link {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--text-main);
        }

        .mt-4 { margin-top: 1rem; }

        @media (max-width: 768px) {
          .desktop-only {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
