# Kalam — Features Spec

> Todas as features novas da Phase 5 com specs detalhadas.

---

## 1. Área de Membros

### Tiers

| Tier | Preço (futuro) | Preço atual | Acesso |
|------|---------------|-------------|--------|
| Free | R$0 | R$0 | Conteúdo público + aya do dia |
| Explorer | R$29/mês | GRÁTIS | + estudos profundos + comunidade |
| Seeker | R$79/mês | GRÁTIS | + lives + AI companion + áudio |
| Guide | R$197/mês | GRÁTIS | + mentoria + conteúdo antecipado |

### Rotas

```
/area-de-membros              → Dashboard principal
/area-de-membros/estudos      → Estudos premium (gated)
/area-de-membros/comunidade   → Feed de reflexões + Q&A
/area-de-membros/ao-vivo      → Lives e replays (futuro)
/area-de-membros/ferramentas  → Tools exclusivas (futuro)
/area-de-membros/perfil       → Config + assinatura (futuro)
```

### Dashboard (/area-de-membros)
- Streak atual + barra de progresso semanal
- Próximo estudo recomendado
- Últimas reflexões da comunidade (3 cards)
- Aya do dia personalizada
- Card de upgrade (quando free)

### Estudos Premium (/area-de-membros/estudos)
- Lista de estudos exclusivos
- Filtro por categoria (ponte, original, sistema, beleza)
- Card com preview + min_tier badge
- Conteúdo gated: se user tier < min_tier, mostra blur + CTA upgrade
- Conteúdo salvo em `premium_content` table

### Comunidade (/area-de-membros/comunidade)
- Feed de posts (reflexões, perguntas, testemunhos)
- Tipos: reflection, question, testimony, discussion
- Like + reply (sem delete para manter integridade)
- Posts pinados pelo admin no topo
- Requer tier Explorer+ para postar

---

## 2. API Routes (Next.js)

### GET /api/membership/status
- Retorna tier atual do usuário autenticado
- Se não autenticado: `{ tier: "free", authenticated: false }`
- Se autenticado sem membership: `{ tier: "free", authenticated: true }`
- Se membro: `{ tier: "explorer", status: "active", expires_at: "..." }`

### GET /api/membership/content
- Query params: `?type=study&tier=explorer`
- Filtra `premium_content` por tier do usuário
- Retorna lista com preview (sem body completo)
- Body completo via `/api/membership/content/[slug]`

### POST /api/hub/proxy
- Proxy autenticado para Hub backend
- Body: `{ endpoint: "/api/studio/generate/image", data: {...} }`
- Adiciona auth header do Kalam
- Rate limit: 10 req/min por user

---

## 3. Content Gating

### Lógica
```
tier_hierarchy = { free: 0, explorer: 1, seeker: 2, guide: 3 }

canAccess(userTier, contentMinTier) {
  return tier_hierarchy[userTier] >= tier_hierarchy[contentMinTier]
}
```

### UI quando bloqueado
- Conteúdo aparece com blur (backdrop-filter: blur(8px))
- Overlay com ícone de cadeado dourado
- Texto: "Este estudo é exclusivo para membros {tier}"
- Botão: "Desbloquear acesso" → rota de upgrade (futuro: Stripe checkout)
- Atualmente (GRÁTIS): todos os tiers são "active" automaticamente

---

## 4. Social Automation (Hub-side)

### Instagram Publishing
- Publicação automática via Graph API v21.0
- Formatos: imagem, carrossel (até 10 slides), reel
- Caption com hashtags, emojis, CTA
- Scheduler: cron 1/min verifica posts agendados

### Content Calendar
- Grid mensal com slots (morning/afternoon/evening)
- Drag-and-drop para reagendar
- Color-coded por formato (imagem=blue, carrossel=purple, reel=orange)
- View: mês, semana, dia

### Social Accounts
- Conectar conta Instagram Business via OAuth
- Token management (refresh automático)
- Multi-account support (futuro)

---

## 5. Content Intelligence (Hub-side)

### Motor de Seleção
- Input: 37 data files + calendário islâmico + escada de consciência
- Output: brief de conteúdo com tema, versículo, formato, tom
- Rotação semanal dos 5 pilares
- Ajuste por eventos especiais (Ramadan, Eid, etc.)

### Batch Generation
- 30 posts/mês gerados em batch
- AI sugere melhores horários
- QA automático pré-aprovação
- CEO review no dashboard

---

## 6. Hub ↔ Kalam Integration

### Como funciona
1. Hub tem Kalam como Partner no Studio
2. Hub gera conteúdo com Brand Guard + Character Sheets
3. Conteúdo aprovado → agendado no content_calendar
4. Scheduler publica via Instagram Graph API
5. Analytics synced de volta ao Hub
6. Área de membros do Kalam consome conteúdo premium via API proxy

### Auth Flow
- Kalam: Supabase auth (email + Google)
- Hub: Clerk auth (RBAC)
- Proxy: Kalam API route → Hub API com service token
- Sem auth cruzada direta (isolamento por design)
