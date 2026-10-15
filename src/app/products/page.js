import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { ArrowDownRight, ArrowUpRight, MapPin, Users, CalendarDays, ShieldCheck } from 'lucide-react';

const productDetails = [
  { icon: CalendarDays, title: 'Rota planning', text: 'Build and review team schedules in one workspace.' },
  { icon: Users, title: 'People & teams', text: 'Keep workforce information close to day-to-day operations.' },
  { icon: MapPin, title: 'Attendance', text: 'Support mobile check-in and location-aware workflows.' },
  { icon: ShieldCheck, title: 'Compliance', text: 'Bring operational records and compliance checks together.' },
];

export const metadata = { title: 'Products & client platforms — Nexverse', description: 'Explore ProRota and selected client platforms built by Nexverse.' };

export default function ProductsPage() {
  return <main className="inner-page product-page">
    <SiteHeader />
    <section className="inner-hero product-hero">
      <div className="inner-eyebrow">NEXVERSE PRODUCT / 01</div>
      <div className="product-hero-grid">
        <div><span className="product-label"><span className="status-dot"/> WORKFORCE MANAGEMENT</span><h1>ProRota<span>.</span><br/><i>Operations,<br/>in sync.</i></h1><p>Scheduling, teams and daily operations, brought into one clear workspace. ProRota is a workforce management product from Nexverse.</p><div className="inner-actions"><a className="primary-link" href="/#contact">Talk to our team <ArrowUpRight size={16}/></a><a className="quiet-link" href="#platform">Explore the platform <ArrowDownRight size={16}/></a></div></div>
        <div className="product-display"><div className="display-glow"/><div className="display-frame"><img src="/assets/products/prorota-dashboard-showcase.webp" alt="ProRota dashboard metrics and reporting interface"/></div><div className="product-mobile-frame"><img src="/assets/products/prorota-mobile-refresh.png" alt="ProRota mobile workforce management screen"/></div><div className="display-label">PROROTA / PRODUCT VIEW <span>01—04</span></div><div className="product-orbit orbit-one"/><div className="product-orbit orbit-two"/></div>
      </div>
    </section>
    <section className="product-intro section-pad" id="platform"><div className="section-kicker"><span>01 — THE PLATFORM</span><span>MADE FOR THE MOVING PARTS.</span></div><div className="product-intro-grid"><h2>One workspace.<br/><i>More clarity.</i></h2><p>ProRota brings schedules, people and operational information into a shared view—designed for teams that need to stay coordinated across sites and shifts.</p></div><div className="product-capabilities">{productDetails.map(({icon:Icon,title,text},i)=><article className="product-capability" key={title}><span>0{i+1}</span><Icon size={21}/><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="product-screen-section"><div className="product-screen-copy"><span className="inner-eyebrow">THE WORK, AT A GLANCE</span><h2>Operations,<br/>in your pocket.</h2><p>Mobile tools help teams stay connected to their schedules and daily activity wherever the work takes them.</p></div><div className="product-screen-card product-mobile-showcase"><img src="/assets/products/prorota-mobile-refresh.png" alt="ProRota mobile app home screen" loading="lazy"/></div></section>
    <section className="client-cms-section section-pad" id="gta-cms"><div className="section-kicker"><span>SELECTED CLIENT CMS BUILD</span><span>BUILT FOR GLASGOW TRAINING ACADEMY.</span></div><div className="client-cms-layout"><div><span className="inner-eyebrow">CANDIDATE MANAGEMENT</span><h2>Glasgow<br/><i>Training Academy.</i></h2><p>Nexverse built a candidate management CMS for Glasgow Training Academy, bringing its training workflows into a dedicated digital experience.</p><a className="quiet-link" href="/work#gta">View this client build <ArrowUpRight size={16}/></a></div><img src="/assets/portfolio/gta-cms-refresh.png" alt="Glasgow Training Academy candidate management CMS" loading="lazy"/></div></section>
    <section className="product-cta section-pad"><span className="inner-eyebrow">A NEXVERSE PRODUCT</span><h2>Build a better<br/><i>working rhythm.</i></h2><a className="primary-link" href="/#contact">Ask us about ProRota <ArrowUpRight size={16}/></a></section>
    <SiteFooter />
  </main>;
}
