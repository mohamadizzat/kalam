import { RAMADAN_PHASES } from '@/lib/data/ramadan'
import type { RamadanDay } from '@/lib/data/ramadan'

// ── Phase color helpers ──────────────────────────────────────────────────────

export function getPhaseColor(phase: RamadanDay['phase']): string {
  return RAMADAN_PHASES.find(p => p.key === phase)?.color ?? '#C9A84C'
}

export function getPhaseRgb(phase: RamadanDay['phase']): string {
  const map: Record<string, string> = {
    mercy: '74,144,217',
    forgiveness: '201,168,76',
    freedom: '217,74,74',
  }
  return map[phase] ?? '201,168,76'
}

export function getPhaseGradient(phase: RamadanDay['phase']): string {
  const rgb = getPhaseRgb(phase)
  return `radial-gradient(ellipse at 50% 0%, rgba(${rgb},0.12) 0%, transparent 60%)`
}

export function getPhaseLabel(phase: RamadanDay['phase']): string {
  const map: Record<string, string> = {
    mercy: 'Misericordia',
    forgiveness: 'Perdao',
    freedom: 'Libertacao do Fogo',
  }
  return map[phase] ?? ''
}

export function getPhaseArabic(phase: RamadanDay['phase']): string {
  return RAMADAN_PHASES.find(p => p.key === phase)?.arabic ?? ''
}
