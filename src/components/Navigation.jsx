'use client';

import { useState } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navigation({ onOpenInquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Architecture', href: '#architecture' },
    { label: 'Services', href: '#services' },
    { label: 'Selected Works', href: '#case-studies' },
    { label: 'Technology', href: '#tech' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header className="nav-header">
      <nav className="nav-capsule">
        {/* Brand Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <img
            src="/assets/logos/nexverse-logo.png"
            alt="Nexverse"
            style={{ height: '28px', width: 'auto', display: 'block' }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const textEl = document.getElementById('brand-text-fallback');
              if (textEl) textEl.style.display = 'block';
            }}
          />
          <span
            id="brand-text-fallback"
            style={{
              display: 'none',
              fontFamily: 'var(--font-display)',
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-0.02em',
            }}
          >
            NEX<span style={{ color: '#468eef' }}>VERSE</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="nav-links-wrap">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-item-link"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={onOpenInquiry}
            className="glow-button"
            style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}
          >
            <Sparkles size={14} style={{ color: '#00f0ff' }} />
            <span>Get in touch</span>
            <ArrowUpRight size={15} />
          </button>
        </div>
      </nav>
    </header>
  );
}
