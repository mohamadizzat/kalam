'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

interface InlineCalloutProps {
  text: string
  href: string
}

export function InlineCallout({ text, href }: InlineCalloutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Link
        href={href}
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '10px',
          padding: '12px',
          borderRadius: '10px',
          background: '#161220',
          borderLeft: '2px solid #C9A84C',
          textDecoration: 'none',
          transition: 'background 0.2s ease',
        }}
        className="card-hover"
      >
        {/* Sparkles icon */}
        <Sparkles
          size={14}
          style={{
            color: '#C9A84C',
            flexShrink: 0,
            marginTop: '1px',
          }}
        />

        {/* Text */}
        <p style={{ margin: 0, lineHeight: 1.5 }}>
          <span
            style={{
              fontSize: '13px',
              color: '#C9A84C',
              fontStyle: 'italic',
              marginRight: '4px',
            }}
          >
            Sabia que...
          </span>
          <span
            style={{
              fontSize: '13px',
              color: '#B3B0A6',
            }}
          >
            {text}
          </span>
        </p>
      </Link>
    </motion.div>
  )
}
