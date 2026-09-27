import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import { formatPrice } from '../../utils/priceCalculator'

export default function FoodCard({ food, restaurant }) {
  const { addToCart } = useApp()

  const handleAdd = (e) => {
    e.preventDefault()
    addToCart(food, restaurant)
  }

  return (
    <Link
      to={`/food/${food.id}`}
      className="group block bg-surface rounded-[16px] overflow-hidden border border-line hover:border-ink/20 transition-colors"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={food.image}
          alt={food.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>

      <div className="p-5">
        <h3 className="font-bold leading-tight">{food.name}</h3>
        <p className="text-sm text-muted mt-1 line-clamp-2">{food.description}</p>

        <div className="flex items-center justify-between mt-4">
          <span className="font-bold">{formatPrice(food.price)}</span>
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