const services = [
  {
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "키워드 전략",
    tag: "Keyword Strategy",
    desc: "진료과목·지역·증상 기반으로 실제 검색되는 키워드를 발굴합니다. 경쟁 강도와 전환 가능성을 동시에 분석해 노출과 문의 모두를 노립니다.",
    points: ["월별 키워드 플래닝", "경쟁 병원 분석 포함", "롱테일 키워드 발굴"],
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "제목 기획",
    tag: "Title Planning",
    desc: "검색 결과에서 클릭을 유도하는 제목은 따로 있습니다. 검색자의 의도와 심리를 반영한 제목으로 블로그 유입률을 높입니다.",
    points: ["클릭률 높은 구조 설계", "A/B 테스트 기반 개선", "의료법 준수 표현 적용"],
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    title: "원고 작성",
    tag: "Content Writing",
    desc: "단순 정보 나열이 아닌, 환자 입장에서 읽히는 원고를 씁니다. 전문성을 유지하면서도 어렵지 않게, 신뢰를 주면서도 자연스럽게.",
    points: ["진료과목 전문 작가 배정", "800~1,500자 최적 분량", "이미지 연출 가이드 포함"],
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "월간 리포트",
    tag: "Monthly Report",
    desc: "매월 포스팅별 노출·클릭·순위 변화를 정리해 공유합니다. 수치를 기반으로 다음 달 전략을 함께 조정하는 파트너 방식으로 운영합니다.",
    points: ["키워드별 순위 트래킹", "포스팅 성과 상세 분석", "다음 달 방향 제안 포함"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-14">
          <span className="inline-block text-primary text-sm font-semibold mb-3">Services</span>
          <h2 className="section-title">제공 서비스</h2>
          <p className="section-sub max-w-xl mx-auto">
            콘텐츠 기획부터 성과 분석까지, 병원 블로그에 필요한 모든 과정을 담당합니다.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div key={i} className="card flex flex-col gap-4">
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
                {s.icon}
              </div>
              <div>
                <span className="text-xs text-neutral-400 font-medium">{s.tag}</span>
                <h3 className="text-lg font-bold text-neutral-800 mt-0.5">{s.title}</h3>
              </div>
              <p className="text-sm text-neutral-500 leading-relaxed flex-1">{s.desc}</p>
              <ul className="flex flex-col gap-1.5 pt-3 border-t border-neutral-100">
                {s.points.map((p, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs text-neutral-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
