import Services from '../components/Services'
import Contact from '../components/Contact'

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-[#0d1b3e] to-[#1a3260] py-16 px-4 text-center">
        <span className="inline-block text-blue-300 text-sm font-semibold mb-3">Services</span>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">제공 서비스</h1>
        <p className="text-neutral-300 text-base md:text-lg max-w-xl mx-auto">
          콘텐츠 기획부터 성과 분석까지, 병원 블로그에 필요한 모든 과정을 담당합니다.
        </p>
      </div>
      <Services />
      <Contact />
    </div>
  )
}
