import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function SectionHeader({ eyebrow, title, action, actionTo = '/' }) {
  return (
    <div className="flex items-end justify-between gap-6 mb-8 md:mb-12">
      <div>
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h2 className="text-3xl md:text-5xl font-extrabold leading-[1.1]">
          {title}
        </h2>
      </div>

      {action && (
        <Link
          to={actionTo}
          className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-accent transition-colors shrink-0"
        >
          {action}
          <ArrowRight size={16} strokeWidth={2.5} />
        </Link>
      )}
    </div>
  )
}