import { MetadataRoute } from 'next'
import { SEO_PAGES } from '@/lib/data/seo-pages'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kalambrasil.com'
  const now = new Date()

  // SEO pages (dynamic)
  const seoPages: MetadataRoute.Sitemap = SEO_PAGES.map((page) => ({
    url: `${baseUrl}/aprender/${page.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    // Home
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },

    // Main sections
    {
      url: `${baseUrl}/sobre`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mapa`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/comecar`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/aya-do-dia`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/a-mensagem`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/biblioteca`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/estudos`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/o-sistema`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/configuracoes`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // A Palavra section
    {
      url: `${baseUrl}/a-palavra`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/a-palavra/hadiths`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/a-palavra/recitacao`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/a-palavra/favoritos`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/a-palavra/busca`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/a-palavra/parabolas`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/a-palavra/hifz`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },

    // A Presenca section
    {
      url: `${baseUrl}/a-presenca`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/a-presenca/99-nomes`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/a-presenca/dhikr`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/a-presenca/duas`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/a-presenca/salah`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/a-presenca/flashcards`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/a-presenca/contemplacao`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/a-presenca/arabe`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },

    // A Jornada section
    {
      url: `${baseUrl}/a-jornada`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/a-jornada/mulheres`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/a-jornada/desafios`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/a-jornada/historia`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/a-jornada/seerah`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/a-jornada/companheiros`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/a-jornada/financas`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/a-jornada/zakat`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/a-jornada/ramadan`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/a-jornada/plano-diario`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.6,
    },

    // A Alma section
    {
      url: `${baseUrl}/a-alma`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/a-alma/journal`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/a-alma/progresso`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/a-alma/rotina`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/a-alma/painel`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/a-alma/saude-mental`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },

    // Standalone sections
    {
      url: `${baseUrl}/os-profetas`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/trilhas`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Kids section
    {
      url: `${baseUrl}/kids`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kids/historias`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/kids/pilares-do-islam`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/kids/pilares-da-fe`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/kids/quran-kids`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/kids/dua-do-dia`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/kids/bons-modos`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/kids/quiz`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/kids/atividades`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/kids/calendario`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/kids/herois`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/kids/meu-progresso`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.6,
    },

    // Ferramentas
    {
      url: `${baseUrl}/ferramentas`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Perguntas
    {
      url: `${baseUrl}/perguntas`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Comprovacoes
    {
      url: `${baseUrl}/comprovacoes`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Aprender index
    {
      url: `${baseUrl}/aprender`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Santuario (Quran Study)
    {
      url: `${baseUrl}/a-palavra/santuario`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    // Quran Progress
    {
      url: `${baseUrl}/a-palavra/progresso`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 0.6,
    },
    // Habitos
    {
      url: `${baseUrl}/a-alma/habitos`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
    // Mood
    {
      url: `${baseUrl}/a-alma/como-voce-esta`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 0.6,
    },
    // Arabe do Quran
    {
      url: `${baseUrl}/a-presenca/arabe-quran`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    // Sleep Stories
    {
      url: `${baseUrl}/contemplativo/sleep`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },

    // Aprender SEO pages (15 pages)
    ...seoPages,
  ]
}
