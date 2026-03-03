'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Wind,
  CloudRain,
  Flame,
  UserX,
  Crown,
  Heart,
  Compass,
  Flower2,
  BatteryLow,
  ArrowLeft,
  X,
  BookOpen,
  Check,
  ChevronRight,
} from 'lucide-react'
import { mentalHealthTopics, type MentalHealthTopic } from '@/lib/data/mental-health'
import { BackButton } from '@/components/shared/BackButton'

const iconMap: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  Wind,
  CloudRain,
  Flame,
  UserX,
  Crown,
  HandHeart: Heart,
  Heart,
  Compass,
  Flower2,
  BatteryLow,
}

function getReadTopics(): Set<string> {
  if (typeof window === 'undefined') return new Set()
  try {
    const stored = localStorage.getItem('kalam-mental-health-read')
    return stored ? new Set(JSON.parse(stored)) : new Set()
  } catch {
    return new Set()
  }
}

function markAsRead(slug: string) {
  const current = getReadTopics()
  current.add(slug)
  localStorage.setItem('kalam-mental-health-read', JSON.stringify([...current]))
}

export function SaudeMentalClient() {
  const [selectedTopic, setSelectedTopic] = useState<MentalHealthTopic | null>(null)
  const [readTopics, setReadTopics] = useState<Set<string>>(new Set())

  useEffect(() => {
    setReadTopics(getReadTopics())
  }, [])

  const handleOpenTopic = (topic: MentalHealthTopic) => {
    setSelectedTopic(topic)
    markAsRead(topic.slug)
    setReadTopics((prev) => new Set([...prev, topic.slug]))
  }

  const handleClose = () => {
    setSelectedTopic(null)
  }

  const readCount = readTopics.size
  const totalCount = mentalHealthTopics.length

  return (
    <main style={{ background: '#0D0B12', minHeight: '100vh' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '48px 24px 100px' }}>
        {/* Back */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <BackButton href="/a-alma" label="A Alma" />
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ marginTop: '24px', marginBottom: '12px' }}
        >
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 700,
              fontSize: 'clamp(28px, 5vw, 36px)',
              color: '#F0EBE2',
              marginBottom: '8px',
              letterSpacing: '-0.02em',
            }}
          >
            Saude Mental
          </h1>
          <p
            style={{
              fontSize: '15px',
              color: '#7A7870',
              lineHeight: 1.6,
            }}
          >
            Sabedoria islamica para cuidar da sua mente e do seu coracao.
          </p>
        </motion.div>

        {/* Progress */}
        {readCount > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              marginBottom: '28px',
              padding: '16px 20px',
              borderRadius: '14px',
              background: 'rgba(201,168,76,0.04)',
              border: '1px solid rgba(201,168,76,0.1)',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '10px',
              }}
            >
              <span style={{ fontSize: '13px', color: '#B3B0A6' }}>
                <BookOpen size={14} style={{ display: 'inline', verticalAlign: '-2px', marginRight: '6px' }} />
                {readCount} de {totalCount} lidos
              </span>
              <span style={{ fontSize: '13px', color: '#C9A84C', fontWeight: 600 }}>
                {Math.round((readCount / totalCount) * 100)}%
              </span>
            </div>
            <div
              style={{
                width: '100%',
                height: '3px',
                background: '#272230',
                borderRadius: '2px',
                overflow: 'hidden',
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(readCount / totalCount) * 100}%` }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, #C9A84C, #D4B868)',
                  borderRadius: '2px',
                }}
              />
            </div>
          </motion.div>
        )}

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          style={{
            marginBottom: '32px',
            padding: '16px 20px',
            borderRadius: '14px',
            background: 'rgba(201,168,76,0.04)',
            border: '1px solid rgba(201,168,76,0.08)',
          }}
        >
          <p style={{ fontSize: '13px', color: '#B3B0A6', lineHeight: 1.6 }}>
            Este conteudo conecta sabedoria islamica com bem-estar emocional. Nao substitui
            acompanhamento profissional. Se voce esta em sofrimento, busque ajuda de um
            psicologo ou psiquiatra.
          </p>
        </motion.div>

        {/* Topic Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px',
          }}
        >
          {mentalHealthTopics.map((topic, i) => {
            const IconComponent = iconMap[topic.icon] || Heart
            const isRead = readTopics.has(topic.slug)

            return (
              <motion.button
                key={topic.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.4 }}
                onClick={() => handleOpenTopic(topic)}
                style={{
                  padding: '24px 18px',
                  borderRadius: '16px',
                  background: '#161220',
                  border: isRead
                    ? '1px solid rgba(201,168,76,0.2)'
                    : '1px solid #272230',
                  cursor: 'pointer',
                  textAlign: 'left',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'border-color 0.3s ease, transform 0.2s ease',
                }}
                whileTap={{ scale: 0.97 }}
              >
                {/* Read indicator */}
                {isRead && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: 'rgba(201,168,76,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Check size={12} style={{ color: '#C9A84C' }} />
                  </div>
                )}

                {/* Arabic concept */}
                <p
                  style={{
                    fontFamily: 'var(--font-arabic)',
                    fontSize: '22px',
                    color: '#C9A84C',
                    direction: 'rtl',
                    marginBottom: '12px',
                    lineHeight: 1.4,
                  }}
                >
                  {topic.arabicConcept}
                </p>

                {/* Icon */}
                <div style={{ marginBottom: '10px' }}>
                  <IconComponent size={22} style={{ color: '#B3B0A6' }} />
                </div>

                {/* Title */}
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '17px',
                    fontWeight: 600,
                    color: '#F0EBE2',
                    marginBottom: '6px',
                  }}
                >
                  {topic.title}
                </p>

                {/* Summary */}
                <p
                  style={{
                    fontSize: '12px',
                    color: '#7A7870',
                    lineHeight: 1.5,
                  }}
                >
                  {topic.summary.length > 60
                    ? topic.summary.slice(0, 60) + '...'
                    : topic.summary}
                </p>

                {/* Arrow */}
                <div
                  style={{
                    marginTop: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <span style={{ fontSize: '11px', color: '#7A7870' }}>Ler</span>
                  <ChevronRight size={12} style={{ color: '#7A7870' }} />
                </div>
              </motion.button>
            )
          })}
        </div>

        {/* Detail View Modal */}
        <AnimatePresence>
          {selectedTopic && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 100,
                background: 'rgba(0,0,0,0.85)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
              onClick={handleClose}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                onClick={(e) => e.stopPropagation()}
                data-lenis-prevent
                onWheel={(e) => e.stopPropagation()}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: '#0D0B12',
                  overflowY: 'auto',
                  overscrollBehavior: 'contain',
                  WebkitOverflowScrolling: 'touch',
                }}
              >
                <div style={{ maxWidth: '640px', margin: '0 auto', padding: '24px 24px 100px' }}>
                  {/* Close button */}
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    onClick={handleClose}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#7A7870',
                      fontSize: '13px',
                      padding: 0,
                      marginBottom: '32px',
                    }}
                  >
                    <ArrowLeft size={16} />
                    Voltar
                  </motion.button>

                  {/* Arabic concept header */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    style={{ textAlign: 'center', marginBottom: '32px' }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-arabic)',
                        fontSize: '36px',
                        color: '#C9A84C',
                        direction: 'rtl',
                        marginBottom: '12px',
                        lineHeight: 1.4,
                      }}
                    >
                      {selectedTopic.arabicConcept}
                    </p>
                    <h1
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(28px, 5vw, 36px)',
                        fontWeight: 700,
                        color: '#F0EBE2',
                        marginBottom: '8px',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {selectedTopic.title}
                    </h1>
                    <p
                      style={{
                        fontSize: '15px',
                        color: '#B3B0A6',
                        lineHeight: 1.6,
                        maxWidth: '440px',
                        margin: '0 auto',
                      }}
                    >
                      {selectedTopic.summary}
                    </p>
                  </motion.div>

                  {/* Quranic verse highlight */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{
                      padding: '28px 24px',
                      borderRadius: '18px',
                      background: 'rgba(201,168,76,0.04)',
                      border: '1px solid rgba(201,168,76,0.12)',
                      marginBottom: '32px',
                      textAlign: 'center',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-arabic)',
                        fontSize: '24px',
                        color: '#C9A84C',
                        direction: 'rtl',
                        lineHeight: 2,
                        marginBottom: '16px',
                      }}
                    >
                      {selectedTopic.quranicVerse.arabic}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '16px',
                        color: '#F0EBE2',
                        lineHeight: 1.7,
                        fontStyle: 'italic',
                        marginBottom: '12px',
                      }}
                    >
                      &ldquo;{selectedTopic.quranicVerse.translation}&rdquo;
                    </p>
                    <p
                      style={{
                        fontSize: '12px',
                        color: '#7A7870',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {selectedTopic.quranicVerse.ref}
                    </p>
                  </motion.div>

                  {/* Main content */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    style={{ marginBottom: '36px' }}
                  >
                    {selectedTopic.content.split('\n\n').map((paragraph, idx) => (
                      <p
                        key={idx}
                        style={{
                          fontSize: '16px',
                          color: '#F0EBE2',
                          lineHeight: 1.8,
                          marginBottom: '20px',
                        }}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </motion.div>

                  {/* Hadith support */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    style={{
                      padding: '24px',
                      borderRadius: '16px',
                      background: '#161220',
                      border: '1px solid #272230',
                      marginBottom: '32px',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '11px',
                        letterSpacing: '0.15em',
                        color: '#7A7870',
                        textTransform: 'uppercase',
                        marginBottom: '14px',
                      }}
                    >
                      Hadith (Dito Profetico)
                    </p>
                    <p
                      style={{
                        fontSize: '15px',
                        color: '#B3B0A6',
                        lineHeight: 1.7,
                        fontStyle: 'italic',
                      }}
                    >
                      {selectedTopic.hadithSupport}
                    </p>
                  </motion.div>

                  {/* Practical steps */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    style={{ marginBottom: '40px' }}
                  >
                    <p
                      style={{
                        fontSize: '11px',
                        letterSpacing: '0.15em',
                        color: '#7A7870',
                        textTransform: 'uppercase',
                        marginBottom: '18px',
                      }}
                    >
                      Passos Praticos
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {selectedTopic.practicalSteps.map((step, idx) => (
                        <div
                          key={idx}
                          style={{
                            display: 'flex',
                            gap: '14px',
                            padding: '16px 18px',
                            borderRadius: '12px',
                            background: '#161220',
                            border: '1px solid #272230',
                            alignItems: 'flex-start',
                          }}
                        >
                          <span
                            style={{
                              width: '24px',
                              height: '24px',
                              borderRadius: '8px',
                              background: 'rgba(201,168,76,0.1)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '12px',
                              fontWeight: 700,
                              color: '#C9A84C',
                              flexShrink: 0,
                            }}
                          >
                            {idx + 1}
                          </span>
                          <p
                            style={{
                              fontSize: '14px',
                              color: '#F0EBE2',
                              lineHeight: 1.6,
                            }}
                          >
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Footer CTA */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    style={{
                      textAlign: 'center',
                      padding: '28px 20px',
                      borderRadius: '16px',
                      background: 'rgba(201,168,76,0.04)',
                      border: '1px solid rgba(201,168,76,0.08)',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '14px',
                        color: '#B3B0A6',
                        lineHeight: 1.6,
                        marginBottom: '16px',
                      }}
                    >
                      Se este tema te tocou, escreva sobre ele no seu Journal Espiritual.
                    </p>
                    <button
                      onClick={handleClose}
                      style={{
                        padding: '12px 28px',
                        borderRadius: '10px',
                        background: 'rgba(201,168,76,0.1)',
                        border: '1px solid rgba(201,168,76,0.2)',
                        color: '#C9A84C',
                        fontSize: '14px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        fontFamily: 'var(--font-serif)',
                      }}
                    >
                      Voltar aos temas
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
