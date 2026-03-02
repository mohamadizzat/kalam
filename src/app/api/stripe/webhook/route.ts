import { NextRequest } from 'next/server'
import Stripe from 'stripe'
import { getSupabaseAdmin } from '@/lib/supabase/admin'
import { loopsOnUpgrade, loopsOnCancel } from '@/lib/loops'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY)
  : null

export async function POST(request: NextRequest) {
  if (!stripe) {
    console.error('[Stripe Webhook] STRIPE_SECRET_KEY not configured')
    return Response.json({ error: 'Stripe not configured' }, { status: 500 })
  }

  let event: Stripe.Event

  try {
    const body = await request.text()
    const signature = request.headers.get('stripe-signature')

    if (!signature || !process.env.STRIPE_WEBHOOK_SECRET) {
      console.error('[Stripe Webhook] Missing signature or webhook secret')
      return Response.json({ error: 'Missing signature' }, { status: 400 })
    }

    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    )
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('[Stripe Webhook] Signature verification failed:', message)
    return Response.json({ error: 'Invalid signature' }, { status: 400 })
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session)
        break

      case 'customer.subscription.updated':
        await handleSubscriptionUpdated(event.data.object as Stripe.Subscription)
        break

      case 'customer.subscription.deleted':
        await handleSubscriptionDeleted(event.data.object as Stripe.Subscription)
        break

      case 'invoice.payment_failed':
        await handlePaymentFailed(event.data.object as Stripe.Invoice)
        break

      default:
        console.log(`[Stripe Webhook] Unhandled event: ${event.type}`)
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error(`[Stripe Webhook] Error processing ${event.type}:`, message)
  }

  return Response.json({ received: true })
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const userId = session.metadata?.user_id
  if (!userId) {
    console.error('[Stripe Webhook] checkout.session.completed missing user_id')
    return
  }

  const subscriptionId = typeof session.subscription === 'string'
    ? session.subscription
    : session.subscription?.id

  const customerId = typeof session.customer === 'string'
    ? session.customer
    : session.customer?.id

  console.log(`[Stripe Webhook] checkout.session.completed: user=${userId}`)

  const { error } = await getSupabaseAdmin()
    .from('user_memberships')
    .upsert(
      {
        user_id: userId,
        tier: 'premium',
        status: 'active',
        stripe_subscription_id: subscriptionId || null,
        stripe_customer_id: customerId || null,
        started_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id' }
    )

  if (error) {
    console.error('[Stripe Webhook] Failed to upsert membership:', error.message)
  }

  // Loops — upgrade event
  const { data: userData } = await getSupabaseAdmin().auth.admin.getUserById(userId)
  if (userData?.user?.email) {
    loopsOnUpgrade({ email: userData.user.email, userId })
  }
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  const userId = subscription.metadata?.user_id
  if (!userId) return

  const status = subscription.status === 'active' ? 'active'
    : subscription.status === 'past_due' ? 'past_due'
    : subscription.status === 'canceled' ? 'canceled'
    : 'active'

  const periodEnd = subscription.items.data[0]?.current_period_end
  const expiresAt = periodEnd ? new Date(periodEnd * 1000).toISOString() : null

  const { error } = await getSupabaseAdmin()
    .from('user_memberships')
    .update({
      status,
      expires_at: expiresAt,
      updated_at: new Date().toISOString(),
    })
    .eq('user_id', userId)

  if (error) {
    console.error('[Stripe Webhook] Failed to update subscription:', error.message)
  }
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  const userId = subscription.metadata?.user_id
  if (!userId) return

  console.log(`[Stripe Webhook] subscription.deleted: user=${userId}`)

  const { error } = await getSupabaseAdmin()
    .from('user_memberships')
    .update({
      tier: 'free',
      status: 'canceled',
      updated_at: new Date().toISOString(),
    })
    .eq('user_id', userId)

  if (error) {
    console.error('[Stripe Webhook] Failed to cancel membership:', error.message)
  }

  // Loops — cancel event
  const { data: userData } = await getSupabaseAdmin().auth.admin.getUserById(userId)
  if (userData?.user?.email) {
    loopsOnCancel({ email: userData.user.email, userId })
  }
}

async function handlePaymentFailed(invoice: Stripe.Invoice) {
  const sub = (invoice as unknown as { subscription?: string | { id: string } }).subscription
  const subscriptionId = typeof sub === 'string' ? sub : sub?.id

  if (!subscriptionId) return

  console.log(`[Stripe Webhook] invoice.payment_failed: sub=${subscriptionId}`)

  const { error } = await getSupabaseAdmin()
    .from('user_memberships')
    .update({
      status: 'past_due',
      updated_at: new Date().toISOString(),
    })
    .eq('stripe_subscription_id', subscriptionId)

  if (error) {
    console.error('[Stripe Webhook] Failed to mark past_due:', error.message)
  }
}
