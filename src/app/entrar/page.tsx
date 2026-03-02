import { EntrarClient } from './EntrarClient'

export const metadata = {
  title: 'Entrar | Kalam',
  description: 'Entre na sua conta para salvar seu progresso.',
}

export default async function EntrarPage({
  searchParams,
}: {
  searchParams: Promise<{ redirect?: string }>
}) {
  const params = await searchParams
  return <EntrarClient redirect={params.redirect} />
}
