import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function FoodRestaurantLink({ restaurant }) {
  if (!restaurant) return null

  return (
    <Link
      to={`/restaurants/${restaurant.id}`}
      className="group flex items-center gap-4 p-3 pr-4 bg-surface border border-line rounded-[14px] hover:border-ink/25 transition-colors"
    >
      <div className="w-14 h-14 rounded-[10px] overflow-hidden bg-line shrink-0">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-[11px] uppercase tracking-widest text-muted font-semibold">
          From
        </p>
        <p className="font-bold leading-tight truncate">{restaurant.name}</p>
      </div>

      <ArrowRight
        size={16}
        strokeWidth={2.5}
        className="text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all shrink-0"
      />
    </Link>
  )
}