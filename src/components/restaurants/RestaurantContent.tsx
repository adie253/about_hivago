import React from 'react';

// Shared wrapper component
const ContentBlock: React.FC<{ heading: string, bgClass: string, children: React.ReactNode }> = ({ heading, bgClass, children }) => (
  <section className={`section-padding ${bgClass}`}>
    <div className="container">
      <div className="max-w-3xl mx-auto">
        <h2 className="heading-lg mb-6" style={{ fontSize: '2.25rem' }}>{heading}</h2>
        <div className="content-prose text-lg text-muted">
          {children}
        </div>
      </div>
    </div>
    <style>{`
      .content-prose p {
        margin-bottom: 1.5rem;
        line-height: 1.625;
      }
      .content-prose ul {
        margin-bottom: 1.5rem;
        padding-left: 1.5rem;
      }
      .content-prose li {
        margin-bottom: 0.5rem;
        position: relative;
      }
      .content-prose li::marker {
        color: var(--brand-red);
      }
      .text-brand-red {
        color: var(--brand-red);
      }
      .font-bold {
        font-weight: 700;
      }
    `}</style>
  </section>
);

export const FAQ1 = () => (
  <ContentBlock heading="Is this just another aggregator?" bgClass="bg-white">
    <p>No. HIVAGO is fundamentally different in how we approach the restaurant-platform relationship.</p>
    <p>Traditional aggregators make money by taking a percentage of your revenue, pushing you to offer deep discounts, and controlling customer data. Their business model requires maximizing commissions per order.</p>
    <p><span className="text-brand-red font-bold">HIVAGO makes money through transparent, fixed commercials</span> — not by inflating commissions or forcing you into a continuous cycle of deep discounts. You get a platform, you get delivery, and your customers remain yours.</p>
    <p>We succeed when you succeed sustainably, not when you're squeezed for maximum margin.</p>
  </ContentBlock>
);

export const FAQ2 = () => (
  <ContentBlock heading="What happens at scale?" bgClass="bg-white">
    <p>This is the reality every restaurant owner knows too well — until they don't. At first, volume feels like a win.</p>
    <p>Traditional aggregators often drive more orders but shrinking margins. As they grow, they demand more in commissions, push heavier discounts, and tighten controls over pricing and customer relationships.</p>
    <p><span className="text-brand-red font-bold">HIVAGO's model is built for sustainable scale.</span> Our commercials are transparent, and fixed. As you grow, we don't extract more from your success — we help you grow profitably.</p>
    <p>We're launching city by city, with selected partners who prioritize quality and sustainability over aggressive expansion.</p>
  </ContentBlock>
);

export const FAQ3 = () => (
  <ContentBlock heading="Will this actually bring orders?" bgClass="bg-bg-secondary">
    <p>Honest answer: Not immediately at the volume of established platforms.</p>
    <p>HIVAGO is starting locally and building a community of food lovers who care about where their food comes from, fair pricing, and supporting restaurants directly.</p>
    <p className="font-bold" style={{ color: 'var(--brand-red)' }}>What we promise:</p>
    <ul>
      <li>Every order you receive is profitable for you</li>
      <li>Customers who care about food quality, not just discounts</li>
      <li>A fair relationship where your brand is the hero</li>
      <li>Transparent data and full control over your delivery channel</li>
    </ul>
    <p>HIVAGO is for restaurants willing to build delivery the right way — sustainably and profitably — even if it means starting with fewer orders that actually help your business.</p>
  </ContentBlock>
);

export const FAQ4 = () => (
  <ContentBlock heading="Is there any lock-in?" bgClass="bg-white">
    <p><span className="text-brand-red font-bold">No contracts. No commitments. No penalties.</span></p>
    <p>We don't lock you in. We believe in doing things right — helping you grow profitably without exploitation — you'll want to stay.</p>
    <p>Traditional platforms lock you in and extract more as you rely on them. HIVAGO works for you as long as it makes sense for your business.</p>
    <p>HIVAGO earns your business every single day by being fair, transparent, and aligned with your success.</p>
  </ContentBlock>
);
