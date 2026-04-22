import Portfolio from '../components/Portfolio'

export default function PortfolioPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-[#0d1b3e] to-[#1a3260] py-16 px-4 text-center">
        <span className="inline-block text-blue-300 text-sm font-semibold mb-3">Portfolio</span>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">포트폴리오</h1>
        <p className="text-neutral-300 text-base md:text-lg max-w-xl mx-auto">
          실제 제작된 콘텐츠의 방향성과 톤을 확인해 보세요.
        </p>
      </div>
      <Portfolio />
    </div>
  )
}
