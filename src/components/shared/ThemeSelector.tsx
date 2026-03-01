'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Baby, Sparkles, Users, Sun, Heart, Moon, Infinity, Crown, Globe,
  Feather, Flame, Scale, BookOpen, RotateCcw, Home, GraduationCap,
  Hourglass, Sunrise,
} from 'lucide-react'
import { type BridgeTheme } from '@/lib/data/bridge-themes'

const iconMap: Record<string, any> = {
  Baby, Sparkles, Users, Sun, Heart, Moon, Infinity, Crown, Globe,
  Feather, Flame, Scale, BookOpen, RotateCcw, Home, GraduationCap,
  Hourglass, Sunrise, HandHeart: Heart,
}

interface ThemeSelectorProps {
  themes: BridgeTheme[]
  basePath?: string
}

export function ThemeSelector({ themes, basePath = '/a-ponte/por-tema' }: ThemeSelectorProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {themes.map((theme, i) => {
        const Icon = iconMap[theme.icon] || BookOpen
        return (
          <motion.div
            key={theme.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' }}
          >
            <Link
              href={`${basePath}/${theme.id}`}
              className="card-hover"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '20px',
                borderRadius: 16,
                background: '#161220',
                border: '1px solid #272230',
                textDecoration: 'none',
              }}
            >
              <div style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(201,168,76,0.08)',
                flexShrink: 0,
              }}>
                <Icon size={20} style={{ color: '#C9A84C' }} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 16,
                  color: '#F0EBE2',
                  fontWeight: 500,
                  marginBottom: 2,
                }}>
                  {theme.title}
                </p>
                <p style={{ fontSize: 13, color: '#B3B0A6' }}>
                  {theme.subtitle}
                </p>
              </div>
            </Link>
          </motion.div>
        )
      })}
    </div>
  )
}
