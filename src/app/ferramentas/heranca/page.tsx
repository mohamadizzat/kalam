'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Calculator, AlertCircle } from 'lucide-react'

const T = {
  bg: '#0D0B12', surface: '#161220', elevated: '#1C1828',
  gold: '#C9A84C', text: '#F0EBE2', secondary: '#B3B0A6',
  muted: '#7A7870', border: '#272230',
} as const

interface Herdeiros {
  conjuge: 'nenhum' | 'esposa' | 'marido'
  numFilhos: number
  numFilhas: number
  pai: boolean
  mae: boolean
  irmao: boolean
  irma: boolean
}

interface ResultadoHerdeiro {
  nome: string
  fracao: string
  valor: number
}

function calcularHeranca(total: number, h: Herdeiros): ResultadoHerdeiro[] {
  const resultado: ResultadoHerdeiro[] = []
  const temFilhos = h.numFilhos > 0 || h.numFilhas > 0

  let fixos = 0
  const fracoes: Array<{ nome: string; fracao: number; label: string }> = []

  // Cônjuge
  if (h.conjuge === 'esposa') {
    const f = temFilhos ? 1 / 8 : 1 / 4
    fracoes.push({ nome: 'Esposa', fracao: f, label: temFilhos ? '1/8' : '1/4' })
    fixos += f
  } else if (h.conjuge === 'marido') {
    const f = temFilhos ? 1 / 4 : 1 / 2
    fracoes.push({ nome: 'Marido', fracao: f, label: temFilhos ? '1/4' : '1/2' })
    fixos += f
  }

  // Pai
  if (h.pai) {
    if (temFilhos) {
      fracoes.push({ nome: 'Pai', fracao: 1 / 6, label: '1/6' })
      fixos += 1 / 6
    }
  }

  // Mãe
  if (h.mae) {
    if (temFilhos) {
      fracoes.push({ nome: 'Mãe', fracao: 1 / 6, label: '1/6' })
      fixos += 1 / 6
    } else {
      fracoes.push({ nome: 'Mãe', fracao: 1 / 3, label: '1/3' })
      fixos += 1 / 3
    }
  }

  // Calcular resto para filhos
  const restante = Math.max(0, 1 - fixos)

  if (temFilhos) {
    // Cada filho = 2 partes de filha
    const unidades = h.numFilhos * 2 + h.numFilhas
    if (unidades > 0) {
      const porUnidade = restante / unidades
      if (h.numFilhos > 0) {
        fracoes.push({ nome: `${h.numFilhos === 1 ? 'Filho' : `${h.numFilhos} Filhos`}`, fracao: porUnidade * 2 * h.numFilhos, label: `${h.numFilhos * 2}/${unidades} do restante` })
      }
      if (h.numFilhas > 0) {
        fracoes.push({ nome: `${h.numFilhas === 1 ? 'Filha' : `${h.numFilhas} Filhas`}`, fracao: porUnidade * h.numFilhas, label: `${h.numFilhas}/${unidades} do restante` })
      }
    }
  } else if (!temFilhos && restante > 0) {
    // Irmãos herdam quando não há filhos nem pai (simplificado)
    const numIrmaos = (h.irmao ? 2 : 0) + (h.irma ? 1 : 0)
    if (numIrmaos > 0 && !h.pai) {
      const porUnidade = restante / numIrmaos
      if (h.irmao) fracoes.push({ nome: 'Irmão', fracao: porUnidade * 2 / numIrmaos * numIrmaos, label: `${2}/${numIrmaos} do restante` })
      if (h.irma) fracoes.push({ nome: 'Irmã', fracao: porUnidade * 1 / numIrmaos * numIrmaos, label: `${1}/${numIrmaos} do restante` })
    }
  }

  for (const f of fracoes) {
    resultado.push({ nome: f.nome, fracao: f.label, valor: total * f.fracao })
  }

  return resultado
}

const inputNum = {
  width: 80, padding: '8px 12px', borderRadius: 8, boxSizing: 'border-box' as const,
  backgroundColor: '#1C1828', border: `1px solid ${T.border}`, color: T.text, fontSize: 14, outline: 'none', textAlign: 'center' as const,
}

