import ZakatClient from './ZakatClient'

export const metadata = {
  title: 'Calculadora de Zakat — KALAM',
  description: 'Calcule o valor do seu Zakat de forma simples e precisa. Descubra se voce atingiu o Nisab e quanto deve pagar.',
}

export default function ZakatPage() {
  return <ZakatClient />
}
