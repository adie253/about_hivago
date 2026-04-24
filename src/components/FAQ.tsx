import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How quickly can we get started with Hivago?",
    answer: "You can be up and running in less than 24 hours. Our onboarding team will help you import your menu and set up your outlet settings immediately."
  },
  {
    question: "Does Hivago integrate with existing POS systems?",
    answer: "Yes, Hivago offers seamless integration with most major POS systems. If you use a custom setup, our API allows for easy connection."
  },
  {
    question: "What kind of hardware do I need?",
    answer: "Hivago is platform-agnostic. You can run it on any tablet (iOS/Android), laptop, or even your smartphone. No expensive proprietary hardware required."
  },
  {
    question: "How do payouts work?",
    answer: "Payouts are automated and can be scheduled daily, weekly, or monthly. You'll receive a detailed breakdown of every transaction in your dashboard."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq">
      <div className="container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <button 
                className={`faq-question ${openIndex === i ? 'active' : ''}`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{faq.question}</span>
                {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="faq-answer"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .faq {
          padding: 100px 0;
          background: var(--slate-50);
        }
        .faq-list {
          max-width: 800px;
          margin: 40px auto 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .faq-item {
          background: white;
          border-radius: 16px;
          border: 1px solid var(--slate-200);
          overflow: hidden;
        }
        .faq-question {
          width: 100%;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 600;
          font-size: 1.1rem;
          color: var(--slate-900);
          text-align: left;
          background: none;
          border: none;
        }
        .faq-question.active {
          color: var(--brand-500);
        }
        .faq-answer {
          padding: 0 2rem 1.5rem;
          color: var(--slate-600);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};

export default FAQ;
