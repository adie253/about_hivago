import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "₹1,999",
    period: "/month",
    description: "Perfect for small cloud kitchens and pop-up stalls.",
    features: ["Order Management", "Basic Analytics", "Email Support", "1 Outlet"],
    buttonText: "Get Started",
    highlight: false
  },
  {
    name: "Growth",
    price: "₹4,999",
    period: "/month",
    description: "Best for growing restaurants with high order volume.",
    features: ["Advanced CRM", "Real-time Tracking", "Priority Support", "Up to 5 Outlets", "Inventory Tracking"],
    buttonText: "Most Popular",
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for restaurant chains and franchises.",
    features: ["Unlimited Outlets", "Dedicated Account Manager", "Custom API Access", "White-label Options"],
    buttonText: "Contact Sales",
    highlight: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Transparent <span className="text-gradient">Pricing</span>
          </motion.h2>
          <p>Choose the plan that fits your business needs. No hidden fees.</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`pricing-card ${plan.highlight ? 'highlighted' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {plan.highlight && <div className="popular-badge">Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className="price-container">
                <span className="price">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
              <p className="description">{plan.description}</p>
              
              <ul className="feature-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <Check size={18} className="check-icon" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`btn ${plan.highlight ? 'btn-primary' : 'btn-secondary'} w-full`}>
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .pricing {
          padding: 100px 0;
          background: var(--slate-50);
        }
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
          margin-top: 50px;
        }
        .pricing-card {
          background: white;
          padding: 3rem 2rem;
          border-radius: 24px;
          border: 1px solid var(--slate-200);
          position: relative;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
        }
        .pricing-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
        }
        .pricing-card.highlighted {
          border-color: var(--brand-500);
          box-shadow: 0 20px 50px rgba(215, 43, 31, 0.1);
        }
        .popular-badge {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--brand-500);
          color: white;
          padding: 0.5rem 1.25rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 700;
        }
        .pricing-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .price-container {
          margin-bottom: 1.5rem;
        }
        .price {
          font-size: 3rem;
          font-weight: 800;
          color: var(--slate-900);
        }
        .period {
          color: var(--slate-500);
          font-size: 1.1rem;
        }
        .description {
          color: var(--slate-600);
          margin-bottom: 2rem;
          font-size: 0.95rem;
        }
        .feature-list {
          list-style: none;
          margin-bottom: 2.5rem;
          flex-grow: 1;
        }
        .feature-list li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          color: var(--slate-700);
          font-weight: 500;
        }
        .check-icon {
          color: #10b981;
        }
        .w-full { width: 100%; }
      `}</style>
    </section>
  );
};

export default Pricing;
