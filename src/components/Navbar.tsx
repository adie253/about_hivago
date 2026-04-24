import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/hivago_logo.svg';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (pathname !== '/') {
      navigate('/');
      // Wait for navigation and then scroll
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
    <nav className={`navbar ${isScrolled ? 'glass' : ''}`}>
      <div className="container nav-content">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="logo"
        >
          <Link to="/">
            <img src={logo} alt="Hivago Logo" className="logo-red" style={{ height: '45px', display: 'block' }} />
          </Link>
        </motion.div>

        <div className="nav-links desktop-only">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="nav-link">Services</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="nav-link">Contact</a>
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="btn btn-primary"
          >
            Partner with Us
          </motion.button>
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
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mobile-menu glass"
        >
          <Link to="/" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <a href="#services" className="mobile-link" onClick={(e) => handleNavClick(e, '#services')}>Services</a>
          <a href="#contact" className="mobile-link" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
        </motion.div>
      )}

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          z-index: 1000;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--brand-500);
        }

        .logo-icon {
          width: 28px;
          height: 28px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          font-weight: 500;
          color: var(--slate-600);
          position: relative;
        }

        .nav-link:hover {
          color: var(--brand-500);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--brand-500);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .btn {
          padding: 0.6rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background: var(--brand-500);
          color: white;
          box-shadow: 0 4px 15px rgba(215, 43, 31, 0.3);
        }

        .btn-primary:hover {
          background: var(--brand-600);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(215, 43, 31, 0.4);
        }

        .mobile-toggle {
          display: none;
          color: var(--slate-900);
        }

        .mobile-menu {
          position: absolute;
          top: 80px;
          left: 0;
          right: 0;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          border-top: 1px solid var(--glass-border);
        }

        .mobile-link {
          font-size: 1.1rem;
          font-weight: 500;
          padding: 0.5rem 0;
        }

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
