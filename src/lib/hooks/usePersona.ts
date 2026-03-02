'use client'

import { useState, useEffect, useCallback } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useAuth } from '@/providers/auth-provider'

export type PersonaId = 'curious' | 'muslim' | 'bible' | 'spiritual' | 'kids'

const STORAGE_KEY = 'kalam-persona'

export function usePersona() {
  const { user } = useAuth()
  const [persona, setPersona] = useState<PersonaId | null>(null)
  const [loading, setLoading] = useState(true)

  // Load persona on mount
  useEffect(() => {
    let cancelled = false

    async function load() {
      // Try Supabase first if authenticated
      if (user) {
        try {
          const supabase = createClient()
          const { data } = await supabase
            .from('user_preferences')
            .select('persona_id')
            .eq('user_id', user.id)
            .single()

          if (!cancelled && data?.persona_id) {
            setPersona(data.persona_id as PersonaId)
            setLoading(false)
            return
          }
        } catch {
          // Fall through to localStorage
        }
      }

      // Fallback to localStorage
      try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (!cancelled && stored) {
          setPersona(stored as PersonaId)
        }
      } catch {}

      if (!cancelled) setLoading(false)
    }

    load()
    return () => { cancelled = true }
  }, [user])

  // Save persona (localStorage + Supabase if authenticated)
  const savePersona = useCallback(async (newPersona: PersonaId) => {
    setPersona(newPersona)

    // Always save to localStorage
    try {
      localStorage.setItem(STORAGE_KEY, newPersona)
    } catch {}

    // Sync to Supabase if authenticated
    if (user) {
      try {
        const supabase = createClient()
        await supabase
          .from('user_preferences')
          .upsert({
            user_id: user.id,
            persona_id: newPersona,
            onboarding_completed_at: new Date().toISOString(),
          }, { onConflict: 'user_id' })
      } catch {}
    }
  }, [user])

  return { persona, loading, savePersona }
}
