'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function SiteHeader({ onContact }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="nav"><Link className="brand" href="/" aria-label="Nexverse home" onClick={close}><img src="/assets/logos/nexverse-logo.png" alt="Nexverse"/></Link><nav className={`nav-pill ${open?'open':''}`} aria-label="Main navigation"><Link href="/products" onClick={close}>Products</Link><Link href="/work" onClick={close}>Work</Link><Link href="/services" onClick={close}>Services</Link><Link href="/about" onClick={close}>About</Link></nav>{onContact?<button className="nav-cta" onClick={onContact}>Let’s talk <ArrowUpRight size={15}/></button>:<Link className="nav-cta" href="/#contact">Let’s talk <ArrowUpRight size={15}/></Link>}<button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label={open?'Close navigation':'Open navigation'}>{open?<X/>:<Menu/>}</button></header>;
}
