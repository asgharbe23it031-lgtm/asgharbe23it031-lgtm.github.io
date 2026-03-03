import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const SKILLS = [
    {
        heading: 'Mobile & UI',
        color: '#a78bfa',
        colorBg: 'rgba(167,139,250,0.06)',
        colorBorder: 'rgba(167,139,250,0.18)',
        items: [
            { name: 'Flutter', level: 92 },
            { name: 'Dart', level: 90 },
            { name: 'Figma → Code', level: 84 },
            { name: 'Animations', level: 80 },
            { name: 'Responsive UI', level: 88 },
        ],
    },
    {
        heading: 'Backend & Data',
        color: '#22c55e',
        colorBg: 'rgba(34,197,94,0.06)',
        colorBorder: 'rgba(34,197,94,0.18)',
        items: [
            { name: 'Firebase', level: 88 },
            { name: 'REST APIs', level: 90 },
            { name: 'Hive (local)', level: 78 },
            { name: 'GetX / Bloc', level: 82 },
            { name: 'FastAPI', level: 62 },
        ],
    },
    {
        heading: 'Tooling & Workflow',
        color: '#f472b6',
        colorBg: 'rgba(244,114,182,0.06)',
        colorBorder: 'rgba(244,114,182,0.18)',
        items: [
            { name: 'Git / GitHub', level: 88 },
            { name: 'Play Store', level: 80 },
            { name: 'VS Code', level: 92 },
            { name: 'Postman', level: 85 },
            { name: 'Jira / Notion', level: 75 },
        ],
    },
];

const ALSO_FAMILIAR = ['Python', 'Node.js (basics)', 'ML Kit', 'Google Maps SDK', 'Razorpay', 'GitHub Actions', 'Provider', 'Dio HTTP'];

const fadeUp = (d = 0) => ({
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] } },
});

export default function Skills() {
    const [ref, inView] = useInView(0.08);

    return (
        <section id="skills" className="section" style={{ position: 'relative' }}>
            <div className="container" ref={ref}>
                <motion.div variants={fadeUp(0)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                    style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ width: '32px', height: '1px', background: 'var(--accent)' }} />
                    <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)' }}>Skills</span>
                </motion.div>

                <motion.h2 variants={fadeUp(0.05)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                    style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '14px', lineHeight: 1.1 }}>
                    Stack & Depth
                </motion.h2>
                <motion.p variants={fadeUp(0.1)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                    style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '44px', maxWidth: '440px' }}>
                    Proficiency levels reflect production usage — not just tutorials.
                </motion.p>

                {/* 3-col skill cards */}
                <motion.div variants={fadeUp(0.12)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px', marginBottom: '24px' }}>
                    {SKILLS.map((group, gi) => (
                        <div key={group.heading}
                            style={{ padding: '24px', borderRadius: '14px', border: `1px solid ${group.colorBorder}`, background: group.colorBg }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '22px' }}>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: group.color, flexShrink: 0 }} />
                                <span style={{ fontSize: '12.5px', fontWeight: 700, letterSpacing: '0.04em', color: group.color }}>{group.heading}</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                {group.items.map((sk, si) => (
                                    <div key={sk.name}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                                            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{sk.name}</span>
                                            <span style={{ fontSize: '12px', fontWeight: 600, color: group.color }}>{sk.level}%</span>
                                        </div>
                                        <div style={{ height: '3px', borderRadius: '999px', background: 'rgba(255,255,255,0.07)' }}>
                                            <motion.div
                                                initial={{ width: 0 }} animate={inView ? { width: `${sk.level}%` } : {}}
                                                transition={{ duration: 1.0, delay: gi * 0.15 + si * 0.07 + 0.3, ease: [0.22, 1, 0.36, 1] }}
                                                style={{ height: '100%', borderRadius: '999px', background: group.color }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Also familiar */}
                <motion.div variants={fadeUp(0.2)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                    style={{ padding: '18px 20px', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--bg-surface)' }}>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-subtle)', letterSpacing: '0.08em', textTransform: 'uppercase', marginRight: '12px' }}>Also familiar with</span>
                    <div style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '6px', marginTop: '10px' }}>
                        {ALSO_FAMILIAR.map(t => (
                            <span key={t} className="tag" style={{ fontSize: '11.5px' }}>{t}</span>
                        ))}
                    </div>
                </motion.div>
            </div>

            <style jsx global>{`
        @media (max-width: 768px) {
          #skills .container > div:last-child > div:first-of-type { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
