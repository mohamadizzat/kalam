'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export default function APresencaPage() {
  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '48px 24px 100px' }}>

        {/* Header */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-10"
        >
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '32px',
            fontWeight: 700,
            color: '#F0EBE2',
            letterSpacing: '-0.02em',
          }}>
            A Presenca
          </h1>
          <p style={{
            color: '#B3B0A6',
            fontSize: '15px',
            marginTop: '8px',
          }}>
            Contemplacao. Lembranca. Conexao.
          </p>
        </motion.div>

        {/* Two cards */}
        <div className="grid gap-4">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <Link href="/a-presenca/99-nomes" className="card-hover" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              padding: '32px',
              borderRadius: '16px',
              background: '#161220',
              border: '1px solid #272230',
              textDecoration: 'none',
            }}>
              <p style={{
                fontFamily: 'var(--font-arabic)',
                fontSize: '32px',
                color: '#C9A84C',
                direction: 'rtl',
              }}>
                الله
              </p>
              <div>
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '20px',
                  color: '#F0EBE2',
                  fontWeight: 600,
                }}>
                  99 Nomes de Deus
                </p>
                <p style={{
                  fontSize: '14px',
                  color: '#7A7870',
                  marginTop: '4px',
                }}>
                  Conheca Deus pelos Seus atributos
                </p>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            <Link href="/a-presenca/duas" className="card-hover" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              padding: '32px',
              borderRadius: '16px',
              background: '#161220',
              border: '1px solid #272230',
              textDecoration: 'none',
            }}>
              <p style={{
                fontFamily: 'var(--font-arabic)',
                fontSize: '32px',
                color: '#C9A84C',
                direction: 'rtl',
              }}>
                دعاء
              </p>
              <div>
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '20px',
                  color: '#F0EBE2',
                  fontWeight: 600,
                }}>
                  Duas & Adhkar
                </p>
                <p style={{
                  fontSize: '14px',
                  color: '#7A7870',
                  marginTop: '4px',
                }}>
                  Suplicas para todo momento
                </p>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          >
            <Link href="/a-presenca/dhikr" className="card-hover" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              padding: '32px',
              borderRadius: '16px',
              background: '#161220',
              border: '1px solid #272230',
              textDecoration: 'none',
            }}>
              <p style={{
                fontFamily: 'var(--font-arabic)',
                fontSize: '32px',
                color: '#C9A84C',
                direction: 'rtl',
              }}>
                ذكر
              </p>
              <div>
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '20px',
                  color: '#F0EBE2',
                  fontWeight: 600,
                }}>
                  Dhikr Digital
                </p>
                <p style={{
                  fontSize: '14px',
                  color: '#7A7870',
                  marginTop: '4px',
                }}>
                  Lembranca contemplativa de Deus
                </p>
              </div>
            </Link>
          </motion.div>

        </div>

      </div>
    </main>
  )
}
