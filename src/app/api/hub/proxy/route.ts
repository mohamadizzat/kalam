import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

const HUB_API_URL = process.env.HUB_API_URL || 'https://web-production-36f4f.up.railway.app'
const HUB_SERVICE_TOKEN = process.env.HUB_SERVICE_TOKEN || ''

// Rate limiting: 10 requests per minute per user
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 10
const RATE_WINDOW_MS = 60_000

function checkRateLimit(userId: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(userId)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(userId, { count: 1, resetAt: now + RATE_WINDOW_MS })
    return true
  }

  if (entry.count >= RATE_LIMIT) return false
  entry.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }

    if (!checkRateLimit(user.id)) {
      return NextResponse.json({ error: 'Rate limit exceeded (10/min)' }, { status: 429 })
    }

    if (!HUB_SERVICE_TOKEN) {
      return NextResponse.json({ error: 'Hub integration not configured' }, { status: 503 })
    }

    const body = await request.json()
    const { endpoint, data, method = 'POST' } = body

    if (!endpoint) {
      return NextResponse.json({ error: 'endpoint is required' }, { status: 400 })
    }

    // Allowlist of Hub endpoints accessible via proxy
    const allowedPrefixes = ['/api/studio/', '/api/social/']
    const isAllowed = allowedPrefixes.some(p => endpoint.startsWith(p))
    if (!isAllowed) {
      return NextResponse.json({ error: 'Endpoint not allowed' }, { status: 403 })
    }

    const hubRes = await fetch(`${HUB_API_URL}${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${HUB_SERVICE_TOKEN}`,
        'X-Kalam-User-Id': user.id,
      },
      body: method !== 'GET' ? JSON.stringify(data || {}) : undefined,
    })

    const hubData = await hubRes.json()
    return NextResponse.json(hubData, { status: hubRes.status })
  } catch (err) {
    console.error('[hub/proxy] Error:', err)
    return NextResponse.json({ error: 'Proxy error' }, { status: 500 })
  }
}
