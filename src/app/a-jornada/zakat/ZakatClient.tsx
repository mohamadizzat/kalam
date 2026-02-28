'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  Calculator,
  Coins,
  CreditCard,
  RotateCcw,
  Check,
  Info,
  History,
  Trash2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'
import Link from 'next/link'

// ─── Types ────────────────────────────────────────────────────────
interface AssetValues {
  cash: number
  savings: number
  gold: number
  silver: number
  investments: number
  inventory: number
}

interface ZakatCalculation {
  id: string
  date: string
  assets: AssetValues
  debts: number
  totalAssets: number
  netWealth: number
  nisab: number
  zakatDue: boolean
  zakatAmount: number
}

// ─── Constants ────────────────────────────────────────────────────
const STORAGE_KEY = 'kalam-zakat-calc'
const NISAB_VALUE = 45000 // ~85g of gold in BRL (approximate)

const ASSET_FIELDS: { key: keyof AssetValues; label: string; hint: string }[] = [
  { key: 'cash', label: 'Dinheiro em conta', hint: 'Conta corrente, carteira digital' },
  { key: 'savings', label: 'Poupanca', hint: 'Poupanca, CDB, renda fixa' },
  { key: 'gold', label: 'Ouro', hint: 'Valor atual do ouro que possui' },
  { key: 'silver', label: 'Prata', hint: 'Valor atual da prata que possui' },
  { key: 'investments', label: 'Investimentos', hint: 'Acoes, cripto, fundos' },
  { key: 'inventory', label: 'Mercadorias', hint: 'Estoque de negocio para revenda' },
]

const ZAKAT_RECIPIENTS = [
  { ar: 'Al-Fuqara', pt: 'Os pobres', desc: 'Quem nao tem o suficiente para suas necessidades basicas' },
  { ar: 'Al-Masakin', pt: 'Os necessitados', desc: 'Quem tem algo mas nao o suficiente' },
  { ar: 'Al-Amilin', pt: 'Coletores de Zakat', desc: 'Quem administra a coleta e distribuicao' },
  { ar: 'Al-Muallafah', pt: 'Novos muulmanos', desc: 'Recem-convertidos que precisam de apoio' },
  { ar: 'Ar-Riqab', pt: 'Libertar cativos', desc: 'Para libertar escravos e cativos' },
  { ar: 'Al-Gharimin', pt: 'Endividados', desc: 'Quem tem dividas que nao consegue pagar' },
  { ar: 'Fi Sabilillah', pt: 'No caminho de Allah', desc: 'Causas que beneficiam a comunidade' },
  { ar: 'Ibn as-Sabil', pt: 'Viajante necessitado', desc: 'Quem esta em viagem e ficou sem recursos' },
]

// ─── Helpers ──────────────────────────────────────────────────────
function getHistory(): ZakatCalculation[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveHistory(history: ZakatCalculation[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history))
  } catch { /* noop */ }
}

