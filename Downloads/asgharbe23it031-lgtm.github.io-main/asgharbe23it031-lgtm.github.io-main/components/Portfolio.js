"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const PROJECTS = [
  {
    id: 1,
    title: 'Savora',
    category: 'Food Delivery App',
    description: 'A delightful food ordering experience with real-time tracking, personalized recommendations, and seamless checkout. Built for food lovers who crave convenience.',
    tags: ['Flutter', 'Firebase', 'Maps API', 'Payment Gateway'],
    images: [
      '/projects/Savora/image copy.png',
      '/projects/Savora/image copy 2.png',
      '/projects/Savora/image copy 3.png',
    ],
    gradient: 'from-orange-600 to-red-500',
    accentColor: 'orange',
    stats: { tracking: 'Real-time', recommendations: 'AI-Powered', checkout: 'One-Tap' }
  },
  {
    id: 2,
    title: 'Smart Home IoT',
    category: 'IoT Control Interface',
    description: 'Intuitive smart home control at your fingertips. Manage lighting, temperature, security, and energy consumption with elegant, responsive controls.',
    tags: ['Flutter', 'IoT', 'MQTT', 'Real-time Data'],
    images: [
      '/projects/Smart Home IoT mobile interface/image.png',
      '/projects/Smart Home IoT mobile interface/image copy 5.png',
    ],
    gradient: 'from-blue-600 to-cyan-500',
    accentColor: 'blue',
    stats: { control: 'Instant', voice: 'Enabled', insights: 'Energy Analytics' }
  },
  {
    id: 3,
    title: 'StudySync',
    category: 'Educational Platform',
    description: 'Collaborative learning made simple. Connect students with resources, track progress, schedule sessions, and achieve academic goals together.',
    tags: ['Flutter', 'Firebase', 'Video Calls', 'Analytics'],
    images: [
      '/projects/StudySync/image copy 4.png',
      '/projects/StudySync/image copy 6.png',
    ],
    gradient: 'from-purple-600 to-pink-500',
    accentColor: 'purple',
    stats: { collaboration: 'Live', tracking: 'Progress', sessions: 'Video Calls' }
  },
]

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [hoveredProject, setHoveredProject] = useState(null)

  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">Projects</span>
        </h2>
        <p className="text-base sm:text-lg opacity-70 max-w-2xl mx-auto">
          Real-world applications built with passion, precision, and cutting-edge technology
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            onHoverStart={() => setHoveredProject(project.id)}
            onHoverEnd={() => setHoveredProject(null)}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
              {/* Image Container with Parallax Effect */}
              <div className="relative h-[400px] sm:h-[450px] overflow-hidden bg-black">
                {/* Primary Image */}
                <motion.div
                  animate={{
                    scale: hoveredProject === project.id ? 1.05 : 1,
                    y: hoveredProject === project.id ? -10 : 0,
                  }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="relative h-full"
                >
                  <img
                    src={project.images[0]}
                    alt={`${project.title} screenshot 1`}
                    className="absolute inset-0 w-full h-full object-contain object-center p-4"
                  />
                </motion.div>

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                  className={`absolute top-4 right-4 px-3 py-1.5 rounded-full bg-gradient-to-r ${project.gradient} text-xs font-semibold backdrop-blur-sm`}
                >
                  {project.category}
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base opacity-70 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-full bg-gray-800/50 border border-gray-700/50 text-xs opacity-80"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2.5 py-1 rounded-full bg-gray-800/50 border border-gray-700/50 text-xs opacity-60">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-sm font-semibold opacity-80 group-hover:opacity-100 transition-opacity"
                >
                  View Details
                  <span className="text-lg">→</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-4 sm:inset-8 md:inset-16 lg:inset-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-800 rounded-3xl z-50 overflow-hidden flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-gray-800/80 hover:bg-gray-700 flex items-center justify-center text-xl z-10 transition-colors"
              >
                ✕
              </button>

              {/* Scrollable Content */}
              <div className="overflow-y-auto p-6 sm:p-8 md:p-10">
                {/* Header */}
                <div className="mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <span className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${selectedProject.gradient} text-sm font-semibold mb-4`}>
                      {selectedProject.category}
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
                      {selectedProject.title}
                    </h2>
                    <p className="text-base sm:text-lg opacity-80 max-w-3xl">
                      {selectedProject.description}
                    </p>
                  </motion.div>
                </div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="grid grid-cols-3 gap-4 mb-8"
                >
                  {Object.entries(selectedProject.stats).map(([key, value], i) => (
                    <div
                      key={key}
                      className="p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 text-center"
                    >
                      <div className="text-xl sm:text-2xl font-bold mb-1">{value}</div>
                      <div className="text-xs sm:text-sm opacity-60 capitalize">{key}</div>
                    </div>
                  ))}
                </motion.div>

                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-8"
                >
                  <h3 className="text-lg sm:text-xl font-bold mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.05 }}
                        className={`px-4 py-2 rounded-xl bg-gradient-to-r ${selectedProject.gradient} bg-opacity-10 border border-gray-700 text-sm font-medium`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Screenshots Gallery */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-lg sm:text-xl font-bold mb-4">Screenshots</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {selectedProject.images.map((image, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                        className="relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 aspect-[9/16] group cursor-pointer"
                      >
                        <img
                          src={image}
                          alt={`${selectedProject.title} screenshot ${i + 1}`}
                          className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${selectedProject.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
