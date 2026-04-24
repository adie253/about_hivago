import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Get in <span className="text-gradient">Touch</span>
            </motion.h2>
            <p>Ready to revolutionize your restaurant? Our team is here to help you get started.</p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon"><Mail size={20} /></div>
                <div>
                  <h4>Email Us</h4>
                  <p>hello@hivago.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Phone size={20} /></div>
                <div>
                  <h4>Call Us</h4>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><MapPin size={20} /></div>
                <div>
                  <h4>Visit Us</h4>
                  <p>123 Tech Park, HSR Layout, Bengaluru, India</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            className="contact-form-container glass"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="contact-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Tell us about your restaurant..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact {
          padding: 100px 0;
          background: white;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 5rem;
          align-items: center;
        }
        .contact-info h2 {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }
        .contact-info p {
          color: var(--slate-600);
          font-size: 1.1rem;
          margin-bottom: 3rem;
        }
        .info-items {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .info-item {
          display: flex;
          gap: 1.25rem;
        }
        .info-icon {
          width: 48px;
          height: 48px;
          background: var(--brand-50);
          color: var(--brand-500);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
        }
        .info-item h4 {
          margin-bottom: 0.25rem;
        }
        .info-item p {
          margin-bottom: 0;
          font-size: 0.95rem;
        }
        .contact-form-container {
          padding: 3rem;
          border-radius: 24px;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .form-group label {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--slate-700);
        }
        .form-group input, .form-group textarea {
          padding: 0.8rem 1rem;
          border-radius: 10px;
          border: 1px solid var(--slate-200);
          background: var(--slate-50);
          font-family: inherit;
          transition: all 0.3s ease;
        }
        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--brand-500);
          outline: none;
          background: white;
          box-shadow: 0 0 0 4px var(--brand-50);
        }
        .form-group textarea {
          min-height: 120px;
          resize: vertical;
        }
        @media (max-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr; }
          .contact-info { text-align: center; }
          .info-items { align-items: center; }
          .info-item { text-align: left; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
