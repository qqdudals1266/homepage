import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="pt-16 min-h-screen flex items-center relative overflow-hidden isolate">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img
          src="/img/test2.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55"></div>
      </div>

      <div className="container-max w-full px-4 md:px-8 py-24 md:py-36">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/15 text-white/90 text-sm font-medium px-8 py-3 rounded-full mb-8 border border-white/30 backdrop-blur-sm tracking-wide">
            검색되는 글보다, 선택받는 블로그를 만듭니다
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-0 drop-shadow-lg">
            병원 블로그는<br />
            상위 노출만이 아니라<br />
            <span className="text-blue-300">유입·신뢰·문의</span>까지<br />
            설계되어야 합니다
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed mt-10 mb-14 drop-shadow max-w-2xl mx-auto">
            클리어마케팅은 단순히 블로그 글을 대신 써주는 팀이 아닙니다.<br className="hidden md:block" />
            환자가 검색으로 들어오고, 글을 읽으며 병원을 이해하고,<br className="hidden md:block" />
            신뢰를 느껴 상담·예약으로 이어지는 구조를 설계합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-center text-lg py-4 px-12 shadow-md shadow-primary/20">
              무료 블로그 진단 받기
            </Link>
            <Link
              to="/process"
              className="inline-flex items-center justify-center gap-2 text-white font-semibold text-lg py-4 px-10 rounded-xl border border-white/50 hover:border-white hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
            >
              작업 방식 보기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
