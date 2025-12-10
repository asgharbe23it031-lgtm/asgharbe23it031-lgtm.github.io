"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [status, setStatus] = useState('idle') // idle, loading, success, error
    const [focusedField, setFocusedField] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('loading')

        // Simulate API call (replace with actual form submission)
        // You can use Formspree, EmailJS, or your own backend
        try {
            // Example with Formspree (replace with your form ID)
            const response = await fetch('https://formspree.io/f/mkgdqqra', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                setStatus('success')
                setFormData({ name: '', email: '', message: '' })
                setTimeout(() => setStatus('idle'), 5000)
            } else {
                setStatus('error')
                setTimeout(() => setStatus('idle'), 5000)
            }
        } catch (error) {
            setStatus('error')
            setTimeout(() => setStatus('idle'), 5000)
        }
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
        >
            <div className="relative">
                {/* Gradient Background Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />

                <form
                    onSubmit={handleSubmit}
                    className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-6 sm:p-8 md:p-10 space-y-6"
                >
                    {/* Form Header */}
                    <div className="text-center mb-8">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                            Let's Build Something{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                Amazing
                            </span>
                        </h3>
                        <p className="text-sm sm:text-base opacity-70">
                            Drop me a message and I'll get back to you within 24 hours
                        </p>
                    </div>

                    {/* Name Field */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="relative"
                    >
                        <label
                            htmlFor="name"
                            className={`block text-sm font-medium mb-2 transition-colors ${focusedField === 'name' ? 'text-purple-400' : 'text-gray-400'
                                }`}
                        >
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                            required
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder-gray-500"
                            placeholder="John Doe"
                        />
                        {focusedField === 'name' && (
                            <motion.div
                                layoutId="activeField"
                                className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl -z-10 blur-sm"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.3 }}
                                exit={{ opacity: 0 }}
                            />
                        )}
                    </motion.div>

                    {/* Email Field */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                    >
                        <label
                            htmlFor="email"
                            className={`block text-sm font-medium mb-2 transition-colors ${focusedField === 'email' ? 'text-purple-400' : 'text-gray-400'
                                }`}
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            required
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder-gray-500"
                            placeholder="john@example.com"
                        />
                        {focusedField === 'email' && (
                            <motion.div
                                layoutId="activeField"
                                className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl -z-10 blur-sm"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.3 }}
                                exit={{ opacity: 0 }}
                            />
                        )}
                    </motion.div>

                    {/* Message Field */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="relative"
                    >
                        <label
                            htmlFor="message"
                            className={`block text-sm font-medium mb-2 transition-colors ${focusedField === 'message' ? 'text-purple-400' : 'text-gray-400'
                                }`}
                        >
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('message')}
                            onBlur={() => setFocusedField(null)}
                            required
                            rows={5}
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder-gray-500 resize-none"
                            placeholder="Tell me about your project..."
                        />
                        {focusedField === 'message' && (
                            <motion.div
                                layoutId="activeField"
                                className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl -z-10 blur-sm"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.3 }}
                                exit={{ opacity: 0 }}
                            />
                        )}
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        disabled={status === 'loading'}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                    >
                        {/* Button Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                        <span className="relative flex items-center justify-center gap-2">
                            {status === 'loading' && (
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                />
                            )}
                            {status === 'idle' && 'Send Message'}
                            {status === 'loading' && 'Sending...'}
                            {status === 'success' && '✓ Message Sent!'}
                            {status === 'error' && '✗ Failed to Send'}
                        </span>
                    </motion.button>

                    {/* Success/Error Messages */}
                    <AnimatePresence>
                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-sm text-center"
                            >
                                🎉 Thanks for reaching out! I'll get back to you soon.
                            </motion.div>
                        )}
                        {status === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm text-center"
                            >
                                ⚠️ Oops! Something went wrong. Please try again or email me directly.
                            </motion.div>
                        )}
                    </AnimatePresence>
                </form>
            </div>

            {/* Alternative Contact Methods */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 text-center"
            >
                <p className="text-sm opacity-60 mb-4">Or reach out directly</p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="mailto:adeshpatel700@gmail.com"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-purple-500 transition-colors text-sm"
                    >
                        <span>📧</span>
                        <span>adeshpatel700@gmail.com</span>
                    </a>
                    <a
                        href="tel:+919305719682"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-purple-500 transition-colors text-sm"
                    >
                        <span>📱</span>
                        <span>+91 9305719682</span>
                    </a>
                </div>
            </motion.div>
        </motion.div>
    )
}
