'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Spotlight } from '@/components/effects/Spotlight'
import { BlurFade } from '@/components/effects/BlurFade'

export function ClosingSection() {
  const router = useRouter()

  return (
    <Spotlight style={{ background: '#0D0B12' }}>
      <section style={{
        padding: 'clamp(100px, 14vw, 160px) 24px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          {/* Arabic */}
          <BlurFade>
            <p style={{
              fontFamily: "'Amiri', serif",
              fontSize: 'clamp(24px, 4vw, 36px)',
              color: 'rgba(201,168,76,0.3)',
              marginBottom: 40,
              lineHeight: 1.6,
              direction: 'rtl',
            }}>
              إِنَّ الدِّينَ عِنْدَ اللَّهِ الْإِسْلَامُ
            </p>
          </BlurFade>

          {/* Headline */}
          <BlurFade delay={0.1} style={{ marginBottom: 8 }}>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 400, fontStyle: 'italic',
              color: '#F0EBE2', lineHeight: 1.2,
            }}>
              Não é uma religião nova.
            </h2>
          </BlurFade>

          <BlurFade delay={0.2} style={{ marginBottom: 48 }}>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 400, fontStyle: 'italic',
              color: '#C9A84C', lineHeight: 1.2,
            }}>
              É a mensagem original.
            </h2>
          </BlurFade>

          {/* Divider */}
          <div style={{
            width: 40, height: 1,
            background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
            margin: '0 auto 48px',
          }} />

          {/* CTA */}
          <BlurFade delay={0.3}>
            <motion.button
              onClick={() => router.push('/a-mensagem')}
              animate={{ backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              style={{
                background: 'linear-gradient(90deg, #C9A84C, #D4B96A, #C9A84C)',
                backgroundSize: '200% 100%',
                border: 'none',
                color: '#0D0B12',
                fontFamily: "'Inter', sans-serif",
                fontSize: 12, fontWeight: 700,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                padding: '16px 48px',
                borderRadius: 2,
                cursor: 'pointer',
                marginBottom: 20,
              }}
            >
              COMECE AQUI →
            </motion.button>

            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13, color: '#7A7870',
              marginTop: 20,
            }}>
              Sem cadastro. Sem mensalidade. Só a mensagem.
            </p>
          </BlurFade>
        </div>
      </section>
    </Spotlight>
  )
}