function formatCurrency(value: number): string {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

// ─── Styles ───────────────────────────────────────────────────────
const colors = {
  bg: '#0D0B12',
  surface: '#161220',
  gold: '#C9A84C',
  goldDim: 'rgba(201,168,76,0.08)',
  goldMid: 'rgba(201,168,76,0.15)',
  text: '#F0EBE2',
  secondary: '#B3B0A6',
  muted: '#7A7870',
  border: '#272230',
  green: '#4ADE80',
  greenDim: 'rgba(74,222,128,0.1)',
  red: '#F87171',
  redDim: 'rgba(248,113,113,0.1)',
}

// ─── Component ────────────────────────────────────────────────────
export default function ZakatClient() {
  const [step, setStep] = useState(1)
  const [assets, setAssets] = useState<AssetValues>({
    cash: 0, savings: 0, gold: 0, silver: 0, investments: 0, inventory: 0,
  })
  const [debts, setDebts] = useState(0)
  const [history, setHistory] = useState<ZakatCalculation[]>([])
  const [showHistory, setShowHistory] = useState(false)
  const [showRecipients, setShowRecipients] = useState(false)

  useEffect(() => {
    setHistory(getHistory())
  }, [])

  const totalAssets = Object.values(assets).reduce((sum, v) => sum + v, 0)
  const netWealth = Math.max(0, totalAssets - debts)
  const zakatDue = netWealth >= NISAB_VALUE
  const zakatAmount = zakatDue ? netWealth * 0.025 : 0

  const handleAssetChange = useCallback((key: keyof AssetValues, value: string) => {
    const num = parseFloat(value) || 0
    setAssets(prev => ({ ...prev, [key]: num }))
  }, [])

  const handleCalculate = useCallback(() => {
    const calc: ZakatCalculation = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      assets: { ...assets },
      debts,
      totalAssets,
      netWealth,
      nisab: NISAB_VALUE,
      zakatDue,
      zakatAmount,
    }
    const updated = [calc, ...history].slice(0, 20)
    setHistory(updated)
    saveHistory(updated)
    setStep(3)
  }, [assets, debts, totalAssets, netWealth, zakatDue, zakatAmount, history])

  const handleReset = useCallback(() => {
    setStep(1)
    setAssets({ cash: 0, savings: 0, gold: 0, silver: 0, investments: 0, inventory: 0 })
    setDebts(0)
    setShowRecipients(false)
  }, [])

  const handleDeleteHistory = useCallback((id: string) => {
    setHistory(prev => {
      const updated = prev.filter(h => h.id !== id)
      saveHistory(updated)
      return updated
    })
  }, [])

  const handleClearHistory = useCallback(() => {
    setHistory([])
    saveHistory([])
  }, [])

  // ── Render ──────────────────────────────────────────────────────
  return (
    <div style={{ minHeight: '100vh', background: colors.bg, paddingTop: 64 }}>
      <div style={{ maxWidth: 640, margin: '0 auto', padding: 'clamp(40px, 6vw, 80px) 24px 120px' }}>

        {/* Back button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/a-jornada"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              color: colors.muted,
              fontSize: 14,
              textDecoration: 'none',
              marginBottom: 32,
            }}
          >
            <ArrowLeft size={16} />
            A Jornada
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ textAlign: 'center', marginBottom: 40 }}
        >
          <div style={{
            width: 56,
            height: 56,
            borderRadius: 16,
            background: colors.goldDim,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
          }}>
            <Calculator size={28} style={{ color: colors.gold }} />
          </div>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            fontSize: 'clamp(24px, 5vw, 32px)',
            color: colors.text,
            marginBottom: 8,
            letterSpacing: '-0.02em',
          }}>
            Calculadora de Zakat
          </h1>
          <p style={{ fontSize: 14, color: colors.muted, maxWidth: 400, margin: '0 auto' }}>
            Calcule o valor do seu Zakat de forma simples e precisa
          </p>
        </motion.div>

        {/* Step indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            marginBottom: 32,
          }}
        >
          {[1, 2, 3].map((s) => (
            <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 13,
                fontWeight: 600,
                background: step >= s ? colors.goldDim : 'transparent',
                color: step >= s ? colors.gold : colors.muted,
                border: `1.5px solid ${step >= s ? colors.gold : colors.border}`,
                transition: 'all 0.3s ease',
              }}>
                {step > s ? <Check size={14} /> : s}
              </div>
              {s < 3 && (
                <div style={{
                  width: 40,
                  height: 1.5,
                  background: step > s ? colors.gold : colors.border,
                  borderRadius: 1,
                  transition: 'background 0.3s ease',
                }} />
              )}
            </div>
          ))}
        </motion.div>

        {/* Steps */}
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              {/* Step 1: Assets */}
              <div style={{
                background: colors.surface,
                border: `1px solid ${colors.border}`,
                borderRadius: 20,
                padding: '28px 24px',
                marginBottom: 16,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                  <div style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: colors.goldDim,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Coins size={20} style={{ color: colors.gold }} />
                  </div>
                  <div>
                    <h2 style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 18,
                      fontWeight: 600,
                      color: colors.text,
                    }}>
                      Seus Ativos
                    </h2>
                    <p style={{ fontSize: 13, color: colors.muted }}>
                      Informe o valor de cada categoria
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {ASSET_FIELDS.map((field) => (
                    <div key={field.key}>
                      <label style={{
                        display: 'block',
                        fontSize: 13,
                        fontWeight: 500,
                        color: colors.secondary,
                        marginBottom: 6,
                      }}>
                        {field.label}
                      </label>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        background: colors.bg,
                        border: `1px solid ${colors.border}`,
                        borderRadius: 12,
                        overflow: 'hidden',
                        transition: 'border-color 0.2s ease',
                      }}>
                        <span style={{
                          padding: '12px 14px',
                          fontSize: 14,
                          fontWeight: 600,
                          color: colors.muted,
                          borderRight: `1px solid ${colors.border}`,
                          background: 'rgba(255,255,255,0.02)',
                          userSelect: 'none',
                        }}>
                          R$
                        </span>
                        <input
                          type="number"
                          min="0"
                          step="0.01"
                          placeholder="0,00"
                          value={assets[field.key] || ''}
                          onChange={(e) => handleAssetChange(field.key, e.target.value)}
                          style={{
                            flex: 1,
                            padding: '12px 14px',
                            fontSize: 15,
                            color: colors.text,
                            background: 'transparent',
                            border: 'none',
                            outline: 'none',
                            fontVariantNumeric: 'tabular-nums',
                          }}
                        />
                      </div>
                      <p style={{ fontSize: 11, color: colors.muted, marginTop: 4, paddingLeft: 2 }}>
                        {field.hint}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Running total */}
              <div style={{
                background: colors.surface,
                border: `1px solid ${colors.border}`,
                borderRadius: 14,
                padding: '16px 20px',
                marginBottom: 20,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span style={{ fontSize: 14, color: colors.muted }}>Total de ativos</span>
                <span style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: colors.gold,
                  fontVariantNumeric: 'tabular-nums',
                }}>
                  {formatCurrency(totalAssets)}
                </span>
              </div>

              <button
                onClick={() => setStep(2)}
                style={{
                  width: '100%',
                  padding: '16px 24px',
                  borderRadius: 14,
                  border: 'none',
                  background: colors.gold,
                  color: colors.bg,
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                }}
              >
                Proximo
                <ArrowRight size={18} />
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              {/* Step 2: Debts */}
              <div style={{
                background: colors.surface,
                border: `1px solid ${colors.border}`,
                borderRadius: 20,
                padding: '28px 24px',
                marginBottom: 16,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                  <div style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: colors.redDim,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <CreditCard size={20} style={{ color: colors.red }} />
                  </div>
                  <div>
                    <h2 style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 18,
                      fontWeight: 600,
                      color: colors.text,
                    }}>
                      Suas Dividas
                    </h2>
                    <p style={{ fontSize: 13, color: colors.muted }}>
                      Dividas que voce precisa pagar
                    </p>
                  </div>
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: 13,
                    fontWeight: 500,
                    color: colors.secondary,
                    marginBottom: 6,
                  }}>
                    Dividas a pagar
                  </label>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: colors.bg,
                    border: `1px solid ${colors.border}`,
                    borderRadius: 12,
                    overflow: 'hidden',
                  }}>
                    <span style={{
                      padding: '12px 14px',
                      fontSize: 14,
                      fontWeight: 600,
                      color: colors.muted,
                      borderRight: `1px solid ${colors.border}`,
                      background: 'rgba(255,255,255,0.02)',
                      userSelect: 'none',
                    }}>
                      R$
                    </span>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="0,00"
                      value={debts || ''}
                      onChange={(e) => setDebts(parseFloat(e.target.value) || 0)}
                      style={{
                        flex: 1,
                        padding: '12px 14px',
                        fontSize: 15,
                        color: colors.text,
                        background: 'transparent',
                        border: 'none',
                        outline: 'none',
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    />
                  </div>
                  <p style={{ fontSize: 11, color: colors.muted, marginTop: 4, paddingLeft: 2 }}>
                    Emprestimos, financiamentos, dividas pendentes
                  </p>
                </div>
              </div>

              {/* Summary before calculation */}
              <div style={{
                background: colors.surface,
                border: `1px solid ${colors.border}`,
                borderRadius: 14,
                padding: '16px 20px',
                marginBottom: 20,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontSize: 13, color: colors.muted }}>Total de ativos</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: colors.text, fontVariantNumeric: 'tabular-nums' }}>
                    {formatCurrency(totalAssets)}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontSize: 13, color: colors.muted }}>Total de dividas</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: colors.red, fontVariantNumeric: 'tabular-nums' }}>
                    - {formatCurrency(debts)}
                  </span>
                </div>
                <div style={{
                  borderTop: `1px solid ${colors.border}`,
                  paddingTop: 8,
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: colors.secondary }}>Riqueza liquida</span>
                  <span style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: colors.gold,
                    fontVariantNumeric: 'tabular-nums',
                  }}>
                    {formatCurrency(netWealth)}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 12 }}>
                <button
                  onClick={() => setStep(1)}
                  style={{
                    flex: 1,
                    padding: '16px 24px',
                    borderRadius: 14,
                    border: `1px solid ${colors.border}`,
                    background: 'transparent',
                    color: colors.secondary,
                    fontSize: 15,
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                  }}
                >
                  <ArrowLeft size={18} />
                  Voltar
                </button>
                <button
                  onClick={handleCalculate}
                  style={{
                    flex: 2,
                    padding: '16px 24px',
                    borderRadius: 14,
                    border: 'none',
                    background: colors.gold,
                    color: colors.bg,
                    fontSize: 15,
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                  }}
                >
                  <Calculator size={18} />
                  Calcular Zakat
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {/* Step 3: Results */}
              {/* Main result card */}
              <div style={{
                background: zakatDue
                  ? 'linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 100%)'
                  : colors.surface,
                border: `1px solid ${zakatDue ? 'rgba(201,168,76,0.3)' : colors.border}`,
                borderRadius: 24,
                padding: '32px 24px',
                textAlign: 'center',
                marginBottom: 16,
              }}>
                <div style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  background: zakatDue ? colors.goldDim : colors.greenDim,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                }}>
                  {zakatDue ? (
                    <Coins size={28} style={{ color: colors.gold }} />
                  ) : (
                    <Check size={28} style={{ color: colors.green }} />
                  )}
                </div>

                {zakatDue ? (
                  <>
                    <p style={{ fontSize: 14, color: colors.secondary, marginBottom: 4 }}>
                      Seu Zakat a pagar
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(28px, 6vw, 40px)',
                      fontWeight: 700,
                      color: colors.gold,
                      marginBottom: 8,
                      fontVariantNumeric: 'tabular-nums',
                      letterSpacing: '-0.02em',
                    }}>
                      {formatCurrency(zakatAmount)}
                    </p>
                    <p style={{ fontSize: 13, color: colors.muted }}>
                      2,5% da sua riqueza liquida zakatavel
                    </p>
                  </>
                ) : (
                  <>
                    <p style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 20,
                      fontWeight: 600,
                      color: colors.green,
                      marginBottom: 8,
                    }}>
                      Zakat nao e obrigatorio
                    </p>
                    <p style={{ fontSize: 13, color: colors.muted, maxWidth: 320, margin: '0 auto' }}>
                      Sua riqueza liquida esta abaixo do Nisab. O Zakat so e obrigatorio quando seus bens ultrapassam esse limite.
                    </p>
                  </>
                )}
              </div>

              {/* Breakdown */}
              <div style={{
                background: colors.surface,
                border: `1px solid ${colors.border}`,
                borderRadius: 16,
                padding: '20px 20px',
                marginBottom: 16,
              }}>
                <h3 style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: colors.secondary,
                  marginBottom: 16,
                }}>
                  Detalhamento
                </h3>

                {ASSET_FIELDS.filter(f => assets[f.key] > 0).map((field) => (
                  <div key={field.key} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '8px 0',
                    borderBottom: `1px solid ${colors.border}`,
                  }}>
                    <span style={{ fontSize: 13, color: colors.muted }}>{field.label}</span>
                    <span style={{ fontSize: 13, fontWeight: 500, color: colors.text, fontVariantNumeric: 'tabular-nums' }}>
                      {formatCurrency(assets[field.key])}
                    </span>
                  </div>
                ))}

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '8px 0',
                  borderBottom: `1px solid ${colors.border}`,
                }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: colors.secondary }}>Total de ativos</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: colors.text, fontVariantNumeric: 'tabular-nums' }}>
                    {formatCurrency(totalAssets)}
                  </span>
                </div>

                {debts > 0 && (
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '8px 0',
                    borderBottom: `1px solid ${colors.border}`,
                  }}>
                    <span style={{ fontSize: 13, color: colors.red }}>Dividas</span>
                    <span style={{ fontSize: 13, fontWeight: 500, color: colors.red, fontVariantNumeric: 'tabular-nums' }}>
                      - {formatCurrency(debts)}
                    </span>
                  </div>
                )}

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '10px 0 4px',
                }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: colors.text }}>Riqueza liquida</span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: colors.gold, fontVariantNumeric: 'tabular-nums' }}>
                    {formatCurrency(netWealth)}
                  </span>
                </div>
              </div>

              {/* Nisab info */}
              <div style={{
                background: colors.goldDim,
                border: `1px solid ${colors.goldMid}`,
                borderRadius: 14,
                padding: '16px 18px',
                marginBottom: 16,
                display: 'flex',
                gap: 12,
                alignItems: 'flex-start',
              }}>
                <Info size={18} style={{ color: colors.gold, flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: colors.gold, marginBottom: 4 }}>
                    Nisab utilizado: {formatCurrency(NISAB_VALUE)}
                  </p>
                  <p style={{ fontSize: 12, color: colors.muted, lineHeight: '1.5' }}>
                    O Nisab e o valor de 85 gramas de ouro. O valor acima e uma estimativa.
                    Consulte o valor atual do ouro para um calculo mais preciso.
                  </p>
                </div>
              </div>

              {/* Zakat recipients */}
              <div style={{
                background: colors.surface,
                border: `1px solid ${colors.border}`,
                borderRadius: 16,
                marginBottom: 20,
                overflow: 'hidden',
              }}>
                <button
                  onClick={() => setShowRecipients(!showRecipients)}
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    background: 'transparent',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    color: colors.secondary,
                  }}
                >
                  <span style={{ fontSize: 14, fontWeight: 600 }}>
                    Quem recebe o Zakat? (8 categorias)
                  </span>
                  {showRecipients ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>

                <AnimatePresence>
                  {showRecipients && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ padding: '0 20px 20px' }}>
                        <p style={{
                          fontSize: 12,
                          color: colors.muted,
                          marginBottom: 16,
                          lineHeight: '1.6',
                          borderTop: `1px solid ${colors.border}`,
                          paddingTop: 16,
                        }}>
                          Allah definiu no Quran (Surah At-Tawbah, 9:60) oito categorias de pessoas
                          que podem receber o Zakat:
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                          {ZAKAT_RECIPIENTS.map((r, i) => (
                            <div key={i} style={{
                              display: 'flex',
                              gap: 12,
                              alignItems: 'flex-start',
                            }}>
                              <div style={{
                                width: 24,
                                height: 24,
                                borderRadius: 6,
                                background: colors.goldDim,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                marginTop: 1,
                              }}>
                                <span style={{ fontSize: 11, fontWeight: 700, color: colors.gold }}>
                                  {i + 1}
                                </span>
                              </div>
                              <div>
                                <p style={{ fontSize: 13, fontWeight: 600, color: colors.text }}>
                                  {r.pt}
                                  <span style={{ fontWeight: 400, color: colors.muted, marginLeft: 6, fontSize: 11 }}>
                                    ({r.ar})
                                  </span>
                                </p>
                                <p style={{ fontSize: 12, color: colors.muted, marginTop: 2 }}>
                                  {r.desc}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Action buttons */}
              <button
                onClick={handleReset}
                style={{
                  width: '100%',
                  padding: '16px 24px',
                  borderRadius: 14,
                  border: 'none',
                  background: colors.gold,
                  color: colors.bg,
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  marginBottom: 12,
                }}
              >
                <RotateCcw size={18} />
                Recalcular
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* History section */}
        {history.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ marginTop: 32 }}
          >
            <button
              onClick={() => setShowHistory(!showHistory)}
              style={{
                width: '100%',
                padding: '16px 20px',
                borderRadius: 16,
                background: colors.surface,
                border: `1px solid ${colors.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                color: colors.secondary,
                marginBottom: showHistory ? 12 : 0,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <History size={18} style={{ color: colors.gold }} />
                <span style={{ fontSize: 14, fontWeight: 600 }}>
                  Historico de calculos ({history.length})
                </span>
              </div>
              {showHistory ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            <AnimatePresence>
              {showHistory && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {history.map((calc) => (
                      <div
                        key={calc.id}
                        style={{
                          background: colors.surface,
                          border: `1px solid ${colors.border}`,
                          borderRadius: 14,
                          padding: '16px 18px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <div>
                          <p style={{ fontSize: 12, color: colors.muted, marginBottom: 4 }}>
                            {formatDate(calc.date)}
                          </p>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <span style={{
                              fontSize: 14,
                              fontWeight: 600,
                              color: colors.text,
                              fontVariantNumeric: 'tabular-nums',
                            }}>
                              Riqueza: {formatCurrency(calc.netWealth)}
                            </span>
                            {calc.zakatDue && (
                              <span style={{
                                fontSize: 12,
                                fontWeight: 600,
                                color: colors.gold,
                                background: colors.goldDim,
                                padding: '2px 8px',
                                borderRadius: 6,
                                fontVariantNumeric: 'tabular-nums',
                              }}>
                                Zakat: {formatCurrency(calc.zakatAmount)}
                              </span>
                            )}
                            {!calc.zakatDue && (
                              <span style={{
                                fontSize: 12,
                                fontWeight: 500,
                                color: colors.green,
                                background: colors.greenDim,
                                padding: '2px 8px',
                                borderRadius: 6,
                              }}>
                                Isento
                              </span>
                            )}
                          </div>
                        </div>
                        <button
                          onClick={() => handleDeleteHistory(calc.id)}
                          style={{
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 6,
                            color: colors.muted,
                            borderRadius: 8,
                          }}
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    ))}

                    <button
                      onClick={handleClearHistory}
                      style={{
                        padding: '10px 16px',
                        borderRadius: 10,
                        border: `1px solid ${colors.border}`,
                        background: 'transparent',
                        color: colors.muted,
                        fontSize: 13,
                        cursor: 'pointer',
                        marginTop: 4,
                      }}
                    >
                      Limpar historico
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

      </div>
    </div>
  )
}
