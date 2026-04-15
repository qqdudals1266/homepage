const samples = [
  {
    tag: "한의원",
    title: "허리 통증, 오래 앉아 있을 수록 더 심해지는 이유",
    preview: " 직장에서 오래 앉아 있다가 갑자기 일어설 때 허리가 곧바로 펴지지 않아 엉거주춤하게 서 있거나, 하루 일과를 마치고 나면 허리 아래쪽이 묵직하게 당겨오는 기분을 느껴본 적이 있으실 거예요...",
    metrics: { rank: "3위" },
  },
  {
    tag: "치과",
    title: "임플란트 기간, 예상보다 오래 걸리는 진짜 이유는 무엇일까요?",
    preview: "치과 치료 중에서도 임플란트는 유독 ‘기다림’이 강조되는 치료입니다.  특히 고덕동 인근에서 임플란트를 준비하며 상담을 받아보신 분들 중에는 '생각보다 기간이 너무 긴데?'라며 당혹감을 느끼시는 경우가 적지 않습니다. .",
    metrics: {  rank: "1위" },
  },
  {
    tag: "동물병원",
    title: "강아지 치아 발치, 망설여지는 마음 정말 이해됩니다",
    preview: "얼마 전 보호자 한 분이 이런 상황을 말씀하신 적이 있습니다. 입 냄새는 심해지고 양치도 거부하는데, 치아를 빼야 한다고 들으니 쉽게 결정을 내리기 어렵다는 이야기였죠. 아마 지금 이 글을 읽고 계신 분도 비슷한 고민을 하고 계실 수 있어요...",
    metrics: { rank: "2위" },
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
