import { Link } from 'react-router-dom'
import { Trash2 } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import { formatPrice } from '../../utils/priceCalculator'
import QuantitySelector from '../food/QuantitySelector'

export default function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useApp()
  const lineTotal = +(item.price * item.quantity).toFixed(2)

  return (
    <div className="flex gap-4 md:gap-5 py-5 border-b border-line last:border-b-0">

      {/* Image */}
      <Link
        to={`/food/${item.foodId}`}
        className="w-24 h-24 md:w-28 md:h-28 rounded-[12px] overflow-hidden bg-line shrink-0"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </Link>

      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col justify-between">

        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <Link
              to={`/food/${item.foodId}`}
              className="font-bold leading-tight hover:text-accent transition-colors line-clamp-1"
            >
              {item.name}
            </Link>

            {item.restaurantName && (
              <Link
                to={`/restaurants/${item.restaurantId}`}
                className="text-xs text-muted hover:text-ink transition-colors mt-0.5 inline-block"
              >
                {item.restaurantName}
              </Link>
            )}
          </div>

          <button
            type="button"
            aria-label={`Remove ${item.name}`}
            onClick={() => removeFromCart(item.foodId)}
            className="w-8 h-8 rounded-full flex items-center justify-center text-muted hover:text-error hover:bg-error/5 transition-colors shrink-0"
          >
            <Trash2 size={15} strokeWidth={2.2} />
          </button>
        </div>

        {/* Bottom row: qty + total */}
        <div className="flex items-center justify-between gap-3 mt-4">
          <div className="scale-[0.9] origin-left">
            <QuantitySelector
              value={item.quantity}
              onChange={(n) => {
                const diff = n - item.quantity
                if (diff > 0) {
                  for (let i = 0; i < diff; i++) increaseQuantity(item.foodId)
                } else {
                  for (let i = 0; i < -diff; i++) decreaseQuantity(item.foodId)
                }
              }}
            />
          </div>

          <span className="font-bold text-base whitespace-nowrap">
            {formatPrice(lineTotal)}
          </span>
        </div>
      </div>
    </div>
  )
}