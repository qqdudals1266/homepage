import { useEffect } from 'react'
import Contact from '../components/Contact'

export default function ContactPage() {
  useEffect(() => { document.title = '클리어마케팅 문의하기 | 병원 블로그 상담' }, [])
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-[#0d1b3e] to-[#1a3260] py-16 px-4 text-center">
        <span className="inline-block text-blue-300 text-sm font-semibold mb-3">Contact</span>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">문의하기</h1>
        <p className="text-neutral-300 text-base md:text-lg max-w-xl mx-auto">
          간단한 정보를 남겨주시면 1영업일 이내 연락드립니다.
        </p>
      </div>
      <Contact />
    </div>
  )
}
