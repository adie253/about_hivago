import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, BarChart3, Clock, ShieldCheck, Zap, Users } from 'lucide-react';

const features = [
  {
    icon: <LayoutDashboard size={28} />,
    title: "Intuitive Dashboard",
    description: "Manage everything from one place with a clean, modern interface designed for speed."
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Advanced Analytics",
    description: "Get deep insights into your sales, revenue, and customer behavior with real-time data."
  },
  {
    icon: <Clock size={28} />,
    title: "Live Order Tracking",
    description: "Track orders from the moment they are placed until they are delivered to your customers."
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Secure Payouts",
    description: "Experience hassle-free and secure payment processing with automated payout tracking."
  },
  {
    icon: <Zap size={28} />,
    title: "Automated Workflows",
    description: "Reduce manual effort with automation for status transitions and notification systems."
  },
  {
    icon: <Users size={28} />,
    title: "Staff Management",
    description: "Easily manage staff roles, permissions, and performance across all your outlets."
  }
];

const Features: React.FC = () => {
  return (
    <section id="services" className="features">
      <div className="container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Powerful Features for <span className="text-gradient">Growth</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Everything you need to take your restaurant business to the next level.
          </motion.p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="feature-card"
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .features {
          padding: 100px 0;
          background: white;
        }

        .section-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 60px;
        }

        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }

        .section-header p {
          color: var(--slate-600);
          font-size: 1.1rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
        }

        .feature-card {
          padding: 2.5rem;
          background: var(--slate-50);
          border-radius: 20px;
          transition: all 0.3s ease;
          border: 1px solid var(--slate-100);
        }

        .feature-card:hover {
          background: white;
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
          border-color: var(--brand-100);
        }

        .feature-icon {
          width: 60px;
          height: 60px;
          background: var(--brand-50);
          color: var(--brand-500);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          margin-bottom: 1.5rem;
          transition: all 0.3s ease;
        }

        .feature-card:hover .feature-icon {
          background: var(--brand-500);
          color: white;
          transform: rotate(10deg);
        }

        .feature-card h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--slate-900);
        }

        .feature-card p {
          color: var(--slate-600);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};

export default Features;
