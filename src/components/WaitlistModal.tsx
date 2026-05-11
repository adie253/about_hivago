import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WaitlistForm } from './WaitlistForm';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
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
                {/* <h2 className="modal-title">Join the waitlist</h2>
                <p className="modal-subtitle">
                  Be the first to know when HIVAGO launches in your city.
                </p> */}

                <div className="mt-4">
                  <WaitlistForm source="modal" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      <style>{`
        /* Keep existing modal styles but remove specific form group styles since they are in Forms.css */
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
          max-width: 520px;
          background: white;
          border-radius: 1.5rem;
          padding: 2.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          pointer-events: auto;
        }

        .modal-container .card {
          box-shadow: none;
          padding: 0;
          background: transparent;
          backdrop-filter: none;
          border: none;
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
          margin-bottom: 1rem;
          line-height: 1.5;
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
