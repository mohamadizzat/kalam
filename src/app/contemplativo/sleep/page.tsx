import type { Metadata } from 'next'
import { SleepStoriesClient } from './SleepStoriesClient'

export const metadata: Metadata = {
  title: 'Sleep Stories | KALAM',
  description: 'Historias dos profetas para dormir com som ambiente e texto imersivo.',
}

export default function SleepStoriesPage() {
  return <SleepStoriesClient />
}
