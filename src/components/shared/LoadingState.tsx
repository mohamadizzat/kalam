'use client'

import { motion } from 'framer-motion'

interface LoadingStateProps {
  message?: string
}

export function LoadingState({ message }: LoadingStateProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '400px',
        padding: '60px 24px',
        gap: '28px',
      }}
    >
      {/* Spinner */}
      <div style={{ position: 'relative', width: '48px', height: '48px' }}>
        {/* Outer rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2.4, ease: 'linear', repeat: Infinity }}
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '2px solid transparent',
            borderTopColor: '#C9A84C',
            borderRightColor: 'rgba(201,168,76,0.3)',
          }}
        />
        {/* Inner pulsing dot */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.8,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#C9A84C',
            boxShadow: '0 0 16px rgba(201,168,76,0.4)',
          }}
        />
        {/* Ambient glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Optional message */}
      {message && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '14px',
            color: '#7A7870',
            letterSpacing: '0.02em',
          }}
        >
          {message}
        </motion.p>
      )}
    </div>
  )
}
