'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <main
      style={{
        background: '#0D0B12',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: 'absolute',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Arabic calligraphy decorative element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
        style={{
          fontFamily: 'var(--font-arabic)',
          fontSize: 'clamp(72px, 15vw, 140px)',
          color: 'rgba(201,168,76,0.08)',
          lineHeight: 1,
          direction: 'rtl',
          userSelect: 'none',
          position: 'relative',
          marginBottom: '-20px',
        }}
      >
        ضَلَّ
      </motion.div>

      {/* 404 number */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(64px, 12vw, 120px)',
          fontWeight: 700,
          color: '#C9A84C',
          lineHeight: 1,
          position: 'relative',
          letterSpacing: '-2px',
        }}
      >
        404
      </motion.div>

      {/* Decorative divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          margin: '28px 0',
        }}
      >
        <div
          style={{
            width: '60px',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.4))',
          }}
        />
        <div
          style={{
            fontFamily: 'var(--font-arabic)',
            color: 'rgba(201,168,76,0.4)',
            fontSize: '16px',
          }}
        >
          ﷽
        </div>
        <div
          style={{
            width: '60px',
            height: '1px',
            background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.4))',
          }}
        />
      </motion.div>

      {/* Message */}
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(22px, 4vw, 32px)',
          fontWeight: 600,
          color: '#F0EBE2',
          textAlign: 'center',
          marginBottom: '12px',
          lineHeight: 1.3,
        }}
      >
        Pagina nao encontrada
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '15px',
          color: '#7A7870',
          textAlign: 'center',
          maxWidth: '400px',
          lineHeight: 1.6,
          marginBottom: '36px',
        }}
      >
        O caminho que voce procura nao existe. Mas o Santuario esta sempre aberto.
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '14px 32px',
            borderRadius: '12px',
            background: 'rgba(201,168,76,0.1)',
            border: '1px solid rgba(201,168,76,0.25)',
            color: '#C9A84C',
            fontSize: '15px',
            fontWeight: 600,
            fontFamily: 'var(--font-serif)',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(201,168,76,0.18)'
            e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'
            e.currentTarget.style.transform = 'translateY(-1px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(201,168,76,0.1)'
            e.currentTarget.style.borderColor = 'rgba(201,168,76,0.25)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          Voltar ao Santuario
        </Link>
      </motion.div>

      {/* Bottom decorative Arabic */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          fontFamily: 'var(--font-arabic)',
          fontSize: '14px',
          color: 'rgba(201,168,76,0.15)',
          direction: 'rtl',
          userSelect: 'none',
        }}
      >
        إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ
      </motion.div>
    </main>
  )
}
