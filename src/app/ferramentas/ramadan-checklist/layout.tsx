import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Checklist de Ramadan — KALAM',
  description: '23 práticas diárias e semanais para um Ramadan completo. Progresso salvo automaticamente.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
