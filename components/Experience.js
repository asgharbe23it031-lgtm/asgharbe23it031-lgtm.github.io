"use client"

import { motion } from 'framer-motion'

const EXPERIENCE = [
    {
        id: 1,
        company: 'Trisaran Money',
        role: 'Android Developer',
        period: 'Sept 2025 - Present',
        duration: '5 months',
        type: 'Full-time',
        description: 'Developing Flutter applications from scratch at Trisaran Money, designing UI/UX, integrating APIs, debugging, and testing fintech solutions.',
        technologies: ['Flutter', 'Dart', 'REST APIs', 'Mobile Application Development', 'Android Framework'],
        logo: null,
        gradient: 'from-green-600 to-emerald-500',
        current: true
    },
    {
        id: 2,
        company: '7 Seers',
        role: 'Flutter Developer Intern',
        period: 'Apr 2025 - Sep 2025',
        duration: '6 months',
        type: 'Internship',
        description: 'Developed and maintained cross-platform applications using Flutter and Dart, enhancing user experience. Integrated REST APIs to ensure seamless data communication and optimized app performance. Collaborated with team members on UI improvements, bug fixes, and feature rollouts to meet project deadlines.',
        technologies: ['Flutter', 'Dart', 'Git', 'REST APIs'],
        logo: null,
        gradient: 'from-blue-600 to-cyan-500',
        current: false
    },
    {
        id: 3,
        company: 'Freelance Projects',
        role: 'Flutter Developer',
        period: 'Dec 2024 - Present',
        duration: '1 year 1 month',
        type: 'Freelance',
        description: 'Building mobile applications for startups and small businesses. Delivered 5+ successful projects including social platforms, food delivery apps, and IoT solutions with a focus on quality and client satisfaction.',
        technologies: ['Flutter', 'Firebase', 'REST APIs', 'UI/UX Design'],
        logo: null,
        gradient: 'from-purple-600 to-pink-500',
        current: true
    }
]

export default function Experience() {
    return (
        <section id="experience" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 relative">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12 sm:mb-16"
            >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
                    Professional{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
                        Experience
                    </span>
                </h2>
                <p className="text-base sm:text-lg opacity-70 max-w-2xl mx-auto">
                    Building exceptional mobile experiences across startups and freelance projects
                </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-pink-500 to-orange-500 opacity-30 hidden md:block" />

                {/* Experience Cards */}
                <div className="space-y-8 sm:space-y-12">
                    {EXPERIENCE.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`relative flex flex-col md:flex-row gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 ring-4 ring-black z-10">
                                {exp.current && (
                                    <motion.div
                                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-500"
                                    />
                                )}
                            </div>

                            {/* Card */}
                            <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                <motion.div
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative group"
                                >
                                    {/* Gradient Glow */}
                                    <div className={`absolute -inset-1 bg-gradient-to-r ${exp.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`} />

                                    <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-gray-700 transition-all">
                                        {/* Current Badge */}
                                        {exp.current && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full text-xs font-semibold shadow-lg"
                                            >
                                                ✨ Current
                                            </motion.div>
                                        )}

                                        {/* Company Logo/Icon */}
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center flex-shrink-0 overflow-hidden`}>
                                                {exp.logo ? (
                                                    <img
                                                        src={exp.logo}
                                                        alt={`${exp.company} logo`}
                                                        className="w-full h-full object-contain p-2"
                                                    />
                                                ) : (
                                                    <span className="text-2xl font-bold text-white">
                                                        {exp.company.charAt(0)}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="flex-1">
                                                <h3 className="text-xl sm:text-2xl font-bold mb-1">
                                                    {exp.role}
                                                </h3>
                                                <div className="flex flex-wrap items-center gap-2 text-sm opacity-80">
                                                    <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                                        {exp.company}
                                                    </span>
                                                    <span>•</span>
                                                    <span className={`px-2 py-0.5 rounded-full text-xs ${exp.type === 'Full-time'
                                                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                                        : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                                                        }`}>
                                                        {exp.type}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Period */}
                                        <div className="flex items-center gap-2 text-sm opacity-70 mb-4">
                                            <span>📅</span>
                                            <span>{exp.period}</span>
                                            <span>•</span>
                                            <span className="text-purple-400">{exp.duration}</span>
                                        </div>

                                        {/* Description */}
                                        <p className="text-sm sm:text-base opacity-80 mb-4 leading-relaxed">
                                            {exp.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech, i) => (
                                                <motion.span
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: i * 0.05 }}
                                                    className="px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700/50 text-xs"
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Spacer for alternating layout */}
                            <div className="hidden md:block flex-1" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Summary Stats */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-16 grid sm:grid-cols-3 gap-6"
            >
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                        2
                    </div>
                    <div className="text-sm opacity-70">Companies</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400 mb-2">
                        5+
                    </div>
                    <div className="text-sm opacity-70">Freelance Clients</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-2">
                        1yr 1mo
                    </div>
                    <div className="text-sm opacity-70">Total Experience</div>
                </div>
            </motion.div>
        </section>
    )
}
