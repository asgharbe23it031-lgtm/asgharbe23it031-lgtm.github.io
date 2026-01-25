import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const Globe = dynamic(() => import('../components/ui/3d-orb'), { ssr: false });
const StarryBackground = dynamic(() => import('../components/StarryBackground'), { ssr: false });
const Portfolio = dynamic(() => import('../components/Portfolio'), { ssr: false });
const Experience = dynamic(() => import('../components/Experience'), { ssr: false });
const ContactForm = dynamic(() => import('../components/ContactForm'), { ssr: false });
const AnimatedStats = dynamic(() => import('../components/AnimatedStats'), { ssr: false });

const TESTIMONIALS = [
  {
    name: 'Verified Client',
    role: 'Startup Founder',
    text: 'Working on building strong client relationships through quality work and timely delivery.',
    location: 'India'
  }
];

export default function Home() {
  const resume = {
    name: 'Adesh Chaudhary',
    title: 'Flutter Developer • Creative App Builder',
    email: 'adeshpatel700@gmail.com',

    linkedin: 'https://linkedin.com/in/adesh-chaudhary-933426305',
    summary:
      'Flutter Developer focused on building beautiful, high-performance mobile apps. I specialize in cross-platform development with clean code and modern UI/UX. Ready to bring your ideas to life.',
    experience: '1.5 years professional experience',
    clients: '5+ clients'
  };

  return (
    <div className="min-h-screen bg-black text-white antialiased relative overflow-x-hidden">
      <StarryBackground />
      <div className="relative z-10">
        <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-black font-bold">A</div>
            <div>
              <div className="text-sm opacity-80">Adesh Chaudhary</div>
              <div className="text-xs opacity-60">Flutter Developer</div>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 opacity-80 text-sm">
            <a href="#work">Work</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center py-12 md:py-20">
          <div className="max-w-7xl mx-auto w-full px-6 flex flex-col md:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex-1 flex flex-col justify-center gap-6 z-10"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">fast</span> apps
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>that feel alive.
              </h1>

              <p className="max-w-lg opacity-80 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                {resume.summary} {resume.experience} • {resume.clients}.
              </p>

              {/* Available Badge + Trust Indicators Row */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                {/* Available Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Available
                </div>

                {/* Separator */}
                <span className="hidden sm:inline text-gray-700">|</span>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center gap-3 text-xs opacity-70">
                  <span className="flex items-center gap-1">
                    <span>⚡</span>
                    <span>24h Response</span>
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center gap-1">
                    <span>🇮🇳</span>
                    <span>India</span>
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center gap-1">
                    <span>✓</span>
                    <span>Quality Guaranteed</span>
                  </span>
                </div>
              </div>

              <div className="flex gap-4 flex-wrap">
                <a href="#contact" className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2">
                  <span>Start Your Project</span>
                  <span className="text-lg">→</span>
                </a>
                <a href="https://linkedin.com/in/adesh-chaudhary-933426305" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-2xl border border-gray-700 text-sm opacity-80 hover:opacity-100 hover:border-purple-500 transition-all flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <a href="https://github.com/adeshpatel700-rgb" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-2xl border border-gray-700 text-sm opacity-80 hover:opacity-100 hover:border-purple-500 transition-all flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>


              <AnimatedStats />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 w-full max-w-lg md:max-w-none"
            >
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[580px] rounded-2xl md:rounded-3xl overflow-hidden bg-black/30 backdrop-blur-sm border border-gray-800/50 shadow-2xl">
                <Globe />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills & Technologies */}
        <section id="work" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Skills & Technologies</h2>
            <p className="text-base sm:text-lg opacity-70 mb-8 sm:mb-12">Tools and frameworks I use to bring ideas to life</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-900/30 to-purple-800/10 border border-purple-700/30 backdrop-blur-sm"
            >
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">📱</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Mobile Development</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-purple-600/20 text-sm border border-purple-500/30">Flutter</span>
                <span className="px-3 py-1 rounded-full bg-purple-600/20 text-sm border border-purple-500/30">Dart</span>
                <span className="px-3 py-1 rounded-full bg-purple-600/20 text-sm border border-purple-500/30">iOS/Android</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-pink-900/30 to-pink-800/10 border border-pink-700/30 backdrop-blur-sm"
            >
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🔥</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Backend & Cloud</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-pink-600/20 text-sm border border-pink-500/30">Firebase</span>
                <span className="px-3 py-1 rounded-full bg-pink-600/20 text-sm border border-pink-500/30">REST APIs</span>
                <span className="px-3 py-1 rounded-full bg-pink-600/20 text-sm border border-pink-500/30">Cloud</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-yellow-900/30 to-yellow-800/10 border border-yellow-700/30 backdrop-blur-sm sm:col-span-2 md:col-span-1"
            >
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🎨</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">UI/UX Design</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-yellow-600/20 text-sm border border-yellow-500/30">Figma</span>
                <span className="px-3 py-1 rounded-full bg-yellow-600/20 text-sm border border-yellow-500/30">Material Design</span>
                <span className="px-3 py-1 rounded-full bg-yellow-600/20 text-sm border border-yellow-500/30">Animations</span>
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12 sm:mt-16"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">What I Offer</h3>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-neutral-900/50 border border-gray-800/50 backdrop-blur-sm">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="text-xl sm:text-2xl flex-shrink-0">⚡</div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Rapid Prototyping</h4>
                    <p className="opacity-70 text-xs sm:text-sm">Transform your ideas into working prototypes in days, not weeks. Perfect for validation and investor demos.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-neutral-900/50 border border-gray-800/50 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🚀</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Full-Stack Development</h4>
                    <p className="opacity-70 text-sm">End-to-end app development with backend integration, authentication, and cloud deployment.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-neutral-900/50 border border-gray-800/50 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🎯</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">App Optimization</h4>
                    <p className="opacity-70 text-sm">Performance tuning, bug fixes, and feature additions for existing Flutter applications.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-neutral-900/50 border border-gray-800/50 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">💡</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Technical Consulting</h4>
                    <p className="opacity-70 text-sm">Architecture planning, tech stack decisions, and code reviews to ensure scalable solutions.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Portfolio */}
        <Portfolio />

        {/* Experience */}
        <Experience />

        {/* About */}
        <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 relative">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 items-start">
            <div className="md:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold">About me</h2>
              <p className="mt-3 sm:mt-4 opacity-80 leading-relaxed text-sm sm:text-base">{resume.summary}</p>

              <p className="mt-3 opacity-80 leading-relaxed text-sm sm:text-base">
                I primarily use <strong className="text-purple-400">Flutter</strong>, <strong className="text-purple-400">Firebase</strong>, and <strong className="text-purple-400">Dart</strong> to ship products fast.
                I believe in clean code, beautiful UI, and pragmatic decisions that prioritize user experience.
              </p>

              <p className="mt-3 opacity-80 leading-relaxed text-sm sm:text-base">
                Currently <strong className="text-green-400">accepting new projects</strong> starting February 2026.
                Whether you're a startup founder, small business owner, or enterprise team, I'm here to turn your vision into reality.
              </p>

              {/* What I Value */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-purple-400">✓</span>
                  <span>Clear Communication</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-purple-400">✓</span>
                  <span>On-time Delivery</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-purple-400">✓</span>
                  <span>Quality Code</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-purple-400">✓</span>
                  <span>Post-launch Support</span>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800">
                  <div className="text-sm opacity-70">Experience</div>
                  <div className="font-bold text-xl">1.5 years</div>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800">
                  <div className="text-sm opacity-70">Clients</div>
                  <div className="font-bold text-xl">5+</div>
                </div>
              </div>
            </div>

            <aside className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-800 bg-gradient-to-br from-neutral-900 to-gray-900">
              <div className="text-sm opacity-70">Contact</div>
              <div className="font-semibold mt-2">{resume.name}</div>
              <div className="text-sm opacity-80 mt-2">{resume.email}</div>
              <a href={resume.linkedin} className="block mt-4 text-sm opacity-80">LinkedIn</a>
            </aside>
          </div>
        </section>

        {/* Testimonials - Hidden for now */}
        {/* 
        <section id="testimonials" className="bg-gradient-to-b from-transparent to-black/30 py-12 sm:py-16 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">What people say</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {TESTIMONIALS.map((t, idx) => (
                <motion.blockquote
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="p-4 sm:p-6 rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-neutral-900"
                >
                  <p className="opacity-80 text-sm sm:text-base">"{t.text}"</p>
                  <footer className="mt-3 sm:mt-4 text-xs sm:text-sm opacity-70">— {t.name}, <span className="opacity-60">{t.role} • {t.location}</span></footer>
                </motion.blockquote>
              ))}
            </div>
          </div>
        </section>
        */}

        {/* Contact */}
        <section id="contact" className="py-16 sm:py-24 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto px-4 sm:px-6 py-12 relative border-t border-gray-800">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-sm">A</div>
                <div className="font-bold">Adesh Chaudhary</div>
              </div>
              <p className="text-sm opacity-70 leading-relaxed">Flutter Developer building beautiful, performant cross-platform mobile apps.</p>
            </div>

            {/* Quick Links */}
            <div>
              <div className="font-semibold mb-3 text-sm">Quick Links</div>
              <div className="space-y-2 text-sm opacity-80">
                <a href="#work" className="block hover:text-purple-400 transition-colors">Skills & Work</a>
                <a href="#projects" className="block hover:text-purple-400 transition-colors">Projects</a>
                <a href="#experience" className="block hover:text-purple-400 transition-colors">Experience</a>
                <a href="#about" className="block hover:text-purple-400 transition-colors">About Me</a>
                <a href="#contact" className="block hover:text-purple-400 transition-colors">Contact</a>
              </div>
            </div>

            {/* Connect */}
            <div>
              <div className="font-semibold mb-3 text-sm">Connect</div>
              <div className="space-y-2 text-sm opacity-80">
                <a href="mailto:adeshpatel700@gmail.com" className="block hover:text-purple-400 transition-colors flex items-center gap-2">
                  <span>📧</span>
                  <span>Email</span>
                </a>
                <a href="https://linkedin.com/in/adesh-chaudhary-933426305" target="_blank" rel="noreferrer" className="block hover:text-purple-400 transition-colors flex items-center gap-2">
                  <span>💼</span>
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/adeshpatel700-rgb" target="_blank" rel="noreferrer" className="block hover:text-purple-400 transition-colors flex items-center gap-2">
                  <span>💻</span>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-xs opacity-60 pt-8 border-t border-gray-800">
            <p>© {new Date().getFullYear()} Adesh Chaudhary. All rights reserved.</p>
            <p className="mt-1">Built with ❤️ using Next.js & Tailwind CSS</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
