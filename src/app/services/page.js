import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { ArrowUpRight, Code2, ShoppingBag, Smartphone, Workflow, BrainCircuit, Cloud, PencilRuler, ShieldCheck } from 'lucide-react';

const capabilities = [
  ['Bespoke software','Shape custom systems around the way your business works.','/assets/services/bespoke-software-refresh.png',Code2],
  ['Websites & CMS','Build flexible web experiences with WordPress and headless CMS.','/assets/services/websites-cms-refresh.png',Cloud],
  ['E-commerce','Create connected storefronts and commerce workflows.','/assets/services/ecommerce-refresh.jpg',ShoppingBag],
  ['Mobile apps','Bring useful tools and experiences to the devices people carry.','/assets/services/mobile-apps-refresh.jpg',Smartphone],
  ['Automation & systems','Connect handoffs, forms and everyday operations.','/assets/services/automation-systems-refresh.jpg',Workflow],
  ['AI & analytics','Explore data-led tools and emerging AI applications.','/assets/services/ai-analytics-refresh.jpg',BrainCircuit],
  ['Product & UX design','Make complex products feel focused and natural to use.','/assets/services/product-ux-design-refresh.jpg',PencilRuler],
  ['Cloud & support','Keep digital products dependable as needs evolve.','/assets/services/cloud-support-refresh.jpg',ShieldCheck],
];
const industries = [
  ['Healthcare','/assets/industries/healthcare-refresh.jpg'],['E-commerce & retail','/assets/industries/retail-ecommerce-refresh.jpg'],['Financial technology','/assets/industries/finance-refresh.jpg'],['Artificial intelligence','/assets/industries/artificial-intelligence-refresh.jpg'],['Logistics','/assets/industries/logistics-refresh.jpg'],['Procurement','/assets/industries/procurement-refresh.jpg'],
];

export const metadata = { title: 'Services & Industries — Nexverse', description: 'Nexverse software, web, commerce, automation and digital product capabilities.' };

export default function ServicesPage(){return <main className="inner-page services-page"><SiteHeader/><section className="inner-hero services-hero"><div className="inner-eyebrow">CAPABILITIES / BUILT AROUND YOUR AMBITION</div><div className="services-hero-grid"><div><h1>From idea<br/>to <i>infrastructure.</i></h1><p>Strategy, design and engineering to help turn the right idea into something useful in the real world.</p><a className="primary-link" href="/#contact">Let’s talk through it <ArrowUpRight size={16}/></a></div><div className="services-hero-image"><img src="/assets/services/bespoke-software-refresh.png" alt="Software dashboard illustrating Nexverse engineering work"/></div></div></section><section className="capability-list section-pad" id="capabilities"><div className="section-kicker"><span>01 — WHAT WE DO</span><span>THE RIGHT TEAM FOR THE RIGHT PROBLEM.</span></div><div className="capability-grid">{capabilities.map(([name,desc,image,Icon],i)=><article className="capability-card" key={name}><div className="capability-card-image"><img src={image} alt="" loading="lazy"/><span>0{i+1}</span></div><div className="capability-card-copy"><Icon size={19}/><h2>{name}</h2><p>{desc}</p></div></article>)}</div></section><section className="industry-section section-pad" id="industries"><div className="section-kicker"><span>02 — INDUSTRIES</span><span>CONTEXT CHANGES THE SOLUTION.</span></div><div className="industry-heading"><h2>Built for the<br/><i>world you work in.</i></h2><p>Explore the sectors where our work makes a difference.</p></div><div className="industry-grid">{industries.map(([name,image],i)=><article className="industry-card" key={name}><img src={image} alt={`${name} industry`} loading="lazy"/><span className="industry-number">0{i+1}</span><h3>{name}</h3><ArrowUpRight size={17}/></article>)}</div></section><section className="services-cta section-pad"><span className="inner-eyebrow">A GOOD PLACE TO START</span><h2>Tell us what<br/><i>you’re solving.</i></h2><a className="primary-link" href="/#contact">Start a conversation <ArrowUpRight size={16}/></a></section><SiteFooter/></main>}
