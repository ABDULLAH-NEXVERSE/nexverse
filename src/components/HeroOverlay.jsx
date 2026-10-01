'use client';

import { ArrowRight, Terminal, ShieldCheck, Zap } from 'lucide-react';

export default function HeroOverlay({ onOpenInquiry }) {
  const scrollToExplore = () => {
    const el = document.getElementById('architecture');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-wrapper site-wrapper">
      {/* Status Pill */}
      <div className="hero-pill-badge">
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
        <span style={{ color: '#cbd5e1' }}>Accepting Q4 / Q1 Flagship Partnerships</span>
        <span style={{ color: '#468eef', fontWeight: 600 }}>• London, UK & Global</span>
      </div>

      {/* Main Headline */}
      <h1 className="hero-headline">
        Architects of the{' '}
        <span className="hero-headline-accent gradient-blue-cyan">
          Digital Future
          <svg
            className="hero-curve-svg"
            viewBox="0 0 500 30"
            preserveAspectRatio="none"
          >
            <path
              d="M10,20 Q250,5 490,20"
              fill="none"
              stroke="#468eef"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </h1>

      <p className="hero-subtext">
        We engineer bespoke enterprise software, mission-critical cloud infrastructure, and transformative digital experiences that redefine industry boundaries.
      </p>

      {/* Primary CTA Buttons */}
      <div className="hero-cta-group">
        <button
          onClick={onOpenInquiry}
          className="glow-button"
        >
          <span>Start Your Build</span>
          <ArrowRight size={18} />
        </button>

        <button
          onClick={scrollToExplore}
          className="glow-button-outline"
        >
          <Terminal size={17} style={{ color: '#468eef' }} />
          <span>Explore Architecture</span>
        </button>
      </div>

      {/* Verified Heritage Metrics Bar */}
      <div className="hero-metrics-grid">
        <div className="metric-box glass-panel">
          <div className="metric-val">
            2008<span style={{ color: '#468eef' }}>+</span>
          </div>
          <div className="metric-lbl">
            Heritage & Innovation
          </div>
        </div>

        <div className="metric-box glass-panel">
          <div className="metric-val">
            150<span style={{ color: '#00f0ff' }}>+</span>
          </div>
          <div className="metric-lbl">
            Deployments Shipped
          </div>
        </div>

        <div className="metric-box glass-panel">
          <div className="metric-val">
            99.98<span style={{ color: '#468eef' }}>%</span>
          </div>
          <div className="metric-lbl">
            System Reliability
          </div>
        </div>

        <div className="metric-box glass-panel">
          <div className="metric-val">
            100<span style={{ color: '#00f0ff' }}>%</span>
          </div>
          <div className="metric-lbl">
            Client IP Ownership
          </div>
        </div>
      </div>
    </section>
  );
}
