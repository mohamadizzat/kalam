'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { BookOpen, HandHeart, PenLine, Compass, ChevronRight, Sparkles, Star, Heart } from 'lucide-react'

/* ─── Types ─── */
type ContentCategory = 'palavra' | 'presenca' | 'jornada' | 'alma'

interface Suggestion {
  icon: typeof BookOpen
  title: string
  href: string
  category: ContentCategory
}

/* ─── Content Relationship Map ─── */
const RELATIONSHIP_MAP: Record<string, Suggestion[]> = {
  // After reading hadiths -> suggest parables and dhikr
  '/a-palavra/hadiths': [
    { icon: BookOpen, title: 'Parabolas do Quran', href: '/a-palavra/parabolas', category: 'palavra' },
    { icon: HandHeart, title: 'Sessao de Dhikr', href: '/a-presenca/dhikr', category: 'presenca' },
    { icon: PenLine, title: 'Journal Espiritual', href: '/a-alma/journal', category: 'alma' },
  ],
  // After reading parables -> suggest hadiths and contemplation
  '/a-palavra/parabolas': [
    { icon: Star, title: 'Hadiths do Profeta', href: '/a-palavra/hadiths', category: 'palavra' },
    { icon: Sparkles, title: 'Contemplacao', href: '/a-presenca/contemplacao', category: 'presenca' },
    { icon: PenLine, title: 'Journal Espiritual', href: '/a-alma/journal', category: 'alma' },
  ],
  // After studying a surah -> suggest flashcards and journal
  '/a-palavra/estudo': [
    { icon: BookOpen, title: 'Favoritos', href: '/a-palavra/favoritos', category: 'palavra' },
    { icon: HandHeart, title: 'Flashcards: 99 Nomes', href: '/a-presenca/flashcards', category: 'presenca' },
    { icon: Sparkles, title: 'Contemplacao', href: '/a-presenca/contemplacao', category: 'presenca' },
  ],
  // After hifz/memorization -> suggest recitation and dhikr
  '/a-palavra/hifz': [
    { icon: BookOpen, title: 'Recitacao', href: '/a-palavra/recitacao', category: 'palavra' },
    { icon: HandHeart, title: 'Sessao de Dhikr', href: '/a-presenca/dhikr', category: 'presenca' },
    { icon: Star, title: '99 Nomes de Deus', href: '/a-presenca/99-nomes', category: 'presenca' },
  ],
  // After dhikr -> suggest contemplation and journal
  '/a-presenca/dhikr': [
    { icon: Sparkles, title: 'Contemplacao', href: '/a-presenca/contemplacao', category: 'presenca' },
    { icon: PenLine, title: 'Journal Espiritual', href: '/a-alma/journal', category: 'alma' },
    { icon: Heart, title: 'Duas e Adhkar', href: '/a-presenca/duas', category: 'presenca' },
  ],
  // After duas -> suggest dhikr and salah
  '/a-presenca/duas': [
    { icon: HandHeart, title: 'Sessao de Dhikr', href: '/a-presenca/dhikr', category: 'presenca' },
    { icon: Star, title: 'Horarios de Oracao', href: '/a-presenca/salah', category: 'presenca' },
    { icon: Compass, title: 'Rotina Espiritual', href: '/a-alma/rotina', category: 'alma' },
  ],
  // After flashcards -> suggest 99 names and contemplation
  '/a-presenca/flashcards': [
    { icon: Star, title: '99 Nomes de Deus', href: '/a-presenca/99-nomes', category: 'presenca' },
    { icon: Sparkles, title: 'Contemplacao', href: '/a-presenca/contemplacao', category: 'presenca' },
    { icon: BookOpen, title: 'Hadiths', href: '/a-palavra/hadiths', category: 'palavra' },
  ],
  // After 99 names -> suggest flashcards and dhikr
  '/a-presenca/99-nomes': [
    { icon: HandHeart, title: 'Flashcards de Nomes', href: '/a-presenca/flashcards', category: 'presenca' },
    { icon: HandHeart, title: 'Sessao de Dhikr', href: '/a-presenca/dhikr', category: 'presenca' },
    { icon: Sparkles, title: 'Contemplacao', href: '/a-presenca/contemplacao', category: 'presenca' },
  ],
  // After contemplation -> suggest journal and dhikr
  '/a-presenca/contemplacao': [
    { icon: PenLine, title: 'Journal Espiritual', href: '/a-alma/journal', category: 'alma' },
    { icon: HandHeart, title: 'Sessao de Dhikr', href: '/a-presenca/dhikr', category: 'presenca' },
    { icon: BookOpen, title: 'Parabolas', href: '/a-palavra/parabolas', category: 'palavra' },
  ],
  // After journal -> suggest reflection trail and progress
  '/a-alma/journal': [
    { icon: Compass, title: 'Trilhas de Estudo', href: '/trilhas', category: 'jornada' },
    { icon: Star, title: 'Minha Jornada', href: '/a-alma/progresso', category: 'alma' },
    { icon: Sparkles, title: 'Contemplacao', href: '/a-presenca/contemplacao', category: 'presenca' },
  ],
  // After rotina -> suggest journal and duas
  '/a-alma/rotina': [
    { icon: PenLine, title: 'Journal Espiritual', href: '/a-alma/journal', category: 'alma' },
    { icon: Heart, title: 'Duas e Adhkar', href: '/a-presenca/duas', category: 'presenca' },
    { icon: HandHeart, title: 'Sessao de Dhikr', href: '/a-presenca/dhikr', category: 'presenca' },
  ],
  // After seerah -> suggest companions and history
  '/a-jornada/seerah': [
    { icon: Star, title: 'Companheiros do Profeta', href: '/a-jornada/companheiros', category: 'jornada' },
    { icon: BookOpen, title: 'Hadiths do Profeta', href: '/a-palavra/hadiths', category: 'palavra' },
    { icon: Compass, title: 'Linha do Tempo', href: '/a-jornada/historia', category: 'jornada' },
  ],
  // After companions -> suggest seerah and women
  '/a-jornada/companheiros': [
    { icon: Star, title: 'Seerah do Profeta', href: '/a-jornada/seerah', category: 'jornada' },
    { icon: Heart, title: 'Mulheres no Islam', href: '/a-jornada/mulheres', category: 'jornada' },
    { icon: BookOpen, title: 'Hadiths', href: '/a-palavra/hadiths', category: 'palavra' },
  ],
  // After prophets -> suggest trails and seerah
  '/os-profetas': [
    { icon: Compass, title: 'Trilhas de Estudo', href: '/trilhas', category: 'jornada' },
    { icon: Star, title: 'Seerah do Profeta', href: '/a-jornada/seerah', category: 'jornada' },
    { icon: PenLine, title: 'Journal Espiritual', href: '/a-alma/journal', category: 'alma' },
  ],
  // After saude mental -> suggest journal and rotina
  '/a-alma/saude-mental': [
    { icon: PenLine, title: 'Journal Espiritual', href: '/a-alma/journal', category: 'alma' },
    { icon: Compass, title: 'Rotina Espiritual', href: '/a-alma/rotina', category: 'alma' },
    { icon: Heart, title: 'Duas e Adhkar', href: '/a-presenca/duas', category: 'presenca' },
  ],
}

