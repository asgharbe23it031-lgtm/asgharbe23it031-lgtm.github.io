import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const Globe = dynamic(() => import('../components/ui/3d-orb'), { ssr: false });

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
    <div className="min-h-screen bg-black text-white antialiased">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">fast</span> apps
              <br />that feel alive.
            </h1>

            <p className="max-w-lg opacity-80 text-base md:text-lg">
              {resume.summary} {resume.experience} • {resume.clients}.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a href="#work" className="px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-black font-semibold shadow-lg hover:shadow-xl transition-shadow">See my work</a>
              <a href={resume.linkedin} target="_blank" rel="noreferrer" className="px-5 py-3 rounded-2xl border border-gray-700 text-sm opacity-80 hover:opacity-100 transition-opacity">LinkedIn</a>
            </div>

            <div className="mt-6 flex gap-8 text-sm opacity-70">
              <div>
                <div className="font-bold text-xl">1.5yr</div>
                <div>Experience</div>
              </div>
              <div>
                <div className="font-bold text-xl">50+</div>
                <div>Clients</div>
              </div>
              <div>
                <div className="font-bold text-xl">100%</div>
                <div>Delivery Focus</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-lg md:max-w-none"
          >
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[580px] rounded-3xl overflow-hidden bg-black/30 backdrop-blur-sm border border-gray-800/50 shadow-2xl">
              <Globe />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work / Projects */}
      <section id="work" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">Selected Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-gradient-to-br from-gray-900 to-neutral-900 p-6 border border-gray-800 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">Expense Tracker App</h3>
                  <p className="text-sm opacity-70">Flutter • Firebase • Charts</p>
                </div>
                <div className="text-xs opacity-60">2025</div>
              </div>

              <p className="mt-4 opacity-80 text-sm">A fast, offline-capable expense tracker with analytics and secure auth.</p>

              <div className="mt-4 flex gap-3">
                <a className="text-sm px-3 py-2 rounded-md border border-gray-700">View Code</a>
                <a className="text-sm px-3 py-2 rounded-md border border-gray-700">Live Demo</a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold">About me</h2>
            <p className="mt-4 opacity-80 leading-relaxed">{resume.summary} I primarily use Flutter, Firebase and REST APIs to ship products fast. I like clean UI, small bundles, and pragmatic decisions.</p>

            <div className="mt-6 grid grid-cols-2 gap-4">
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

          <aside className="p-6 rounded-2xl border border-gray-800 bg-gradient-to-br from-neutral-900 to-gray-900">
            <div className="text-sm opacity-70">Contact</div>
            <div className="font-semibold mt-2">{resume.name}</div>
            <div className="text-sm opacity-80 mt-2">{resume.email}</div>
            <div className="text-sm opacity-80">{resume.phone}</div>
            <a href={resume.linkedin} className="block mt-4 text-sm opacity-80">LinkedIn</a>
          </aside>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-gradient-to-b from-black to-neutral-900 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">What people say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <motion.blockquote
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-6 rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-neutral-900"
              >
                <p className="opacity-80">"{t.text}"</p>
                <footer className="mt-4 text-sm opacity-70">— {t.name}, <span className="opacity-60">{t.role} • {t.location}</span></footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-sm opacity-70">Want to work together?</div>
            <a href={`mailto:${resume.email}`} className="font-bold mt-2 block">{resume.email}</a>
          </div>

          <div className="flex gap-4 opacity-80">
            <a href={resume.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="#">GitHub</a>
            <a href="#">Dribbble</a>
          </div>
        </div>

        <div className="mt-8 text-xs opacity-60">© {new Date().getFullYear()} {resume.name}. Built with ❤️ for togetha.me</div>
      </footer>
    </div>
  );
}
