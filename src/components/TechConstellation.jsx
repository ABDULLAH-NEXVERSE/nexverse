'use client';

import { useState } from 'react';
import { Terminal } from 'lucide-react';

export default function TechConstellation() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Stack' },
    { id: 'backend', label: 'Backend & Cloud' },
    { id: 'frontend', label: 'Frontend & Apps' },
    { id: 'design', label: 'Design & UX' },
    { id: 'cms', label: 'Headless CMS' },
  ];

  const technologies = [
    {
      name: 'Node.js',
      category: 'backend',
      role: 'Enterprise Runtime & Microservices',
      image: '/assets/tech/nodejs.png',
      badge: 'Core Backend',
    },
    {
      name: 'Figma',
      category: 'design',
      role: 'Design Systems & Interactive Prototypes',
      image: '/assets/tech/figma.png',
      badge: 'UI/UX Standard',
    },
    {
      name: 'WordPress',
      category: 'cms',
      role: 'Custom Headless & Decoupled CMS',
      image: '/assets/tech/wordpress.png',
      badge: 'Content Engine',
    },
    {
      name: 'React & Next.js',
      category: 'frontend',
      role: 'Server Components & Edge Rendering',
      badge: 'Modern Web Stack',
    },
    {
      name: 'TypeScript',
      category: 'frontend',
      role: 'Type-Safe Distributed Architecture',
      badge: 'Zero Type Errors',
    },
    {
      name: 'PostgreSQL & Redis',
      category: 'backend',
      role: 'ACID Transactions & High-Speed Caching',
      badge: 'Data Layer',
    },
    {
      name: 'Docker & Kubernetes',
      category: 'backend',
      role: 'Containerized Deployment & CI/CD Pipelines',
      badge: 'Cloud Native',
    },
    {
      name: 'Three.js & WebGL',
      category: 'frontend',
      role: 'Spatial Computing & High-Fidelity 3D',
      badge: 'Interactive Visuals',
    },
  ];

  const filtered =
    activeCategory === 'all'
      ? technologies
      : technologies.filter((t) => t.category === activeCategory);

  return (
    <section id="tech" className="site-wrapper section-spacing">
      <div className="section-header" style={{ textAlign: 'center', margin: '0 auto 3rem auto', maxWidth: '700px' }}>
        <div className="section-badge" style={{ justifyContent: 'center' }}>
          <span className="badge-dot" style={{ background: '#468eef', boxShadow: '0 0 10px #468eef' }} />
          <span style={{ color: '#468eef' }}>Technology Stack & Tooling</span>
        </div>
        <h2 className="section-title">
          Engineered with <span className="gradient-blue-cyan">Modern Mastery</span>
        </h2>
        <p className="section-desc" style={{ margin: '0.75rem auto 0 auto' }}>
          We leverage industry-leading frameworks, cloud native protocols, and rigorous engineering practices to build resilient, future-proof software.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="tech-filters-bar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`tech-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Tech Cards Grid */}
      <div className="tech-grid">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            className="tech-card glass-panel"
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                {item.image ? (
                  <div className="tech-logo-box">
                    <img src={item.image} alt={item.name} />
                  </div>
                ) : (
                  <div className="tech-logo-box" style={{ color: '#00f0ff' }}>
                    <Terminal size={22} />
                  </div>
                )}
                <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-display)', color: '#00f0ff', background: 'rgba(0, 240, 255, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {item.badge}
                </span>
              </div>

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.35rem' }}>
                {item.name}
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.8rem', lineHeight: 1.5 }}>
                {item.role}
              </p>
            </div>

            <div style={{ paddingTop: '0.75rem', marginTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.7rem', color: '#64748b', fontFamily: 'var(--font-display)' }}>
              <span>Production Ready</span>
              <span style={{ color: '#10b981' }}>● Active</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
