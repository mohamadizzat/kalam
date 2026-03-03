import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Playlist de Nasheeds — KALAM',
  description: '20 nasheeds organizados por tema. Sami Yusuf, Maher Zain, Ahmed Bukhatir e mais.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
