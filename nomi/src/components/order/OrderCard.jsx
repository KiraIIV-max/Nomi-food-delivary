import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { formatDate } from '../../utils/formatDate'
import { formatPrice } from '../../utils/priceCalculator'
import OrderStatusBadge from './OrderStatusBadge'

export default function OrderCard({ order }) {
  const itemCount = order.items.reduce((sum, i) => sum + i.quantity, 0)
  const preview = order.items.slice(0, 3)
  const more = order.items.length - preview.length

  return (
    <Link
      to={`/orders/${order.id}`}
      className="group flex flex-col bg-surface border border-line rounded-[16px] p-5 md:p-6 hover:border-ink/25 transition-colors"
    >
      {/* Top: ID + Date + Status */}
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="min-w-0">
          <p className="font-extrabold text-lg leading-tight">
            Order #{order.id}
          </p>
          <p className="text-xs text-muted mt-1">
            {formatDate(order.createdAt)}
          </p>
        </div>
        <OrderStatusBadge status={order.status} />
      </div>

      {/* Thumbnails */}
      <div className="flex items-center gap-2 mb-5">
        {preview.map((item) => (
          <div
            key={item.foodId}
            className="w-11 h-11 rounded-[10px] overflow-hidden bg-line border border-line shrink-0"
          >
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {more > 0 && (
          <div className="w-11 h-11 rounded-[10px] bg-cream border border-line flex items-center justify-center text-xs font-bold text-muted shrink-0">
            +{more}
          </div>
        )}
      </div>

      {/* Footer: count + total + arrow */}
      <div className="mt-auto pt-4 border-t border-line flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted">
            {itemCount} {itemCount === 1 ? 'item' : 'items'}
          </span>
          <span className="font-extrabold">{formatPrice(order.total)}</span>
        </div>

        <span className="inline-flex items-center gap-1 text-sm font-semibold text-muted group-hover:text-accent transition-colors">
          View
          <ArrowRight
            size={14}
            strokeWidth={2.5}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </span>
      </div>
    </Link>
  )
}