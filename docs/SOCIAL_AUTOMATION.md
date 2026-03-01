# Social Automation — Spec Detalhada

> Módulo de publicação automática no Instagram via Hub.

---

## Arquitetura

```
Hub Studio → Content Calendar → Scheduler → Instagram Graph API
                                    ↓
                              social_posts table
                                    ↓
                              Engagement Sync ← Instagram Insights API
```

---

## Instagram Graph API v21.0

### Pré-requisitos
- Facebook App com permissões: `instagram_basic`, `instagram_content_publish`, `pages_read_engagement`
- Instagram Business Account conectada a Facebook Page
- Long-lived access token (60 dias, refresh automático)

### Flow: Publicar Imagem

```
1. POST /{ig-business-id}/media
   Body: { image_url, caption, access_token }
   Response: { id: "container_id" }

2. POST /{ig-business-id}/media_publish
   Body: { creation_id: "container_id", access_token }
   Response: { id: "media_id" }
```

### Flow: Publicar Carrossel

```
1. Para cada imagem:
   POST /{ig-business-id}/media
   Body: { image_url, is_carousel_item: true, access_token }
   → Coleta container_ids[]

2. POST /{ig-business-id}/media
   Body: { media_type: "CAROUSEL", children: container_ids[], caption, access_token }
   → carousel_container_id

3. POST /{ig-business-id}/media_publish
   Body: { creation_id: "carousel_container_id", access_token }
```

### Flow: Publicar Reel

```
1. POST /{ig-business-id}/media
   Body: { video_url, media_type: "REELS", caption, access_token }
   Response: { id: "container_id" }

2. Poll: GET /{container_id}?fields=status_code
   Aguardar: status_code === "FINISHED" (poll a cada 30s, max 5min)

3. POST /{ig-business-id}/media_publish
   Body: { creation_id: "container_id", access_token }
```

### Engagement (Insights)

```
GET /{media_id}/insights?metric=impressions,reach,likes,comments,saved
```

---

## Tabelas Hub (Supabase project: yqcrhegivtmnmverfeqa)

### social_accounts
```sql
CREATE TABLE social_accounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id UUID NOT NULL REFERENCES organizations(id),
  platform TEXT NOT NULL,          -- 'instagram', 'facebook', 'tiktok'
  account_id TEXT NOT NULL,        -- platform-specific ID (ig business ID)
  account_name TEXT,
  access_token TEXT,               -- encrypted (long-lived token)
  token_expires_at TIMESTAMPTZ,
  metadata JSONB DEFAULT '{}',     -- { page_id, permissions[], profile_pic }
  status TEXT DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### social_posts
```sql
CREATE TABLE social_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id UUID NOT NULL REFERENCES organizations(id),
  partner_id UUID REFERENCES studio_partners(id),
  account_id UUID REFERENCES social_accounts(id),
  platform TEXT NOT NULL,
  post_type TEXT NOT NULL,         -- 'image', 'carousel', 'reel', 'story'
  caption TEXT,
  hashtags TEXT[] DEFAULT '{}',
  media_urls TEXT[] DEFAULT '{}',
  asset_ids UUID[] DEFAULT '{}',   -- refs to studio_jobs assets
  scheduled_at TIMESTAMPTZ,
  published_at TIMESTAMPTZ,
  external_post_id TEXT,           -- Instagram media ID
  status TEXT DEFAULT 'draft',     -- draft, scheduled, publishing, published, failed
  error_message TEXT,
  engagement JSONB DEFAULT '{}',   -- { impressions, reach, likes, comments, saves }
  created_by UUID,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### content_calendar
```sql
CREATE TABLE content_calendar (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id UUID NOT NULL REFERENCES organizations(id),
  partner_id UUID REFERENCES studio_partners(id),
  date DATE NOT NULL,
  slot_type TEXT DEFAULT 'morning', -- morning, afternoon, evening
  post_id UUID REFERENCES social_posts(id),
  theme TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## Módulos Hub

### modules/instagram.js (~200 linhas)

```javascript
// Funções exportadas:
module.exports = {
  publishImage(accountId, imageUrl, caption),
  publishCarousel(accountId, imageUrls[], caption),
  publishReel(accountId, videoUrl, caption),
  getInsights(mediaId),
  refreshToken(accountId),
}
```

### modules/social-scheduler.js (~100 linhas)

```
- setInterval: 60 segundos (1 min)
- Query: social_posts WHERE status='scheduled' AND scheduled_at <= NOW()
- Para cada post:
  1. status → 'publishing'
  2. Carrega social_account (token)
  3. Publica via instagram.js
  4. status → 'published', published_at, external_post_id
  5. Se erro: retry (max 3x, backoff 5min), depois status → 'failed'
```

### routes/social-routes.js (~300 linhas)

```
POST   /api/social/accounts          → Conectar conta
GET    /api/social/accounts          → Listar contas
DELETE /api/social/accounts/:id      → Desconectar

POST   /api/social/posts             → Criar post (draft)
PUT    /api/social/posts/:id         → Editar post
POST   /api/social/posts/:id/schedule → Agendar (set scheduled_at)
POST   /api/social/posts/:id/publish  → Publicar agora
DELETE /api/social/posts/:id         → Cancelar/deletar
GET    /api/social/posts             → Listar (filtros: status, platform, date)

GET    /api/social/calendar          → Ver calendário do mês
PUT    /api/social/calendar/:id      → Mover post no calendário
POST   /api/social/posts/:id/sync    → Sync engagement de post específico
```

---

## Token Management

### Long-Lived Token
- Duração: 60 dias
- Refresh: 7 dias antes de expirar
- Storage: `social_accounts.access_token` (futuramente encriptar com AES-256)
- Cron: diário, verifica tokens expirando em 7 dias e refresha

### OAuth Flow (Conexão Inicial)
1. Hub UI: botão "Conectar Instagram"
2. Redirect → Facebook OAuth dialog
3. Callback com short-lived token (1h)
4. Exchange → long-lived token (60d)
5. GET /me/accounts → page_id
6. GET /{page_id}?fields=instagram_business_account → ig_business_id
7. Salva tudo em `social_accounts`

---

## Rate Limits (Instagram)

| Endpoint | Limite | Janela |
|----------|--------|--------|
| Content Publishing | 50 posts/day | 24h rolling |
| API calls gerais | 200/user/hour | 1h |
| Insights | 200/user/hour | 1h |

Buffer de segurança: máximo 10 posts/dia no scheduler.

---

## Env Vars Necessárias (Hub)

```
INSTAGRAM_APP_ID=...
INSTAGRAM_APP_SECRET=...
INSTAGRAM_REDIRECT_URI=https://web-production-36f4f.up.railway.app/api/social/callback
```
