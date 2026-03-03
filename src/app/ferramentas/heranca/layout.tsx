import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calculadora de Herança Islâmica — KALAM',
  description: "Calcule a partilha de herança segundo as regras islâmicas do Fara'id. Guia passo a passo.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
