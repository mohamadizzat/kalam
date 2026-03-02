import type { Metadata } from 'next'
import QuizClient from './QuizClient'

export const metadata: Metadata = {
  title: 'Quiz Islâmico | KALAM',
  description: 'Teste seus conhecimentos sobre o Alcorão, os Profetas e o Islã com perguntas progressivas.',
}

export default function QuizPage() {
  return <QuizClient />
}
