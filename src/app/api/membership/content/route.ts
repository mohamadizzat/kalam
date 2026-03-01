import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

const TIER_LEVEL: Record<string, number> = {
  free: 0,
  explorer: 1,
  seeker: 2,
  guide: 3,
}

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    // Get user tier
    let userTier = 'free'
    if (user) {
      const { data: membership } = await supabase
        .from('user_memberships')
        .select('tier')
        .eq('user_id', user.id)
        .single()
      if (membership) userTier = membership.tier
    }

    const searchParams = request.nextUrl.searchParams
    const type = searchParams.get('type')
    const category = searchParams.get('category')

    // Query published content
    let query = supabase
      .from('premium_content')
      .select('id, title, slug, content_type, min_tier, category, cover_image, published_at, created_at')
      .not('published_at', 'is', null)
      .order('published_at', { ascending: false })

    if (type) query = query.eq('content_type', type)
    if (category) query = query.eq('category', category)

    const { data: content, error } = await query

    if (error) throw error

    // Mark accessible/locked for each item
    const items = (content || []).map(item => ({
      ...item,
      accessible: TIER_LEVEL[userTier] >= TIER_LEVEL[item.min_tier],
      user_tier: userTier,
    }))

    return NextResponse.json({ data: items, user_tier: userTier })
  } catch (err) {
    console.error('[membership/content] Error:', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
