const steps = [
  {
    num: "01",
    title: "무료 상담 신청",
    desc: "병원명, 진료과목, 현재 고민을 간단히 작성해 주세요. 담당자가 48시간 이내 연락드립니다.",
  },
  {
    num: "02",
    title: "진단 & 전략 수립",
    desc: "현재 블로그 현황을 분석하고, 병원에 맞는 키워드 전략과 콘텐츠 방향을 제안드립니다.",
  },
  {
    num: "03",
    title: "콘텐츠 기획·제작",
    desc: "제목 기획 → 원고 작성 → 검토 → 최종 확정 순으로 진행합니다.",
  },
  {
    num: "04",
    title: "업로드 및 모니터링",
    desc: "완성된 원고를 클리어마케팅이 직접 병원 블로그에 업로드합니다. 게시 후 순위와 유입을 지속적으로 추적합니다.",
  },
  {
    num: "05",
    title: "월간 리포트 공유",
    desc: "매월 성과를 정리해 공유드리고, 다음 달 전략을 함께 조율합니다.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-neutral-50">
      <div className="container-max">
        <div className="text-center mb-14">
          <span className="inline-block text-primary text-sm font-semibold mb-3">Process</span>
          <h2 className="section-title">진행 방식</h2>
          <p className="section-sub max-w-xl mx-auto">
            처음 상담부터 월간 성과 공유까지, 투명하고 일관된 프로세스로 진행합니다.
          </p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute left-[calc(2.5rem)] top-10 bottom-10 w-px bg-neutral-200" />
          <div className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-white border border-neutral-200 flex flex-col items-center justify-center shadow-sm z-10">
                  <span className="text-xs text-neutral-400 font-medium">STEP</span>
                  <span className="text-xl font-bold text-primary">{step.num}</span>
                </div>
                <div className="flex-1 bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
                  <h3 className="font-bold text-neutral-800 text-lg mb-2">{step.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
