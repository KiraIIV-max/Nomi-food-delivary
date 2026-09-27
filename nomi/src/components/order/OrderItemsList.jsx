import { Link } from 'react-router-dom'
import { formatPrice } from '../../utils/priceCalculator'

export default function OrderItemsList({ items }) {
  if (!items?.length) return null

  const count = items.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <div className="bg-surface border border-line rounded-[16px] p-5 md:p-6">
      <div className="flex items-baseline justify-between mb-4">
        <p className="eyebrow">Your order</p>
        <span className="text-xs text-muted">
          {count} {count === 1 ? 'item' : 'items'}
        </span>
      </div>

      <ul className="divide-y divide-line">
        {items.map((item) => (
          <li
            key={item.foodId}
            className="flex items-center gap-3 py-3 first:pt-0 last:pb-0"
          >
            <Link
              to={`/food/${item.foodId}`}
              className="w-12 h-12 rounded-[10px] overflow-hidden bg-line shrink-0"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </Link>

            <div className="flex-1 min-w-0">
              <Link
                to={`/food/${item.foodId}`}
                className="text-sm font-semibold truncate hover:text-accent transition-colors block"
              >
                {item.name}
              </Link>
              <p className="text-xs text-muted truncate">
                {item.restaurantName} · ×{item.quantity}
              </p>
            </div>

            <span className="text-sm font-semibold whitespace-nowrap">
              {formatPrice(item.price * item.quantity)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}