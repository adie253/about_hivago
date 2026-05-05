import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WaitlistModal from '../components/WaitlistModal';
import { ShieldCheck, HeartHandshake, Eye, HandCoins, Smartphone, UtensilsCrossed, Zap, ChevronRight } from 'lucide-react';
import storyImg from '../assets/about-story.png';

const AboutPage: React.FC = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`about-page ${scrolled ? 'is-scrolled' : ''}`}>
      <Navbar />

      {/* Hero Section */}
      <header className="about-hero">
        <div className="hero-gradient"></div>
        <div className="container">
          <div className="hero-content animate-on-scroll fade-up">
            <span className="badge">Our Mission</span>
            <h1 className="heading-xl mb-6">
              Restoring fairness to the <br />
              <span className="text-gradient">food ecosystem</span>
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto mb-10">
              HIVAGO was born from a simple observation: food delivery is broken. 
              We're here to fix it by putting power back where it belongs—with 
              restaurants and customers.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-value">0%</span>
                <span className="stat-label">Silent Markups</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-value">Fair</span>
                <span className="stat-label">Commissions</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-value">100%</span>
                <span className="stat-label">Transparency</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Story Section - Split Layout */}
      <section className="story-section section-padding bg-white overflow-hidden">
        <div className="container">
          <div className="grid-2 gap-16 items-center">
            <div className="story-image-container animate-on-scroll fade-right">
              <div className="image-blob"></div>
              <img src={storyImg} alt="Fair food ecosystem" className="story-main-img" />
              <div className="experience-card">
                <div className="exp-icon"><Zap size={24} fill="currentColor" /></div>
                <div>
                  <p className="exp-title">Better Experience</p>
                  <p className="exp-desc">Designed for modern foodies</p>
                </div>
              </div>
            </div>
            
            <div className="story-text animate-on-scroll fade-left">
              <h2 className="heading-lg mb-8">The HIVAGO Story</h2> 
              <div className="story-paragraphs">
                <p className="text-lg mb-6">
                  Have you ever noticed how a ₹300 meal suddenly becomes ₹450 at checkout? 
                  Between inflated menu prices, hidden service charges, and exorbitant delivery fees, 
                  ordering food has become frustratingly expensive.
                </p>
                <p className="text-lg mb-6">
                  At the same time, the restaurants you love are struggling. Traditional delivery apps 
                  take up to 30% of every order in commissions, forcing local businesses to either 
                  cut corners on quality or raise prices just to survive.
                </p>
                <div className="quote-box mb-8">
                  <p>
                    "We decided enough was enough. HIVAGO was built to cut out the exploitative middlemen 
                    and create a sustainable future for local dining."
                  </p>
                </div>
                <p className="text-lg">
                  When you order on HIVAGO, you're not just getting a meal—you're voting for a 
                  sustainable, honest food ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Modern Cards */}
      <section className="values-modern-section section-padding bg-bg-secondary relative">
        <div className="bg-pattern"></div>
        <div className="container">
          <div className="text-center mb-16 animate-on-scroll fade-up">
            <span className="section-tag">Values</span>
            <h2 className="heading-lg">What we <span className="text-brand">stand for</span></h2>
          </div>
          
          <div className="values-grid-modern">
            {[
              {
                icon: <Eye size={32} />,
                title: 'Radical Transparency',
                desc: 'No hidden fees, no surprise service charges, and no silent menu markups. What you see is exactly what you pay.',
                color: '#d72b1f'
              },
              {
                icon: <HeartHandshake size={32} />,
                title: 'Supporting Local',
                desc: 'We don\'t squeeze restaurants for 30% margins. Your money goes directly to the people actually making your food.',
                color: '#10b981'
              },
              {
                icon: <ShieldCheck size={32} />,
                title: 'Uncompromised Quality',
                desc: 'Because restaurants aren\'t losing money to commissions, they can focus on delivering the highest quality ingredients.',
                color: '#3b82f6'
              },
              {
                icon: <HandCoins size={32} />,
                title: 'Fairness for All',
                desc: 'A delivery network that works for everyone—you get a fair price, restaurants get a fair margin, and drivers get a fair wage.',
                color: '#8b5cf6'
              }
            ].map((value, i) => (
              <div key={i} className="value-card-modern animate-on-scroll fade-up" style={{"--delay": `${i * 0.1}s`} as any}>
                <div className="value-card-inner">
                  <div className="value-icon-wrapper" style={{ backgroundColor: `${value.color}15`, color: value.color }}>
                    {value.icon}
                  </div>
                  <h4 className="value-title-modern">{value.title}</h4>
                  <p className="value-desc-modern">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits / Features Grid */}
      <section className="benefits-section section-padding bg-white">
        <div className="container">
          <div className="benefits-layout">
            <div className="benefits-info animate-on-scroll fade-right">
              <h2 className="heading-lg mb-6">Why HIVAGO is <br />Different</h2>
              <p className="text-lg text-muted mb-8">
                We've redesigned the delivery experience from the ground up to prioritize 
                you and the food you love.
              </p>
              <ul className="benefits-list">
                <li><ChevronRight size={18} className="text-brand" /> Direct Restaurant Communication</li>
                <li><ChevronRight size={18} className="text-brand" /> Optimized Delivery Routes</li>
                <li><ChevronRight size={18} className="text-brand" /> Zero Price Markups</li>
              </ul>
            </div>
            
            <div className="benefits-grid-modern animate-on-scroll fade-left">
              <div className="benefit-card-modern">
                <div className="benefit-icon-box"><Zap size={24} /></div>
                <h3>Honest Pricing</h3>
                <p>Order at the same prices you'd find if you walked into the restaurant. No "convenience" tax.</p>
              </div>
              <div className="benefit-card-modern">
                <div className="benefit-icon-box"><UtensilsCrossed size={24} /></div>
                <h3>Freshness First</h3>
                <p>Direct routes mean your food spends less time in a bag and more time on your plate.</p>
              </div>
              <div className="benefit-card-modern">
                <div className="benefit-icon-box"><Smartphone size={24} /></div>
                <h3>Direct Connection</h3>
                <p>You have a direct line to the people preparing your meal for special requests or updates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Movement - Premium CTA */}
      <section className="join-movement-modern section-padding">
        <div className="container">
          <div className="premium-cta-card animate-on-scroll fade-up">
            <div className="cta-content">
              <h2 className="heading-lg text-white ">Ready to join the movement?</h2>
              <p className="text-lg text-white/80  max-w-xl">
                Be among the first to experience a fairer way to enjoy your favorite local food. 
                Join the waitlist and we'll notify you when we launch in your city.
              </p>
              <button className="cta-btn-white mt-4" onClick={() => setIsWaitlistOpen(true)}>
                Join early as a customer
              </button>
            </div>
            <div className="cta-visual">
              <div className="visual-circle"></div>
              <div className="visual-circle small"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />

      <style>{`
        .about-page {
          overflow-x: hidden;
        }

        /* Animations */
        .animate-on-scroll {
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .animate-on-scroll.visible {
          opacity: 1;
          transform: none !important;
        }

        .fade-up { transform: translateY(40px); }
        .fade-right { transform: translateX(-40px); }
        .fade-left { transform: translateX(40px); }

        .visible {
          transition-delay: var(--delay, 0s);
        }

        /* Hero Styles */
        .about-hero {
          padding: 10rem 0 6rem;
          background: #fff;
          position: relative;
          text-align: center;
        }

        .hero-gradient {
          position: absolute;
          top: -20%;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          height: 100%;
          background: radial-gradient(circle, rgba(215, 43, 31, 0.05) 0%, rgba(255,255,255,0) 70%);
          pointer-events: none;
        }

        .badge {
          display: inline-block;
          padding: 0.5rem 1.25rem;
          background: rgba(215, 43, 31, 0.08);
          color: var(--brand-red);
          border-radius: 99px;
          font-weight: 600;
          font-size: 0.875rem;
          margin-bottom: 2rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .text-gradient {
          background: linear-gradient(90deg, var(--brand-red) 0%, #ff6b6b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-stats {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 3rem;
          margin-top: 4rem;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
        }

        .stat-value {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--text-main);
          font-family: var(--font-serif);
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: var(--border-color);
        }

        /* Story Section */
        .story-image-container {
          position: relative;
          padding: 2rem;
        }

        .image-blob {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--brand-red);
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          opacity: 0.05;
          z-index: 0;
        }

        .story-main-img {
          width: 100%;
          border-radius: 2rem;
          position: relative;
          z-index: 1;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
        }

        .experience-card {
          position: absolute;
          bottom: 0;
          right: 0;
          background: white;
          padding: 1.5rem;
          border-radius: 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          z-index: 2;
          transform: translate(10%, -20%);
        }

        .exp-icon {
          width: 3rem;
          height: 3rem;
          background: var(--brand-red);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.75rem;
        }

        .exp-title {
          font-weight: 700;
          color: var(--text-main);
          font-size: 1rem;
          margin: 0;
        }

        .exp-desc {
          font-size: 0.8125rem;
          color: var(--text-muted);
          margin: 0;
        }

        .quote-box {
          border-left: 4px solid var(--brand-red);
          padding: 1.5rem 2rem;
          background: rgba(215, 43, 31, 0.03);
          border-radius: 0 1rem 1rem 0;
          font-style: italic;
          font-size: 1.25rem;
          color: var(--text-main);
          font-family: var(--font-serif);
        }

        /* Values Modern */
        .section-tag {
          color: var(--brand-red);
          text-transform: uppercase;
          font-weight: 700;
          font-size: 0.875rem;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
          display: block;
        }

        .values-grid-modern {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .value-card-modern {
          background: white;
          border-radius: 2rem;
          padding: 3rem 2.5rem;
          transition: all 0.4s ease;
          border: 1px solid transparent;
        }

        .value-card-modern:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.1);
          border-color: rgba(215, 43, 31, 0.1);
        }

        .value-icon-wrapper {
          width: 4.5rem;
          height: 4.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1.25rem;
          margin-bottom: 2rem;
        }

        .value-title-modern {
          font-size: 1.5rem;
          margin-bottom: 1.25rem;
        }

        .value-desc-modern {
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 1.05rem;
        }

        /* Benefits Modern */
        .benefits-layout {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 5rem;
          align-items: center;
        }

        .benefits-list {
          list-style: none;
          padding: 0;
        }

        .benefits-list li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .benefits-grid-modern {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .benefit-card-modern {
          background: var(--bg-secondary);
          padding: 2.5rem;
          border-radius: 1.5rem;
          transition: background 0.3s ease;
        }

        .benefit-card-modern:hover {
          background: white;
          box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.05);
        }

        .benefit-card-modern:first-child {
          grid-row: span 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: var(--brand-red);
          color: white;
        }

        .benefit-card-modern:first-child h3,
        .benefit-card-modern:first-child p {
          color: white;
        }

        .benefit-card-modern:first-child .benefit-icon-box {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }

        .benefit-icon-box {
          width: 3.5rem;
          height: 3.5rem;
          background: white;
          color: var(--brand-red);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 8px 15px rgba(0,0,0,0.05);
        }

        .benefit-card-modern h3 {
          font-size: 1.35rem;
          margin-bottom: 1rem;
        }

        /* Premium CTA */
        .premium-cta-card {
          background: #111827;
          border-radius: 3rem;
          padding: 6rem 5rem;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .cta-content {
          position: relative;
          z-index: 2;
        }

        .cta-btn-white {
          background: white;
          color: #111827;
          padding: 1.25rem 2.5rem;
          border-radius: 99px;
          font-weight: 700;
          font-size: 1.125rem;
          border: none;
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        .cta-btn-white:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.3);
          background: var(--bg-secondary);
        }

        .cta-visual {
          position: absolute;
          right: -5%;
          top: 50%;
          transform: translateY(-50%);
          width: 40%;
          height: 100%;
          pointer-events: none;
        }

        .visual-circle {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 400px;
          height: 400px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50%;
        }

        .visual-circle.small {
          width: 250px;
          height: 250px;
          right: 75px;
          border-color: rgba(215, 43, 31, 0.3);
        }

        @media (max-width: 1024px) {
          .heading-xl { font-size: 3rem; }
          .benefits-layout { grid-template-columns: 1fr; gap: 4rem; }
          .premium-cta-card { padding: 5rem 3rem; flex-direction: column; text-align: center; }
          .cta-visual { display: none; }
          .hero-stats { gap: 2rem; flex-wrap: wrap; }
          .grid-2 { grid-template-columns: 1fr; gap: 4rem; }
          .story-text { order: 2; }
          .story-image-container { order: 1; }
        }

        @media (max-width: 768px) {
          .section-padding { padding: 4rem 0; }
          .about-hero { padding: 8rem 0 4rem; }
          .heading-xl { font-size: 2.5rem; }
          .heading-lg { font-size: 2rem; }
          .stat-divider { display: none; }
          .hero-stats { justify-content: center; gap: 1.5rem; }
          .stat-value { font-size: 2rem; }
          .experience-card { 
            position: relative; 
            transform: none; 
            margin-top: -2rem; 
            margin-left: auto; 
            margin-right: auto;
            width: fit-content;
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          }
          .value-card-modern { padding: 2.5rem 2rem; }
          .benefits-grid-modern { grid-template-columns: 1fr; }
          .benefit-card-modern:first-child { grid-row: auto; }
          .premium-cta-card { border-radius: 2rem; padding: 4rem 2rem; }
        }

        @media (max-width: 480px) {
          .heading-xl { font-size: 2rem; }
          .hero-stats { flex-direction: column; gap: 1rem; }
          .stat-item { align-items: center; }
          .story-image-container { padding: 1rem; }
          .quote-box { padding: 1rem 1.5rem; font-size: 1.1rem; }
          .value-card-modern { padding: 2rem 1.5rem; }
          .benefit-card-modern { padding: 2rem 1.5rem; }
          .cta-btn-white { width: 100%; padding: 1rem 1.5rem; }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
