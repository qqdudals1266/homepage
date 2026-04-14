import { useState } from "react";

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <footer className="bg-neutral-900 text-neutral-400 py-12 px-4 md:px-8">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-neutral-800">
            <div>
              <div className="text-white font-bold text-lg mb-3">클리어마케팅</div>
              <p className="text-sm leading-relaxed text-neutral-500">
                병원 전문 블로그 마케팅 파트너.<br />
                단순한 노출을 넘어 유입과 신뢰, 문의까지<br />
                이어지게 설계합니다.
              </p>
            </div>
            <div>
              <div className="text-white font-medium text-sm mb-3">바로가기</div>
              <ul className="flex flex-col gap-2 text-sm">
                {["소개", "서비스", "진행 방식", "포트폴리오", "FAQ", "문의하기"].map((item, i) => {
                  const hrefs = ["#about", "#services", "#process", "#portfolio", "#faq", "#contact"];
                  return (
                    <li key={i}>
                      <a href={hrefs[i]} className="hover:text-white transition-colors">{item}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <div className="text-white font-medium text-sm mb-3">연락처</div>
              <ul className="flex flex-col gap-2 text-sm">
                <li>📞 010-4688-2306</li>
                <li>📧 qqdudals87@naver.com</li>
                <li>🌐 www.clearmk.co.kr</li>
                <li className="pt-1">
                  <a
                    href="https://pf.kakao.com/_clearmarketing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#FEE500] text-[#3C1E1E] px-4 py-2 rounded-lg text-xs font-semibold hover:brightness-95 transition-all"
                  >
                    💬 카카오톡 상담
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-neutral-600">
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <span>상호명: 클리어마케팅</span>
              <span>대표자: 이영민</span>
              <span>사업자등록번호: 294-58-00945</span>
            </div>
            <button
              onClick={() => setShowPrivacy(true)}
              className="underline hover:text-neutral-400 transition-colors"
            >
              개인정보처리방침
            </button>
          </div>
          <div className="mt-4 text-xs text-neutral-700">
            © 2024 클리어마케팅. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setShowPrivacy(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-xl w-full max-h-[80vh] overflow-y-auto p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-neutral-800">개인정보처리방침</h3>
              <button onClick={() => setShowPrivacy(false)} className="text-neutral-400 hover:text-neutral-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="text-sm text-neutral-600 leading-relaxed flex flex-col gap-4">
              <p>클리어마케팅(이하 '회사')은 이용자의 개인정보를 소중히 여기며, 개인정보보호법에 따라 아래와 같이 처리합니다.</p>
              <div>
                <p className="font-semibold text-neutral-800 mb-1">1. 수집하는 개인정보 항목</p>
                <p>병원명, 담당자명, 연락처(전화번호), 진료과목, 상담 내용</p>
              </div>
              <div>
                <p className="font-semibold text-neutral-800 mb-1">2. 수집 목적</p>
                <p>상담 문의 처리 및 서비스 안내를 위해 수집합니다.</p>
              </div>
              <div>
                <p className="font-semibold text-neutral-800 mb-1">3. 보유 및 이용 기간</p>
                <p>상담 완료 후 1년간 보유하며, 이후 즉시 파기합니다.</p>
              </div>
              <div>
                <p className="font-semibold text-neutral-800 mb-1">4. 제3자 제공</p>
                <p>이용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다.</p>
              </div>
              <div>
                <p className="font-semibold text-neutral-800 mb-1">5. 개인정보 처리 담당</p>
                <p>대표자: 홍길동 | 이메일: hello@clearmk.co.kr</p>
              </div>
              <p className="text-neutral-500 text-xs">본 방침은 2024년 1월 1일부터 시행됩니다.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
