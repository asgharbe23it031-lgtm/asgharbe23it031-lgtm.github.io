import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export default function About() {
    const [ref, inView] = useInView(0.12);

    return (
        <section id="about" className="section" style={{ position: 'relative' }}>
            <div className="container" ref={ref}>
                <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ width: '32px', height: '1px', background: 'var(--accent)' }} />
                    <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)' }}>About</span>
                </motion.div>

                <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.05 }}
                    style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '48px', lineHeight: 1.1 }}>
                    Engineering products,<br />not just writing code.
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '64px', alignItems: 'start' }}>
                    <div>
                        <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.1 }}
                            style={{ fontSize: '1.05rem', lineHeight: 1.82, color: 'var(--text-muted)', marginBottom: '18px' }}>
                            I&apos;m Adesh Chaudhary — a mobile developer backgrounded in engineering fintech infrastructure and high-scale social platforms. I&apos;ve shipped cross-platform apps across multiple industries, delivering client products from initial concept to store launch.
                        </motion.p>
                        <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.14 }}
                            style={{ fontSize: '1.05rem', lineHeight: 1.82, color: 'var(--text-muted)', marginBottom: '32px' }}>
                            My work lives at the intersection of clean architecture and product thinking. I care deeply about performance, pixel-accuracy, and shipping on time — because deadlines are a feature, not a bug.
                        </motion.p>

                        {/* Values — minimal, no gradient icons */}
                        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.18 }}
                            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '32px' }}>
                            {['Architecture-first thinking', 'On-time delivery, always', 'API & Firebase integration', 'Pixel-accurate UI from Figma'].map(v => (
                                <div key={v} style={{ display: 'flex', alignItems: 'flex-start', gap: '9px' }}>
                                    <span style={{ color: 'var(--accent)', fontSize: '13px', marginTop: '2px', flexShrink: 0 }}>✓</span>
                                    <span style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>{v}</span>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.22 }}
                            style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            <a href="mailto:adeshpatel700@gmail.com"
                                style={{ padding: '11px 22px', borderRadius: '9px', background: 'var(--accent)', color: '#0a0a0a', fontWeight: 700, fontSize: '13.5px', boxShadow: '0 0 20px rgba(167,139,250,0.25)', transition: 'transform 0.18s, box-shadow 0.18s' }}
                                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 30px rgba(167,139,250,0.42)'; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(167,139,250,0.25)'; }}>
                                Get in Touch
                            </a>
                            <a href="https://linkedin.com/in/adesh-chaudhary-933426305" target="_blank" rel="noreferrer"
                                style={{ padding: '11px 22px', borderRadius: '9px', border: '1px solid var(--border)', color: 'var(--text-muted)', fontWeight: 600, fontSize: '13.5px', transition: 'border-color 0.18s, color 0.18s' }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = '#fff'; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}>
                                LinkedIn
                            </a>
                        </motion.div>
                    </div>

                    {/* Stats — flat, no gradient text */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.14 }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                            {[['10+', 'Apps shipped'], ['5+', 'Clients served'], ['1yr+', 'Pro Experience'], ['100%', 'On-time rate']].map(([n, l]) => (
                                <div key={l}
                                    style={{ padding: '22px 18px', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--bg-surface)', transition: 'border-color 0.2s' }}
                                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(167,139,250,0.3)'}
                                    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
                                    <div style={{ fontSize: '1.9rem', fontWeight: 900, letterSpacing: '-0.04em', color: 'var(--accent)' }}>{n}</div>
                                    <div style={{ fontSize: '11.5px', color: 'var(--text-muted)', marginTop: '6px' }}>{l}</div>
                                </div>
                            ))}
                        </div>
                        <div style={{ padding: '16px 18px', borderRadius: '12px', border: '1px solid rgba(34,197,94,0.2)', background: 'rgba(34,197,94,0.04)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '5px' }}>
                                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                                <span style={{ fontSize: '12px', fontWeight: 600, color: '#22c55e' }}>Open to new opportunities</span>
                            </div>
                            <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', lineHeight: 1.6 }}>Freelance and full-time roles — product-stage startups preferred.</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          .container > div:last-child { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
        </section>
    );
}
