'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface TextGenerateProps {
  text: string
  style?: React.CSSProperties
  delay?: number
}

export function TextGenerate({ text, style, delay = 0 }: TextGenerateProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const words = text.split(' ')

  return (
    <motion.span
      ref={ref}
      style={{ display: 'inline', ...style }}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        visible: { transition: { staggerChildren: 0.08, delayChildren: delay } },
        hidden: {},
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] } },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}
