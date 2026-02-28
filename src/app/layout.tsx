import type { Metadata } from 'next'
import '@fontsource-variable/inter'
import '@fontsource/playfair-display/400.css'
import '@fontsource/playfair-display/600.css'
import '@fontsource/playfair-display/700.css'
import '@fontsource/amiri/400.css'
import '@fontsource/amiri/700.css'
import '@fontsource/noto-naskh-arabic/400.css'
import '@fontsource/noto-naskh-arabic/600.css'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { LenisProvider } from '@/providers/lenis-provider'
import { Header } from '@/components/layout/Header'
import { BottomNav } from '@/components/layout/BottomNav'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'KALAM — Deus. Todo dia.',
  description: 'Seu companheiro diário para se conectar com Deus. Versículos, trilhas de aprendizado, sabedoria dos profetas — sem ruído, sem culpa, com profundidade.',
  keywords: 'profetas, bíblia, alcorão, história, fé, espiritualidade, Islam, aya do dia, quran',
  openGraph: {
    title: 'KALAM — Deus. Todo dia.',
    description: 'Seu companheiro diário para se conectar com Deus.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" disableTransitionOnChange>
          <LenisProvider>
            <Header />
            <main className="pb-20 md:pb-0">{children}</main>
            <Footer />
            <BottomNav />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