export default function HerancaPage() {
  const [valor, setValor] = useState('')
  const [herdeiros, setHerdeiros] = useState<Herdeiros>({
    conjuge: 'nenhum', numFilhos: 0, numFilhas: 0, pai: false, mae: false, irmao: false, irma: false,
  })
  const [resultado, setResultado] = useState<ResultadoHerdeiro[] | null>(null)

  const calcular = () => {
    const total = parseFloat(valor.replace(/\./g, '').replace(',', '.'))
    if (!total || total <= 0) return
    setResultado(calcularHeranca(total, herdeiros))
  }

  const fmt = (n: number) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  const toggle = (field: keyof Herdeiros) =>
    setHerdeiros(h => ({ ...h, [field]: !h[field as 'pai'] }))

  return (
    <main style={{ minHeight: '100vh', backgroundColor: T.bg, color: T.text, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '32px 16px 64px' }}>
        <Link href="/ferramentas" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: T.muted, textDecoration: 'none', fontSize: 14, marginBottom: 32 }}>
          <ArrowLeft size={16} /> Ferramentas
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <Calculator size={28} color={T.gold} />
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 32, color: T.text, margin: 0 }}>Herança Islâmica</h1>
          </div>
          <p style={{ color: T.secondary, fontSize: 15, marginBottom: 32 }}>Calculadora de Fara'id — divisão islâmica de herança.</p>
        </motion.div>

        <div style={{ backgroundColor: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 24, marginBottom: 20 }}>
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: 'block', color: T.secondary, fontSize: 13, marginBottom: 8 }}>Valor Total da Herança (R$)</label>
            <input value={valor} onChange={e => setValor(e.target.value)} placeholder="Ex: 100000" type="number"
              style={{ width: '100%', padding: '12px 16px', borderRadius: 10, boxSizing: 'border-box', backgroundColor: T.elevated, border: `1px solid ${T.gold}44`, color: T.text, fontSize: 18, fontWeight: 700, outline: 'none' }} />
          </div>

          <div style={{ display: 'grid', gap: 18 }}>
            <div>
              <label style={{ display: 'block', color: T.secondary, fontSize: 13, marginBottom: 10 }}>Cônjuge</label>
              <div style={{ display: 'flex', gap: 8 }}>
                {(['nenhum', 'esposa', 'marido'] as const).map(opt => (
                  <button key={opt} onClick={() => setHerdeiros(h => ({ ...h, conjuge: opt }))} style={{
                    padding: '8px 18px', borderRadius: 8, cursor: 'pointer', fontSize: 13, transition: 'all 0.2s',
                    border: `1px solid ${herdeiros.conjuge === opt ? T.gold : T.border}`,
                    backgroundColor: herdeiros.conjuge === opt ? T.gold + '22' : T.elevated,
                    color: herdeiros.conjuge === opt ? T.gold : T.secondary,
                  }}>{opt === 'nenhum' ? 'Nenhum' : opt.charAt(0).toUpperCase() + opt.slice(1)}</button>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <label style={{ display: 'block', color: T.secondary, fontSize: 13, marginBottom: 8 }}>Número de Filhos</label>
                <input type="number" min="0" max="20" value={herdeiros.numFilhos}
                  onChange={e => setHerdeiros(h => ({ ...h, numFilhos: parseInt(e.target.value) || 0 }))} style={{ ...inputNum, width: '100%' }} />
              </div>
              <div>
                <label style={{ display: 'block', color: T.secondary, fontSize: 13, marginBottom: 8 }}>Número de Filhas</label>
                <input type="number" min="0" max="20" value={herdeiros.numFilhas}
                  onChange={e => setHerdeiros(h => ({ ...h, numFilhas: parseInt(e.target.value) || 0 }))} style={{ ...inputNum, width: '100%' }} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', color: T.secondary, fontSize: 13, marginBottom: 10 }}>Outros Herdeiros</label>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {(['pai', 'mae', 'irmao', 'irma'] as const).map(k => {
                  const labels = { pai: 'Pai', mae: 'Mãe', irmao: 'Irmão', irma: 'Irmã' }
                  return (
                    <button key={k} onClick={() => toggle(k)} style={{
                      padding: '8px 18px', borderRadius: 8, cursor: 'pointer', fontSize: 13, transition: 'all 0.2s',
                      border: `1px solid ${herdeiros[k] ? T.gold : T.border}`,
                      backgroundColor: herdeiros[k] ? T.gold + '22' : T.elevated,
                      color: herdeiros[k] ? T.gold : T.secondary,
                    }}>{labels[k]}</button>
                  )
                })}
              </div>
            </div>
          </div>

          <motion.button whileTap={{ scale: 0.97 }} onClick={calcular} style={{
            width: '100%', padding: '14px', borderRadius: 10, cursor: 'pointer', fontWeight: 700, fontSize: 16,
            backgroundColor: T.gold, border: 'none', color: '#0D0B12', marginTop: 24,
          }}>Calcular Herança</motion.button>
        </div>

        <AnimatePresence>
          {resultado && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <div style={{ backgroundColor: T.surface, border: `1px solid ${T.gold}44`, borderRadius: 14, padding: 24, marginBottom: 16 }}>
                <h3 style={{ color: T.gold, fontFamily: 'Playfair Display, serif', margin: '0 0 20px', fontSize: 20 }}>Resultado da Divisão</h3>
                {resultado.length === 0 ? (
                  <p style={{ color: T.muted }}>Nenhum herdeiro selecionado ou divisão inválida.</p>
                ) : (
                  <div style={{ display: 'grid', gap: 10 }}>
                    {resultado.map((r, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 16px', backgroundColor: T.elevated, borderRadius: 10 }}>
                        <div>
                          <div style={{ color: T.text, fontWeight: 600 }}>{r.nome}</div>
                          <div style={{ color: T.muted, fontSize: 12 }}>Fração: {r.fracao}</div>
                        </div>
                        <div style={{ color: T.gold, fontWeight: 800, fontSize: 16 }}>{fmt(r.valor)}</div>
                      </div>
                    ))}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 16px', backgroundColor: T.gold + '18', borderRadius: 10, border: `1px solid ${T.gold}44`, marginTop: 4 }}>
                      <span style={{ color: T.gold, fontWeight: 700 }}>Total Distribuído</span>
                      <span style={{ color: T.gold, fontWeight: 800, fontSize: 16 }}>{fmt(resultado.reduce((s, r) => s + r.valor, 0))}</span>
                    </div>
                  </div>
                )}
              </div>
              <div style={{ display: 'flex', gap: 12, padding: 16, backgroundColor: T.elevated, borderRadius: 12, border: `1px solid ${T.border}` }}>
                <AlertCircle size={18} color={T.gold} style={{ flexShrink: 0, marginTop: 2 }} />
                <p style={{ color: T.muted, fontSize: 13, margin: 0, lineHeight: 1.7 }}>
                  Esta calculadora aplica as regras básicas do Fara'id islâmico. Casos com múltiplos herdeiros, testamento (wasiyya), dívidas ou situações complexas requerem consulta a um sheikh ou especialista em fiqh.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
