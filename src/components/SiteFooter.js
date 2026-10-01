import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function SiteFooter(){
  return <footer className="footer"><div className="footer-top"><Link className="footer-brand" href="/"><img src="/assets/logos/nexverse-logo.png" alt="Nexverse"/></Link><span className="footer-line">INDEPENDENT THINKING. CONNECTED ENGINEERING.</span><Link href="/#home" className="back-top">BACK TO TOP <ArrowUpRight size={14}/></Link></div><div className="footer-main"><h2>Let’s build<br/><i>what’s next.</i></h2><Link href="/#contact" className="footer-cta">Start a conversation <ArrowUpRight size={19}/></Link></div><div className="footer-bottom"><span>© 2026 NEXVERSE</span><span>ARCHITECTS OF THE DIGITAL FUTURE</span><a href="mailto:contact@nexverse.co.uk">CONTACT@NEXVERSE.CO.UK</a></div></footer>;
}
