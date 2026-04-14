export default function Hero() {
  return (
    <section className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-white via-neutral-50 to-blue-50 relative overflow-hidden isolate">
      
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img
          src="/img/test2.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45"></div>
      </div>

      <div className="container-max w-full px-4 md:px-8 py-24 md:py-32">
        
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block bg-white/20 text-white text-sm font-semibold px-8 py-3 rounded-full mb-6 border border-white/40 backdrop-blur-sm">
            병원 전문 블로그 마케팅
          </span>
          <h1 className="text-6xl md:text-6xl font-bold text-white leading-tight mb-0 drop-shadow-lg">
            병원 블로그,<br />
            단순한 노출을 넘어<br />
            <span className="text-blue-300">유입</span>과 <span className="text-blue-300">신뢰</span>,{" "}
            <span className="text-blue-300">문의</span>까지<br />
            이어지게 설계합니다
          </h1>
          <p className="text-white/95 text-lg md:text-xl font-medium leading-relaxed mt-10 mb-14 drop-shadow">
            클리어마케팅은 병원 원장님이 직접 작성한 것처럼 읽히는<br className="hidden md:block" />
            전문성 있는 콘텐츠로, 방문자가 자연스럽게 문의하도록 만듭니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary text-center text-xl py-5 px-14 shadow-md shadow-primary/20">
              무료 상담 신청하기
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 text-white font-semibold text-lg py-5 px-8 rounded-xl border border-white/50 hover:border-white hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
            >
              서비스 자세히 보기
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}