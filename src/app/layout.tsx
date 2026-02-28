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
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'KALAM BRASIL — A Palavra. O Capítulo Final.',
  description: 'Descubra a história que ninguém te contou. Os mesmos profetas. A mesma mensagem. O capítulo final.',
  keywords: 'profetas, bíblia, alcorão, história, fé, espiritualidade, Islam',
  openGraph: {
    title: 'KALAM BRASIL — A Palavra. O Capítulo Final.',
    description: 'Tudo que você acredita é verdade. Mas falta o capítulo final.',
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
            <main>{children}</main>
            <Footer />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
