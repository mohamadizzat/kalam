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
      'O Kalam e um aplicativo gratuito de educacao islamica. Voce pode usar livremente, sem cadastro e sem custo. O conteudo e educacional — nao constitui fatwa ou parecer religioso oficial. Ao usar o Kalam, voce concorda com estes termos.',
  },
  {
    title: '1. Aceitacao dos termos',
    content:
      'Ao acessar e utilizar o Kalam, voce concorda com estes Termos de Uso. Se nao concordar com algum ponto, recomendamos que nao utilize o aplicativo.',
  },
  {
    title: '2. Descricao do servico',
    content:
      'O Kalam e uma plataforma gratuita de conteudo educacional sobre o Islam, incluindo o texto do Alcorao em arabe e portugues, hadiths, historias dos profetas, estudos tematicos, dhikr, duas e ferramentas de aprendizado. O servico e oferecido gratuitamente, sem necessidade de registro ou criacao de conta.',
  },
  {
    title: '3. Natureza do conteudo',
    content:
      'Todo o conteudo do Kalam e de carater educacional e informativo. O Kalam NAO emite fatwas (pareceres religiosos oficiais), NAO substitui a orientacao de um scholar ou imam qualificado, e NAO representa nenhuma mesquita, organizacao ou entidade religiosa especifica. Para questoes religiosas pessoais, consulte um estudioso qualificado.',
  },
  {
    title: '4. Fontes e creditos',
    content:
      'O texto do Alcorao e obtido de fontes academicas reconhecidas, incluindo a API do Quran.com (tanzil.net) e a traducao do King Fahd Complex para portugues. Recitacoes sao de Mishary Rashid Alafasy. Hadiths sao selecoes de colecoes autenticadas (Sahih Bukhari e Muslim). Creditamos todas as fontes e respeitamos os direitos autorais aplicaveis.',
  },
  {
    title: '5. Uso permitido',
    content:
      'Voce pode usar o Kalam para estudo pessoal, reflexao, aprendizado e compartilhamento educacional. O uso e livre e gratuito para fins nao comerciais. E permitido compartilhar trechos e capturas de tela com credito ao Kalam.',
  },
  {
    title: '6. Uso nao permitido',
    content:
      'E proibido utilizar o conteudo do Kalam para fins comerciais sem autorizacao previa, modificar ou distorcer o texto do Alcorao ou hadiths, utilizar o conteudo para promover odio, violencia ou discriminacao, ou fazer engenharia reversa do aplicativo para fins maliciosos.',
  },
  {
    title: '7. Dados e privacidade',
    content:
      'O Kalam nao coleta dados pessoais. Todos os dados de progresso sao armazenados localmente no seu dispositivo via localStorage. Para mais detalhes, consulte nossa Politica de Privacidade.',
  },
  {
    title: '8. Disponibilidade',
    content:
      'O Kalam e fornecido "como esta" (as is), sem garantias de disponibilidade ininterrupta. Nos esforcaremos para manter o servico disponivel, mas nao garantimos funcionamento 24/7. Reservamo-nos o direito de modificar, suspender ou descontinuar qualquer parte do servico a qualquer momento.',
  },
  {
    title: '9. Limitacao de responsabilidade',
    content:
      'O Kalam nao se responsabiliza por decisoes pessoais, religiosas ou de qualquer natureza tomadas com base no conteudo apresentado. O conteudo e oferecido para fins educacionais e a interpretacao e aplicacao sao de responsabilidade exclusiva do usuario.',
  },
  {
    title: '10. Alteracoes nos termos',
    content:
      'Estes termos podem ser atualizados a qualquer momento. A versao mais recente estara sempre disponivel nesta pagina. O uso continuado do Kalam apos alteracoes constitui aceitacao dos novos termos.',
  },
  {
    title: '11. Contato',
    content:
      'Para duvidas, sugestoes ou questoes relacionadas a estes termos, entre em contato pelo email kalam@mensagem-unica.com.',
  },
]

export function TermosClient() {
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
            Termos de Uso
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
            Conhecimento livre. Responsabilidade compartilhada.
          </p>
        </motion.div>

      </div>
    </main>
  )
}
