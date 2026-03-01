# Kalam Content Engine — Pipeline de 8 Fases

> Spec técnica do pipeline Hub → Kalam para geração e distribuição de conteúdo.

---

## Visão Geral

O Hub gera conteúdo para o Kalam como "Partner" no Studio. O pipeline tem 8 fases, da seleção de tema até analytics pós-publicação.

```
[FASE 0] Inteligência    → Seleciona tema, versículo, formato
[FASE 1] Prompt Eng.     → Brand Guard enriquece prompt com rules + character sheet
[FASE 2] Geração         → Providers criam mídia (imagem, vídeo, áudio)
[FASE 3] QA Automático   → Gemini Vision score 0-100, auto-approve ≥70
[FASE 4] Review          → CEO aprova no Hub Studio dashboard
[FASE 5] Post-Processing → Branding overlay + resize + caption + hashtags
[FASE 6] Agendamento     → Calendar + scheduling
[FASE 7] Publicação      → Instagram Graph API
[FASE 8] Analytics       → Engagement sync + feedback loop
```

---

## Fase 0: Inteligência (Content Selection)

### Inputs
- **37 data files** do Kalam (16.7K linhas de conteúdo estruturado)
- **Calendário Islâmico**: Ramadan, Eid al-Fitr, Eid al-Adha, Sexta-feira, Mawlid, etc.
- **Escada de Consciência**: Degrau 0 (nunca ouviu) → Degrau 7 (praticante)
- **5 Pilares de Conteúdo** (rotação semanal):
  1. **A Ponte** — Bíblia ↔ Alcorão, conexões inesperadas
  2. **O Original** — Preservação do Alcorão, manuscritos, história
  3. **O Sistema** — Islam como sistema operacional de vida
  4. **A Beleza** — Estética, caligrafia, arquitetura, recitação
  5. **O Fundador** — Demonstração pessoal, jornada, visão

### Output
Brief de conteúdo:
```json
{
  "theme": "A Ponte",
  "topic": "Maria no Alcorão vs Maria na Bíblia",
  "verse": { "surah": 19, "ayah": 16, "text": "..." },
  "format": "carousel",
  "tone": "contemplativo",
  "target_degrau": 2,
  "calendar_context": "sexta-feira",
  "hashtags_seed": ["kalam", "ponte", "maria"]
}
```

### Lógica de Seleção
1. Verifica calendário islâmico → se evento especial, prioriza
2. Rotaciona pilar da semana (Mon=Ponte, Tue=Original, Wed=Sistema, Thu=Beleza, Fri=Fundador)
3. Seleciona versículo do data file correspondente
4. Escolhe formato baseado em dia (carrossel M/W/F, reel T/Th, story diário)
5. Ajusta tom pelo degrau-alvo da semana

---

## Fase 1: Prompt Engineering (Brand Guard)

### Flow
```
Brief → Brand Guard → Enriched Prompt
```

1. Carrega `studio_brand_rules` do partner Kalam
2. Carrega `studio_character_sheets` (Contemplativo ou Provocativo)
3. Injeta knowledge do Kalam (versículos, contexto, tom)
4. Gera prompt enriquecido com:
   - Estilo visual (cinematográfico, dark, gold)
   - Guardrails (sem mesquita hero, sem verde dominante)
   - Elementos obrigatórios (premium, dark mode, gold accents)
   - Referência ao versículo e contexto

### Componentes Hub Existentes
- `brand-guard.js` → `getActiveRules(partnerId)`, `injectBrandContext(prompt, rules, jobType)`
- `studio_character_sheets` → persona AI com estilo visual
- `studio_templates` → dimensões e specs por formato

---

## Fase 2: Geração (Providers)

### Roteamento por Formato

| Formato | Provider Primário | Fallback | Custo/unidade |
|---------|------------------|----------|---------------|
| Post estático (1080x1080) | Gemini Imagen 3 | Runware FLUX Schnell | $0.04 |
| Carrossel (1080x1080 x slides) | Gemini Imagen 3 (batch) | Runware FLUX | $0.04/slide |
| Reel vídeo 5-10s (1080x1920) | Kling v3 (img→video) | Gemini Veo 3.1 | $0.70-1.40 |
| Narração PT-BR | ElevenLabs multilingual v2 | MiniMax TTS | $0.30/1K chars |
| Narração árabe | ElevenLabs (voice árabe) | — | $0.30/1K chars |
| Música ambient | Suno chirp v4.5 | — | $0.10/song |
| Texto/caption | DeepSeek V3 | Gemini Flash 2.0 | $0.27/1M tokens |

### Providers Hub Disponíveis
- `providers/gemini-image.js` — Imagen 3 + Flash (imagem)
- `providers/gemini-video.js` — Veo 3.1 (vídeo)
- `providers/runware.js` — FLUX Schnell (imagem rápida)
- `providers/kling.js` — Kling v3 (vídeo premium)
- `providers/minimax.js` — MiniMax (vídeo + TTS)
- `providers/elevenlabs.js` — ElevenLabs (TTS premium)
- `providers/suno.js` — Suno (música)

### Custos Mensais (100 peças/mês)

| Item | Qtd | Custo |
|------|-----|-------|
| Imagens Gemini | 40 | $1.60 |
| Imagens Runware | 20 | $0.80 |
| Vídeos Kling | 15 | $10.50 |
| Vídeos MiniMax | 5 | $3.50 |
| Narração ElevenLabs | 20 clips | $6.00 |
| Captions DeepSeek | 100 | $0.50 |
| QA Gemini Vision | 90 | $3.60 |
| **TOTAL** | **100 peças** | **~$26.50** |

Buffer 50% = ~$40/mês.

---

## Fase 3: QA Automático

- **Gemini Vision** avalia cada peça com score 0-100
- Critérios: aderência à brand, qualidade visual, legibilidade, tom
- **≥70**: auto-approve → segue para post-processing
- **50-69**: review manual necessário
- **<50**: rejeitado, regenerar com prompt ajustado

---

## Fase 4: Review (CEO Approval)

- Hub Studio dashboard mostra peças pendentes
- CEO pode: aprovar, rejeitar, pedir ajustes, editar caption
- Peças aprovadas vão para post-processing

---

## Fase 5: Post-Processing

- Branding overlay (logo Kalam, watermark sutil)
- Resize para formato final (1080x1080, 1080x1920)
- Caption final com CTA + emojis + hashtags
- Hashtag mix: 5 fixos + 5 rotativos + 5 trending

---

## Fase 6: Agendamento

- Tabela `content_calendar` com slots (morning, afternoon, evening)
- AI sugere melhores horários baseado em engagement data
- Grid mensal no Hub Studio com drag-and-drop
- Status: draft → scheduled → publishing → published

---

## Fase 7: Publicação

- **Instagram Graph API v21.0**
- Flow: upload container → publish container
- Para Reels: poll status até FINISHED
- Retry: max 3x com backoff 5min
- Módulo: `modules/instagram.js`

---

## Fase 8: Analytics

- Sync engagement (impressions, reach, likes, comments, saves)
- Feedback loop: conteúdo com mais saves → gerar mais do mesmo tipo
- Weekly digest no Hub dashboard
