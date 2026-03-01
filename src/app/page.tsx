'use client'

import { useState, useEffect } from 'react'
import { StoryHome } from '@/components/home/StoryHome'
import { DashboardHome } from '@/components/home/DashboardHome'

export default function HomePage() {
  const [mode, setMode] = useState<'loading' | 'story' | 'dashboard'>('loading')

  useEffect(() => {
    try {
      const done = localStorage.getItem('kalam-onboarding-done')
      const lastVisit = localStorage.getItem('kalam-last-visit')
      const lastRead = localStorage.getItem('kalam-last-read')

      if (done || lastVisit || lastRead) {
        setMode('dashboard')
      } else {
        setMode('story')
      }
    } catch {
      setMode('story')
    }
  }, [])

  if (mode === 'loading') {
    return <main className="min-h-screen" style={{ background: '#0D0B12' }} />
  }

  return (
    <main className="min-h-screen" style={{ background: '#0D0B12' }}>
      {mode === 'story' ? (
        <StoryHome onNavigate={() => {
          try {
            localStorage.setItem('kalam-onboarding-done', 'true')
          } catch {}
          setMode('dashboard')
        }} />
      ) : (
        <DashboardHome />
      )}
    </main>
  )
}
