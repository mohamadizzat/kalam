import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Lazy-initialized service-role client — bypasses RLS.
// Use ONLY in server-side API routes (webhooks, admin ops).
let _admin: SupabaseClient | null = null

export function getSupabaseAdmin(): SupabaseClient {
  if (!_admin) {
    _admin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )
  }
  return _admin
}
