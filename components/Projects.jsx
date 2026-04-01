import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const PROJECTS = [
    {
        id: 1,
        title: 'FaithConnect',
        category: 'Social Platform',
        color: '#7c3aed',
        colorBg: 'rgba(124,58,237,0.05)',
        emoji: '🙏',
        featured: true,
        status: 'Complete',
        description: 'A social platform connecting Worshippers and Religious Leaders with personalized feeds, Reels, and real-time direct messaging. Dual-role architecture with Firebase backend. Handles content creation, community moderation, and live interactions at scale.',
        tags: ['Flutter', 'Firebase', 'GetX', 'Cloud Firestore', 'Google Auth'],
        images: [
            '/projects/FaithConnect/feed.png',
            '/projects/FaithConnect/leaders.png',
            '/projects/FaithConnect/reels.png',
            '/projects/FaithConnect/mockup.png',
        ],
        stats: [['2 Roles', 'Access Levels'], ['Real-time', 'Messaging'], ['Posts & Reels', 'Content Types']],
        github: 'https://github.com/adeshpatel700-rgb/Faithconnect',
        apk: 'https://github.com/asgharbe23it031-lgtm/asgharbe23it031-lgtm.github.io/raw/main/public/apks/Faithconnect.apk',
    },
    {
        id: 2,
        title: 'MockMate',
        category: 'AI Interview Prep',
        color: '#06b6d4',
        colorBg: 'rgba(6,182,212,0.05)',
        emoji: '🎤',
        featured: false,
        status: 'In Development',
        description: 'AI-powered mock interview platform with adaptive question generation, speech analysis, and instant scoring feedback. Backend built with FastAPI and OpenAI APIs.',
        tags: ['Flutter', 'FastAPI', 'OpenAI', 'Firebase', 'Speech API'],
        images: [],
        stats: [['AI', 'Adaptive Questions'], ['Real-time', 'Feedback'], ['Speech', 'Analysis']],
        github: 'https://github.com/adeshpatel700-rgb',
    },
    {
        id: 3,
        title: 'CalorieWala',
        category: 'Health & Fitness',
        color: '#f59e0b',
        colorBg: 'rgba(245,158,11,0.05)',
        emoji: '🥗',
        featured: false,
        status: 'Complete',
        description: 'Smart calorie and macro tracker with barcode scanning, ML-based food recognition, and daily meal planning. Syncs with health APIs for comprehensive wellness tracking.',
        tags: ['Flutter', 'ML Kit', 'Firebase', 'Health API', 'Hive'],
        images: [],
        stats: [['ML', 'Food Recognition'], ['Barcode', 'Scanner'], ['Daily', 'Meal Plans']],
        github: 'https://github.com/adeshpatel700-rgb',
        apk: 'https://github.com/asgharbe23it031-lgtm/asgharbe23it031-lgtm.github.io/raw/main/public/apks/caloriewala.apk',
    },
    {
        id: 4,
        title: 'Savora',
        category: 'Food Delivery',
        color: '#ef4444',
        colorBg: 'rgba(239,68,68,0.05)',
        emoji: '🍕',
        featured: false,
        status: 'Complete',
        description: 'End-to-end food ordering app with real-time order tracking, Google Maps integration, and Razorpay payment gateway. Covers vendor dashboard, customer flows, and delivery tracking.',
        tags: ['Flutter', 'Firebase', 'Maps API', 'Razorpay'],
        images: [
            '/projects/Savora/image copy.png',
            '/projects/Savora/image copy 2.png',
            '/projects/Savora/image copy 3.png',
        ],
        stats: [['Real-time', 'Order Tracking'], ['Maps', 'Integration'], ['Payment', 'Gateway']],
        github: 'https://github.com/adeshpatel700-rgb',
    },
    {
        id: 5,
        title: 'StudySync',
        category: 'EdTech',
        color: '#8b5cf6',
        colorBg: 'rgba(139,92,246,0.05)',
        emoji: '📚',
        featured: false,
        status: 'Complete',
        description: 'Offline-first student productivity app. Timetable management, note-taking, task tracker, and Pomodoro timer — all persisted with Hive local storage for zero-latency offline access.',
        tags: ['Flutter', 'Hive', 'GetX', 'Local Storage'],
        images: [
            '/projects/StudySync/image copy 4.png',
            '/projects/StudySync/image copy 6.png',
        ],
        stats: [['Offline', 'First'], ['Pomodoro', 'Timer'], ['Progress', 'Analytics']],
        github: 'https://github.com/adeshpatel700-rgb',
    },
    {
        id: 6,
        title: 'Workly',
        category: 'HR & Workforce',
        color: '#10b981',
        colorBg: 'rgba(16,185,129,0.05)',
        emoji: '💼',
        featured: false,
        status: 'Complete',
        description: 'A cohesive team synchronization tool designed for small groups to manage on-site tasks effortlessly. Features zero-friction onboarding with 6-digit IDs, real-time synergy, and visual context with location tags and images.',
        tags: ['Flutter', 'Firebase', 'Provider', 'Cloud Firestore', 'Clean Architecture'],
        images: [],
        stats: [['6-digit ID', 'Join Logic'], ['Real-time', 'Synergy'], ['Admin', 'Dashboard']],
        github: 'https://github.com/adeshpatel700-rgb/Workly',
        apk: 'https://github.com/asgharbe23it031-lgtm/asgharbe23it031-lgtm.github.io/raw/main/public/apks/Workly.apk',
    },
    {
        id: 7,
        title: 'Expense Tracker',
        category: 'Finance',
        color: '#f97316',
        colorBg: 'rgba(249,115,22,0.05)',
        emoji: '💰',
        featured: false,
        status: 'Live on Play Store',
        description: 'Production-ready personal finance tracker with category-wise expense logging, monthly budget limits, visual spending charts, and local data persistence. Currently available for closed testing on Google Play.',
        tags: ['Flutter', 'Hive', 'GetX', 'Charts', 'Google Play'],
        images: [],
        stats: [['Budget', 'Limits'], ['Visual', 'Charts'], ['Play Store', 'Production']],
        github: 'https://github.com/adeshpatel700-rgb/expense-tracker',
        apk: 'https://github.com/asgharbe23it031-lgtm/asgharbe23it031-lgtm.github.io/raw/main/public/apks/expense-tracker.apk',
        playStore: 'https://play.google.com/store/apps/details?id=com.adesh.expensetracker',
        testerGroup: 'https://groups.google.com/g/testers-adesh',
    },
];

