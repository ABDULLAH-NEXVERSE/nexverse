'use client';

import { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function SolutionsWorkflow({ onOpenInquiry }) {
  const [activeTab, setActiveTab] = useState(0);

  const workflows = [
    {
      title: 'Automated Lead Intake & Routing',
      subtitle: 'Instant routing to your CRM and engineering slack channels',
      image: '/assets/solutions/automation-1.png',
      badge: 'Zero Friction',
      bullets: [
        'Dynamic multi-step qualification questions',
        'Direct automated integration with HubSpot, Salesforce & Slack',
        'Custom scoring logic that flags high-value enterprise leads',
      ],
      stat: '85% Faster Pipeline Velocity',
    },
    {
      title: 'Dynamic Invoicing & Payment Automation',
      subtitle: 'Sleek, branded payment checkpoints with automated reconciliation',
      image: '/assets/solutions/invoicing-1.png',
      badge: 'Instant Cash Flow',
      bullets: [
        'Integrated Stripe & banking rail gateways with multi-currency support',
        'Automated overdue reminders and instant receipt dispatches',
        'Live accounting sync with Xero and QuickBooks',
      ],
      stat: '99.4% On-Time Payment Rate',
    },
    {
      title: 'Conversion-Tuned Digital Forms',
      subtitle: 'Designed to save hours while dramatically boosting completion rates',
      image: '/assets/solutions/forms-1.png',
      badge: 'UX Perfection',
      bullets: [
        'Accessible, keyboard-navigable responsive layouts',
        'Conditional question logic tailored to client responses',
        'Sub-second field validation with zero reload latency',
      ],
      stat: '+38% Form Completion Jump',
    },
  ];

  return (
    <section className="site-wrapper section-spacing">
      <div className="section-header" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div className="section-badge">
          <span className="badge-dot" style={{ background: '#10b981', boxShadow: '0 0 10px #10b981' }} />
          <span style={{ color: '#10b981' }}>Operations & Workflow Automation</span>
        </div>
        <h2 className="section-title">
          Streamlining Complexity: <br />
          <span className="gradient-blue-cyan">Custom Operational Engines</span>
        </h2>
        <p className="section-desc">
          We eliminate repetitive friction with bespoke intake funnels, auto-invoicing, and seamless data sync engineered directly into your stack.
        </p>
      </div>

      {/* Tabs */}
      <div className="workflow-tabs-grid">
        {workflows.map((wf, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`workflow-tab-btn ${activeTab === idx ? 'active' : ''}`}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-display)', color: '#00f0ff', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Module // 0{idx + 1}
              </span>
              <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-display)', padding: '0.15rem 0.5rem', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.05)', color: '#cbd5e1' }}>
                {wf.badge}
              </span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.25rem' }}>
              {wf.title}
            </h3>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8', lineHeight: 1.4 }}>
              {wf.subtitle}
            </p>
          </button>
        ))}
      </div>

      {/* Active Tab Preview */}
      <div className="workflow-preview-panel glass-panel">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ display: 'inline-block', padding: '0.3rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontFamily: 'var(--font-display)', color: '#6ee7b7', background: 'rgba(6, 78, 59, 0.5)', border: '1px solid rgba(16, 185, 129, 0.3)', alignSelf: 'flex-start' }}>
            {workflows[activeTab].stat}
          </div>

          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 700, color: '#ffffff' }}>
            {workflows[activeTab].title}
          </h3>

          <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.6 }}>
            {workflows[activeTab].subtitle}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {workflows[activeTab].bullets.map((b, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
                <CheckCircle size={16} style={{ color: '#00f0ff', flexShrink: 0, marginTop: '2px' }} />
                <span>{b}</span>
              </div>
            ))}
          </div>

          <div style={{ paddingTop: '0.75rem' }}>
            <button
              onClick={onOpenInquiry}
              className="glow-button"
              style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}
            >
              <span>Build this workflow</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        <div className="workflow-img-frame">
          <img
            src={workflows[activeTab].image}
            alt={workflows[activeTab].title}
          />
        </div>
      </div>
    </section>
  );
}