/* ─── Category-level fallbacks ─── */
const CATEGORY_FALLBACKS: Record<ContentCategory, Suggestion[]> = {
  palavra: [
    { icon: BookOpen, title: 'Hadiths do Profeta', href: '/a-palavra/hadiths', category: 'palavra' },
    { icon: Sparkles, title: 'Contemplacao', href: '/a-presenca/contemplacao', category: 'presenca' },
    { icon: PenLine, title: 'Journal Espiritual', href: '/a-alma/journal', category: 'alma' },
  ],
  presenca: [
    { icon: BookOpen, title: 'Leia o Quran', href: '/a-palavra', category: 'palavra' },
    { icon: PenLine, title: 'Journal Espiritual', href: '/a-alma/journal', category: 'alma' },
    { icon: Compass, title: 'Trilhas de Estudo', href: '/trilhas', category: 'jornada' },
  ],
  jornada: [
    { icon: HandHeart, title: 'Sessao de Dhikr', href: '/a-presenca/dhikr', category: 'presenca' },
    { icon: PenLine, title: 'Journal Espiritual', href: '/a-alma/journal', category: 'alma' },
    { icon: BookOpen, title: 'Parabolas', href: '/a-palavra/parabolas', category: 'palavra' },
  ],
  alma: [
    { icon: HandHeart, title: 'Sessao de Dhikr', href: '/a-presenca/dhikr', category: 'presenca' },
    { icon: BookOpen, title: 'Hadiths do Profeta', href: '/a-palavra/hadiths', category: 'palavra' },
    { icon: Compass, title: 'Trilhas de Estudo', href: '/trilhas', category: 'jornada' },
  ],
}

