'use client'

import { motion } from 'framer-motion'
import { KidsHeader } from '@/components/kids'
import { islamicCalendarKids } from '@/lib/data/kids/islamic-calendar-kids'

export function CalendarioKidsClient() {
  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '40px 20px 100px' }}>

        <KidsHeader
          emoji="📅"
          title="Calendario Islamico"
          subtitle="As datas mais importantes do ano islamico!"
          backHref="/kids"
          color="#A78BFA"
        />

        {/* Timeline */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          {islamicCalendarKids.map((event, index) => (
            <div key={event.id} style={{ display: 'flex', gap: '16px' }}>
              {/* Timeline column */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '24px',
                flexShrink: 0,
              }}>
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: event.color,
                  flexShrink: 0,
                  boxShadow: `0 0 8px ${event.color}40`,
                  marginTop: '6px',
                }} />
                {index < islamicCalendarKids.length - 1 && (
                  <div style={{
                    width: '2px',
                    flex: 1,
                    background: '#272230',
                    minHeight: '20px',
                  }} />
                )}
              </div>

              {/* Event card */}
              <motion.div
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
                style={{
                  flex: 1,
                  marginBottom: '16px',
                  padding: '18px',
                  borderRadius: '16px',
                  background: '#161220',
                  border: `1px solid ${event.color}20`,
                }}
              >
                {/* Month badge */}
                <span style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  color: event.color,
                  background: `${event.color}15`,
                  padding: '3px 10px',
                  borderRadius: '10px',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-sans)',
                }}>
                  {event.month}
                </span>

                {/* Title */}
                <div style={{
                  marginTop: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                  <span style={{ fontSize: '24px' }}>{event.emoji}</span>
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '16px',
                      fontWeight: 600,
                      color: '#F0EBE2',
                    }}>
                      {event.name}
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-arabic)',
                      fontSize: '13px',
                      color: `${event.color}`,
                      opacity: 0.7,
                    }}>
                      {event.arabicName}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p style={{
                  fontSize: '13px',
                  color: '#B3B0A6',
                  lineHeight: 1.5,
                  marginTop: '12px',
                  fontFamily: 'var(--font-sans)',
                }}>
                  {event.description}
                </p>

                {/* Traditions */}
                <div style={{
                  marginTop: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}>
                  {event.traditions.map((t, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      gap: '8px',
                      alignItems: 'flex-start',
                    }}>
                      <span style={{
                        color: event.color,
                        fontSize: '12px',
                        marginTop: '2px',
                        flexShrink: 0,
                      }}>
                        ✦
                      </span>
                      <span style={{
                        fontSize: '13px',
                        color: '#F0EBE2',
                        lineHeight: 1.4,
                        fontFamily: 'var(--font-sans)',
                      }}>
                        {t}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Fun fact */}
                <div style={{
                  marginTop: '12px',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  background: `${event.color}08`,
                  border: `1px solid ${event.color}12`,
                }}>
                  <p style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    color: event.color,
                    marginBottom: '2px',
                    fontFamily: 'var(--font-sans)',
                  }}>
                    💡 Curiosidade
                  </p>
                  <p style={{
                    fontSize: '12px',
                    color: '#B3B0A6',
                    lineHeight: 1.4,
                    fontFamily: 'var(--font-sans)',
                  }}>
                    {event.funFact}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}
