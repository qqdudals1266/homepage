export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="container-max flex items-center justify-between h-20 px-4 md:px-8">
        <a href="#" className="flex items-center">
          <span className="font-bold text-3xl text-primary tracking-tight">클리어마케팅</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-base font-medium text-neutral-600">
          <a href="#about" className="hover:text-primary transition-colors">소개</a>
          <a href="#services" className="hover:text-primary transition-colors">서비스</a>
          <a href="#process" className="hover:text-primary transition-colors">진행 방식</a>
          <a href="#portfolio" className="hover:text-primary transition-colors">포트폴리오</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </div>
        <a href="#contact" className="btn-primary text-sm py-3 px-6">
          무료 상담 신청
        </a>
      </div>
    </nav>
  );
}
