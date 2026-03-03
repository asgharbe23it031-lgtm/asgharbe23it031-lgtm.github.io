import React from 'react';

const LINKS = {
    'Navigation': [
        { label: 'About', href: '#about' },
        { label: 'Experience', href: '#experience' },
        { label: 'Projects', href: '#projects' },
        { label: 'Skills', href: '#skills' },
        { label: 'Contact', href: '#contact' },
    ],
    'Connect': [
        { label: 'Email', href: 'mailto:adeshpatel700@gmail.com' },
        { label: 'LinkedIn', href: 'https://linkedin.com/in/adesh-chaudhary-933426305' },
        { label: 'GitHub', href: 'https://github.com/adeshpatel700-rgb' },
    ],
};

export default function Footer() {
    const scrollTo = (e, href) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-surface)', paddingTop: '56px', paddingBottom: '32px' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '48px', marginBottom: '48px' }}>
                    {/* Brand */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'linear-gradient(135deg,#7c3aed,#a78bfa)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '15px', color: '#fff', boxShadow: '0 0 16px rgba(124,58,237,0.4)' }}>A</div>
                            <span style={{ fontWeight: 700, fontSize: '15px' }}>Adesh Chaudhary</span>
                        </div>
                        <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '280px', marginBottom: '20px' }}>
                            Flutter Developer building beautiful, performant cross-platform mobile apps. Available for freelance worldwide.
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block', boxShadow: '0 0 8px #22c55e' }} />
                            <span style={{ fontSize: '12px', color: '#22c55e', fontWeight: 500 }}>Open to Work</span>
                        </div>
                    </div>

                    {/* Link groups */}
                    {Object.entries(LINKS).map(([group, links]) => (
                        <div key={group}>
                            <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--text-subtle)', marginBottom: '16px' }}>{group}</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {links.map(l => (
                                    <a
                                        key={l.label}
                                        href={l.href}
                                        onClick={e => scrollTo(e, l.href)}
                                        target={l.href.startsWith('http') ? '_blank' : undefined}
                                        rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
                                        style={{ fontSize: '13px', color: 'var(--text-muted)', transition: 'color 0.2s' }}
                                        onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                                    >
                                        {l.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div style={{ paddingTop: '24px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                    <p style={{ fontSize: '12px', color: 'var(--text-subtle)' }}>© {new Date().getFullYear()} Adesh Chaudhary. All rights reserved.</p>
                    <p style={{ fontSize: '12px', color: 'var(--text-subtle)' }}>Built with Next.js · Framer Motion · ❤️</p>
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 640px) {
          footer > .container > div:first-child { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
        </footer>
    );
}
