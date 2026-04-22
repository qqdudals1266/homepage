import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: '소개', href: '/about' },
  { label: '서비스', href: '/services' },
  { label: '진행 방식', href: '/process' },
  { label: '포트폴리오', href: '/portfolio' },
  { label: '칼럼', href: '/column' },
  { label: 'FAQ', href: '/faq' },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="container-max flex items-center justify-between h-20 px-4 md:px-8">
        <Link to="/" className="flex items-center">
          <span className="font-bold text-3xl text-primary tracking-tight">클리어마케팅</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-base font-medium text-neutral-600">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`hover:text-primary transition-colors ${
                location.pathname === link.href ? 'text-primary font-semibold' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link to="/contact" className="btn-primary text-sm py-3 px-6">
          무료 상담 신청
        </Link>
      </div>
    </nav>
  )
}
