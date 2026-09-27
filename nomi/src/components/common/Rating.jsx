import { Star } from 'lucide-react'

export default function Rating({ value, size = 14, showValue = true }) {
  return (
    <span className="inline-flex items-center gap-1 text-sm font-semibold text-ink">
      <Star size={size} strokeWidth={0} className="fill-accent" />
      {showValue && <span>{value.toFixed(1)}</span>}
    </span>
  )
}