'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const STORAGE_KEY = 'kalam-recent-paths'
const MAX_PATHS = 20

export function usePathTracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (!pathname || pathname === '/') return

    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      const paths: string[] = raw ? JSON.parse(raw) : []

      // Don't duplicate consecutive entries
      if (paths[0] === pathname) return

      const updated = [pathname, ...paths.filter((p) => p !== pathname)].slice(0, MAX_PATHS)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    } catch {
      // localStorage unavailable
    }
  }, [pathname])
}

export function getRecentPaths(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}
