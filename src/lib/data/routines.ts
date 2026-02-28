export type RoutineItem = {
  id: string
  label: string
  arabic?: string
  description: string
  timeEstimate: string
}

export const morningRoutine: RoutineItem[] = [
  {
    id: 'wake-dua',
    label: 'Dua ao acordar',
    arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
    description: 'Louvor a Deus que nos deu vida apos a morte, e a Ele e o retorno.',
    timeEstimate: '30s',
  },
  {
    id: 'wudu',
    label: 'Wudu (Ablucao)',
    description: 'Lavar-se com intencao e presenca. O ritual de purificacao.',
    timeEstimate: '3 min',
  },
  {
    id: 'fajr',
    label: 'Salat al-Fajr',
    arabic: 'صَلَاةُ الْفَجْرِ',
    description: 'A oracao do amanhecer. 2 ciclos. O encontro com Deus antes do mundo acordar.',
    timeEstimate: '5 min',
  },
  {
    id: 'adhkar',
    label: 'Adhkar da manha',
    description: 'Suplicas de protecao e gratidao para o dia.',
    timeEstimate: '5 min',
  },
  {
    id: 'quran',
    label: 'Leitura do Alcorao',
    description: 'Mesmo que 1 pagina. A Palavra antes do feed.',
    timeEstimate: '5 min',
  },
  {
    id: 'gratitude',
    label: 'Gratidao',
    description: 'Cite 3 coisas pelas quais e grato. Escreva ou pense.',
    timeEstimate: '2 min',
  },
  {
    id: 'intention',
    label: 'Intencao do dia',
    description: 'O que voce vai fazer HOJE que importa? Uma coisa.',
    timeEstimate: '1 min',
  },
]

export const eveningRoutine: RoutineItem[] = [
  {
    id: 'reflection',
    label: 'Reflexao do dia',
    description: 'O que fiz bem? O que posso melhorar? O que aprendi?',
    timeEstimate: '3 min',
  },
  {
    id: 'adhkar-night',
    label: 'Adhkar da noite',
    description: 'Suplicas de protecao para o sono.',
    timeEstimate: '5 min',
  },
  {
    id: 'isha',
    label: 'Salat al-Isha',
    arabic: 'صَلَاةُ الْعِشَاءِ',
    description: 'A ultima oracao do dia. Entrega.',
    timeEstimate: '5 min',
  },
  {
    id: 'witr',
    label: 'Salat al-Witr',
    arabic: 'صَلَاةُ الْوِتْرِ',
    description: 'Oracao impar. O selo do dia.',
    timeEstimate: '3 min',
  },
  {
    id: 'istighfar',
    label: 'Istighfar (Perdao)',
    arabic: 'أَسْتَغْفِرُ اللَّهَ',
    description: 'Pedir perdao 3 vezes. Soltar o peso do dia.',
    timeEstimate: '1 min',
  },
  {
    id: 'quran-night',
    label: 'Surah Al-Mulk',
    description: 'Ler Surah Al-Mulk antes de dormir. Protecao.',
    timeEstimate: '5 min',
  },
  {
    id: 'sleep-dua',
    label: 'Dua antes de dormir',
    arabic: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
    description: 'Em Teu nome, o Deus, eu morro e vivo.',
    timeEstimate: '30s',
  },
]
