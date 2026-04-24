import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Eye } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-image"
          >
            <div className="image-stack">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800" 
                alt="Restaurant interior" 
                className="img-main"
              />
              <div className="img-overlay glass animate-float">
                <Heart className="heart-icon" fill="var(--brand-500)" />
                <span>Loved by 500+ Restaurateurs</span>
              </div>
            </div>
          </motion.div>

          <div className="about-text">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Who We <span className="text-gradient">Are</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Hivago was born out of a simple observation: managing a restaurant is hard, 
              but it doesn't have to be complicated. We are a team of tech enthusiasts 
              and foodies dedicated to empowering kitchen owners with elite tools.
            </motion.p>

            <div className="values">
              <motion.div 
                className="value-item"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="value-icon"><Target size={20} /></div>
                <div>
                  <h4>Our Mission</h4>
                  <p>To digitize and optimize every kitchen operation worldwide.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="value-item"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="value-icon"><Eye size={20} /></div>
                <div>
                  <h4>Our Vision</h4>
                  <p>A future where restaurant growth is limited only by imagination, not technology.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 100px 0;
          overflow: hidden;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        .about-image {
          position: relative;
        }

        .image-stack {
          position: relative;
          padding-right: 40px;
          padding-bottom: 40px;
        }

        .img-main {
          width: 100%;
          border-radius: 30px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.1);
        }

        .img-overlay {
          position: absolute;
          bottom: 20px;
          right: 0;
          padding: 1.5rem;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 1rem;
          font-weight: 600;
        }

        .heart-icon {
          color: var(--brand-500);
        }

        .about-text h2 {
          font-size: 3rem;
          margin-bottom: 2rem;
        }

        .about-text p {
          font-size: 1.15rem;
          color: var(--slate-600);
          margin-bottom: 3rem;
          line-height: 1.7;
        }

        .values {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .value-item {
          display: flex;
          gap: 1.5rem;
        }

        .value-icon {
          width: 48px;
          height: 48px;
          min-width: 48px;
          background: var(--brand-50);
          color: var(--brand-500);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
        }

        .value-item h4 {
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
        }

        .value-item p {
          font-size: 1rem;
          margin-bottom: 0;
        }

        @media (max-width: 1024px) {
          .about-grid { grid-template-columns: 1fr; gap: 4rem; }
          .about-text { text-align: center; }
          .value-item { text-align: left; }
          .about-image { max-width: 600px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
