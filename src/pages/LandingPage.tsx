import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AboutSection from '../components/AboutSection';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Skeleton from '../components/Skeleton';

const LandingPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="skeleton-loading-state">
        <div className="container">
          <div className="skeleton-nav">
            <Skeleton width={150} height={40} borderRadius={8} />
            <div className="skeleton-links">
              {[1, 2, 3, 4].map(i => <Skeleton key={i} width={60} height={20} />)}
            </div>
            <Skeleton width={120} height={45} borderRadius={50} />
          </div>
          
          <div className="skeleton-hero">
            <div className="skeleton-hero-text">
              <Skeleton width="30%" height={24} borderRadius={50} className="mb-4" />
              <Skeleton width="80%" height={60} className="mb-4" />
              <Skeleton width="100%" height={20} className="mb-2" />
              <Skeleton width="90%" height={20} className="mb-8" />
              <Skeleton width={180} height={55} borderRadius={50} />
            </div>
            <div className="skeleton-hero-img">
              <Skeleton width="100%" height={450} borderRadius={24} />
            </div>
          </div>
        </div>

        <style>{`
          .skeleton-loading-state {
            padding-top: 2rem;
            min-height: 100vh;
            background: var(--slate-50);
          }
          .skeleton-nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 6rem;
          }
          .skeleton-links {
            display: flex;
            gap: 2.5rem;
          }
          .skeleton-hero {
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            gap: 5rem;
            align-items: center;
          }
          .mb-4 { margin-bottom: 1rem; }
          .mb-8 { margin-bottom: 2rem; }
        `}</style>
      </div>
    );
  }

  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <Features />
      <AboutSection />
      {/* <Pricing /> */}
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
