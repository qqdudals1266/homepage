import Process from '../components/Process'

export default function ProcessPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-[#0d1b3e] to-[#1a3260] py-16 px-4 text-center">
        <span className="inline-block text-blue-300 text-sm font-semibold mb-3">Process</span>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">진행 방식</h1>
        <p className="text-neutral-300 text-base md:text-lg max-w-xl mx-auto">
          처음부터 끝까지 체계적인 프로세스로 진행됩니다.
        </p>
      </div>
      <Process />
    </div>
  )
}
