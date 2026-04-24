import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <div className="container hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="hero-badge"
          >
            Revolutionizing Restaurant Management
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Scale Your <span className="text-gradient">Culinary Empire</span> with Hivago
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Hivago is the next-generation operating system for kitchens of all sizes. 
            From cloud kitchens to fine-dining establishments, we provide the ultimate 
            toolkit to automate order management, optimize delivery logistics, and 
            scale revenue with AI-powered analytics. Join 500+ restaurants already 
            thriving with our premium ecosystem.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="hero-btns"
          >
            <button className="btn btn-primary btn-lg">
              Partner with Hivago <ArrowRight size={20} />
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: 'spring' }}
          className="hero-image-container"
        >
          <div className="hero-image-wrapper">
            <div className="glass-card hero-stats animate-float">
              <div className="stat-item">
                <span className="stat-label">Daily Revenue</span>
                <span className="stat-value">₹42,500</span>
              </div>
              <div className="stat-bar">
                <div className="bar-fill"></div>
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1000" 
              alt="Restaurant Management" 
              className="hero-main-img"
            />
            <div className="glass-card hero-orders animate-float" style={{ animationDelay: '1s' }}>
              <div className="order-dot"></div>
              <span>New Order: #2401</span>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero {
          position: relative;
          padding: 160px 0 100px;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-bg-blobs {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
        }

        .blob {
          position: absolute;
          filter: blur(80px);
          opacity: 0.4;
          border-radius: 50%;
        }

        .blob-1 {
          width: 400px;
          height: 400px;
          background: var(--brand-200);
          top: -100px;
          right: -100px;
        }

        .blob-2 {
          width: 300px;
          height: 300px;
          background: var(--brand-100);
          bottom: 10%;
          left: -50px;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-text {
          max-width: 650px;
        }

        .hero-badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: var(--brand-50);
          color: var(--brand-600);
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          border: 1px solid var(--brand-100);
        }

        .hero-text h1 {
          font-size: 4rem;
          margin-bottom: 1.5rem;
          color: var(--slate-900);
          letter-spacing: -0.02em;
        }

        .text-gradient {
          background: linear-gradient(135deg, var(--brand-500), var(--brand-300));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-text p {
          font-size: 1.25rem;
          color: var(--slate-600);
          margin-bottom: 2.5rem;
          line-height: 1.6;
        }

        .hero-btns {
          display: flex;
          gap: 1.5rem;
        }

        .btn-lg {
          padding: 1rem 2rem;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .btn-secondary {
          background: white;
          color: var(--slate-800);
          border: 1px solid var(--slate-200);
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }

        .btn-secondary:hover {
          background: var(--slate-50);
          transform: translateY(-2px);
        }

        .hero-image-container {
          position: relative;
        }

        .hero-image-wrapper {
          position: relative;
          padding: 20px;
        }

        .hero-main-img {
          width: 100%;
          border-radius: 24px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
        }

        .glass-card {
          position: absolute;
          padding: 1.25rem;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          z-index: 2;
        }

        .hero-stats {
          top: -20px;
          right: -20px;
          width: 200px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--slate-500);
          font-weight: 500;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--slate-900);
        }

        .stat-bar {
          margin-top: 0.75rem;
          height: 6px;
          background: var(--slate-100);
          border-radius: 3px;
          overflow: hidden;
        }

        .bar-fill {
          width: 70%;
          height: 100%;
          background: var(--brand-500);
        }

        .hero-orders {
          bottom: 40px;
          left: -30px;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 600;
        }

        .order-dot {
          width: 10px;
          height: 10px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 10px #10b981;
        }

        @media (max-width: 1024px) {
          .hero-text h1 { font-size: 3rem; }
          .hero-content { grid-template-columns: 1fr; text-align: center; }
          .hero-text { margin: 0 auto; }
          .hero-btns { justify-content: center; }
          .hero-image-container { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
