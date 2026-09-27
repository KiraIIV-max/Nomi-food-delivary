import { Link } from 'react-router-dom'
import { Plus, Star } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import { formatPrice } from '../../utils/priceCalculator'

export default function MenuListItem({ food, restaurant }) {
  const { addToCart } = useApp()

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(food, restaurant)
  }

  return (
    <Link
      to={`/food/${food.id}`}
      className="group flex gap-4 md:gap-5 p-4 md:p-5 bg-surface border border-line rounded-[16px] hover:border-ink/25 transition-colors"
    >
      {/* Image */}
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-[12px] overflow-hidden bg-line shrink-0">
        <img
          src={food.image}
          alt={food.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-bold leading-tight text-base md:text-lg pr-2">
              {food.name}
            </h3>
            <span className="font-bold text-base md:text-lg shrink-0">
              {formatPrice(food.price)}
            </span>
          </div>

          <p className="text-sm text-muted mt-1 line-clamp-2">
            {food.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-3">
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-muted">
            <Star size={12} strokeWidth={0} className="fill-accent" />
            {food.rating.toFixed(1)}
          </span>

          <button
            type="button"
            aria-label={`Add ${food.name} to cart`}
            onClick={handleAdd}
            className="w-9 h-9 rounded-full bg-ink text-cream flex items-center justify-center hover:bg-accent transition-colors"
          >
            <Plus size={16} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </Link>
  )
}