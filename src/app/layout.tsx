import type { Metadata, Viewport } from 'next'
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
import { Sidebar, SidebarProvider } from '@/components/layout/Sidebar'
import { ContentWrapper } from '@/components/layout/ContentWrapper'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { FloatingContinue } from '@/components/shared/FloatingContinue'
import { AtmosphericLayer } from '@/components/effects/AtmosphericLayer'
import { DiscoveryOrb } from '@/components/shared/DiscoveryOrb'
import { Analytics } from '@vercel/analytics/next'
import { AuthProvider } from '@/providers/auth-provider'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#0D0B12',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://kalambrasil.com'),
  title: 'KALAM — Deus. Todo dia.',
  description: 'Seu companheiro diário para se conectar com Deus. Versículos, trilhas de aprendizado, sabedoria dos profetas — sem ruído, sem culpa, com profundidade.',
  keywords: 'profetas, bíblia, alcorão, história, fé, espiritualidade, Islam, aya do dia, quran',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Kalam',
  },
  icons: {
    icon: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'KALAM — Deus. Todo dia.',
    description: 'Seu santuário digital de conexão com Deus.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Kalam',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KALAM — Deus. Todo dia.',
    description: 'Seu santuário digital de conexão com Deus.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" disableTransitionOnChange>
            <SidebarProvider>
              <LenisProvider>
                <AtmosphericLayer />
                <Sidebar />
                <ContentWrapper>
                  <Header />
                  <Breadcrumbs />
                  <main className="pb-20 md:pb-0">{children}</main>
                  <Footer />
                </ContentWrapper>
                <FloatingContinue />
                <DiscoveryOrb />
                <BottomNav />
              </LenisProvider>
            </SidebarProvider>
          </ThemeProvider>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
