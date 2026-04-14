import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    hospital: "",
    name: "",
    phone: "",
    region: "",
    department: "",
    concern: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const body = `
병원명: ${form.hospital}
담당자명: ${form.name}
연락처: ${form.phone}
지역: ${form.region || "미입력"}
진료과목: ${form.department || "미입력"}
현재 고민: ${form.concern || "미입력"}
      `.trim();

      const response = await fetch("https://formspree.io/f/meevokey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _replyto: "qqdudals87@naver.com",
          email: "qqdudals87@naver.com",
          subject: `[클리어마케팅] 무료 상담 신청 - ${form.hospital}`,
          message: body,
          병원명: form.hospital,
          담당자명: form.name,
          연락처: form.phone,
          진료과목: form.department,
          현재고민: form.concern,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error("전송 실패");
      }
    } catch (err) {
      // Formspree가 설정되지 않은 경우 mailto 폴백
      const subject = encodeURIComponent(`[클리어마케팅] 무료 상담 신청 - ${form.hospital}`);
      const body2 = encodeURIComponent(
        `병원명: ${form.hospital}\n담당자명: ${form.name}\n연락처: ${form.phone}\n진료과목: ${form.department || "미입력"}\n현재 고민: ${form.concern || "미입력"}`
      );
      window.location.href = `mailto:qqdudals87@naver.com?subject=${subject}&body=${body2}`;
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-14">
          <span className="inline-block text-primary text-sm font-semibold mb-3">Contact</span>
          <h2 className="section-title">문의하기</h2>
          <p className="section-sub max-w-xl mx-auto">
            간단한 정보를 남겨주시면 담당자가 48시간 이내 연락드립니다.<br />
            빠른 응대는 카카오톡을 이용해 주세요.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Form */}
          <div className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-10 text-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-neutral-800 mb-2">문의가 접수되었습니다</h3>
                <p className="text-neutral-500 text-sm">1영업일 이내에 담당자가 연락드리겠습니다.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                    병원명 <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="hospital"
                    value={form.hospital}
                    onChange={handleChange}
                    required
                    placeholder="예) ○○정형외과의원"
                    className="w-full border border-neutral-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                    담당자명 <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="성함을 입력해 주세요"
                    className="w-full border border-neutral-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                    연락처 <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="010-0000-0000"
                    className="w-full border border-neutral-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                    지역
                  </label>
                  <input
                    type="text"
                    name="region"
                    value={form.region}
                    onChange={handleChange}
                    placeholder="예) 서울 강남구, 경기 수원시 등"
                    className="w-full border border-neutral-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                    진료과목
                  </label>
                  <input
                    type="text"
                    name="department"
                    value={form.department}
                    onChange={handleChange}
                    placeholder="예) 정형외과, 피부과, 내과 등"
                    className="w-full border border-neutral-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                    현재 고민
                  </label>
                  <textarea
                    name="concern"
                    value={form.concern}
                    onChange={handleChange}
                    rows={4}
                    placeholder="블로그 현황, 원하는 방향, 궁금한 점 등을 자유롭게 적어주세요."
                    className="w-full border border-neutral-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  />
                </div>
                {error && (
                  <p className="text-red-500 text-sm text-center">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary text-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? "전송 중..." : "문의 접수하기"}
                </button>
              </form>
            )}
          </div>

          {/* Side info */}
          <div className="flex flex-col gap-6 justify-center">
            <div className="bg-[#FEE500]/10 border border-[#FEE500] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">💬</span>
                <h3 className="font-bold text-neutral-800 text-lg">카카오톡 상담</h3>
              </div>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                빠른 답변을 원하신다면 카카오톡으로 연락 주세요.
                평일 오전 9시 ~ 오후 6시 응대합니다.
              </p>
              <a
                href="https://open.kakao.com/o/sCSydrqi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-kakao w-full justify-center"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3C6.477 3 2 6.582 2 11c0 2.913 1.764 5.491 4.471 6.988-.124.48-.46 1.742-.527 2.019-.083.326.12.321.253.234.104-.069 1.656-1.12 2.324-1.57.459.063.931.096 1.479.096 5.523 0 10-3.582 10-8S17.523 3 12 3z"/>
                </svg>
                카카오톡으로 문의하기
              </a>
            </div>

            <div className="border border-neutral-200 rounded-2xl p-6">
              <h3 className="font-bold text-neutral-800 mb-4">📋 상담 전 참고사항</h3>
              <ul className="flex flex-col gap-3 text-sm text-neutral-600">
                {[
                  "현재 블로그 운영 여부는 무관합니다",
                  "진료과목·지역에 관계없이 상담 가능합니다",
                  "상담 후 제안서는 무료로 제공됩니다",
                  "특정 키워드 분석 결과도 함께 안내드립니다",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
