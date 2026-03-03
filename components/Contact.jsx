import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { AnimatePresence } from 'framer-motion';

// Real Formspree endpoint from previous portfolio
const FORMSPREE_URL = 'https://formspree.io/f/mkgdqqra';

export default function Contact() {
    const [ref, inView] = useInView(0.1);
    const [focusedField, setFocusedField] = useState(null);
    const [form, setForm] = useState({
        name: '', email: '', projectType: '', budget: '', timeline: '', message: '',
    });
    const [status, setStatus] = useState('idle'); // idle | loading | success | error

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        setStatus('loading');
        try {
            const res = await fetch(FORMSPREE_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setStatus('success');
                setForm({ name: '', email: '', projectType: '', budget: '', timeline: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            }
        } catch {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    const inputStyle = (field) => ({
        width: '100%', padding: '11px 13px',
        borderRadius: '9px',
        border: `1px solid ${focusedField === field ? 'rgba(167,139,250,0.5)' : 'var(--border)'}`,
        boxShadow: focusedField === field ? '0 0 0 3px rgba(167,139,250,0.08)' : 'none',
        background: 'var(--bg-surface)', color: '#fff',
        fontSize: '13.5px', outline: 'none',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        fontFamily: 'var(--font-sans)',
    });

    const labelStyle = (field) => ({
        display: 'block', fontSize: '12px', fontWeight: 500, marginBottom: '6px',
        color: focusedField === field ? 'var(--accent)' : 'var(--text-muted)',
        transition: 'color 0.2s',
    });

    const focus = f => setFocusedField(f);
    const blur = () => setFocusedField(null);

    return (
        <section id="contact" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Single restrained glow */}
            <div style={{ position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)', width: '500px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)', filter: 'blur(70px)', pointerEvents: 'none' }} />

            <div className="container" ref={ref}>
                {/* CTA block — dark, minimal */}
                <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
                    style={{ textAlign: 'center', marginBottom: '52px', padding: '52px 32px', borderRadius: '18px', border: '1px solid var(--border)', background: 'var(--bg-surface)', position: 'relative' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 14px', borderRadius: '999px', border: '1px solid rgba(167,139,250,0.25)', background: 'rgba(167,139,250,0.07)', marginBottom: '22px' }}>
                        <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
                        <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--accent)' }}>Open to work</span>
                    </div>
                    <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '14px' }}>
                        Let&apos;s build<br />something that ships.
                    </h2>
                    <p style={{ fontSize: '1rem', color: 'var(--text-muted)', maxWidth: '400px', margin: '0 auto 28px', lineHeight: 1.75 }}>
                        Available for freelance, contract, and full-time remote. Responds within 24 hours.
                    </p>
                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="mailto:adeshpatel700@gmail.com"
                            style={{ padding: '11px 22px', borderRadius: '9px', background: 'var(--accent)', color: '#0a0a0a', fontWeight: 700, fontSize: '13.5px', boxShadow: '0 0 22px rgba(167,139,250,0.28)', transition: 'transform 0.18s, box-shadow 0.18s' }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 32px rgba(167,139,250,0.45)'; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 22px rgba(167,139,250,0.28)'; }}>
                            adeshpatel700@gmail.com
                        </a>
                        <a href="https://linkedin.com/in/adesh-chaudhary-933426305" target="_blank" rel="noreferrer"
                            style={{ padding: '11px 22px', borderRadius: '9px', border: '1px solid var(--border)', color: 'var(--text-muted)', fontWeight: 600, fontSize: '13.5px', transition: 'border-color 0.18s, color 0.18s' }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = '#fff'; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}>
                            LinkedIn
                        </a>
                    </div>
                </motion.div>

                {/* Form */}
                <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.12 }}
                    style={{ maxWidth: '560px', margin: '0 auto' }}>

                    <AnimatePresence>
                        {status === 'success' && (
                            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                style={{ padding: '13px 16px', borderRadius: '9px', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.25)', color: '#22c55e', fontSize: '13.5px', marginBottom: '18px', textAlign: 'center' }}>
                                ✓ Message sent. I&apos;ll get back to you shortly.
                            </motion.div>
                        )}
                        {status === 'error' && (
                            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                style={{ padding: '13px 16px', borderRadius: '9px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', color: '#ef4444', fontSize: '13.5px', marginBottom: '18px', textAlign: 'center' }}>
                                Something went wrong. Email me directly at adeshpatel700@gmail.com
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '22px', textAlign: 'center', color: 'var(--text-muted)' }}>Send a message</h3>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
                        {/* Name & Email */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                            <div>
                                <label htmlFor="name" style={labelStyle('name')}>Your Name</label>
                                <input id="name" type="text" name="name" placeholder="Alex Kumar" value={form.name} onChange={handleChange} required style={inputStyle('name')} onFocus={() => focus('name')} onBlur={blur} />
                            </div>
                            <div>
                                <label htmlFor="email" style={labelStyle('email')}>Email</label>
                                <input id="email" type="email" name="email" placeholder="alex@company.com" value={form.email} onChange={handleChange} required style={inputStyle('email')} onFocus={() => focus('email')} onBlur={blur} />
                            </div>
                        </div>

                        {/* Project Type & Budget */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                            <div>
                                <label htmlFor="projectType" style={labelStyle('projectType')}>Project Type</label>
                                <select id="projectType" name="projectType" value={form.projectType} onChange={handleChange} required style={{ ...inputStyle('projectType'), appearance: 'none', cursor: 'pointer' }} onFocus={() => focus('projectType')} onBlur={blur}>
                                    <option value="" disabled>Select type…</option>
                                    <option value="New App">New App Development</option>
                                    <option value="Feature Addition">Feature Addition</option>
                                    <option value="App Optimization">App Optimization</option>
                                    <option value="Bug Fix">Bug Fix</option>
                                    <option value="Consultation">Consultation</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="budget" style={labelStyle('budget')}>Budget Range</label>
                                <select id="budget" name="budget" value={form.budget} onChange={handleChange} required style={{ ...inputStyle('budget'), appearance: 'none', cursor: 'pointer' }} onFocus={() => focus('budget')} onBlur={blur}>
                                    <option value="" disabled>Select budget…</option>
                                    <option>Under ₹15,000</option>
                                    <option>₹15,000 – ₹30,000</option>
                                    <option>₹30,000 – ₹50,000</option>
                                    <option>₹50,000 – ₹80,000</option>
                                    <option>Above ₹80,000</option>
                                    <option>Not Sure Yet</option>
                                </select>
                            </div>
                        </div>

                        {/* Timeline */}
                        <div>
                            <label htmlFor="timeline" style={labelStyle('timeline')}>Timeline</label>
                            <select id="timeline" name="timeline" value={form.timeline} onChange={handleChange} required style={{ ...inputStyle('timeline'), appearance: 'none', cursor: 'pointer' }} onFocus={() => focus('timeline')} onBlur={blur}>
                                <option value="" disabled>When do you need this?</option>
                                <option>ASAP (within 1 week)</option>
                                <option>1–2 weeks</option>
                                <option>2–4 weeks</option>
                                <option>1–2 months</option>
                                <option>Flexible / Exploring</option>
                            </select>
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" style={labelStyle('message')}>Message</label>
                            <textarea id="message" name="message" placeholder="Describe your project — what you're building, what you need." value={form.message} onChange={handleChange} required rows={4} style={{ ...inputStyle('message'), resize: 'vertical', lineHeight: 1.65 }} onFocus={() => focus('message')} onBlur={blur} />
                        </div>

                        {/* Submit */}
                        <motion.button type="submit" disabled={status === 'loading'} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                            style={{
                                padding: '13px', borderRadius: '9px', fontWeight: 700, fontSize: '14px', cursor: status !== 'idle' ? 'default' : 'pointer',
                                background: status === 'success' ? 'rgba(34,197,94,0.12)' : status === 'error' ? 'rgba(239,68,68,0.12)' : 'var(--accent)',
                                color: status === 'success' ? '#22c55e' : status === 'error' ? '#ef4444' : '#0a0a0a',
                                border: status === 'success' ? '1px solid rgba(34,197,94,0.3)' : status === 'error' ? '1px solid rgba(239,68,68,0.3)' : 'none',
                                boxShadow: status === 'idle' ? '0 0 20px rgba(167,139,250,0.25)' : 'none',
                                transition: 'all 0.2s',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                            }}>
                            {status === 'loading' && (
                                <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                    style={{ width: '16px', height: '16px', border: '2px solid currentColor', borderTopColor: 'transparent', borderRadius: '50%' }} />
                            )}
                            {status === 'idle' && 'Send Message'}
                            {status === 'loading' && 'Sending…'}
                            {status === 'success' && '✓ Sent!'}
                            {status === 'error' && 'Retry'}
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
