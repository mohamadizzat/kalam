import { HeroSection } from '@/components/home/HeroSection'
import { QuestionSection } from '@/components/home/QuestionSection'
import { NumbersSection } from '@/components/home/NumbersSection'
import { PillarsSection } from '@/components/home/PillarsSection'
import { ClosingSection } from '@/components/home/ClosingSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuestionSection />
      <NumbersSection />
      <PillarsSection />
      <ClosingSection />
    </>
  )
}
