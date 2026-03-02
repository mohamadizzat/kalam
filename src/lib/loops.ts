// Loops.so integration — email marketing automation
// Docs: https://loops.so/docs/api-reference

const LOOPS_API_KEY = process.env.LOOPS_API_KEY
const LOOPS_API_URL = 'https://app.loops.so/api/v1'

interface LoopsContact {
  email: string
  firstName?: string
  userId?: string
  source?: string
  userGroup?: string
  tier?: 'free' | 'premium'
  signupDate?: string
}

interface LoopsEvent {
  email: string
  eventName: string
  userId?: string
  [key: string]: string | number | boolean | undefined
}

async function loopsRequest(path: string, body: object): Promise<void> {
  if (!LOOPS_API_KEY) {
    console.warn('[Loops] LOOPS_API_KEY not configured — skipping')
    return
  }

  try {
    const res = await fetch(`${LOOPS_API_URL}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${LOOPS_API_KEY}`,
      },
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      const text = await res.text()
      console.error(`[Loops] ${path} failed (${res.status}):`, text)
    }
  } catch (err) {
    // Never let Loops errors break the main flow
    console.error(`[Loops] ${path} error:`, err)
  }
}

// Create or update a contact in Loops
export async function loopsUpsertContact(contact: LoopsContact): Promise<void> {
  await loopsRequest('/contacts/upsert', {
    email: contact.email,
    firstName: contact.firstName,
    userId: contact.userId,
    source: contact.source ?? 'kalam-app',
    userGroup: contact.tier === 'premium' ? 'premium' : 'free',
    tier: contact.tier ?? 'free',
    signupDate: contact.signupDate ?? new Date().toISOString(),
    platform: 'kalam',
  })
}

// Fire a Loops event (triggers automations)
export async function loopsSendEvent(event: LoopsEvent): Promise<void> {
  await loopsRequest('/events/send', event)
}

// ── Convenience wrappers ──────────────────────────────────────────────────────

export async function loopsOnSignup(params: {
  email: string
  name?: string
  userId: string
}): Promise<void> {
  await loopsUpsertContact({
    email: params.email,
    firstName: params.name,
    userId: params.userId,
    tier: 'free',
    signupDate: new Date().toISOString(),
  })

  await loopsSendEvent({
    email: params.email,
    eventName: 'signup',
    userId: params.userId,
  })
}

export async function loopsOnUpgrade(params: {
  email: string
  userId: string
}): Promise<void> {
  await loopsUpsertContact({
    email: params.email,
    userId: params.userId,
    tier: 'premium',
  })

  await loopsSendEvent({
    email: params.email,
    eventName: 'upgrade_premium',
    userId: params.userId,
  })
}

export async function loopsOnCancel(params: {
  email: string
  userId: string
}): Promise<void> {
  await loopsUpsertContact({
    email: params.email,
    userId: params.userId,
    tier: 'free',
  })

  await loopsSendEvent({
    email: params.email,
    eventName: 'cancel_premium',
    userId: params.userId,
  })
}
