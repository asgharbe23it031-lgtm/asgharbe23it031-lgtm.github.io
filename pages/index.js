import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const Globe = dynamic(() => import('../components/ui/3d-orb'), { ssr: false });
const StarryBackground = dynamic(() => import('../components/StarryBackground'), { ssr: false });
const MusicPlayer = dynamic(() => import('../components/MusicPlayer'), { ssr: false });
const Portfolio = dynamic(() => import('../components/Portfolio'), { ssr: false });
const Experience = dynamic(() => import('../components/Experience'), { ssr: false });
const ContactForm = dynamic(() => import('../components/ContactForm'), { ssr: false });
const AnimatedStats = dynamic(() => import('../components/AnimatedStats'), { ssr: false });

const TESTIMONIALS = [
  {
    name: 'Riya Sharma',
    role: 'Founder, ShopFolk',
    text: 'Adesh turned our idea into a blazing-fast app in days. Communication was top-tier.',
    location: 'Mumbai, IN'
  },
  {
    name: 'Vikram Joshi',
    role: 'Product Head, AgroLink',
    text: 'Polished UI, smooth animations — users loved the update. Highly recommended!',
    location: 'Pune, IN'
  },
  {
    name: 'Anjali Verma',
    role: 'CEO, StudySync',
    text: 'Fast turnaround, pragmatic engineering, and creative UX ideas.',
    location: 'Delhi, IN'
  }
];

export default function Home() {
  const resume = {
    name: 'Adesh Chaudhary',
    title: 'Flutter Developer • Creative App Builder',
    email: 'adeshpatel700@gmail.com',
    phone: '+91 9305719682',
    linkedin: 'https://linkedin.com/in/adesh-chaudhary-933426305',
    summary:
      'Motivated and detail-oriented Flutter Developer building cross-platform apps with a focus on performance and delightful UI. I ship fast and iterate with real users.',
    experience: '1.5 years professional experience',
    clients: '50+ clients'
  };

  return (
    <div className="min-h-screen bg-black text-white antialiased relative overflow-x-hidden">
      <StarryBackground />
      <MusicPlayer />
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
            <a href="#testimonials">Testimonials</a>
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

              <p className="max-w-lg opacity-80 text-sm sm:text-base md:text-lg leading-relaxed">
                {resume.summary} {resume.experience} • {resume.clients}.
              </p>

              <div className="flex gap-4 flex-wrap">
                <a href="#contact" className="px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-black font-semibold shadow-lg hover:shadow-xl transition-shadow">Let's talk</a>
                <a href={resume.linkedin} target="_blank" rel="noreferrer" className="px-5 py-3 rounded-2xl border border-gray-700 text-sm opacity-80 hover:opacity-100 transition-opacity">LinkedIn</a>
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
              <p className="mt-3 sm:mt-4 opacity-80 leading-relaxed text-sm sm:text-base">{resume.summary} I primarily use Flutter, Firebase and REST APIs to ship products fast. I like clean UI, small bundles, and pragmatic decisions.</p>

              <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800">
                  <div className="text-sm opacity-70">Experience</div>
                  <div className="font-bold text-xl">1.5 years</div>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800">
                  <div className="text-sm opacity-70">Clients</div>
                  <div className="font-bold text-xl">50+</div>
                </div>
              </div>
            </div>

            <aside className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-800 bg-gradient-to-br from-neutral-900 to-gray-900">
              <div className="text-sm opacity-70">Contact</div>
              <div className="font-semibold mt-2">{resume.name}</div>
              <div className="text-sm opacity-80 mt-2">{resume.email}</div>
              <div className="text-sm opacity-80">{resume.phone}</div>
              <a href={resume.linkedin} className="block mt-4 text-sm opacity-80">LinkedIn</a>
            </aside>
          </div>
        </section>

        {/* Testimonials */}
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

        {/* Contact */}
        <section id="contact" className="py-16 sm:py-24 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 relative border-t border-gray-800">
          <div className="text-center text-xs opacity-60">
            © {new Date().getFullYear()} {resume.name}. Built with ❤️ for togetha.me
          </div>
        </footer>
      </div>
    </div>
  );
}
