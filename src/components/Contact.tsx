import React from 'react';
import { Mail, MessageCircle, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="section-padding bg-bg-secondary" id="contact">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4" style={{ fontSize: '2.25rem' }}>Talk to us</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out to our team.
          </p>
        </div>

        <div className="grid-3" id="partner">
          {/* Email Card */}
          <a href="mailto:partner@hivago.in" className="contact-card">
            <div className="contact-icon mb-4" style={{ color: 'var(--brand-red)', backgroundColor: '#fee2e2' }}>
              <Mail size={24} />
            </div>
            <h3 className="font-bold text-xl mb-2">Email Us</h3>
            <p className="text-muted mb-4">For general inquiries and support.</p>
            <span className="contact-link" style={{ color: 'var(--brand-red)' }}>partner@hivago.in</span>
          </a>

          {/* WhatsApp Card */}
          <a href="https://wa.me/917506186080" className="contact-card">
            <div className="contact-icon mb-4" style={{ color: '#16a34a', backgroundColor: '#dcfce7' }}>
              <MessageCircle size={24} />
            </div>
            <h3 className="font-bold text-xl mb-2">WhatsApp</h3>
            <p className="text-muted mb-4">Chat directly with our onboarding team.</p>
            <span className="contact-link" style={{ color: '#16a34a' }}>Message Us</span>
          </a>

          {/* Location Card */}
          <div className="contact-card">
            <div className="contact-icon mb-4" style={{ color: '#4b5563', backgroundColor: '#f3f4f6' }}>
              <MapPin size={24} />
            </div>
            <h3 className="font-bold text-xl mb-2">Our Office</h3>
            <p className="text-muted mb-4">Come visit us for an in-person chat.</p>
            <span className="contact-link text-muted">Bengaluru, India</span>
          </div>
        </div>
      </div>

      <style>{`
        .contact-card {
          background-color: white;
          padding: 2.5rem 2rem;
          border-radius: 1rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          text-align: center;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .contact-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .contact-icon {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-link {
          font-weight: 600;
          margin-top: auto;
        }
      `}</style>
    </section>
  );
};

export default Contact;