/* ─── Generic fallback ─── */
const GENERIC_FALLBACK: Suggestion[] = [
  { icon: BookOpen, title: 'Leia o Quran', href: '/a-palavra', category: 'palavra' },
  { icon: HandHeart, title: 'Sessao de Dhikr', href: '/a-presenca/dhikr', category: 'presenca' },
  { icon: PenLine, title: 'Journal Espiritual', href: '/a-alma/journal', category: 'alma' },
]

function getCategoryLabel(cat: ContentCategory): string {
  switch (cat) {
    case 'palavra': return 'A Palavra'
    case 'presenca': return 'A Presenca'
    case 'jornada': return 'A Jornada'
    case 'alma': return 'A Alma'
  }
}

function getCategoryColor(cat: ContentCategory): string {
  switch (cat) {
    case 'palavra': return '#C9A84C'
    case 'presenca': return '#7EB89A'
    case 'jornada': return '#8B9FD4'
    case 'alma': return '#D4A08B'
  }
}

/* ─── Component ─── */
interface RelatedContentProps {
  currentPath: string
  currentCategory: ContentCategory
}

export function RelatedContent({ currentPath, currentCategory }: RelatedContentProps) {
  // Find suggestions: exact path match -> category fallback -> generic
  let suggestions = RELATIONSHIP_MAP[currentPath]

  if (!suggestions) {
    // Try prefix match (for dynamic routes like /a-palavra/estudo/[slug])
    const matchingKey = Object.keys(RELATIONSHIP_MAP).find(key => currentPath.startsWith(key))
    if (matchingKey) {
      suggestions = RELATIONSHIP_MAP[matchingKey]
    }
  }

  if (!suggestions) {
    suggestions = CATEGORY_FALLBACKS[currentCategory] || GENERIC_FALLBACK
  }

  // Filter out current path from suggestions
  suggestions = suggestions.filter(s => s.href !== currentPath).slice(0, 3)

  if (suggestions.length === 0) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
      style={{
        marginTop: '48px',
        paddingTop: '32px',
        borderTop: '1px solid #272230',
      }}
    >
      {/* Section title */}
      <p style={{
        fontSize: '11px',
        fontWeight: 600,
        color: '#7A7870',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        marginBottom: '16px',
      }}>
        Proximos passos
      </p>

      {/* Suggestion cards */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}>
        {suggestions.map((suggestion, i) => {
          const Icon = suggestion.icon
          const catColor = getCategoryColor(suggestion.category)

          return (
            <motion.div
              key={suggestion.href}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.4 + i * 0.08 }}
            >
              <Link href={suggestion.href} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 16px',
                borderRadius: '12px',
                background: '#161220',
                border: '1px solid #272230',
                textDecoration: 'none',
                transition: 'border-color 0.2s ease',
              }}
              className="card-hover"
              >
                {/* Icon */}
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: `${catColor}10`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={16} style={{ color: catColor }} />
                </div>

                {/* Text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#F0EBE2',
                  }}>
                    {suggestion.title}
                  </p>
                  <p style={{
                    fontSize: '11px',
                    color: '#7A7870',
                    marginTop: '1px',
                  }}>
                    {getCategoryLabel(suggestion.category)}
                  </p>
                </div>

                {/* Arrow */}
                <ChevronRight size={16} style={{ color: '#7A7870', flexShrink: 0 }} />
              </Link>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
