'use client'

import { useState, useEffect, useCallback } from 'react'
import { createClient } from '@/lib/supabase/client'

export interface CommunityMember {
  id: string
  email: string
  phone: string | null
  token: string
  is_pro: boolean
  questions_used: number
  questions_reset_at: string
  created_at: string
}

interface CommunityState {
  member: CommunityMember | null
  isMember: boolean
  isPro: boolean
  questionsLeft: number
  loading: boolean
  join: (email: string, phone: string) => Promise<{ error: string | null }>
  leave: () => void
  refresh: () => Promise<void>
}

const TOKEN_KEY = 'kalam_community_token'

export function useCommunity(): CommunityState {
  const [member, setMember] = useState<CommunityMember | null>(null)
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  const loadMember = useCallback(async () => {
    const token = localStorage.getItem(TOKEN_KEY)
    if (!token) { setLoading(false); return }

    const { data } = await supabase
      .from('community_members')
      .select('*')
      .eq('token', token)
      .single()

    setMember(data ?? null)
    setLoading(false)
  }, [supabase])

  useEffect(() => { loadMember() }, [loadMember])

  const join = useCallback(async (email: string, phone: string): Promise<{ error: string | null }> => {
    const trimmedEmail = email.trim().toLowerCase()
    const trimmedPhone = phone.trim()

    // Verifica se já existe membro com esse email
    const { data: existing } = await supabase
      .from('community_members')
      .select('*')
      .eq('email', trimmedEmail)
      .single()

    if (existing) {
      // Já é membro — apenas restaura acesso no dispositivo
      localStorage.setItem(TOKEN_KEY, existing.token)
      setMember(existing)
      return { error: null }
    }

    // Cria novo membro
    const { data: created, error } = await supabase
      .from('community_members')
      .insert({ email: trimmedEmail, phone: trimmedPhone || null })
      .select('*')
      .single()

    if (error || !created) {
      return { error: 'Erro ao entrar na comunidade. Tente novamente.' }
    }

    localStorage.setItem(TOKEN_KEY, created.token)
    setMember(created)
    return { error: null }
  }, [supabase])

  const leave = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY)
    setMember(null)
  }, [])

  const refresh = useCallback(async () => {
    await loadMember()
  }, [loadMember])

  // Calcula quantas perguntas restam este mês
  const questionsLeft = member
    ? Math.max(0, 5 - (member.questions_used ?? 0))
    : 0

  return {
    member,
    isMember: !!member,
    isPro: member?.is_pro ?? false,
    questionsLeft,
    loading,
    join,
    leave,
    refresh,
  }
}
