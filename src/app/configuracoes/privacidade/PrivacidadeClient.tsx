'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const sections = [
  {
    title: 'Resumo',
    content:
      'O Kalam e um aplicativo gratuito de educacao islamica. Nao coletamos nenhum dado pessoal. Todos os seus dados ficam no seu dispositivo. Nao temos servidor, nao temos contas de usuario, nao temos rastreamento. Sua privacidade e absoluta.',
  },
  {
    title: '1. Dados que coletamos',
    content:
      'Nenhum. O Kalam nao coleta, armazena ou transmite nenhum dado pessoal. Nao pedimos nome, email, telefone ou qualquer informacao pessoal. Nao existe cadastro ou login.',
  },
  {
    title: '2. Armazenamento local (localStorage)',
    content:
      'O Kalam utiliza o localStorage do seu navegador para salvar suas preferencias e progresso — como tamanho de fonte, suratas lidas, favoritos, streak e journal. Esses dados ficam exclusivamente no seu dispositivo e nunca sao enviados para nenhum servidor. Voce pode apagar todos os dados a qualquer momento em Configuracoes > Resetar progresso.',
  },
  {
    title: '3. Cookies',
    content:
      'O Kalam nao utiliza cookies de rastreamento, marketing ou analytics. Apenas cookies tecnicos essenciais do navegador podem ser utilizados para o funcionamento basico do site.',
  },
  {
    title: '4. Rastreamento e analytics',
    content:
      'Nao utilizamos Google Analytics, Facebook Pixel, ou qualquer ferramenta de rastreamento de terceiros. Nao monitoramos seu comportamento, nao criamos perfis de usuario e nao vendemos dados — porque nao temos dados para vender.',
  },
  {
    title: '5. Compartilhamento de dados',
    content:
      'Nao compartilhamos dados com terceiros porque nao coletamos dados. Simples assim.',
  },
  {
    title: '6. Servicos de terceiros',
    content:
      'O Kalam pode carregar fontes do Google Fonts para exibicao de texto arabe e serif. Isso e uma requisicao padrao do navegador e nao envolve coleta de dados pessoais. Nenhum outro servico de terceiros e utilizado.',
  },
  {
    title: '7. Menores de idade',
    content:
      'Como nao coletamos nenhum dado pessoal, o Kalam pode ser utilizado por pessoas de qualquer idade sem preocupacoes com privacidade.',
  },
  {
    title: '8. Alteracoes nesta politica',
    content:
      'Se esta politica for atualizada, a nova versao estara disponivel nesta pagina. Como nao temos seu contato (porque nao coletamos dados), recomendamos verificar periodicamente.',
  },
  {
    title: '9. Contato',
    content:
      'Se tiver duvidas sobre privacidade, entre em contato pelo email kalam@mensagem-unica.com.',
  },
]

export function PrivacidadeClient() {
  return (
    <main style={{ background: '#0D0B12', minHeight: '100vh' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '48px 24px 100px' }}>

        {/* Back */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ marginBottom: '32px' }}
        >
          <Link
            href="/configuracoes"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#7A7870',
              textDecoration: 'none',
              fontSize: '14px',
            }}
          >
            <ArrowLeft size={16} />
            Configuracoes
          </Link>
        </motion.div>

        {/* Title */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ marginBottom: '40px' }}
        >
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 700,
              fontSize: 'clamp(28px, 5vw, 36px)',
              color: '#F0EBE2',
              marginBottom: '8px',
              letterSpacing: '-0.02em',
            }}
          >
            Politica de Privacidade
          </h1>
          <p style={{ fontSize: '14px', color: '#7A7870' }}>
            Ultima atualizacao: Fevereiro 2026
          </p>
        </motion.div>

        {/* Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 + i * 0.05 }}
              style={{
                padding: '24px',
                borderRadius: '16px',
                background: '#161220',
                border: '1px solid #272230',
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '18px',
                  fontWeight: 600,
                  color: i === 0 ? '#C9A84C' : '#F0EBE2',
                  marginBottom: '12px',
                }}
              >
                {section.title}
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  color: '#B3B0A6',
                  lineHeight: 1.75,
                }}
              >
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: '40px', textAlign: 'center' }}
        >
          <p style={{ fontSize: '12px', color: '#3A3545' }}>
            Sua privacidade e sagrada para nos.
          </p>
        </motion.div>

      </div>
    </main>
  )
}
