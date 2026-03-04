import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const EXPERIENCE = [
    {
        id: 1,
        company: 'Trisaran Money',
        role: 'Android Developer',
        period: 'Sept 2025 – Mar 2026',
        duration: '7 months',
        type: 'Full-time',
        current: false,
        color: '#22c55e',
        colorBg: 'rgba(34,197,94,0.06)',
        colorBorder: 'rgba(34,197,94,0.2)',
        description: 'Built production fintech features for a consumer-facing app used by real customers. Owned the entire mobile layer — UI design, API integration, testing, and release.',
        bullets: [
            'Shipped fintech features end-to-end: design → implementation → Play Store.',
            'Integrated complex REST APIs with error handling, retry logic, and caching.',
            'Designed high-fidelity UI flows without relying on a dedicated designer.',
            'Maintained code quality with unit tests and widget tests across the feature surface.',
        ],
        tags: ['Flutter', 'Dart', 'REST APIs', 'Android', 'Fintech'],
    },
    {
        id: 2,
        company: '7 Seers',
        role: 'Flutter Developer — Intern',
        period: 'Apr 2025 – Sep 2025',
        duration: '6 months',
        type: 'Internship',
        current: false,
        color: '#a78bfa',
        colorBg: 'rgba(167,139,250,0.06)',
        colorBorder: 'rgba(167,139,250,0.2)',
        description: 'Contributed to a cross-platform product under a senior engineering team. Delivered feature work on tight sprint deadlines and participated actively in code reviews.',
        bullets: [
            'Maintained and extended an existing Flutter codebase with minimal ramp-up time.',
            'Integrated RESTful APIs with proper state management (GetX / Provider).',
            'Reduced widget rebuild overhead — improved scroll performance on list-heavy screens.',
            'Completed sprint tasks consistently on time across 3 consecutive release cycles.',
        ],
        tags: ['Flutter', 'Dart', 'GetX', 'Git', 'REST APIs'],
    },

];

const fadeUp = (d = 0) => ({
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] } },
});

export default function Experience() {
    const [ref, inView] = useInView(0.08);

    return (
        <section id="experience" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container" ref={ref}>
                <motion.div variants={fadeUp(0)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                    style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ width: '32px', height: '1px', background: 'var(--accent)' }} />
                    <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)' }}>Experience</span>
                </motion.div>

                <motion.h2 variants={fadeUp(0.05)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                    style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '14px', lineHeight: 1.1 }}>
                    Where I&apos;ve built
                </motion.h2>
                <motion.p variants={fadeUp(0.1)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                    style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '48px', maxWidth: '460px' }}>
                    From fintech startups to freelance products — consistently delivering at every level.
                </motion.p>

                {/* Timeline */}
                <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '0', top: '12px', bottom: '12px', width: '1px', background: 'var(--border)' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', paddingLeft: '32px' }}>
                        {EXPERIENCE.map((exp, i) => (
                            <motion.div key={exp.id} variants={fadeUp(i * 0.1)} initial="hidden" animate={inView ? 'visible' : 'hidden'} style={{ position: 'relative' }}>
                                {/* Dot */}
                                <div style={{ position: 'absolute', left: '-40px', top: '24px', width: '15px', height: '15px', borderRadius: '50%', background: exp.current ? exp.color : 'var(--bg-elevated)', border: `2px solid ${exp.current ? exp.color : 'rgba(255,255,255,0.15)'}`, boxShadow: exp.current ? `0 0 10px ${exp.color}60` : 'none' }} />

                                {/* Card — flat, no gradient bg */}
                                <div
                                    style={{ padding: '26px', borderRadius: '14px', border: `1px solid ${exp.colorBorder}`, background: exp.colorBg, transition: 'transform 0.2s' }}
                                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                                    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '14px' }}>
                                        <div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '5px' }}>
                                                <h3 style={{ fontWeight: 700, fontSize: '1.05rem' }}>{exp.role}</h3>
                                                {exp.current && <span style={{ fontSize: '10px', fontWeight: 700, padding: '2px 8px', borderRadius: '999px', background: exp.color, color: '#0a0a0a', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Active</span>}
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                                                <span style={{ fontSize: '13.5px', fontWeight: 600, color: exp.color }}>{exp.company}</span>
                                                <span style={{ fontSize: '11px', color: 'var(--text-subtle)' }}>·</span>
                                                <span style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '999px', border: `1px solid ${exp.color}35`, color: exp.color }}>{exp.type}</span>
                                            </div>
                                        </div>
                                        <div style={{ textAlign: 'right', flexShrink: 0 }}>
                                            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{exp.period}</div>
                                            <div style={{ fontSize: '12px', fontWeight: 600, color: exp.color, marginTop: '3px' }}>{exp.duration}</div>
                                        </div>
                                    </div>

                                    <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.72, marginBottom: '14px' }}>{exp.description}</p>

                                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
                                        {exp.bullets.map((b, j) => (
                                            <li key={j} style={{ display: 'flex', gap: '9px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                                                <span style={{ color: exp.color, flexShrink: 0, fontWeight: 600 }}>›</span>{b}
                                            </li>
                                        ))}
                                    </ul>

                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                        {exp.tags.map(t => <span key={t} className="tag" style={{ fontSize: '11px', padding: '3px 9px', borderColor: `${exp.color}28`, color: exp.color }}>{t}</span>)}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Summary */}
                <motion.div initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px', marginTop: '44px' }}>
                    {[['2', 'Companies'], ['13mo', 'Professional Exp.'], ['100%', 'On-time rate']].map(([n, l]) => (
                        <div key={l} style={{ textAlign: 'center', padding: '20px 14px', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--bg-surface)' }}>
                            <div style={{ fontSize: '1.6rem', fontWeight: 900, letterSpacing: '-0.03em', color: 'var(--accent)' }}>{n}</div>
                            <div style={{ fontSize: '11.5px', color: 'var(--text-muted)', marginTop: '5px' }}>{l}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
