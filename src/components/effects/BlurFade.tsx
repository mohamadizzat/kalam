'use client'

import { motion } from 'framer-motion'

interface BlurFadeProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'none'
  className?: string
  style?: React.CSSProperties
}

export function BlurFade({ children, delay = 0, direction = 'up', className, style }: BlurFadeProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: 'blur(8px)',
        y: direction === 'up' ? 20 : 0,
      }}
      whileInView={{
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
      }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
