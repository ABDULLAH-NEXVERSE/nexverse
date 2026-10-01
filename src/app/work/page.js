import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import LogoMarquee from '../../components/LogoMarquee';
import { ArrowUpRight } from 'lucide-react';

const clientNames = [
  ['ab3-medical.svg','AB3 Medical'],['abbey.svg','Abbey'],['ahlmark.svg','Ahlmark'],['airco.svg','Airco'],['av3.svg','AV3'],['corestone.svg','Corestone'],['duralean.svg','Duralean'],['grayton.svg','Grayton'],['jay-samuel.svg','Jay Samuel'],['kamraj.svg','Kamraj'],['lambson.svg','Lambson'],['limitless.svg','Limitless'],['lincolnite.svg','Lincolnite'],['nexeats.svg','NexEats'],['odlinglogo.png','Odlings'],['primecommodities.svg','Prime Commodities'],['prorota.svg','ProRota'],['sirius-security.svg','Sirius Security'],['talencia.svg','Talencia'],['taltex.svg','Taltex'],['unify-pro.svg','Unify Pro'],['virtually-golf.svg','Virtually Golf'],['westwood.svg','Westwood'],['ymca.svg','YMCA'],
];
const projects = [
  ['ProRota','Nexverse product','/assets/portfolio/prorota-impact.jpg'],
  ['AB3 Medical','Selected client work','/assets/portfolio/ab3-clinician-dashboard.webp'],
  ['Ahlmark','Selected client work','/assets/portfolio/ahlmark-featured-hero.jpg'],
  ['Airco','Selected client work','/assets/portfolio/airco-featured-hero.jpg'],
  ['Lambson','Selected client work','/assets/portfolio/lambson-featured-hero.jpg'],
  ['Odlings','Selected client work','/assets/portfolio/odlings-case-feature.jpg'],
];

export const metadata = { title: 'Work & Clients — Nexverse', description: 'Selected Nexverse work and organizations represented in the supplied client assets.' };

export default function WorkPage(){return <main className="inner-page work-page"><SiteHeader/><section className="inner-hero work-hero"><div className="inner-eyebrow">SELECTED WORK / CLIENT NETWORK</div><h1>Built in<br/><i>good company.</i></h1><p>A selection of product imagery and organization marks from the Nexverse asset library.</p><a className="quiet-link" href="#clients">Meet the organizations <ArrowUpRight size={16}/></a><div className="work-hero-art"><img src="/assets/portfolio/agency-workflow-mock.webp" alt="Digital workspace concept"/></div></section><section className="client-wall section-pad" id="clients"><div className="section-kicker"><span>01 — ORGANIZATIONS</span><span>CLIENT MARKS FROM THE ASSET LIBRARY.</span></div><LogoMarquee logos={clientNames} label="Organizations represented in the Nexverse client portfolio"/></section><section className="work-gallery section-pad"><div className="section-kicker"><span>02 — PROJECTS &amp; PRODUCTS</span><span>A FEW WINDOWS INTO THE WORK.</span></div><div className="work-gallery-heading"><h2>Ideas, in<br/><i>the real world.</i></h2><p>Product screens and project imagery from the supplied Nexverse library.</p></div><div className="work-gallery-grid">{projects.map(([name,type,image],i)=><article className={`work-gallery-card gallery-card-${i+1}`} key={name}><div className="gallery-image-frame"><img src={image} alt={`${name} project imagery`} loading="lazy"/><span className="gallery-index">0{i+1} / 06</span><span className="gallery-arrow"><ArrowUpRight size={17}/></span></div><div className="gallery-card-meta"><div><h3>{name}</h3><p>{type}</p></div><span>PROJECT ARCHIVE</span></div></article>)}</div></section><section className="work-cta section-pad"><span className="inner-eyebrow">HAVE SOMETHING IN MIND?</span><h2>Let’s make it<br/><i>real.</i></h2><a className="primary-link" href="/#contact">Start a conversation <ArrowUpRight size={16}/></a></section><SiteFooter/></main>}
