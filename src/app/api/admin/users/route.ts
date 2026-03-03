import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getSupabaseAdmin } from '@/lib/supabase/admin'

export async function GET() {
  // 1. Verificar se o usuário está autenticado e é admin
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('is_admin')
    .eq('id', user.id)
    .single()

  if (!profile?.is_admin) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  // 2. Buscar todos os usuários com dados de membership (service role bypassa RLS)
  const admin = getSupabaseAdmin()

  const { data: users, error: usersError } = await admin.auth.admin.listUsers()
  if (usersError) {
    return NextResponse.json({ error: usersError.message }, { status: 500 })
  }

  const { data: memberships } = await admin
    .from('user_memberships')
    .select('*')

  const { data: profiles } = await admin
    .from('profiles')
    .select('*')

  const { data: communityMembers } = await admin
    .from('community_members')
    .select('*')
    .order('created_at', { ascending: false })

  // 3. Montar resposta combinada
  const combined = users.users.map(u => {
    const membership = memberships?.find(m => m.user_id === u.id)
    const prof = profiles?.find(p => p.id === u.id)
    return {
      id: u.id,
      email: u.email,
      name: prof?.display_name || u.user_metadata?.full_name || u.user_metadata?.name || null,
      avatar_url: prof?.avatar_url || u.user_metadata?.avatar_url || null,
      is_admin: prof?.is_admin || false,
      email_confirmed: !!u.email_confirmed_at,
      created_at: u.created_at,
      last_sign_in: u.last_sign_in_at,
      tier: membership?.tier || 'free',
      status: membership?.status || null,
      membership_id: membership?.id || null,
    }
  })

  return NextResponse.json({
    users: combined,
    community_members: communityMembers || [],
    total: combined.length,
  })
}
