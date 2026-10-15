'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';

const menus = {
  services: {
    label: 'Services',
    eyebrow: 'CAPABILITIES',
    title: 'Technology built around your business.',
    description: 'From the first idea to dependable systems, we bring product thinking and engineering together.',
    href: '/services#capabilities',
    image: '/assets/services/bespoke-software-refresh.png',
    entries: [
      ['Bespoke software', 'Purpose-built platforms and business systems.', '/services#capabilities', '/assets/services/bespoke-software-refresh.png'],
      ['Websites & CMS', 'Flexible digital experiences that can grow.', '/services#capabilities', '/assets/services/websites-cms-refresh.png'],
      ['E-commerce', 'Connected storefronts and commerce workflows.', '/services#capabilities', '/assets/services/ecommerce-refresh.jpg'],
      ['Mobile apps', 'Useful tools and experiences for the devices people carry.', '/services#capabilities', '/assets/services/mobile-apps-refresh.jpg'],
      ['Automation & systems', 'Make everyday operations flow more clearly.', '/services#capabilities', '/assets/services/automation-systems-refresh.jpg'],
      ['AI & analytics', 'Make information more useful to your team.', '/services#capabilities', '/assets/services/ai-analytics-refresh.jpg'],
      ['Product & UX design', 'Make complex products feel intuitive.', '/services#capabilities', '/assets/services/product-ux-design-refresh.jpg'],
      ['Cloud & support', 'Keep digital products dependable as they evolve.', '/services#capabilities', '/assets/services/cloud-support-refresh.jpg'],
    ],
  },
  industries: {
    label: 'Industries',
    eyebrow: 'INDUSTRIES',
    title: 'Built for the world you work in.',
    description: 'Sector-aware delivery for teams with real operational complexity.',
    href: '/services#industries',
    image: '/assets/industries/logistics-refresh.jpg',
    entries: [
      ['Healthcare', 'Digital experiences for care and clinical operations.', '/services#industries', '/assets/industries/healthcare-refresh.jpg'],
      ['Retail & commerce', 'Connected customer and commerce journeys.', '/services#industries', '/assets/industries/retail-ecommerce-refresh.jpg'],
      ['Finance', 'Clear, dependable financial workflows.', '/services#industries', '/assets/industries/finance-refresh.jpg'],
      ['Artificial intelligence', 'Practical data and AI applications.', '/services#industries', '/assets/industries/artificial-intelligence-refresh.jpg'],
      ['Logistics', 'Visibility across supply chains and operations.', '/services#industries', '/assets/industries/logistics-refresh.jpg'],
      ['Procurement', 'Systems for sourcing, fulfilment, and control.', '/services#industries', '/assets/industries/procurement-refresh.jpg'],
    ],
  },
  products: {
    label: 'Products',
    eyebrow: 'NEXVERSE PRODUCTS',
    title: 'Products made from what we learn.',
    description: 'A Nexverse product and selected platforms built for client teams.',
    href: '/products',
    image: '/assets/products/prorota-mobile-refresh.png',
    entries: [
      ['ProRota', 'Workforce schedules and operations, in sync.', '/products', '/assets/products/prorota-mobile-refresh.png'],
      ['Glasgow Training Academy', 'Candidate management CMS built for a training provider.', '/products#gta-cms', '/assets/portfolio/gta-cms-refresh.png'],
    ],
  },
};

export default function SiteHeader({ onContact }) {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState('');
  const [activeEntry, setActiveEntry] = useState(0);
  const close = () => {
    setOpen(false);
    setOpenMenu('');
  };
  const toggleMenu = (name) => {
    setActiveEntry(0);
    setOpenMenu((current) => current === name ? '' : name);
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const menu = menus[openMenu];
  const selected = menu?.entries[activeEntry] ?? menu?.entries[0];

  return (
    <header className={`nav ${openMenu ? 'has-mega-open' : ''}`} onMouseLeave={() => setOpenMenu('')}>
      <Link className="brand" href="/" aria-label="Nexverse home" onClick={close}>
        <img src="/assets/logos/nexverse-wordmark.svg" alt="Nexverse" />
      </Link>
      <nav className={`nav-pill ${open ? 'open' : ''}`} aria-label="Main navigation">
        <Link href="/" onClick={close}>Home</Link>
        {Object.entries(menus).map(([key, item]) => (
          <button
            className={`nav-menu-trigger ${openMenu === key ? 'active' : ''}`}
            key={key}
            type="button"
            aria-expanded={openMenu === key}
            aria-haspopup="true"
            onMouseEnter={() => { setOpenMenu(key); setActiveEntry(0); }}
            onFocus={() => { setOpenMenu(key); setActiveEntry(0); }}
            onClick={() => toggleMenu(key)}
          >
            {item.label}<ChevronDown size={14} aria-hidden="true" />
          </button>
        ))}
        <Link href="/work" onClick={close}>Work</Link>
        <Link href="/#journey" onClick={close}>Process</Link>
        <Link href="/about" onClick={close}>About</Link>
        {menu && selected && (
          <div className={`mega-menu mega-menu-${openMenu}`} role="region" aria-label={`${menu.label} menu`}>
            <div className="mega-overview">
              <span className="mega-eyebrow">{menu.eyebrow} / OVERVIEW</span>
              <h2>{menu.title}</h2>
              <p>{menu.description}</p>
              <Link className="mega-overview-link" href={menu.href} onClick={close}>View overview <ArrowUpRight size={16} /></Link>
            </div>
            <div className="mega-links" aria-label={`${menu.label} links`}>
              {menu.entries.map(([title, description, href], index) => (
                <Link
                  key={title}
                  href={href}
                  className={activeEntry === index ? 'selected' : ''}
                  onMouseEnter={() => setActiveEntry(index)}
                  onFocus={() => setActiveEntry(index)}
                  onClick={close}
                >
                  <span className="mega-link-copy"><b>{title}</b><small>{description}</small></span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              ))}
            </div>
            <Link className="mega-preview" href={selected[2]} onClick={close}>
              <img src={selected[3] || menu.image} alt="" />
              <span className="mega-preview-shade" />
              <span className="mega-preview-caption"><span>{selected[0]}</span><span>EXPLORE <ArrowUpRight size={14} /></span></span>
            </Link>
          </div>
        )}
      </nav>
      {onContact ? <button className="nav-cta" onClick={() => { close(); onContact(); }}>Let’s talk <ArrowUpRight size={15} /></button> : <Link className="nav-cta" href="/#contact" onClick={close}>Let’s talk <ArrowUpRight size={15} /></Link>}
      <button className="menu-toggle" onClick={() => { setOpen(!open); setOpenMenu(''); }} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    </header>
  );
}
