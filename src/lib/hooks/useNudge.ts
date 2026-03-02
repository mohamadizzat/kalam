'use client'

import { useState, useEffect, useCallback } from 'react'
import {
  evaluateNudge,
  markNudgeShown,
  incrementVisitCount,
  updateLastVisit,
  type Nudge,
} from '@/lib/reengagement-engine'

/**
 * React hook that wraps the reengagement engine.
 * - Increments visit count + updates last visit on mount.
 * - Evaluates nudge after 2-second delay (non-intrusive).
 * - Returns { nudge, dismiss }.
 */
export function useNudge(): { nudge: Nudge | null; dismiss: () => void } {
  const [nudge, setNudge] = useState<Nudge | null>(null)

  useEffect(() => {
    // Track visit immediately
    incrementVisitCount()
    updateLastVisit()

    // Evaluate nudge after 2s delay so page has time to settle
    const timer = setTimeout(() => {
      const result = evaluateNudge()
      setNudge(result)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const dismiss = useCallback(() => {
    markNudgeShown()
    setNudge(null)
  }, [])

  return { nudge, dismiss }
}
