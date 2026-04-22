import { Link } from 'react-router-dom'

export default function CtaSection() {
  return (
    <section className="section-padding bg-white border-t border-neutral-100">
      <div className="container-max">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-primary text-sm font-semibold mb-4">Free Diagnosis</span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight mb-6">
           현재 블로그 상태를 먼저 점검해보세요.
          </h2>
          <p className="text-neutral-600 text-base md:text-lg leading-relaxed mb-4">
            지금 필요한 게 발행량인지, 키워드 조정인지,<br className="hidden md:block" />
            콘텐츠 구조 재정비인지 먼저 함께 점검해보세요.
          </p>
          <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-10">
            클리어마케팅은 병원마다 다른 현재 상황을 보고,<br className="hidden md:block" />
            맞는 방향부터 정리해드립니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/contact" className="btn-primary text-center text-lg py-4 px-10">
              무료 진단 요청하기
            </Link>
            <a
              href="https://open.kakao.com/o/sCSydrqi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#FEE500] text-[#3C1E1E] font-semibold text-lg py-4 px-10 rounded-xl hover:brightness-95 transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.477 3 2 6.582 2 11c0 2.913 1.764 5.491 4.471 6.988-.124.48-.46 1.742-.527 2.019-.083.326.12.321.253.234.104-.069 1.656-1.12 2.324-1.57.459.063.931.096 1.479.096 5.523 0 10-3.582 10-8S17.523 3 12 3z"/>
              </svg>
              상담 문의하기
            </a>
          </div>

          <div className="border-t border-neutral-200 pt-8">
            <p className="text-neutral-400 text-sm leading-relaxed italic">
              "병원 블로그는 광고처럼 소비되는 채널이 아니라,<br className="hidden md:block" />
              병원을 설명하는 자산입니다."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
