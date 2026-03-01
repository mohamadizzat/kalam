# Área de Membros — Spec Detalhada

> Sistema de membership do Kalam com tiers, tabelas, fluxo de acesso e UI.

---

## Tabelas Supabase (project: crnwmlcmmbjamncfnyry)

### user_memberships
```sql
CREATE TABLE user_memberships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id),
  tier TEXT DEFAULT 'free',        -- free, explorer, seeker, guide
  status TEXT DEFAULT 'active',     -- active, cancelled, expired, trial
  started_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ,
  stripe_subscription_id TEXT,
  stripe_customer_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índices
CREATE INDEX idx_user_memberships_user ON user_memberships(user_id);
CREATE INDEX idx_user_memberships_tier ON user_memberships(tier);

-- RLS
ALTER TABLE user_memberships ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read own membership" ON user_memberships
  FOR SELECT USING (auth.uid() = user_id);
```

### premium_content
```sql
CREATE TABLE premium_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content_type TEXT NOT NULL,       -- study, video, audio, article
  body JSONB NOT NULL,              -- { sections: [...], verses: [...] }
  min_tier TEXT DEFAULT 'explorer', -- tier mínimo para acesso
  category TEXT,                    -- ponte, original, sistema, beleza
  cover_image TEXT,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índice
CREATE INDEX idx_premium_content_slug ON premium_content(slug);
CREATE INDEX idx_premium_content_tier ON premium_content(min_tier);

-- RLS (leitura pública, escrita admin)
ALTER TABLE premium_content ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read published content" ON premium_content
  FOR SELECT USING (published_at IS NOT NULL);
```

### community_posts
```sql
CREATE TABLE community_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id),
  content TEXT NOT NULL,
  type TEXT DEFAULT 'reflection',   -- reflection, question, testimony, discussion
  likes_count INT DEFAULT 0,
  replies_count INT DEFAULT 0,
  pinned BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índices
CREATE INDEX idx_community_posts_user ON community_posts(user_id);
CREATE INDEX idx_community_posts_type ON community_posts(type);
CREATE INDEX idx_community_posts_created ON community_posts(created_at DESC);

-- RLS
ALTER TABLE community_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read posts" ON community_posts FOR SELECT USING (true);
CREATE POLICY "Auth users can create posts" ON community_posts
  FOR INSERT WITH CHECK (auth.uid() = user_id);
```

### community_replies
```sql
CREATE TABLE community_replies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID NOT NULL REFERENCES community_posts(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id),
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índice
CREATE INDEX idx_community_replies_post ON community_replies(post_id);

-- RLS
ALTER TABLE community_replies ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read replies" ON community_replies FOR SELECT USING (true);
CREATE POLICY "Auth users can create replies" ON community_replies
  FOR INSERT WITH CHECK (auth.uid() = user_id);
```

---

## Tier Hierarchy

```
free (0) → explorer (1) → seeker (2) → guide (3)
```

| Tier | Preço Futuro | Status Atual | Acesso |
|------|-------------|-------------|--------|
| **Free** | R$0 | Grátis | Conteúdo público, aya do dia, navegação |
| **Explorer** | R$29/mês | GRÁTIS (beta) | + estudos profundos, comunidade, bookmarks avançados |
| **Seeker** | R$79/mês | GRÁTIS (beta) | + lives, AI companion, áudio exclusivo |
| **Guide** | R$197/mês | GRÁTIS (beta) | + mentoria, conteúdo antecipado, badge especial |

### Fluxo Atual (Beta — Tudo Grátis)
1. User faz login
2. Se não tem `user_memberships` row → auto-create com `tier: 'free'`
3. Upgrade: botão "Ativar Explorer" → UPDATE tier (sem pagamento)
4. Todo conteúdo premium fica acessível sem checkout
5. Stripe columns existem mas ficam NULL até ativação

### Fluxo Futuro (Com Stripe)
1. User clica "Upgrade para Explorer"
2. Redirect → Stripe Checkout session
3. Webhook `checkout.session.completed` → UPDATE membership
4. Webhook `invoice.paid` → manter status active
5. Webhook `customer.subscription.deleted` → status cancelled

---

## UI Specs

### Dashboard (/area-de-membros)

```
┌─────────────────────────────────────────────┐
│  Área de Membros                    [tier]  │
├─────────────────────────────────────────────┤
│                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │ Streak   │  │ Estudos  │  │ Reflexões│  │
│  │  🔥 12   │  │  3/10    │  │    7     │  │
│  └──────────┘  └──────────┘  └──────────┘  │
│                                             │
│  ┌─────────────────────────────────────┐    │
│  │  ✨ Aya do Dia                      │    │
│  │  "E certamente com a dificuldade   │    │
│  │   vem a facilidade" (94:5)          │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  ┌─────────────────────────────────────┐    │
│  │  📖 Próximo Estudo                  │    │
│  │  A Preservação do Alcorão          │    │
│  │  [Continuar →]                      │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  Últimas Reflexões                          │
│  ┌─────┐ ┌─────┐ ┌─────┐                   │
│  │ ...  │ │ ...  │ │ ...  │                   │
│  └─────┘ └─────┘ └─────┘                   │
│                                             │
└─────────────────────────────────────────────┘
```

### Cores & Design
- Background: `#0D0B12` (bg)
- Cards: `#161220` (surface) com border `#272230`
- Gold: `#C9A84C` para accents, badges, CTAs
- Text: `#F0EBE2` (primary), `#B3B0A6` (secondary)
- Font heading: Playfair Display
- Font body: Inter
- Animations: Framer Motion (fade-in, slide-up)

### Mobile (375px)
- Cards empilham em coluna única
- Stats em grid 3 colunas compacto
- Bottom padding 80px (BottomNav)
- Touch targets mínimo 44px

---

## API Routes

### GET /api/membership/status
```typescript
// src/app/api/membership/status/route.ts
import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ tier: 'free', authenticated: false })
  }

  const { data: membership } = await supabase
    .from('user_memberships')
    .select('*')
    .eq('user_id', user.id)
    .single()

  if (!membership) {
    // Auto-create free membership
    const { data: newMembership } = await supabase
      .from('user_memberships')
      .insert({ user_id: user.id, tier: 'free' })
      .select()
      .single()

    return NextResponse.json({
      tier: 'free',
      authenticated: true,
      membership: newMembership
    })
  }

  return NextResponse.json({
    tier: membership.tier,
    status: membership.status,
    authenticated: true,
    membership
  })
}
```

### GET /api/membership/content
```typescript
// src/app/api/membership/content/route.ts
// Query: ?type=study&category=ponte
// Returns: list of premium_content filtered by user tier
// Body field excluded from list (only in detail endpoint)
```
