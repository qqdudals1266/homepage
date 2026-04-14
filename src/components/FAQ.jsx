import { useState } from "react";

const faqs = [
  {
    q: "블로그 글만 써주시는 건가요?",
    a: "네이버 블로그 콘텐츠가 핵심이지만, 키워드 전략·제목 기획·월간 리포트까지 포함되어 있습니다. 단순 원고 납품이 아닌, 병원 블로그 운영 전반을 함께 관리하는 방식입니다.",
  },
  {
    q: "최소 계약 기간이 있나요?",
    a: "별도의 장기 계약 의무는 없습니다. 월 단위로 진행할 수 있으며, 효과를 확인하고 이어가시는 구조입니다. 다만 블로그 마케팅 특성상 3개월 이상 운영 시 의미 있는 결과를 확인할 수 있습니다.",
  },
  {
    q: "원고를 저희가 직접 수정할 수 있나요?",
    a: "물론입니다. 납품 전 확인 및 수정 요청이 가능하며, 1회 무료 수정이 포함되어 있습니다. 병원의 톤앤매너, 특수 상황 등을 반영해 원고를 조율합니다.",
  },
  {
    q: "의료법 관련 표현도 검토해주나요?",
    a: "네, 의료기관 광고 관련 가이드라인을 기준으로 과대·허위 표현을 배제하고 작성합니다.",
  },
  {
    q: "업로드는 누가 하나요?",
    a: "클리어마케팅이 직접 병원 블로그에 업로드합니다. 별도의 작업 없이 완성된 콘텐츠가 게시되며, 업로드 후 결과를 공유드립니다.",
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-neutral-200 last:border-b-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        onClick={() => setOpen(!open)}
      >
        <span className={`text-base font-medium ${open ? "text-primary" : "text-neutral-800"}`}>
          {q}
        </span>
        <svg
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180 text-primary" : "text-neutral-400"}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="pb-5 -mt-1">
          <p className="text-neutral-500 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="section-padding bg-neutral-50">
      <div className="container-max">
        <div className="text-center mb-14">
          <span className="inline-block text-primary text-sm font-semibold mb-3">FAQ</span>
          <h2 className="section-title">자주 묻는 질문</h2>
          <p className="section-sub">궁금한 점을 미리 정리했습니다. 더 궁금하신 건 상담으로 해결해 드립니다.</p>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-neutral-200 shadow-sm px-6 md:px-10">
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
