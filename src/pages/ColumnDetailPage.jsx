import { useParams, Link } from 'react-router-dom'
import { columns } from '../data/columns'

export default function ColumnDetailPage() {
  const { id } = useParams()
  const col = columns.find((c) => c.id === Number(id))

  if (!col) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-neutral-500 mb-4">게시글을 찾을 수 없습니다.</p>
          <Link to="/column" className="btn-primary text-sm">칼럼 목록으로</Link>
        </div>
      </div>
    )
  }

  // 마크다운 h2를 심플하게 파싱
  const renderContent = (text) => {
    return text.split('\n').map((line, i) => {
      if (line.startsWith('## ')) {
        return <h2 key={i} className="text-xl font-bold text-neutral-800 mt-8 mb-3">{line.replace('## ', '')}</h2>
      }
      if (line.startsWith('**') && line.endsWith('**')) {
        return <p key={i} className="font-semibold text-neutral-700 mt-4 mb-1">{line.replace(/\*\*/g, '')}</p>
      }
      if (line.startsWith('- ')) {
        return <li key={i} className="text-neutral-600 text-base leading-relaxed ml-4 list-disc">{line.replace('- ', '')}</li>
      }
      if (line.trim() === '') {
        return <div key={i} className="h-3" />
      }
      return <p key={i} className="text-neutral-600 text-base leading-relaxed">{line}</p>
    })
  }

  return (
    <div className="pt-20">
      {/* 썸네일 헤더 */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src={col.thumbnail} alt={col.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-white/30">
            {col.tag}
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-white max-w-2xl leading-snug drop-shadow">
            {col.title}
          </h1>
          <p className="text-white/60 text-sm mt-3">{col.date}</p>
        </div>
      </div>

      {/* 본문 */}
      <div className="section-padding bg-white">
        <div className="max-w-2xl mx-auto">
          {/* 요약 */}
          <p className="text-neutral-500 text-base leading-relaxed border-l-4 border-primary pl-4 mb-10 italic">
            {col.desc}
          </p>

          {/* 본문 내용 */}
          <div className="flex flex-col gap-1">
            {renderContent(col.content)}
          </div>

          {/* 하단 네비 */}
          <div className="mt-14 pt-8 border-t border-neutral-200 flex items-center justify-between">
            <Link to="/column" className="flex items-center gap-2 text-sm text-neutral-500 hover:text-primary transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              칼럼 목록으로
            </Link>
            <Link to="/contact" className="btn-primary text-sm py-2.5 px-6">
              무료 진단 받기
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
