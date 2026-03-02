import type { Metadata } from 'next'
import { StoryGallery } from '@/components/stories/StoryGallery'

export const metadata: Metadata = {
  title: 'Conteúdo para Stories | KALAM',
  description: 'Cards prontos para download e compartilhamento — versos, fatos, hadiths e mais.',
}

export default function ConteudoPage() {
  return <StoryGallery />
}
