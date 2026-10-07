import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Menu, X, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function Brand() {
  return <Link to="/" className="brand" aria-label="Ttyl BestAI home"><span className="brand-mark"><MessageCircle size={19} strokeWidth={2} /><span /></span><span>ttyl<span className="brand-secondary"> bestai</span><span className="brand-period">.</span></span></Link>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="site-container header-inner"><Brand /><nav aria-label="Main navigation" className="desktop-nav"><Link to="/" activeProps={{ className: 'nav-active' }} activeOptions={{ exact: true }}>Home</Link><Link to="/opt-in" activeProps={{ className: 'nav-active' }}>SMS activation</Link><Button asChild className="nav-apply"><Link to="/apply">Apply for Access <ArrowUpRight /></Link></Button></nav><Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></div>{open && <nav aria-label="Mobile navigation" className="mobile-nav"><Link to="/" onClick={() => setOpen(false)}>Home</Link><Link to="/opt-in" onClick={() => setOpen(false)}>SMS activation</Link><Link to="/apply" onClick={() => setOpen(false)}>Apply for Access <ArrowUpRight size={16} /></Link></nav>}</header>;
}

export function Footer() {
  return <footer className="site-footer"><div className="site-container"><div className="footer-top"><div><Brand /><p>A little more conversation.<br />A little more you.</p></div><nav aria-label="Footer navigation"><div><Link to="/">Home</Link><Link to="/apply">Apply for Access</Link><Link to="/opt-in">SMS Opt-In</Link></div><div><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms &amp; Conditions</Link></div></nav></div><div className="footer-bottom"><span>© {new Date().getUTCFullYear()} Ttyl BestAI. All rights reserved.</span><span>An AI companion. Always an AI.</span><span className="footer-signoff">Talk to you later <ArrowUpRight size={13} /></span></div></div></footer>;
}