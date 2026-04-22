const steps = [
  {
    num: "01",
    label: "검색 유입 콘텐츠",
    color: "bg-blue-50 border-blue-200",
    numColor: "text-blue-400",
    icon: (
      <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "환자가 실제로 검색하는 글",
    desc: "증상, 고민, 치료 비교, 시술 이해 등 환자들이 검색창에 입력하는 언어로 쓴 글입니다. 병원 이름을 몰라도 찾아오게 만드는 첫 번째 관문입니다.",
    tag: "유입",
  },
  {
    num: "02",
    label: "신뢰 형성 콘텐츠",
    color: "bg-indigo-50 border-indigo-200",
    numColor: "text-indigo-400",
    icon: (
      <svg className="w-7 h-7 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "병원의 기준과 관점이 드러나는 글",
    desc: "의료진의 설명 방식, 진료 철학, 환자를 바라보는 관점이 자연스럽게 담긴 글입니다. 읽고 나서 '이 병원은 다르다'는 인상을 남깁니다.",
    tag: "신뢰",
  },
  {
    num: "03",
    label: "행동 유도 콘텐츠",
    color: "bg-sky-50 border-sky-200",
    numColor: "text-sky-400",
    icon: (
      <svg className="w-7 h-7 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "상담·예약으로 자연스럽게 이어지는 글",
    desc: "상담이 필요한 상황, 초진 전 알아두면 좋은 내용, 예약 전 체크할 점 등을 통해 독자가 스스로 다음 단계를 밟게 만드는 글입니다.",
    tag: "문의",
  },
]

export default function BlogStructureSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-14">
          <span className="inline-block text-primary text-sm font-semibold mb-3">Our Approach</span>
          <h2 className="section-title">좋은 병원 블로그는 글이 아니라<br />흐름으로 만들어집니다</h2>
          <p className="section-sub max-w-xl mx-auto">
            클리어마케팅은 병원 블로그를 단순한 콘텐츠 묶음이 아니라,<br className="hidden md:block" />
            환자의 여정을 설계하는 구조물로 봅니다.
          </p>
        </div>

        {/* 흐름 화살표 */}
        <div className="hidden md:flex items-center justify-center gap-2 mb-10">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="px-5 py-2 rounded-full bg-neutral-100 text-neutral-600 text-sm font-semibold">{s.tag}</span>
              {i < steps.length - 1 && (
                <svg className="w-5 h-5 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className={`rounded-2xl border p-7 flex flex-col gap-4 ${s.color}`}>
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                  {s.icon}
                </div>
                <span className={`text-3xl font-black ${s.numColor} opacity-30`}>{s.num}</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-neutral-400 mb-1">{s.label}</p>
                <h3 className="text-lg font-bold text-neutral-800 leading-snug">{s.title}</h3>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-neutral-400 text-sm mt-10">
          세 가지 콘텐츠가 유기적으로 연결될 때, 블로그는 비로소 병원을 설명하는 자산이 됩니다.
        </p>
      </div>
    </section>
  )
}
