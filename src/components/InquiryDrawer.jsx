'use client';

import { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';

export default function InquiryDrawer({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Bespoke Software',
    budget: '$25,000 - $50,000',
    timeline: '3 - 6 Months',
    message: '',
  });

  const services = [
    'Bespoke Software',
    'Web & Mobile App',
    'Custom WordPress / CMS',
    'Automation & E-Commerce',
  ];

  const budgets = [
    '< $15,000',
    '$15,000 - $35,000',
    '$35,000 - $75,000',
    '$75,000+',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`drawer-backdrop ${isOpen ? 'open' : ''}`}
      />

      {/* Drawer Container */}
      <div className={`drawer-content ${isOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', marginBottom: '2rem' }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#00f0ff', fontWeight: 600 }}>
              Project Initialization
            </span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 700, color: '#ffffff', marginTop: '0.25rem' }}>
              Start Your Build
            </h3>
          </div>

          <button
            onClick={onClose}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#94a3b8',
              cursor: 'pointer',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {submitted ? (
          <div style={{ padding: '4rem 0', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CheckCircle size={32} />
            </div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: '#ffffff' }}>
              Transmission Received
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', maxWidth: '300px', lineHeight: 1.6 }}>
              Thank you, {formData.name || 'partner'}. A lead architect from Nexverse will review your technical specifications and contact you within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="glow-button"
              style={{ marginTop: '1rem', padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Service Selection */}
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', marginBottom: '0.75rem' }}>
                1. Select Core Capability
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
                {services.map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => setFormData({ ...formData, service: s })}
                    style={{
                      padding: '0.75rem',
                      borderRadius: '8px',
                      textAlign: 'left',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                      border: formData.service === s ? '1px solid #00f0ff' : '1px solid rgba(255, 255, 255, 0.08)',
                      background: formData.service === s ? 'rgba(70, 142, 239, 0.2)' : 'rgba(13, 17, 26, 0.6)',
                      color: formData.service === s ? '#ffffff' : '#94a3b8',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget Range */}
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', marginBottom: '0.75rem' }}>
                2. Target Budget Allocation
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
                {budgets.map((b) => (
                  <button
                    type="button"
                    key={b}
                    onClick={() => setFormData({ ...formData, budget: b })}
                    style={{
                      padding: '0.65rem',
                      borderRadius: '8px',
                      textAlign: 'center',
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-display)',
                      cursor: 'pointer',
                      border: formData.budget === b ? '1px solid #00f0ff' : '1px solid rgba(255, 255, 255, 0.08)',
                      background: formData.budget === b ? 'rgba(70, 142, 239, 0.2)' : 'rgba(13, 17, 26, 0.6)',
                      color: formData.budget === b ? '#00f0ff' : '#94a3b8',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', marginBottom: '0.4rem' }}>
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Mercer"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    background: 'rgba(9, 12, 20, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    fontSize: '0.85rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', marginBottom: '0.4rem' }}>
                  Corporate / Direct Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@enterprise.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    background: 'rgba(9, 12, 20, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    fontSize: '0.85rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', marginBottom: '0.4rem' }}>
                  Project Brief & Technical Scope
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your vision, challenges, and timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    background: 'rgba(9, 12, 20, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    fontSize: '0.85rem',
                    outline: 'none',
                    resize: 'none',
                  }}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="glow-button"
              style={{ width: '100%', padding: '0.85rem', fontSize: '0.9rem', marginTop: '0.5rem' }}
            >
              <span>Transmit Project Specifications</span>
              <Send size={15} />
            </button>
          </form>
        )}
      </div>
    </>
  );
}
