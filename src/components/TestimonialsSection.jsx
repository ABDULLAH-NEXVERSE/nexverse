'use client';

import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Marcus Vance',
      role: 'Chief Technology Officer',
      company: 'Aether Capital',
      avatar: '/assets/testimonials/user-1.webp',
      quote:
        'Nexverse completely re-architected our legacy platform. The performance gains were immediate: 4x faster API responses, zero downtime during peak loads, and our engineering team loves the code structure.',
      rating: 5,
    },
    {
      name: 'Elena Rostova',
      role: 'Head of Product',
      company: 'HyperScale Web',
      avatar: '/assets/testimonials/user-2.webp',
      quote:
        'Finding a team that merges mathematical backend rigor with world-class design is nearly impossible. Nexverse delivered our web app ahead of schedule with flawless UX.',
      rating: 5,
    },
    {
      name: 'David Lin',
      role: 'Managing Director',
      company: 'OmniFlow Digital',
      avatar: '/assets/testimonials/user-3.webp',
      quote:
        'The bespoke automation workflow Nexverse built has eliminated hundreds of hours of manual client intake. Our sales team closes deals in half the time now.',
      rating: 5,
    },
    {
      name: 'Sarah Jenkins',
      role: 'VP of Marketing',
      company: 'Vertex Brand Media',
      avatar: '/assets/testimonials/user-4.webp',
      quote:
        'Our custom WordPress headless setup is blazing fast and completely secure. It gave our content editors complete freedom without touching a single line of backend code.',
      rating: 5,
    },
  ];

  return (
    <section id="about" className="site-wrapper section-spacing">
      <div className="section-header" style={{ textAlign: 'center', margin: '0 auto 3.5rem auto', maxWidth: '700px' }}>
        <div className="section-badge" style={{ justifyContent: 'center' }}>
          <span className="badge-dot" />
          <span>Client Voices & Trust</span>
        </div>
        <h2 className="section-title">
          Trusted by <span className="gradient-blue-cyan">Forward-Thinking Leaders</span>
        </h2>
        <p className="section-desc" style={{ margin: '0.75rem auto 0 auto' }}>
          Here is what technical founders, product heads, and enterprise executives say about building alongside Nexverse.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="testimonial-card glass-panel"
          >
            <div>
              {/* Star Rating */}
              <div style={{ display: 'flex', gap: '0.25rem', color: '#f59e0b', marginBottom: '1.25rem' }}>
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              {/* Quote */}
              <p style={{ color: '#e2e8f0', fontSize: '0.95rem', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '2rem' }}>
                "{t.quote}"
              </p>
            </div>

            {/* Author Info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div className="testimonial-avatar">
                <img
                  src={t.avatar}
                  alt={t.name}
                />
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#ffffff' }}>
                  {t.name}
                </h4>
                <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                  {t.role} • <span style={{ color: '#00f0ff' }}>{t.company}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
