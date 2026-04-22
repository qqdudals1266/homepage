const problems = [
  {
    icon: (
      <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    title: "글은 꾸준히 올리는데 문의로 이어지지 않습니다",
    desc: "발행량은 늘고 있지만 실제 신규 문의나 예약으로 연결되는 경우가 드뭅니다. 노출과 전환 사이의 연결고리가 빠져 있는 경우입니다.",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "비슷한 제목의 글이 반복되고 있습니다",
    desc: "병원명·지역명·시술명 중심의 제목이 계속 반복됩니다. 검색자의 실제 고민과 의도에 맞지 않아 유입 자체가 한계에 부딪힙니다.",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "정보는 있지만 병원의 색깔이 보이지 않습니다",
    desc: "내용은 충실해도 이 병원만의 기준, 설명 방식, 진료 철학이 드러나지 않습니다. 읽고 나서도 '왜 이 병원인가'가 전달되지 않는 상태입니다.",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "글을 읽고 끝날 뿐, 행동으로 이어지지 않습니다",
    desc: "방문자가 글을 읽고 나가버립니다. 상담을 고려하게 만드는 흐름, 다음 행동을 자연스럽게 이끄는 구조가 없기 때문입니다.",
  },
]

export default function ProblemSection() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-max">
        <div className="text-center mb-14">
          <span className="inline-block text-primary text-sm font-semibold mb-3">Common Issues</span>
          <h2 className="section-title">병원 블로그, <br />왜 열심히 해도 반응이 약할까요?</h2>
          <p className="section-sub max-w-xl mx-auto">
            많은 병원들이 비슷한 어려움을 겪고 있습니다.<br />
            문제는 노력의 양이 아니라 구조에 있습니다.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {problems.map((p, i) => (
            <div key={i} className="bg-white border border-neutral-200 rounded-2xl p-6 flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                {p.icon}
              </div>
              <div>
                <h3 className="font-bold text-neutral-800 mb-2">{p.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
