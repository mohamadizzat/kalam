import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ tier: 'free', authenticated: false })
    }

    const { data: membership, error } = await supabase
      .from('user_memberships')
      .select('*')
      .eq('user_id', user.id)
      .single()

    if (error || !membership) {
      // Auto-create free membership for authenticated users
      const { data: newMembership, error: insertErr } = await supabase
        .from('user_memberships')
        .insert({ user_id: user.id, tier: 'free', status: 'active' })
        .select()
        .single()

      if (insertErr) {
        console.error('[membership/status] Insert error:', insertErr.message)
        return NextResponse.json({ tier: 'free', authenticated: true })
      }

      return NextResponse.json({
        tier: 'free',
        status: 'active',
        authenticated: true,
        membership: newMembership,
      })
    }

    return NextResponse.json({
      tier: membership.tier,
      status: membership.status,
      authenticated: true,
      membership,
    })
  } catch (err) {
    console.error('[membership/status] Error:', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
