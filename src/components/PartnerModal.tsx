import React, { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PartnerModal: React.FC<PartnerModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    restaurantName: '',
    ownerName: '',
    whatsapp: '+91',
    city: '',
    dailyOrders: ''
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => setStep(s => Math.min(s + 1, totalSteps));
  const handleBack = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Final Data:', formData);
    // Handle submission logic
    onClose();
    setStep(1); // Reset for next time
  };

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="step-content">
            <h3 className="step-subtitle">Let's check your eligibility</h3>
            <div className="form-group">
              <label>Restaurant Name *</label>
              <input 
                type="text" 
                placeholder="Enter your restaurant name"
                value={formData.restaurantName}
                onChange={(e) => updateField('restaurantName', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Owner/Manager Name *</label>
              <input 
                type="text" 
                placeholder="Enter your name"
                value={formData.ownerName}
                onChange={(e) => updateField('ownerName', e.target.value)}
              />
            </div>
            <button className="btn-modal-next mt-4" onClick={handleNext}>Next</button>
          </div>
        );
      case 2:
        return (
          <div className="step-content">
            <h3 className="step-subtitle">How do we reach you?</h3>
            <div className="form-group">
              <label>WhatsApp Number *</label>
              <input 
                type="tel" 
                value={formData.whatsapp}
                onChange={(e) => updateField('whatsapp', e.target.value)}
              />
              <p className="field-hint">We'll use this to stay in touch</p>
            </div>
            <div className="step-actions">
              <button className="btn-modal-back" onClick={handleBack}>Back</button>
              <button className="btn-modal-next" onClick={handleNext}>Continue</button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="step-content">
            <h3 className="step-subtitle">Tell us about your business</h3>
            <div className="form-group">
              <label>City *</label>
              <div className="select-wrapper">
                <select 
                  value={formData.city}
                  onChange={(e) => updateField('city', e.target.value)}
                >
                  <option value="">Select city</option>
                  <option value="Airoli, Navi Mumbai">Airoli, Navi Mumbai</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Pune">Pune</option>
                </select>
                <ChevronDown className="select-icon" size={18} />
              </div>
            </div>
            <div className="form-group">
              <label>Average Daily Orders *</label>
              <input 
                type="number" 
                placeholder="e.g., 50"
                value={formData.dailyOrders}
                onChange={(e) => updateField('dailyOrders', e.target.value)}
              />
            </div>
            <div className="step-actions">
              <button className="btn-modal-back" onClick={handleBack}>Back</button>
              <button className="btn-modal-next" onClick={handleNext}>Continue</button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="step-content">
            <h3 className="step-subtitle">Ready to join?</h3>
            <p className="consent-text">By clicking, you agree to join the HIVAGO waitlist.</p>
            
            <div className="summary-card">
              <div className="summary-row"><span>Restaurant:</span> <strong>{formData.restaurantName || '--'}</strong></div>
              <div className="summary-row"><span>Owner:</span> <strong>{formData.ownerName || '--'}</strong></div>
              <div className="summary-row"><span>WhatsApp:</span> <strong>{formData.whatsapp}</strong></div>
              <div className="summary-row"><span>City:</span> <strong>{formData.city || '--'}</strong></div>
              <div className="summary-row"><span>Daily Orders:</span> <strong>{formData.dailyOrders || '--'}</strong></div>
            </div>

            <div className="step-actions">
              <button className="btn-modal-back" onClick={handleBack}>Back</button>
              <button className="btn-modal-next" onClick={handleSubmit}>Send Application</button>
            </div>
          </div>
        );
      default:
        return null;
    }
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
              className="modal-container partner-modal"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
            >
              <button className="modal-close" onClick={onClose}>
                <X size={20} />
              </button>

              <div className="modal-header">
                <h2 className="modal-title">Partner with HIVAGO</h2>
                <div className="progress-container">
                  <div className="progress-text">
                    <span>Step {step} of {totalSteps}</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="progress-bar-bg">
                    <motion.div 
                      className="progress-bar-fill" 
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>

              {renderStep()}
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
          background: white;
          border-radius: 1.5rem;
          padding: 2.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          pointer-events: auto;
        }

        .partner-modal {
          max-width: 520px;
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
          z-index: 10;
        }

        .modal-close:hover {
          color: var(--text-main);
        }

        .modal-header {
          margin-bottom: 2rem;
        }

        .progress-container {
          margin-top: 1rem;
        }

        .progress-text {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .progress-bar-bg {
          height: 6px;
          background: #e2e8f0;
          border-radius: 3px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background: var(--brand-red);
          border-radius: 3px;
        }

        .step-subtitle {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-main);
          margin-bottom: 1.5rem;
        }

        .field-hint {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
        }

        .consent-text {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }

        .summary-card {
          background: #f8fafc;
          padding: 1.5rem;
          border-radius: 1rem;
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.95rem;
          color: var(--text-main);
        }

        .summary-row span {
          color: var(--text-muted);
        }

        .step-actions {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }

        .btn-modal-next {
          width: 100%;
          background: var(--brand-red);
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 0.75rem;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-modal-next:hover {
          background: #b91c1c;
        }

        .btn-modal-back {
          flex: 1;
          background: white;
          color: var(--text-main);
          border: 1px solid var(--border-color);
          padding: 1rem;
          border-radius: 0.75rem;
          font-weight: 600;
          cursor: pointer;
        }

        .btn-modal-back:hover {
          background: #f8fafc;
        }

        .select-wrapper {
          position: relative;
        }

        .select-wrapper select {
          width: 100%;
          padding: 0.875rem 1rem;
          border: 1px solid var(--border-color);
          border-radius: 0.75rem;
          appearance: none;
          background: #f8fafc;
          font-size: 1rem;
        }

        .select-icon {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          color: var(--text-muted);
        }

        @media (max-width: 600px) {
          .modal-container {
            padding: 2rem 1.5rem;
          }
          .modal-title {
            font-size: 1.75rem;
          }
          .step-subtitle {
            font-size: 1.25rem;
          }
          .summary-card {
            padding: 1rem;
          }
          .summary-row {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </AnimatePresence>
  );
};

export default PartnerModal;
