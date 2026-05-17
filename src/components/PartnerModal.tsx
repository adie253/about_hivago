import React, { useState } from 'react';
import { X, ChevronLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Forms.css';

import { api, ApiError } from '@/lib/api';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PartnerModal: React.FC<PartnerModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    restaurantName: '',
    ownerName: '',
    whatsapp: '',
    city: '',
    dailyOrders: ''
  });
  const [shaking, setShaking] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const triggerShake = () => {
    setShaking(true);
    setTimeout(() => setShaking(false), 500);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.preventDefault();
    setValidationError(null);

    // Validation per step
    if (step === 1) {
      if (!formData.restaurantName || !formData.ownerName) {
        setValidationError("Please fill in both fields to continue.");
        triggerShake();
        return;
      }
    } else if (step === 2) {
      if (formData.whatsapp.length < 10) {
        setValidationError("Please enter a valid 10-digit WhatsApp number.");
        triggerShake();
        return;
      }
    } else if (step === 3) {
      if (!formData.city || !formData.dailyOrders) {
        setValidationError("Please select your city and order volume.");
        triggerShake();
        return;
      }
    }

    if (step < totalSteps) setStep(s => s + 1);
  };
  const handleBack = (e?: React.MouseEvent) => {
    e?.preventDefault();
    setValidationError(null);
    if (step > 1) setStep(s => s - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await api('/api/restaurant-leads', {
        method: 'POST',
        body: JSON.stringify({
          restaurantName: formData.restaurantName,
          ownerName: formData.ownerName,
          phone: formData.whatsapp, // Backend expects exactly 10 digits
          city: formData.city,
          dailyOrders: Number(formData.dailyOrders),
          source: 'landing_page'
        }),
      });
      setSuccess(true);
    } catch (err: any) {
      const msg = err instanceof ApiError ? err.body?.message : err.message;
      setError(msg || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setStep(1);
    setSuccess(false);
    setError(null);
    setFormData({
      restaurantName: '',
      ownerName: '',
      whatsapp: '',
      city: '',
      dailyOrders: ''
    });
    onClose();
  };

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const renderStep = () => {
    if (success) {
      return (
        <motion.div 
          key="success-step"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="step-content text-center py-8"
        >
          <div className="status-message success animate-fade-in flex-col gap-4 text-center">
            <div className="status-icon mx-auto">✓</div>
            <div>
              <h3 className="font-bold text-xl mb-2">Application Received!</h3>
              <p>We've received your partnership request for <strong>{formData.restaurantName}</strong>. Our team will reach out on WhatsApp shortly.</p>
            </div>
          </div>
          <button className="btn-primary mt-4" onClick={resetForm}>Close</button>
        </motion.div>
      );
    }

    switch (step) {
      case 1:
        return (
          <motion.div 
            key="partner-step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="step-content"
          >
            <h3 className="step-subtitle">Let's check your eligibility</h3>
            <div className="form-field">
              <label className="field-label">Restaurant Name *</label>
              <input 
                type="text" 
                className="form-input"
                placeholder="e.g. The Grand Kitchen"
                value={formData.restaurantName}
                onChange={(e) => updateField('restaurantName', e.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label className="field-label">Owner/Manager Name *</label>
              <input 
                type="text" 
                className="form-input"
                placeholder="e.g. Rahul Sharma"
                value={formData.ownerName}
                onChange={(e) => updateField('ownerName', e.target.value)}
                required
              />
            </div>
            <button 
              className="btn-primary form-submit mt-4" 
              onClick={handleNext}
            >
              Next <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </motion.div>
        );
      case 2:
        return (
          <motion.div 
            key="partner-step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="step-content"
          >
            <h3 className="step-subtitle">How do we reach you?</h3>
            <div className="form-field">
              <label className="field-label">WhatsApp Number *</label>
              <div className="phone-input-wrapper">
                <span className="country-code">+91</span>
                <input 
                  type="tel" 
                  className="form-input"
                  style={{ paddingLeft: '4rem' }}
                  placeholder="9876543210"
                  value={formData.whatsapp}
                  onChange={(e) => updateField('whatsapp', e.target.value.replace(/\D/g, "").slice(0, 10))}
                  required
                />
              </div>
              <p className="field-hint">We'll use this for all business communications</p>
            </div>
            <div className="step-actions">
              <button className="btn-modal-back" onClick={handleBack}>
                <ChevronLeft className="mr-1 w-4 h-4" /> Back
              </button>
              <button 
                className="btn-primary flex-1" 
                onClick={handleNext}
              >
                Continue
              </button>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div 
            key="partner-step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="step-content"
          >
            <h3 className="step-subtitle">Business Location</h3>
            <div className="form-field">
              <label className="field-label">City *</label>
              <div className="select-wrapper">
                <select 
                  className="form-input"
                  value={formData.city}
                  onChange={(e) => updateField('city', e.target.value)}
                  required
                >
                  <option value="">Select city</option>
                  <option value="Navi Mumbai">Navi Mumbai</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Pune">Pune</option>
                  <option value="Thane">Thane</option>
                </select>
              </div>
            </div>
            <div className="form-field">
              <label className="field-label">Average Daily Orders *</label>
              <div className="select-wrapper">
                <select 
                  className="form-input"
                  value={formData.dailyOrders}
                  onChange={(e) => updateField('dailyOrders', e.target.value)}
                  required
                >
                  <option value="">Select volume</option>
                  <option value="50">Up to 50 orders/day</option>
                  <option value="200">50–200 orders/day</option>
                  <option value="500">200–500 orders/day</option>
                  <option value="1000">500+ orders/day</option>
                </select>
              </div>
            </div>
            <div className="step-actions">
              <button className="btn-modal-back" onClick={handleBack}>
                <ChevronLeft className="mr-1 w-4 h-4" /> Back
              </button>
              <button 
                className="btn-primary flex-1" 
                onClick={handleNext}
              >
                Continue
              </button>
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div 
            key="partner-step4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="step-content"
          >
            <div className="summary-header">
              <div className="success-badge">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="step-subtitle mb-1">Verify details</h3>
              <p className="consent-text">Please review your information before submitting.</p>
            </div>
            
            <div className="summary-card">
              <div className="summary-row"><span>Restaurant:</span> <strong>{formData.restaurantName || '--'}</strong></div>
              <div className="summary-row"><span>Owner:</span> <strong>{formData.ownerName || '--'}</strong></div>
              <div className="summary-row"><span>WhatsApp:</span> <strong>+91 {formData.whatsapp || '--'}</strong></div>
              <div className="summary-row"><span>City:</span> <strong>{formData.city || '--'}</strong></div>
              <div className="summary-row"><span>Daily Orders:</span> <strong>{formData.dailyOrders || '--'}</strong></div>
            </div>

            {error && (
              <div className="status-message error mb-4 py-3 text-sm animate-shake">
                {error}
              </div>
            )}

            <div className="step-actions">
              <button className="btn-modal-back" onClick={handleBack} disabled={loading}>
                Back
              </button>
              <button 
                className="btn-primary flex-[2]" 
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? <div className="spinner mx-auto" /> : 'Join Partner Waitlist'}
              </button>
            </div>
          </motion.div>
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
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <button className="modal-close" onClick={resetForm}>
                <X size={20} />
              </button>

              <div className="modal-header">
                <h2 className="modal-title">Partner with HIVAGO</h2>
                {!success && (
                  <div className="progress-container">
                    <div className="progress-text">
                      <span>Step {step} of {totalSteps}</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                    <div className="progress-bar-bg">
                      <motion.div 
                        className="progress-bar-fill" 
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className={`modal-body overflow-hidden ${shaking ? 'animate-shake' : ''}`}>
                {validationError && (
                  <div className="validation-tip animate-fade-in">
                    {validationError}
                  </div>
                )}
                <AnimatePresence mode="wait">
                  {renderStep()}
                </AnimatePresence>
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

        .modal-title {
          font-family: var(--font-serif);
          font-size: 2.25rem;
          font-weight: 700;
          color: var(--text-main);
          letter-spacing: -0.02em;
        }

        .progress-container {
          margin-top: 1.5rem;
        }

        .progress-text {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 0.6rem;
          font-weight: 700;
        }

        .progress-bar-bg {
          height: 8px;
          background: #f1f5f9;
          border-radius: 10px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background: var(--brand-red);
          border-radius: 10px;
        }

        .step-subtitle {
          font-family: var(--font-serif);
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .phone-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .country-code {
          position: absolute;
          left: 1rem;
          font-weight: 600;
          color: var(--text-muted);
          font-size: 0.95rem;
          padding-right: 0.5rem;
          border-right: 1.5px solid var(--border-color);
        }

        .field-hint {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 0.5rem;
          font-style: italic;
        }

        .summary-header {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .success-badge {
          display: flex;
          justify-content: center;
          margin-bottom: 0.75rem;
        }

        .consent-text {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .summary-card {
          background: #f8fafc;
          padding: 1.5rem;
          border-radius: 1.25rem;
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
          border: 1px solid #e2e8f0;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.95rem;
          color: var(--text-main);
        }

        .summary-row span {
          color: var(--text-muted);
          font-weight: 500;
        }

        .summary-row strong {
          font-weight: 600;
          color: var(--text-main);
        }

        .step-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .btn-modal-back {
          flex: 1;
          background: white;
          color: var(--text-main);
          border: 1.5px solid var(--border-color);
          padding: 0.875rem;
          border-radius: 0.75rem;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .btn-modal-back:hover {
          background: #f8fafc;
          border-color: var(--text-light);
        }

        .overflow-hidden {
          overflow: hidden;
        }

        @media (max-width: 600px) {
          .modal-container {
            padding: 2rem 1.25rem;
          }
          .modal-title {
            font-size: 1.75rem;
          }
          .step-subtitle {
            font-size: 1.5rem;
          }
        }
        .validation-tip {
          background: #fef2f2;
          color: #ef4444;
          padding: 0.6rem 1rem;
          border-radius: 0.5rem;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1rem;
          border-left: 3px solid #ef4444;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          50% { transform: translateX(8px); }
          75% { transform: translateX(-8px); }
        }

        .animate-shake {
          animation: shake 0.4s ease-in-out;
        }
      `}</style>
    </AnimatePresence>
  );
};

export default PartnerModal;
