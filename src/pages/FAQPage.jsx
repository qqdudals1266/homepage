import FAQ from '../components/FAQ'

export default function FAQPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-[#0d1b3e] to-[#1a3260] py-16 px-4 text-center">
        <span className="inline-block text-blue-300 text-sm font-semibold mb-3">FAQ</span>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">자주 묻는 질문</h1>
        <p className="text-neutral-300 text-base md:text-lg max-w-xl mx-auto">
          클리어마케팅에 대해 자주 묻는 질문들을 모았습니다.
        </p>
      </div>
      <FAQ />
    </div>
  )
}
