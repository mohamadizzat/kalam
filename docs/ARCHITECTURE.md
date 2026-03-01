# Arquitetura Hub ↔ Kalam

> Como os dois sistemas se conectam e operam juntos.

---

## Overview

```
┌─────────────────────┐        ┌─────────────────────┐
│       KALAM          │        │        HUB           │
│  (Next.js / Vercel)  │        │  (Node.js / Railway)  │
│                      │        │                      │
│  - Auth (Supabase)   │  API   │  - Auth (Clerk)      │
│  - UI / Content      │◄──────►│  - Studio (Gen AI)    │
│  - Área de Membros   │  Proxy │  - Social Module      │
│  - Community         │        │  - Content Intel      │
│                      │        │  - Instagram API      │
│  DB: Supabase Kalam  │        │  DB: Supabase Hub     │
│  (crnwmlcmmbjamncfnyry) │     │  (yqcrhegivtmnmverfeqa) │
└─────────────────────┘        └─────────────────────┘
```

---

## Sistemas Separados

### Kalam (kalambrasil.com)
- **Framework**: Next.js 16 + TypeScript + Tailwind v4
- **Deploy**: Vercel (auto-deploy on push main)
- **Auth**: Supabase (email + Google OAuth)
- **DB**: Supabase PostgreSQL (`crnwmlcmmbjamncfnyry`)
- **Função**: Frontend público + área de membros + comunidade

### Hub (app.izzatsystem.com)
- **Framework**: Node.js + Express + WebSocket
- **Deploy**: Railway (auto-deploy on push main)
- **Auth**: Clerk + RBAC (5 roles)
- **DB**: Supabase PostgreSQL (`yqcrhegivtmnmverfeqa`)
- **Função**: Backend completo, AI generation, social automation

---

## Integração Hub ↔ Kalam

### Proxy Pattern
O Kalam NÃO fala diretamente com providers de AI ou Instagram. Tudo passa pelo Hub via proxy.

```
Kalam User → /api/hub/proxy → Hub API → Provider/Instagram
```

### Auth entre sistemas
- **Kalam → Hub**: Service token (env var `HUB_SERVICE_TOKEN`)
- **Hub → Kalam**: Não necessário (Hub publica direto no Instagram)
- **Sem auth cruzada**: Cada sistema tem seu próprio sistema de auth

### Dados compartilhados
- **Conteúdo gerado**: Hub gera, armazena em Hub DB, publica no Instagram
- **Premium content**: Hub pode popular `premium_content` no Kalam DB via API
- **Sem replicação**: Cada DB é independente

---

## Databases

### Kalam DB (Supabase: crnwmlcmmbjamncfnyry)

| Tabela | Função | Phase |
|--------|--------|-------|
| profiles | Perfil do usuário | Existente |
| user_settings | Configurações | Existente |
| user_streaks | Streaks diários | Existente |
| user_progress | Progresso em conteúdo | Existente |
| user_bookmarks | Favoritos | Existente |
| user_journal | Diário de reflexões | Existente |
| user_data | Key-value flexível | Existente |
| kids_progress | Progresso kids | Existente |
| **user_memberships** | Tier de membership | **Phase 5** |
| **premium_content** | Conteúdo exclusivo | **Phase 5** |
| **community_posts** | Posts da comunidade | **Phase 5** |
| **community_replies** | Respostas aos posts | **Phase 5** |

### Hub DB (Supabase: yqcrhegivtmnmverfeqa)

| Tabela | Função | Phase |
|--------|--------|-------|
| studio_partners | Partners (incl. Kalam) | Existente |
| studio_brand_rules | Brand guidelines | Existente |
| studio_jobs | Job queue de geração | Existente |
| studio_character_sheets | Personas AI | Existente |
| studio_templates | Templates por formato | Existente |
| **social_accounts** | Contas Instagram | **Phase 5** |
| **social_posts** | Posts agendados/pub. | **Phase 5** |
| **content_calendar** | Calendário mensal | **Phase 5** |

---

## API Routes

### Kalam API Routes (Next.js App Router)

| Route | Method | Auth | Função |
|-------|--------|------|--------|
| `/api/membership/status` | GET | Supabase | Tier atual do user |
| `/api/membership/content` | GET | Supabase | Lista conteúdo premium |
| `/api/hub/proxy` | POST | Supabase + Service Token | Proxy para Hub API |

### Hub API Routes (Express)

| Route | Method | Auth | Função |
|-------|--------|------|--------|
| `/api/social/accounts` | GET/POST/DELETE | Clerk | CRUD contas sociais |
| `/api/social/posts` | GET/POST/PUT/DELETE | Clerk | CRUD posts |
| `/api/social/posts/:id/schedule` | POST | Clerk | Agendar post |
| `/api/social/posts/:id/publish` | POST | Clerk | Publicar agora |
| `/api/social/calendar` | GET/PUT | Clerk | Calendário de conteúdo |
| `/api/social/posts/:id/sync` | POST | Clerk | Sync engagement |

---

## Deploy

### Kalam
```bash
cd ~/Desktop/kalam
pnpm build         # Verifica build
git push origin main  # Vercel auto-deploy
```

### Hub
```bash
cd ~/Desktop/izzat-hub
node -c file.js     # Syntax check
git push origin main  # Railway auto-deploy
```

---

## Env Vars

### Kalam (.env.local)
```
NEXT_PUBLIC_SUPABASE_URL=https://crnwmlcmmbjamncfnyry.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
HUB_API_URL=https://web-production-36f4f.up.railway.app
HUB_SERVICE_TOKEN=...  # Para proxy auth
```

### Hub (Railway env)
```
INSTAGRAM_APP_ID=...
INSTAGRAM_APP_SECRET=...
INSTAGRAM_REDIRECT_URI=...
# Supabase, Clerk, Stripe, etc. já configurados
```

---

## Segurança

### Princípios
1. **Isolamento**: Kalam e Hub têm DBs separados, auth separada
2. **Proxy**: Kalam nunca expõe tokens de providers diretamente
3. **RLS**: Todas tabelas Kalam com Row Level Security
4. **Service tokens**: Comunicação Hub↔Kalam via tokens de serviço
5. **Rate limiting**: Proxy com rate limit por user (10 req/min)
6. **Sem dados sensíveis no frontend**: Tokens ficam server-side

### Fallbacks
- Hub down → Kalam funciona normalmente (conteúdo estático + comunidade)
- Instagram API down → Posts ficam em 'failed', retry automático
- Supabase Kalam down → Auth e membership offline, conteúdo estático funciona
