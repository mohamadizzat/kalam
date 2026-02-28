'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

interface BackButtonProps {
  /** If provided, navigates to this path. Otherwise uses router.back() */
  href?: string
  /** Label text shown next to the arrow. Defaults to "Voltar" */
  label?: string
}

export function BackButton({ href, label = 'Voltar' }: BackButtonProps) {
  const router = useRouter()

  const style: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontFamily: 'var(--font-sans)',
    fontSize: '13px',
    color: '#7A7870',
    textDecoration: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    transition: 'color 0.2s ease',
  }

  const handleHover = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = '#C9A84C'
  }

  const handleLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = '#7A7870'
  }

  if (href) {
    return (
      <Link
        href={href}
        style={style}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <ArrowLeft size={16} strokeWidth={1.5} />
        {label}
      </Link>
    )
  }

  return (
    <button
      onClick={() => router.back()}
      style={style}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <ArrowLeft size={16} strokeWidth={1.5} />
      {label}
    </button>
  )
}
