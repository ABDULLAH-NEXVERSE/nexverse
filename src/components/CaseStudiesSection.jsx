'use client';

import { useState } from 'react';
import { ExternalLink, ArrowUpRight, X, Sparkles } from 'lucide-react';

export default function CaseStudiesSection() {
  const [selectedCase, setSelectedCase] = useState(null);

  const cases = [
    {
      id: 'cloud',
      title: 'Cloud',
      category: 'Brand Identity & Digital Platform',
      image: '/assets/work/cloud.webp',
      stats: [
        { label: 'Latency', value: '< 80ms' },
        { label: 'Conversion', value: '+142%' },
        { label: 'Scalability', value: '10M+ req' },
      ],
      description:
        'A complete brand transformation and cloud portal architecture engineered for high-availability enterprise services. Combining sleek typography with instantaneous data updates.',
      tags: ['Cloud Architecture', 'Next.js', 'Figma Design', 'Distributed Systems'],
      highlights: [
        'Custom interactive dashboard featuring real-time telemetry metrics',
        'End-to-end Figma UI/UX design translated into zero-latency components',
        'Global edge caching and automated load distribution',
      ],
    },
    {
      id: 'chain',
      title: 'Chain',
      category: 'Product Design & Web3 Infrastructure',
      image: '/assets/work/chain.webp',
      stats: [
        { label: 'Secured Vol', value: '$180M+' },
        { label: 'Audit Score', value: '100%' },
        { label: 'Active Users', value: '85k+' },
      ],
      description:
        'A robust decentralized protocol interface with high-density financial data charts, instant wallet synchronization, and intuitive risk governance controls.',
      tags: ['Web3 UI/UX', 'Smart Contract Integration', 'React', 'Real-Time Feeds'],
      highlights: [
        'Real-time WebSocket market depth rendering at 60fps',
        'Multi-wallet connection suite with biometric sign-in fallbacks',
        'Zero-trust cryptographic security verification workflows',
      ],
    },
    {
      id: 'flash',
      title: 'Flash',
      category: 'Creative Studio & High-Velocity Web',
      image: '/assets/work/flash.webp',
      stats: [
        { label: 'Lighthouse', value: '99/100' },
        { label: 'Session Time', value: '+3.4x' },
        { label: 'Bounce Rate', value: '-48%' },
      ],
      description:
        'A cinematic digital experience merging high-fidelity WebGL shader motion with seamless editorial readability for an elite global studio.',
      tags: ['WebGL 3D', 'GSAP Animation', 'Custom Headless CMS', 'Performance'],
      highlights: [
        'Curated micro-interactions synchronized with scroll dynamics',
        'Automated responsive image pipeline with WebP/AVIF compression',
        'Accessible keyboard navigation with zero motion-sickness jarring',
      ],
    },
  ];

  return (
    <section id="case-studies" className="site-wrapper section-spacing">
      {/* Header */}
      <div className="section-header" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div className="section-badge">
          <span className="badge-dot" />
          <span>Selected Works</span>
        </div>
        <h2 className="section-title">
          Proof in Production: <br />
          <span className="gradient-blue-cyan">Transformative Deliveries</span>
        </h2>
        <p className="section-desc">
          Every project represents our core ethos: rigorous software engineering combined with uncompromising visual elegance.
        </p>
      </div>

      {/* Case Studies Grid */}
      <div className="case-studies-grid">
        {cases.map((item) => (
          <div
            key={item.id}
            className="case-card glass-panel"
          >
            {/* Project Image Frame */}
            <div className="case-thumb-wrap">
              <img
                src={item.image}
                alt={item.title}
                className="case-thumb-img"
              />
              <div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '9999px',
                  background: 'rgba(9, 12, 20, 0.8)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-display)',
                  color: '#e2e8f0',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                {item.category}
              </div>
            </div>

            {/* Content Details */}
            <div className="case-body">
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '1rem' }}>
                  {item.description}
                </p>

                {/* Key Metrics Chips */}
                <div className="case-stats-row">
                  {item.stats.map((st, i) => (
                    <div key={i}>
                      <div className="case-stat-num">
                        {st.value}
                      </div>
                      <div className="case-stat-txt">
                        {st.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* View Study Button */}
              <button
                onClick={() => setSelectedCase(item)}
                className="glow-button-outline"
                style={{ width: '100%', padding: '0.65rem', fontSize: '0.85rem' }}
              >
                <span>Examine Architecture</span>
                <ArrowUpRight size={15} style={{ color: '#00f0ff' }} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Deep-Dive Modal */}
      {selectedCase && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div
            className="glass-panel"
            style={{
              width: '100%',
              maxWidth: '650px',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '2rem',
              position: 'relative',
              border: '1px solid rgba(0, 240, 255, 0.3)',
            }}
          >
            <button
              onClick={() => setSelectedCase(null)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#cbd5e1',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>

            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-display)', color: '#00f0ff', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {selectedCase.category}
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: '#ffffff', marginTop: '0.25rem' }}>
                {selectedCase.title}
              </h3>
            </div>

            <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '1.5rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <img
                src={selectedCase.image}
                alt={selectedCase.title}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {selectedCase.description}
            </p>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.75rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '0.75rem', letterSpacing: '0.08em' }}>
                Key Architectural Highlights
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {selectedCase.highlights.map((hl, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
                    <Sparkles size={16} style={{ color: '#00f0ff', flexShrink: 0, marginTop: '2px' }} />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              {selectedCase.tags.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-display)',
                    background: 'rgba(70, 142, 239, 0.12)',
                    border: '1px solid rgba(70, 142, 239, 0.3)',
                    color: '#93c5fd',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
