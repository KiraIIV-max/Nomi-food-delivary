import { Link } from 'react-router-dom'
import {
  Receipt, Heart, ShoppingBag, Utensils, ArrowRight,
} from 'lucide-react'

const links = [
  { to: '/orders',      label: 'My orders',      Icon: Receipt },
  { to: '/favorites',   label: 'Saved items',    Icon: Heart },
  { to: '/cart',        label: 'Current cart',   Icon: ShoppingBag },
  { to: '/restaurants', label: 'Browse restaurants', Icon: Utensils },
]

export default function ProfileLinks() {
  return (
    <div className="bg-surface border border-line rounded-[16px] overflow-hidden">
      {links.map(({ to, label, Icon }, i) => (
        <Link
          key={to}
          to={to}
          className={[
            'group flex items-center gap-4 px-5 md:px-6 py-4',
            'hover:bg-cream/60 transition-colors',
            i !== links.length - 1 ? 'border-b border-line' : '',
          ].join(' ')}
        >
          <span className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-ink shrink-0">
            <Icon size={17} strokeWidth={2.2} />
          </span>

          <span className="flex-1 font-semibold">{label}</span>

          <ArrowRight
            size={16}
            strokeWidth={2.5}
            className="text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all"
          />
        </Link>
      ))}
    </div>
  )
}