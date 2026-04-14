const samples = [
  {
    tag: "정형외과",
    title: "무릎 통증, 어느 병원에 가야 할까? 정형외과 vs 한의원 차이",
    preview: "무릎 통증이 생겼을 때 많은 분들이 정형외과와 한의원 중 어디를 먼저 가야 할지 고민합니다. 이 글에서는 증상 유형별로 어떤 선택이 더 적합한지, 실제 진료 흐름을 기준으로 안내드립니다...",
    metrics: { views: "3,240", rank: "3위" },
  },
  {
    tag: "피부과",
    title: "여드름 흉터 치료, 시기별로 달라지는 접근법",
    preview: "여드름 흉터는 생긴 시기와 유형에 따라 치료 방법이 달라집니다. 초기 붉은 자국 단계부터 깊은 패인 흉터까지, 각 단계에서 어떤 시술이 효과적인지 정리해 드립니다...",
    metrics: { views: "2,810", rank: "5위" },
  },
  {
    tag: "내과",
    title: "건강검진 후 '요관찰' 판정을 받았다면 다음 단계는?",
    preview: "'요관찰'이란 당장 치료가 필요한 상태는 아니지만, 정기적인 경과 관찰이 필요하다는 의미입니다. 이 글에서는 요관찰 판정 이후 어떤 검사나 관리가 필요한지 안내드립니다...",
    metrics: { views: "4,100", rank: "2위" },
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-14">
          <span className="inline-block text-primary text-sm font-semibold mb-3">Portfolio</span>
          <h2 className="section-title">콘텐츠 샘플</h2>
          <p className="section-sub max-w-xl mx-auto">
            실제 제작된 콘텐츠의 방향성과 톤을 확인해 보세요.<br />
            전문성과 가독성, 두 가지를 모두 담았습니다.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {samples.map((s, i) => (
            <div key={i} className="card flex flex-col gap-4">
              <span className="inline-block bg-blue-50 text-primary text-xs font-semibold px-3 py-1 rounded-full w-fit">
                {s.tag}
              </span>
              <h3 className="font-bold text-neutral-800 text-base leading-snug">{s.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed flex-1">{s.preview}</p>
              <div className="flex items-center gap-4 pt-3 border-t border-neutral-100 text-xs text-neutral-400">
                <span>👁 {s.metrics.views} 조회</span>
                <span>🔍 검색 {s.metrics.rank}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6 text-center">
          <p className="text-neutral-600 text-sm mb-4">
            실제 포트폴리오 및 진료과목별 샘플 원고는 상담 시 제공해 드립니다.
          </p>
          <a href="#contact" className="btn-primary text-sm py-2.5 px-6">
            샘플 요청하기
          </a>
        </div>
      </div>
    </section>
  );
}
