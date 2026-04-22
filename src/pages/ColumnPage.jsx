import { Link } from 'react-router-dom'
import { columns } from '../data/columns'

export default function ColumnPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-[#0d1b3e] to-[#1a3260] py-16 px-4 text-center">
        <span className="inline-block text-blue-300 text-sm font-semibold mb-3">Column</span>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">칼럼</h1>
        <p className="text-neutral-300 text-base md:text-lg max-w-xl mx-auto">
          병원 블로그 마케팅에 관한 인사이트를 공유합니다.
        </p>
      </div>
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {columns.map((col) => (
              <Link
                key={col.id}
                to={`/column/${col.id}`}
                className="group card flex flex-col gap-0 p-0 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="w-full h-48 overflow-hidden bg-neutral-100">
                  <img
                    src={col.thumbnail}
                    alt={col.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col gap-3 p-5 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-blue-50 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                      {col.tag}
                    </span>
                    <span className="text-xs text-neutral-400">{col.date}</span>
                  </div>
                  <h2 className="font-bold text-neutral-800 text-base leading-snug group-hover:text-primary transition-colors">
                    {col.title}
                  </h2>
                  <p className="text-sm text-neutral-500 leading-relaxed flex-1 line-clamp-3">{col.desc}</p>
                  <div className="pt-3 border-t border-neutral-100">
                    <span className="text-xs text-primary font-semibold">자세히 보기 →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
