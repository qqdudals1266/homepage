import About from '../components/About'
import Difference from '../components/Difference'
import Contact from '../components/Contact'

export default function AboutPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-[#0d1b3e] to-[#1a3260] py-16 px-4 text-center">
        <span className="inline-block text-blue-300 text-sm font-semibold mb-3">About</span>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">소개</h1>
        <p className="text-neutral-300 text-base md:text-lg max-w-xl mx-auto">
          클리어마케팅이 병원 마케팅만 하는 이유, 그리고 일반 대행사와의 차이를 소개합니다.
        </p>
      </div>
      <About />
      <Difference />
      <Contact />
    </div>
  )
}
