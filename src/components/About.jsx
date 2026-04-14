export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-primary text-sm font-semibold mb-4">About</span>
            <h2 className="section-title">
              클리어마케팅은<br />
              병원 마케팅만 합니다
            </h2>
            <p className="section-sub mb-6">
              저희는 다양한 업종을 동시에 다루는 종합 대행사가 아닙니다.<br />
              병원 환경에 맞는 콘텐츠 전략과 표현 방식을 오직 의료 분야에 집중해 쌓아왔습니다.
            </p>
            <p className="text-neutral-500 text-base leading-relaxed mb-8">
              원장님이 환자에게 직접 설명하듯 신뢰를 주는 글, 환자의 검색 의도에 맞춘 키워드 설계,
              그리고 상담까지 이어지는 흐름.
              클리어마케팅은 병원이 온라인에서 신뢰를 쌓는 과정을 함께 설계합니다.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "의료법 가이드라인을 반영한 안전한 콘텐츠",
                "진료과목별 전문 용어를 자연스럽게 녹인 원고",
                "단순 조회수가 아닌 문의 전환에 초점",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-neutral-600 text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: (
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                title: "병원 전문",
                desc: "의료 분야만을 위한 마케팅 전략",
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                ),
                title: "직접 기획·작성",
                desc: "외주 없이 내부 인력이 직접 제작",
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: "성과 공유",
                desc: "매월 투명한 리포트로 결과 확인",
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ),
                title: "전담 담당자",
                desc: "변경 없는 1:1 담당자 배정",
              },
            ].map((item, i) => (
              <div key={i} className="card flex flex-col gap-3">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="font-semibold text-neutral-800">{item.title}</div>
                <div className="text-sm text-neutral-500 leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
