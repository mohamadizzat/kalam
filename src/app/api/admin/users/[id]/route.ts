import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getSupabaseAdmin } from '@/lib/supabase/admin'

type Params = { params: Promise<{ id: string }> }

export async function PATCH(request: Request, { params }: Params) {
  // 1. Admin check
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

  const { id } = await params
  const body = await request.json()
  const { tier, status, is_pro } = body

  const admin = getSupabaseAdmin()

  // 2. Atualizar user_memberships
  if (tier !== undefined || status !== undefined) {
    const updates: Record<string, string> = { updated_at: new Date().toISOString() }
    if (tier !== undefined) updates.tier = tier
    if (status !== undefined) updates.status = status

    const { data: existing } = await admin
      .from('user_memberships')
      .select('id')
      .eq('user_id', id)
      .single()

    if (existing) {
      await admin.from('user_memberships').update(updates).eq('user_id', id)
    } else {
      await admin.from('user_memberships').insert({
        user_id: id,
        tier: tier || 'free',
        status: status || 'active',
      })
    }
  }

  // 3. Atualizar is_pro em community_members (se passado)
  if (is_pro !== undefined) {
    // community_members usa email como chave
    const { data: targetUser } = await admin.auth.admin.getUserById(id)
    if (targetUser.user?.email) {
      await admin
        .from('community_members')
        .update({ is_pro })
        .eq('email', targetUser.user.email)
    }
  }

  return NextResponse.json({ success: true })
}

// Deletar usuário (hard delete)
export async function DELETE(_request: Request, { params }: Params) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data: profile } = await supabase
    .from('profiles')
    .select('is_admin')
    .eq('id', user.id)
    .single()

  if (!profile?.is_admin) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const { id } = await params
  const admin = getSupabaseAdmin()
  const { error } = await admin.auth.admin.deleteUser(id)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ success: true })
}
