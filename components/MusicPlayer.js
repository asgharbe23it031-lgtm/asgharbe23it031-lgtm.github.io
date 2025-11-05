"use client"

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PLAYLIST = [
  {
    id: 1,
    title: 'Khwab Ho Tum Ya Koi Haqiqat',
    artist: 'Jagjit Singh',
    url: '/music/khwab-ho-tum.mp3',
  },
  {
    id: 2,
    title: '1985',
    artist: 'Bo Burnham',
    url: '/music/1985.mp3',
  },
  {
    id: 3,
    title: 'I Want It That Way',
    artist: 'Backstreet Boys',
    url: '/music/i-want-it-that-way.mp3',
  },
]

export default function MusicPlayer() {
  const [isOpen, setIsOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [hasInteracted, setHasInteracted] = useState(false)
  const audioRef = useRef(null)
  const wasPlayingRef = useRef(false)

  // Aggressive audio persistence - prevent any interruptions
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Store the playing state
    const checkAndResume = () => {
      if (wasPlayingRef.current && audio.paused && hasInteracted) {
        audio.play().catch(() => {})
      }
    }

    // Handle various events that might pause audio
    const handleVisibilityChange = () => {
      if (document.hidden) {
        wasPlayingRef.current = !audio.paused
      } else {
        checkAndResume()
      }
    }

    const handleFocus = () => {
      checkAndResume()
    }

    const handleBlur = () => {
      wasPlayingRef.current = !audio.paused
    }

    // Prevent pause on scroll and other interactions
    const preventInterruption = (e) => {
      if (wasPlayingRef.current && audio.paused && hasInteracted) {
        e.preventDefault()
        audio.play().catch(() => {})
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('focus', handleFocus)
    window.addEventListener('blur', handleBlur)
    window.addEventListener('scroll', checkAndResume, { passive: true })
    audio.addEventListener('pause', (e) => {
      // Only allow manual pauses via the play/pause button
      if (wasPlayingRef.current && e.target === audio) {
        setTimeout(checkAndResume, 50)
      }
    })

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('focus', handleFocus)
      window.removeEventListener('blur', handleBlur)
      window.removeEventListener('scroll', checkAndResume)
    }
  }, [hasInteracted])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)
    const handleEnded = () => {
      // Auto-play next track only if user has interacted
      if (hasInteracted && wasPlayingRef.current) {
        const nextTrack = (currentTrack + 1) % PLAYLIST.length
        setCurrentTrack(nextTrack)
        setTimeout(() => {
          audioRef.current?.play()
            .catch(() => {
              setIsPlaying(false)
              wasPlayingRef.current = false
            })
        }, 100)
      }
    }

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateDuration)
    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
    }
  }, [currentTrack, hasInteracted])

  const togglePlay = () => {
    setHasInteracted(true)
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      wasPlayingRef.current = false
      audio.pause()
    } else {
      wasPlayingRef.current = true
      audio.play()
        .catch((error) => {
          console.error('Playback failed:', error)
          setIsPlaying(false)
          wasPlayingRef.current = false
        })
    }
  }

  const playTrack = (index) => {
    setHasInteracted(true)
    setCurrentTrack(index)
    wasPlayingRef.current = true
    setTimeout(() => {
      const audio = audioRef.current
      if (audio) {
        audio.play()
          .catch((error) => {
            console.error('Playback failed:', error)
            setIsPlaying(false)
            wasPlayingRef.current = false
          })
      }
    }, 100)
  }

  const skipTrack = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentTrack + 1) % PLAYLIST.length
      : (currentTrack - 1 + PLAYLIST.length) % PLAYLIST.length
    playTrack(newIndex)
  }

  const formatTime = (time) => {
    if (!time || isNaN(time)) return '0:00'
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const handleProgressClick = (e) => {
    const progressBar = e.currentTarget
    const clickX = e.clientX - progressBar.getBoundingClientRect().left
    const width = progressBar.offsetWidth
    const newTime = (clickX / width) * duration
    audioRef.current.currentTime = newTime
  }

  return (
    <>
      {/* Floating Music Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 shadow-lg flex items-center justify-center text-xl md:text-2xl hover:shadow-xl transition-shadow"
        title="Music Player"
      >
        {isPlaying ? '⏸️' : '🎧'}
      </motion.button>

      {/* Music Player Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              className="fixed bottom-4 right-4 left-4 md:bottom-6 md:right-6 md:left-auto md:w-96 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl shadow-2xl z-50 overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">My Vibes 🎧</h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                </div>

                {/* Current Track Info */}
                <div className="text-center mb-4">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-3xl animate-pulse">
                    {isPlaying ? '🎶' : '⏸️'}
                  </div>
                  <h4 className="font-semibold text-base">{PLAYLIST[currentTrack].title}</h4>
                  <p className="text-sm text-gray-400">{PLAYLIST[currentTrack].artist}</p>
                </div>

                {/* Progress Bar */}
                <div className="mb-2">
                  <div
                    onClick={handleProgressClick}
                    className="h-1.5 bg-gray-800 rounded-full cursor-pointer overflow-hidden"
                  >
                    <div
                      className="h-full bg-gradient-to-r from-purple-600 to-pink-500 transition-all"
                      style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-6 mb-4">
                  <button
                    onClick={() => skipTrack('prev')}
                    className="text-2xl hover:scale-110 transition-transform"
                  >
                    ⏮️
                  </button>
                  <button
                    onClick={togglePlay}
                    className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-2xl hover:scale-110 transition-transform shadow-lg"
                  >
                    {isPlaying ? '⏸️' : '▶️'}
                  </button>
                  <button
                    onClick={() => skipTrack('next')}
                    className="text-2xl hover:scale-110 transition-transform"
                  >
                    ⏭️
                  </button>
                </div>
              </div>

              {/* Playlist */}
              <div className="border-t border-gray-800 bg-black/30 p-4 max-h-48 overflow-y-auto">
                <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Playlist</p>
                {PLAYLIST.map((track, index) => (
                  <button
                    key={track.id}
                    onClick={() => playTrack(index)}
                    className={`w-full text-left p-3 rounded-xl mb-2 transition-all ${
                      currentTrack === index
                        ? 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30'
                        : 'hover:bg-gray-800/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">
                        {currentTrack === index && isPlaying ? '🎵' : '🎧'}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{track.title}</p>
                        <p className="text-xs text-gray-500 truncate">{track.artist}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Hidden Audio Element */}
              <audio 
                ref={audioRef} 
                src={PLAYLIST[currentTrack].url}
                preload="metadata"
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
