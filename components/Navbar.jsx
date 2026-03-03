import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Skills',     href: '#skills'     },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [activeLink,  setActiveLink]  = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveLink(href);
  };

  return (
    <>
      <header
        style={{
          position:      'fixed',
          top:           0,
          left:          0,
          right:         0,
          zIndex:        100,
          transition:    'background 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',
          background:    scrolled ? 'rgba(10,10,10,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(160%)' : 'none',
          borderBottom:  scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
          boxShadow:     scrolled ? '0 2px 40px rgba(0,0,0,0.6)' : 'none',
        }}
      >
        <div className="container" style={{ display:'flex', alignItems:'center', height:'64px', justifyContent:'space-between' }}>
          {/* Logo */}
          <a href="#top" onClick={e => handleNav(e,'#top')} style={{ display:'flex', alignItems:'center', gap:'10px', textDecoration:'none' }}>
            <div style={{
              width: '36px', height: '36px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 800, fontSize: '15px', color: '#fff',
              flexShrink: 0,
              boxShadow: '0 0 18px rgba(124,58,237,0.45)',
            }}>A</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '14px', lineHeight: 1.2 }}>Adesh Chaudhary</div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', lineHeight: 1.2 }}>Flutter Developer</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav style={{ display:'flex', alignItems:'center', gap:'8px' }} className="desktop-nav">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => handleNav(e, link.href)}
                style={{
                  padding: '7px 14px',
                  borderRadius: '8px',
                  fontSize: '13.5px',
                  fontWeight: 500,
                  color: activeLink === link.href ? '#fff' : 'var(--text-muted)',
                  transition: 'color 0.2s, background 0.2s',
                  background: activeLink === link.href ? 'rgba(255,255,255,0.07)' : 'transparent',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = activeLink === link.href ? '#fff' : 'var(--text-muted)';
                  e.currentTarget.style.background = activeLink === link.href ? 'rgba(255,255,255,0.07)' : 'transparent';
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={e => handleNav(e, '#contact')}
              style={{
                padding: '8px 18px',
                borderRadius: '8px',
                fontSize: '13.5px',
                fontWeight: 600,
                background: 'var(--accent)',
                color: '#0a0a0a',
                transition: 'opacity 0.2s, transform 0.15s, box-shadow 0.2s',
                boxShadow: '0 0 20px rgba(167,139,250,0.3)',
                marginLeft: '8px',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity='0.88'; e.currentTarget.style.transform='translateY(-1px)'; e.currentTarget.style.boxShadow='0 4px 28px rgba(167,139,250,0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity='1'; e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 0 20px rgba(167,139,250,0.3)'; }}
            >
              Hire Me
            </a>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            style={{ display:'none', padding:'8px', cursor:'pointer', color:'var(--text-primary)', background:'none', border:'none' }}
            className="hamburger-btn"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              style={{ overflow:'hidden', borderTop:'1px solid var(--border)', background:'rgba(10,10,10,0.95)', backdropFilter:'blur(20px)' }}
            >
              <nav style={{ display:'flex', flexDirection:'column', padding:'16px 20px 20px', gap:'4px' }}>
                {NAV_LINKS.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={e => handleNav(e, link.href)}
                    style={{ padding:'12px 14px', borderRadius:'8px', fontSize:'15px', fontWeight:500, color:'var(--text-muted)', transition:'color 0.2s, background 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.color='#fff'; e.currentTarget.style.background='rgba(255,255,255,0.05)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color='var(--text-muted)'; e.currentTarget.style.background='transparent'; }}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={e => handleNav(e,'#contact')}
                  style={{ marginTop:'8px', padding:'13px 14px', borderRadius:'8px', fontSize:'15px', fontWeight:600, background:'var(--accent)', color:'#0a0a0a', textAlign:'center' }}
                >
                  Hire Me
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Responsive nav styles */}
      <style jsx global>{`
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
