'use client';

import { ArrowUp, Mail } from 'lucide-react';

export default function Footer({ onOpenInquiry }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="site-wrapper">
        <div className="footer-top-grid">
          {/* Brand Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
              <img
                src="/assets/logos/nexverse-logo.png"
                alt="Nexverse"
                style={{ height: '30px', width: 'auto', display: 'block' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>
                NEX<span style={{ color: '#468eef' }}>VERSE</span>
              </span>
            </a>

            <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.6, maxWidth: '360px' }}>
              We are not just a software development company; we are architects of the digital future. Engineering bespoke digital solutions, high-performance web apps, and automated workflows.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '0.5rem' }}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="glass-pill"
                style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a
                href="mailto:contact@nexverse.co.uk"
                className="glass-pill"
                style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Column: Architecture */}
          <div>
            <h4 style={{ fontSize: '0.75rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', color: '#ffffff', letterSpacing: '0.08em', marginBottom: '1rem' }}>
              Architecture
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem' }}>
              <a href="#architecture" style={{ color: '#94a3b8', textDecoration: 'none' }}>Interactive Core</a>
              <a href="#services" style={{ color: '#94a3b8', textDecoration: 'none' }}>Bespoke Software</a>
              <a href="#services" style={{ color: '#94a3b8', textDecoration: 'none' }}>Cloud Infrastructure</a>
              <a href="#tech" style={{ color: '#94a3b8', textDecoration: 'none' }}>Technology Stack</a>
            </div>
          </div>

          {/* Column: Works */}
          <div>
            <h4 style={{ fontSize: '0.75rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', color: '#ffffff', letterSpacing: '0.08em', marginBottom: '1rem' }}>
              Case Studies
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem' }}>
              <a href="#case-studies" style={{ color: '#94a3b8', textDecoration: 'none' }}>Cloud (Brand Platform)</a>
              <a href="#case-studies" style={{ color: '#94a3b8', textDecoration: 'none' }}>Chain (Web3 Interface)</a>
              <a href="#case-studies" style={{ color: '#94a3b8', textDecoration: 'none' }}>Flash (Creative Studio)</a>
              <a href="#about" style={{ color: '#94a3b8', textDecoration: 'none' }}>Client Testimonials</a>
            </div>
          </div>

          {/* Column: Action */}
          <div>
            <h4 style={{ fontSize: '0.75rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', color: '#ffffff', letterSpacing: '0.08em', marginBottom: '1rem' }}>
              Initiate
            </h4>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.5, marginBottom: '1rem' }}>
              Have an ambitious challenge? Let's shape the digital future together.
            </p>
            <button
              onClick={onOpenInquiry}
              className="glow-button"
              style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem', width: '100%' }}
            >
              Launch Project Brief
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} Nexverse Ltd. All Rights Reserved. Crafted with Next.js, Three.js & GSAP.</p>

          <button
            onClick={scrollToTop}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#94a3b8',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-display)',
            }}
          >
            <span>Back to apex</span>
            <ArrowUp size={14} style={{ color: '#00f0ff' }} />
          </button>
        </div>
      </div>
    </footer>
  );
}
