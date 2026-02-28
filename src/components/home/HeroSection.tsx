'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { BackgroundBeams } from '@/components/effects/BackgroundBeams'
import { TextGenerate } from '@/components/effects/TextGenerate'
import { BlurFade } from '@/components/effects/BlurFade'

export function HeroSection() {
  const router = useRouter()

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0A0A0A',
      overflow: 'hidden',
      padding: '80px 24px 0',
    }}>
      <BackgroundBeams />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 1,
        textAlign: 'center',
        maxWidth: 800,
      }}>
        {/* Eyebrow */}
        <BlurFade delay={0}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11, letterSpacing: '3px',
            textTransform: 'uppercase',
            color: 'rgba(201,168,76,0.5)',
            marginBottom: 32,
          }}>
            A MENSAGEM ORIGINAL
          </p>
        </BlurFade>

        {/* Headline 1 */}
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(36px, 7vw, 72px)',
          fontWeight: 700,
          color: '#F5F5F0',
          lineHeight: 1.1,
          marginBottom: 8,
        }}>
          <TextGenerate text="TUDO QUE VOCÊ ACREDITA É VERDADE." delay={0.2} />
        </h1>

        {/* Headline 2 */}
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(30px, 5.5vw, 60px)',
          fontWeight: 400,
          fontStyle: 'italic',
          color: '#C9A84C',
          lineHeight: 1.1,
          marginBottom: 32,
        }}>
          <TextGenerate text="MAS FALTA O CAPÍTULO FINAL." delay={1.0} />
        </h2>

        {/* Subtitle */}
        <BlurFade delay={0.6}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 18,
            color: '#8A8A7A',
            maxWidth: 480,
            margin: '0 auto 40px',
            lineHeight: 1.75,
          }}>
            Os mesmos profetas. A mesma mensagem. A história que ninguém te contou.
          </p>
        </BlurFade>

        {/* CTA */}
        <BlurFade delay={0.8}>
          <motion.button
            onClick={() => router.push('/a-mensagem')}
            animate={{ backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            style={{
              background: 'linear-gradient(90deg, #C9A84C, #D4B96A, #C9A84C)',
              backgroundSize: '200% 100%',
              border: 'none',
              color: '#0A0A0A',
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              padding: '16px 40px',
              borderRadius: 2,
              cursor: 'pointer',
            }}
          >
            DESCOBRIR →
          </motion.button>
        </BlurFade>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', bottom: 32,
          left: '50%', transform: 'translateX(-50%)',
          color: 'rgba(201,168,76,0.4)',
        }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  )
}