const fadeUp = (d = 0) => ({
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] } },
});

export default function Projects() {
    const [ref, inView] = useInView(0.06);
    const [selected, setSelected] = useState(null);
    const [imgIndex, setImgIndex] = useState(0);

    const open = p => { setSelected(p); setImgIndex(0); };

    return (
        <section id="projects" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container" ref={ref}>
                <motion.div variants={fadeUp(0)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                    style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ width: '32px', height: '1px', background: 'var(--accent)' }} />
                    <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)' }}>Projects</span>
                </motion.div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '14px', marginBottom: '44px' }}>
                    <motion.h2 variants={fadeUp(0.05)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                        style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                        Selected Work
                    </motion.h2>
                    <motion.a variants={fadeUp(0.1)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                        href="https://github.com/adeshpatel700-rgb" target="_blank" rel="noreferrer"
                        style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                        View all on GitHub
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </motion.a>
                </div>

                {/* Featured card — no image strip, stays clean */}
                {PROJECTS.filter(p => p.featured).map((p, i) => (
                    <motion.div key={p.id} variants={fadeUp(i * 0.06)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                        style={{ marginBottom: '14px' }}>
                        <ProjectCard p={p} onOpen={open} />
                    </motion.div>
                ))}

                {/* 2-col grid */}
                <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    {PROJECTS.filter(p => !p.featured).map((p, i) => (
                        <motion.div key={p.id} variants={fadeUp(i * 0.07)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                            <ProjectCard p={p} onOpen={open} />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selected && (
                    <>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setSelected(null)}
                            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(14px)', zIndex: 200 }} />

                        <motion.div initial={{ opacity: 0, scale: 0.94, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.94, y: 24 }}
                            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
                            style={{ position: 'fixed', inset: '24px', zIndex: 201, borderRadius: '18px', border: `1px solid ${selected.color}28`, background: '#111', overflow: 'hidden', display: 'flex', flexDirection: 'column', maxWidth: '760px', margin: 'auto', maxHeight: 'calc(100vh - 48px)' }}>

                            {/* Close */}
                            <button onClick={() => setSelected(null)} style={{ position: 'absolute', top: '16px', right: '16px', width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)', border: '1px solid var(--border)', cursor: 'pointer', color: '#fff', fontSize: '16px', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>

                            <div style={{ overflowY: 'auto', padding: '32px' }}>
                                {/* Header */}
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '20px' }}>
                                    <span style={{ fontSize: '2rem' }}>{selected.emoji}</span>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                                            <h2 style={{ fontWeight: 800, fontSize: '1.6rem' }}>{selected.title}</h2>
                                            <StatusBadge status={selected.status} />
                                        </div>
                                        <span style={{ fontSize: '12px', color: selected.color, fontWeight: 600 }}>{selected.category}</span>
                                    </div>
                                </div>

                                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.78, marginBottom: '22px' }}>{selected.description}</p>

                                {/* Stats */}
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px', marginBottom: '22px' }}>
                                    {selected.stats.map(([val, lbl]) => (
                                        <div key={lbl} style={{ padding: '14px', borderRadius: '10px', border: `1px solid ${selected.color}20`, background: `${selected.color}06`, textAlign: 'center' }}>
                                            <div style={{ fontWeight: 700, fontSize: '13.5px', color: selected.color }}>{val}</div>
                                            <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>{lbl}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Tags */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                                    {selected.tags.map(t => <span key={t} className="tag" style={{ fontSize: '12px', color: selected.color, borderColor: `${selected.color}30` }}>{t}</span>)}
                                </div>

                                {/* Screenshots */}
                                {selected.images.length > 0 && (
                                    <div>
                                        <div style={{ fontSize: '11.5px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-subtle)', marginBottom: '12px' }}>Screenshots</div>
                                        <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)', background: '#0a0a0a', marginBottom: '10px', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <motion.img key={imgIndex} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.28 }}
                                                src={selected.images[imgIndex]} alt={`${selected.title} screen ${imgIndex + 1}`}
                                                style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', padding: '10px' }} />
                                        </div>
                                        {selected.images.length > 1 && (
                                            <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap' }}>
                                                {selected.images.map((img, idx) => (
                                                    <div key={idx} onClick={() => setImgIndex(idx)}
                                                        style={{ width: '56px', height: '90px', borderRadius: '7px', overflow: 'hidden', border: `2px solid ${idx === imgIndex ? selected.color : 'var(--border)'}`, cursor: 'pointer', background: '#0a0a0a', transition: 'border-color 0.2s' }}>
                                                        <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '3px' }} />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Actions row: GitHub + APK + Store */}
                                <div style={{ display: 'flex', gap: '10px', marginTop: '22px', flexWrap: 'wrap' }}>
                                    <a href={selected.github} target="_blank" rel="noreferrer"
                                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '9px', border: `1px solid ${selected.color}30`, color: selected.color, fontSize: '13px', fontWeight: 600, background: `${selected.color}08`, transition: 'background 0.2s' }}
                                        onMouseEnter={e => e.currentTarget.style.background = `${selected.color}14`}
                                        onMouseLeave={e => e.currentTarget.style.background = `${selected.color}08`}>
                                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        GitHub
                                    </a>
                                    {selected.apk && (
                                        <a href={selected.apk} download
                                            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '9px', border: '1px solid rgba(34,197,94,0.3)', color: '#22c55e', fontSize: '13px', fontWeight: 600, background: 'rgba(34,197,94,0.06)', transition: 'background 0.2s' }}
                                            onMouseEnter={e => e.currentTarget.style.background = 'rgba(34,197,94,0.12)'}
                                            onMouseLeave={e => e.currentTarget.style.background = 'rgba(34,197,94,0.06)'}>
                                            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                            Download APK
                                        </a>
                                    )}
                                    {selected.playStore && (
                                        <a href={selected.playStore} target="_blank" rel="noreferrer"
                                            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '9px', border: '1px solid rgba(59,130,246,0.3)', color: '#3b82f6', fontSize: '13px', fontWeight: 600, background: 'rgba(59,130,246,0.06)', transition: 'background 0.2s' }}
                                            onMouseEnter={e => e.currentTarget.style.background = 'rgba(59,130,246,0.12)'}
                                            onMouseLeave={e => e.currentTarget.style.background = 'rgba(59,130,246,0.06)'}>
                                            <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M17.523 15.3414L20.355 12.5094L17.523 9.67742V15.3414ZM21.961 11.5704L18.991 9.87342L15.834 13.0304L18.991 16.1874L21.961 14.4894C22.485 14.1904 22.825 13.6264 22.825 13.0304C22.825 12.4344 22.485 11.8704 21.961 11.5704ZM3.511 2.22242C3.253 2.22242 3.003 2.29042 2.784 2.41642L13.842 13.4744L17.069 10.2474L3.511 2.51442C3.511 2.51442 3.511 2.22242 3.511 2.22242ZM2.038 3.51142C1.966 3.71542 1.928 3.93142 1.928 4.15642V21.9044C1.928 22.1294 1.966 22.3454 2.038 22.5494L12.426 12.1614L2.038 3.51142ZM13.842 13.4744L2.784 24.5324C3.003 24.6584 3.253 24.7264 3.511 24.7264C3.769 24.7264 4.026 24.6584 4.245 24.5324L17.069 17.2014L13.842 13.9744V13.4744Z" /></svg>
                                            Play Store
                                        </a>
                                    )}
                                    {selected.testerGroup && (
                                        <a href={selected.testerGroup} target="_blank" rel="noreferrer"
                                            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '9px', border: '1px solid rgba(245,158,11,0.3)', color: '#f59e0b', fontSize: '13px', fontWeight: 600, background: 'rgba(245,158,11,0.06)', transition: 'background 0.2s' }}
                                            onMouseEnter={e => e.currentTarget.style.background = 'rgba(245,158,11,0.12)'}
                                            onMouseLeave={e => e.currentTarget.style.background = 'rgba(245,158,11,0.06)'}>
                                            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                            Tester Group
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <style jsx global>{`
        @media (max-width: 640px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}

function StatusBadge({ status }) {
    const live = status === 'Complete';
    return (
        <span style={{
            fontSize: '11px', fontWeight: 600, padding: '3px 9px', borderRadius: '999px',
            background: live ? 'rgba(34,197,94,0.08)' : 'rgba(200,255,0,0.08)',
            color: live ? '#22c55e' : '#c8ff00',
            border: `1px solid ${live ? 'rgba(34,197,94,0.22)' : 'rgba(200,255,0,0.22)'}`
        }}>{status}</span>
    );
}

function ProjectCard({ p, onOpen }) {
    return (
        <div onClick={() => onOpen(p)}
            style={{ borderRadius: '14px', border: '1px solid var(--border)', background: 'var(--bg-surface)', overflow: 'hidden', cursor: 'pointer', transition: 'border-color 0.22s, transform 0.22s', position: 'relative' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = `${p.color}50`; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}>

            {/* Thin accent bar at top */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${p.color}, transparent)` }} />

            <div style={{ padding: p.featured ? '24px' : '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                    <span style={{ fontSize: p.featured ? '2rem' : '1.6rem' }}>{p.emoji}</span>
                    <StatusBadge status={p.status} />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: p.featured ? '1.2rem' : '1rem', marginBottom: '7px' }}>{p.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '14px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{p.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '14px' }}>
                    {p.tags.slice(0, 4).map(t => <span key={t} className="tag" style={{ fontSize: '11px', padding: '3px 7px' }}>{t}</span>)}
                    {p.tags.length > 4 && <span className="tag" style={{ fontSize: '11px', padding: '3px 7px' }}>+{p.tags.length - 4}</span>}
                </div>

                {/* Bottom row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11.5px', color: 'var(--text-subtle)' }}>
                        View details
                        <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17l10-10M7 7h10v10" /></svg>
                    </div>
                    {p.apk && (
                        <a href={p.apk} download onClick={e => e.stopPropagation()}
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '5px 11px', borderRadius: '7px', border: '1px solid rgba(34,197,94,0.3)', color: '#22c55e', fontSize: '11px', fontWeight: 600, background: 'rgba(34,197,94,0.06)', transition: 'background 0.2s', textDecoration: 'none' }}
                            onMouseEnter={e => e.currentTarget.style.background = 'rgba(34,197,94,0.14)'}
                            onMouseLeave={e => e.currentTarget.style.background = 'rgba(34,197,94,0.06)'}>
                            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                            APK
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
