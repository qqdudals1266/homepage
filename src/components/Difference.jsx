const rows = [
  {
    category: "콘텐츠 기획 기준",
    large: "업종 공통 템플릿이나 노출 중심 기획이 많음",
    clear: "환자의 검색 의도와 실제 내원까지 고려",
  },
  {
    category: "의료 이해도",
    large: "일반 콘텐츠 팀이 의료 분야 병행",
    clear: "의료 전문 콘텐츠만 제작",
  },
  {
    category: "성과 보고",
    large: "조회수·순위 중심 리포트",
    clear: "노출·클릭·문의 연계 분석 리포트",
  },
  {
    category: "계약 방식",
    large: "장기 계약 강제, 위약금 조항 존재",
    clear: "월 단위 계약, 부담 없이 시작 가능",
  },
  {
    category: "키워드 전략",
    large: "검색량이 높은 키워드 위주로 무리하게 접근하는 경우가 있음",
    clear: "블로그 지수와 경쟁도에 맞춘 단계별 키워드 운용",
  },
  {
    category: "장기 운영 관점",
    large: "단기 발행량 중심으로 운영되는 경우가 있음",
    clear: "병원이 온라인에서 신뢰를 쌓는 구조를 만드는 데 초점",
  },
];

export default function Difference() {
  return (
    <section id="difference" className="section-padding bg-neutral-50">
      <div className="container-max">
        <div className="text-center mb-14">
          <span className="inline-block text-primary text-sm font-semibold mb-3">Why ClearMarketing</span>
          <h2 className="section-title">일반 대행사와 무엇이 다른가요?</h2>
          <p className="section-sub max-w-xl mx-auto">
            규모가 크다고 병원에 맞는 건 아닙니다.<br />
            클리어마케팅은 병원에 필요한 것에만 집중합니다.
          </p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-neutral-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="w-[180px] whitespace-nowrap py-4 px-5 text-left text-neutral-500 font-medium w-32">항목</th>
                <th className="py-4 px-5 text-center text-neutral-400 font-medium">일반 대행사</th>
                
                <th className="px-6 py-5 text-center bg-blue-100 text-blue-900 font-bold">클리어마케팅</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={`border-b border-neutral-100 ${i === rows.length - 1 ? "border-b-0" : ""}`}>
                  <td className="py-4 px-5 font-semibold text-neutral-700">{row.category}</td>
                  <td className="py-4 px-5 text-center text-neutral-400">{row.large}</td>
                  <td className="py-4 px-5 text-center text-neutral-700 bg-blue-50/40 font-medium">
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {row.clear}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
