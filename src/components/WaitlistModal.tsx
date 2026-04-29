import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission logic here
    console.log('Submitted:', { email, whatsapp });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-root">
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <div className="modal-wrapper">
            <motion.div
              className="modal-container"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <button className="modal-close" onClick={onClose}>
                <X size={20} />
              </button>

              <div className="modal-content">
                <h2 className="modal-title">Join the waitlist</h2>
                <p className="modal-subtitle">
                  Be the first to know when HIVAGO launches in your city.
                </p>

                <form onSubmit={handleSubmit} className="modal-form">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="you@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="whatsapp">WhatsApp Number *</label>
                    <input
                      type="tel"
                      id="whatsapp"
                      placeholder="+91XXXXXXXXXX"
                      required
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn-submit">
                    Notify me when HIVAGO launches in my city
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      <style>{`
        .modal-root {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(4px);
        }

        .modal-wrapper {
          position: relative;
          z-index: 1001;
          width: 100%;
          display: flex;
          justify-content: center;
          pointer-events: none;
        }

        .modal-container {
          position: relative;
          width: 90%;
          max-width: 480px;
          background: white;
          border-radius: 1.5rem;
          padding: 2.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          pointer-events: auto;
        }

        .modal-close {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .modal-close:hover {
          color: var(--text-main);
        }

        .modal-title {
          font-family: var(--font-serif);
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 0.75rem;
        }

        .modal-subtitle {
          font-size: 1.05rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
          line-height: 1.5;
        }

        .modal-form {
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
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .form-group input {
          width: 100%;
          padding: 0.875rem 1rem;
          border: 1px solid var(--border-color);
          border-radius: 0.75rem;
          font-size: 1rem;
          transition: all 0.2s ease;
          background-color: #f8fafc;
        }

        .form-group input:focus {
          outline: none;
          border-color: var(--brand-red);
          background-color: white;
          box-shadow: 0 0 0 4px rgba(215, 43, 31, 0.1);
        }

        .btn-submit {
          width: 100%;
          background-color: var(--brand-red);
          color: white;
          border: none;
          border-radius: 0.75rem;
          padding: 1rem;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-top: 0.5rem;
        }

        .btn-submit:hover {
          background-color: #b91c1c;
          transform: translateY(-1px);
        }

        @media (max-width: 480px) {
          .modal-container {
            padding: 2rem 1.5rem;
          }
          .modal-title {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </AnimatePresence>
  );
};

export default WaitlistModal;
