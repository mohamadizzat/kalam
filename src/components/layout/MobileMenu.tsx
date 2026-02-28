'use client'

import Link from 'next/link'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavLink { label: string; href: string }

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  links: NavLink[]
}

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed', inset: 0, zIndex: 200,
              background: 'rgba(0,0,0,0.7)',
            }}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            style={{
              position: 'fixed', top: 0, right: 0, bottom: 0,
              width: 300, zIndex: 201,
              background: '#0D0B12',
              borderLeft: '1px solid rgba(201,168,76,0.1)',
              display: 'flex', flexDirection: 'column',
              padding: '24px',
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 48 }}>
              <span style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 13, fontWeight: 600,
                letterSpacing: '3px', textTransform: 'uppercase',
                color: '#F0EBE2',
              }}>
                KALAM
              </span>
              <button onClick={onClose} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#7A7870', padding: 4 }}>
                <X size={20} />
              </button>
            </div>

            {/* Links */}
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    style={{
                      display: 'block',
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: 24,
                      fontWeight: 400,
                      color: '#F0EBE2',
                      textDecoration: 'none',
                      padding: '10px 0',
                      borderBottom: '1px solid rgba(201,168,76,0.06)',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#C9A84C' }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#F0EBE2' }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Footer */}
            <div style={{ marginTop: 'auto', paddingTop: 32 }}>
              <span style={{ fontFamily: "'Amiri', serif", fontSize: 28, color: 'rgba(201,168,76,0.25)' }}>
                كلام
              </span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
