import { useEffect } from 'react'
import Hero from '../components/Hero'
import ProblemSection from '../components/ProblemSection'
import BlogStructureSection from '../components/BlogStructureSection'
import CtaSection from '../components/CtaSection'

export default function HomePage() {
  useEffect(() => { document.title = '클리어마케팅 | 병원 블로그 마케팅 전문' }, [])
  return (
    <>
      <Hero />
      <ProblemSection />
      <BlogStructureSection />
      <CtaSection />
    </>
  )
}
