import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] } }),
};

export default function Hero() {
    const scroll = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section id="top" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: '80px' }}>
            {/* Single, restrained glow — no rainbow gradients */}
            <div style={{ position: 'absolute', top: '-60px', right: '-80px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: '64px', alignItems: 'center' }}>
                    {/* LEFT */}
                    <div>
                        {/* Availability */}
                        <motion.div variants={fadeUp} custom={0} initial="hidden" animate="visible"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 13px', borderRadius: '999px', border: '1px solid rgba(34,197,94,0.3)', background: 'rgba(34,197,94,0.06)', marginBottom: '28px' }}>
                            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e', display: 'inline-block', boxShadow: '0 0 6px #22c55e80' }} />
                            <span style={{ fontSize: '12px', fontWeight: 500, color: '#22c55e', letterSpacing: '0.02em' }}>Available for work</span>
                        </motion.div>

                        {/* Headline — one restrained gradient word only */}
                        <motion.h1 variants={fadeUp} custom={0.08} initial="hidden" animate="visible"
                            style={{ fontSize: 'clamp(2.6rem,5vw,4.6rem)', fontWeight: 900, lineHeight: 1.04, letterSpacing: '-0.035em', marginBottom: '22px' }}>
                            Flutter developer<br />
                            <span style={{ color: 'var(--accent)' }}>who ships.</span>
                        </motion.h1>

                        <motion.p variants={fadeUp} custom={0.16} initial="hidden" animate="visible"
                            style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-muted)', maxWidth: '420px', marginBottom: '36px' }}>
                            I build cross-platform mobile products that are fast, maintainable, and production-ready. Focused on clean architecture and high-performance user experiences.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div variants={fadeUp} custom={0.22} initial="hidden" animate="visible"
                            style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '48px' }}>
                            <button onClick={() => scroll('contact')}
                                style={{ padding: '12px 24px', borderRadius: '9px', background: 'var(--accent)', color: '#0a0a0a', fontWeight: 700, fontSize: '14px', border: 'none', cursor: 'pointer', boxShadow: '0 0 28px rgba(167,139,250,0.28)', transition: 'transform 0.18s, box-shadow 0.18s' }}
                                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 36px rgba(167,139,250,0.45)'; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 28px rgba(167,139,250,0.28)'; }}>
                                Start a Project →
                            </button>
                            <button onClick={() => scroll('projects')}
                                style={{ padding: '12px 24px', borderRadius: '9px', background: 'transparent', color: 'var(--text-muted)', fontWeight: 600, fontSize: '14px', border: '1px solid var(--border)', cursor: 'pointer', transition: 'border-color 0.18s, color 0.18s' }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'; e.currentTarget.style.color = '#fff'; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}>
                                View Work
                            </button>
                        </motion.div>

                        {/* Stats row */}
                        <motion.div variants={fadeUp} custom={0.3} initial="hidden" animate="visible"
                            style={{ display: 'flex', gap: '32px', paddingTop: '0px' }}>
                            {[['5+', 'clients served'], ['1yr+', 'Pro Experience'], ['10+', 'apps shipped']].map(([n, l]) => (
                                <div key={l}>
                                    <div style={{ fontSize: '1.45rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff' }}>{n}</div>
                                    <div style={{ fontSize: '11.5px', color: 'var(--text-subtle)', marginTop: '3px', lineHeight: 1.3 }}>{l}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* RIGHT — code card, no gradient border */}
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
                        <div style={{ borderRadius: '16px', border: '1px solid var(--border)', background: 'var(--bg-surface)', padding: '28px', boxShadow: '0 4px 32px rgba(0,0,0,0.5)' }}>
                            {/* Window dots */}
                            <div style={{ display: 'flex', gap: '6px', marginBottom: '22px' }}>
                                {['#ff5f57', '#febc2e', '#28c840'].map(c => <div key={c} style={{ width: '11px', height: '11px', borderRadius: '50%', background: c }} />)}
                            </div>

                            {/* Code */}
                            <div style={{ fontFamily: 'monospace', fontSize: '12.5px', lineHeight: '21px', color: 'var(--text-muted)' }}>
                                <div><span style={{ color: '#a78bfa' }}>class</span> <span style={{ color: '#c4b5fd' }}>AdeshChaudhary</span> {'{'}</div>
                                <div style={{ paddingLeft: '18px' }}><span style={{ color: '#94a3b8' }}>// Flutter Developer</span></div>
                                <div style={{ paddingLeft: '18px' }}><span style={{ color: '#f472b6' }}>status</span>   = <span style={{ color: '#22c55e' }}>'available'</span>;</div>
                                <div style={{ paddingLeft: '18px' }}><span style={{ color: '#f472b6' }}>location</span> = <span style={{ color: '#c8ff00', opacity: 0.85 }}>'India 🇮🇳'</span>;</div>
                                <div>{'}'}</div>
                            </div>

                            <div style={{ height: '1px', background: 'var(--border)', margin: '20px 0' }} />

                            <div style={{ fontSize: '10.5px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-subtle)', marginBottom: '10px' }}>Primary Stack</div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                                {['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Figma'].map(t => (
                                    <span key={t} className="tag" style={{ fontSize: '11.5px' }}>{t}</span>
                                ))}
                            </div>

                            <div style={{ marginTop: '20px', padding: '14px 16px', borderRadius: '10px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <div style={{ fontSize: '10.5px', color: 'var(--text-subtle)', marginBottom: '3px' }}>Response</div>
                                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#22c55e' }}>⚡ within 24h</div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: '10.5px', color: 'var(--text-subtle)', marginBottom: '3px' }}>Timezone</div>
                                    <div style={{ fontSize: '13px', fontWeight: 600 }}>IST (UTC +5:30)</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          section > .container > div {
            grid-template-columns: 1fr !important;
            gap: 44px !important;
          }
          section > .container > div > div:last-child {
            display: none;
          }
        }
      `}</style>
        </section>
    );
}
