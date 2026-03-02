import type { Metadata } from 'next'
import AprenderIndexClient from './AprenderIndexClient'

export const metadata: Metadata = {
  title: 'Aprender sobre o Islã | KALAM',
  description: 'Explore tópicos fundamentais sobre o Islã: o que é, os pilares, oração, Alcorão, e respostas para perguntas difíceis.',
}

export default function AprenderPage() {
  return <AprenderIndexClient />
}
