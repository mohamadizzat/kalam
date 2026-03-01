'use client'

import { motion } from 'framer-motion'

/**
 * AtmosphericLayer — Ambient background layer
 * Fixed fullscreen, z-0, pointer-events-none
 * 1. Gold top-wash radial gradient
 * 2. Aurora blobs (desktop only, 22-25s cycles)
 * 3. Noise texture via CSS class (globals.css)
 */
export function AtmosphericLayer() {
  return (
    <div
      className="atmospheric-layer"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* ── Gold top-wash ── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '60%',
          background: 'radial-gradient(ellipse 70% 35% at 50% 0%, rgba(201,168,76,0.03) 0%, transparent 70%)',
        }}
      />

      {/* ── Aurora blobs (desktop only via CSS media query) ── */}
      <div className="atmospheric-aurora">
        {/* Blob 1 — warm gold, top-left drift */}
        <motion.div
          animate={{
            x: ['0%', '8%', '-5%', '0%'],
            y: ['0%', '12%', '-8%', '0%'],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            top: '10%',
            left: '15%',
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'rgba(201,168,76,0.015)',
            filter: 'blur(120px)',
            willChange: 'transform',
          }}
        />

        {/* Blob 2 — cool blue, center-right drift */}
        <motion.div
          animate={{
            x: ['0%', '-10%', '6%', '0%'],
            y: ['0%', '-8%', '15%', '0%'],
            scale: [0.85, 1.1, 0.95, 0.85],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            top: '30%',
            right: '10%',
            width: 450,
            height: 450,
            borderRadius: '50%',
            background: 'rgba(123,173,226,0.01)',
            filter: 'blur(120px)',
            willChange: 'transform',
          }}
        />

        {/* Blob 3 — faint gold, bottom-center */}
        <motion.div
          animate={{
            x: ['0%', '12%', '-8%', '0%'],
            y: ['0%', '-10%', '5%', '0%'],
            scale: [1.1, 0.85, 1.2, 1.1],
          }}
          transition={{
            duration: 23,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            bottom: '15%',
            left: '40%',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'rgba(201,168,76,0.012)',
            filter: 'blur(120px)',
            willChange: 'transform',
          }}
        />
      </div>

      {/* ── Noise texture (via CSS pseudo-element in globals.css) ── */}
      <div className="atmospheric-noise" />
    </div>
  )
}
