'use client'

import { useState, useCallback } from 'react'
import { useAuth } from '@/providers/auth-provider'

export function useMembership() {
  const { isPremium, membershipTier } = useAuth()
  const [loading, setLoading] = useState(false)

  const checkout = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/stripe/checkout', { method: 'POST' })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      }
    } finally {
      setLoading(false)
    }
  }, [])

  const portal = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/stripe/portal', { method: 'POST' })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      }
    } finally {
      setLoading(false)
    }
  }, [])

  return { isPremium, membershipTier, checkout, portal, loading }
}
