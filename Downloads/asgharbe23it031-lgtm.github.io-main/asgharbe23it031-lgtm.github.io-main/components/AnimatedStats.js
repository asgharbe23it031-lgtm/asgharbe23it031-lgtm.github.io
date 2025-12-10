"use client"

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function AnimatedNumber({ value, suffix = '', duration = 2 }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })
    const [displayValue, setDisplayValue] = useState(0)

    useEffect(() => {
        if (!isInView) return

        let startTime
        let animationFrame

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            const currentValue = easeOutQuart * value

            setDisplayValue(currentValue)

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate)
            }
        }

        animationFrame = requestAnimationFrame(animate)

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame)
            }
        }
    }, [isInView, value, duration])

    // Format the number based on whether it has decimals
    const formattedValue = value % 1 !== 0
        ? displayValue.toFixed(1)
        : Math.floor(displayValue)

    return (
        <span ref={ref}>
            {formattedValue}{suffix}
        </span>
    )
}

export default function AnimatedStats() {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: "-50px" })

    return (
        <div ref={containerRef} className="mt-6 flex gap-6 sm:gap-8 text-sm opacity-70">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="font-bold text-lg sm:text-xl">
                    <AnimatedNumber value={1.5} suffix="yr" />
                </div>
                <div className="text-xs sm:text-sm">Experience</div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <div className="font-bold text-lg sm:text-xl">
                    <AnimatedNumber value={50} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm">Clients</div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <div className="font-bold text-lg sm:text-xl">
                    <AnimatedNumber value={100} suffix="%" />
                </div>
                <div className="text-xs sm:text-sm">Delivery</div>
            </motion.div>
        </div>
    )
}
