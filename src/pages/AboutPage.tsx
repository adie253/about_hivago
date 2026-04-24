import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Users, Code, Utensils, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <Navbar />
      
      <header className="about-header">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            We're building the future of <span className="text-gradient">Hospitality</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Learn about our journey, our values, and the people behind Hivago.
          </motion.p>
        </div>
      </header>

      <section className="about-content">
        <div className="container">
          <div className="story-grid">
            <motion.div 
              className="story-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2>The Hivago Story</h2>
              <p>
                Founded in 2024, Hivago started as a small project to help a local cafe manage their peak hours. 
                What we discovered was a universal need for better, more intuitive tools in the restaurant industry.
              </p>
              <p>
                Our mission is to empower the next generation of restaurateurs with elite management tools. 
                We believe that technology should be an enabler, not a hurdle. By digitizing every aspect 
                of kitchen operations, we help owners focus on what they do best: creating amazing food.
              </p>
              <p>
                Today, we serve hundreds of outlets across the country, providing them with the technology 
                they need to thrive in a digital-first world. From independent cafes to large restaurant chains, 
                Hivago is the backbone of modern hospitality.
              </p>
            </motion.div>
            <div className="stats-grid">
              {[
                { label: 'Outlets', value: '500+' },
                { label: 'Orders Processed', value: '1M+' },
                { label: 'Uptime', value: '99.9%' },
                { label: 'Happy Chefs', value: '2k+' }
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  className="stat-box glass"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="stat-val">{stat.value}</span>
                  <span className="stat-lab">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2 className="text-center">The <span className="text-gradient">Dream Team</span></h2>
          <div className="team-grid">
            {[
              { icon: <Code size={32} />, role: 'Engineering', name: 'Tech Wizards' },
              { icon: <Utensils size={32} />, role: 'Culinary Experts', name: 'Food Gurus' },
              { icon: <Users size={32} />, role: 'Support', name: 'Customer Success' },
              { icon: <Heart size={32} />, role: 'Design', name: 'Pixel Perfectionists' }
            ].map((member, i) => (
              <motion.div 
                key={i} 
                className="team-member-card"
                whileHover={{ y: -10 }}
              >
                <div className="member-icon">{member.icon}</div>
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .about-header {
          padding: 180px 0 100px;
          background: var(--slate-50);
          text-align: center;
        }
        .about-header h1 {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
        }
        .about-header p {
          font-size: 1.25rem;
          color: var(--slate-600);
          max-width: 600px;
          margin: 0 auto;
        }
        .about-content {
          padding: 100px 0;
        }
        .story-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .story-card h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }
        .story-card p {
          font-size: 1.1rem;
          color: var(--slate-600);
          margin-bottom: 1.5rem;
          line-height: 1.7;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .stat-box {
          padding: 2rem;
          text-align: center;
          border-radius: 20px;
        }
        .stat-val {
          display: block;
          font-size: 2rem;
          font-weight: 800;
          color: var(--brand-500);
          margin-bottom: 0.5rem;
        }
        .stat-lab {
          color: var(--slate-600);
          font-weight: 500;
        }
        .team-section {
          padding: 100px 0;
          background: white;
        }
        .text-center { text-align: center; margin-bottom: 60px; }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .team-member-card {
          padding: 3rem 2rem;
          background: var(--slate-50);
          border-radius: 24px;
          text-align: center;
          border: 1px solid var(--slate-100);
        }
        .member-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          background: white;
          color: var(--brand-500);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
        }
        @media (max-width: 1024px) {
          .story-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
