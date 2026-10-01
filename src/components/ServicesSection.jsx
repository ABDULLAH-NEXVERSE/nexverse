'use client';

import { Code2, Smartphone, Globe, Cog, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ServicesSection({ onOpenInquiry }) {
  const services = [
    {
      id: '01',
      title: 'Bespoke Software Solutions',
      icon: Code2,
      subtitle: 'Engineered for Scale & Resilience',
      description:
        'Custom enterprise software architectures tailored precisely to your operational workflows, eliminating legacy debt and ensuring limitless scalability.',
      features: [
        'Custom Distributed Backends & Microservices',
        'High-Throughput REST & GraphQL APIs',
        'Database Optimization & Cloud Clustering',
        'Enterprise Security & Role-Based Access Control',
      ],
      tag: 'Core Engineering',
    },
    {
      id: '02',
      title: 'Web & Mobile App Development',
      icon: Smartphone,
      subtitle: 'Visually Stunning & Ultra-Fast',
      description:
        'Transforming product concepts into award-winning digital experiences with reactive state management, offline sync, and sub-second load times.',
      features: [
        'Full-Stack Next.js & React Ecosystems',
        'Cross-Platform iOS & Android Native Experiences',
        'Real-Time WebSocket Collaboration Engines',
        'Awwwards-Caliber Micro-Interactions',
      ],
      tag: 'Product Development',
    },
    {
      id: '03',
      title: 'Custom WordPress & Headless CMS',
      icon: Globe,
      subtitle: 'Empowering Content Teams Without Bloat',
      description:
        'Say goodbye to slow, bloated templates. We build bespoke Gutenberg blocks, custom post-type architectures, and decoupled headless WordPress engines.',
      features: [
        'Zero-Bloat Bespoke Themes & Plugins',
        'Decoupled Headless WordPress via REST / GraphQL',
        'Bulletproof Security Hardening & Caching',
        'Figma to Pixel-Perfect Implementation',
      ],
      tag: 'CMS Mastery',
    },
    {
      id: '04',
      title: 'Automation & E-Commerce Innovations',
      icon: Cog,
      subtitle: 'Lead Engines & Smart Checkout',
      description:
        'Streamline client acquisition and revenue operations with automated intake forms, dynamic invoicing pipelines, and zero-friction e-commerce journeys.',
      features: [
        'Automated Invoicing & Instant Receipt Dispatch',
        'Lead Capture Funnels & CRM Sync',
        'High-Conversion E-Commerce Checkouts',
        'Custom Webhooks & Multi-System Orchestration',
      ],
      tag: 'Operations & Growth',
    },
  ];

  return (
    <section id="services" className="site-wrapper section-spacing">
      {/* Header */}
      <div className="section-header" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div className="section-badge">
          <span className="badge-dot" />
          <span>Capabilities & Offerings</span>
        </div>
        <h2 className="section-title">
          Specialized Engineering for <br />
          <span className="gradient-blue-cyan">Next-Generation Demands</span>
        </h2>
        <p className="section-desc">
          From mission-critical backend architecture to high-touch consumer apps, we deliver bespoke solutions that solve complex technical hurdles.
        </p>
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="service-card glass-panel"
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div className="service-icon-wrap">
                    <Icon size={24} />
                  </div>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', color: '#64748b' }}>
                    // {service.id}
                  </span>
                </div>

                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-display)', color: '#468eef', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {service.tag}
                </div>

                <h3 className="service-title">
                  {service.title}
                </h3>

                <p className="service-desc">
                  {service.description}
                </p>

                {/* Features List */}
                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', marginBottom: '1.75rem' }}>
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="service-feature-item">
                      <CheckCircle2 size={16} style={{ color: '#00f0ff', flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenInquiry}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#468eef',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  padding: 0,
                  alignSelf: 'flex-start',
                }}
              >
                <span>Scope this service</span>
                <ArrowRight size={14} />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
