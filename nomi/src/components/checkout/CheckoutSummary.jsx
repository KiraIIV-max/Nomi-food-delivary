import { useApp } from '../../context/AppContext'
import { formatPrice } from '../../utils/priceCalculator'

export default function CheckoutSummary() {
  const { cart, totals, cartCount } = useApp()

  return (
    <aside className="bg-surface border border-line rounded-[20px] p-6 md:p-7 md:sticky md:top-24">
      <div className="flex items-baseline justify-between mb-5">
        <h2 className="text-xl md:text-2xl font-extrabold">Order summary</h2>
        <span className="text-xs text-muted">
          {cartCount} {cartCount === 1 ? 'item' : 'items'}
        </span>
      </div>

      {/* Items list */}
      <ul className="space-y-3 max-h-[260px] overflow-y-auto pr-1 -mr-1">
        {cart.map((item) => (
          <li key={item.foodId} className="flex items-center gap-3">
            <div className="relative shrink-0">
              <div className="w-12 h-12 rounded-[10px] overflow-hidden bg-line">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-full bg-ink text-cream text-[10px] font-bold flex items-center justify-center">
                {item.quantity}
              </span>
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate">{item.name}</p>
              <p className="text-xs text-muted truncate">
                {item.restaurantName}
              </p>
            </div>

            <span className="text-sm font-semibold whitespace-nowrap">
              {formatPrice(item.price * item.quantity)}
            </span>
          </li>
        ))}
      </ul>

      {/* Totals */}
      <div className="border-t border-line mt-5 pt-5 space-y-3 text-sm">
        <Row label="Subtotal" value={formatPrice(totals.subtotal)} />
        <Row
          label="Delivery"
          value={totals.delivery === 0 ? '—' : formatPrice(totals.delivery)}
        />
        {totals.discount > 0 && (
          <Row
            label="Discount"
            value={`− ${formatPrice(totals.discount)}`}
            valueClass="text-success font-semibold"
          />
        )}
      </div>

      <div className="border-t border-line mt-4 pt-4 flex items-center justify-between">
        <span className="font-bold">Total</span>
        <span className="font-extrabold text-2xl">
          {formatPrice(totals.total)}
        </span>
      </div>
    </aside>
  )
}

function Row({ label, value, valueClass = '' }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted">{label}</span>
      <span className={valueClass}>{value}</span>
    </div>
  )
}