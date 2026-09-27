import { useApp } from '../../context/AppContext'
import { formatPrice, DELIVERY_FEE, FREE_DISCOUNT } from '../../utils/priceCalculator'
import Button from '../common/Button'

export default function CartSummary({ showCTA = true }) {
  const { totals, cartCount, clearCart } = useApp()

  const isEmpty = cartCount === 0

  return (
    <aside className="bg-surface border border-line rounded-[20px] p-6 md:p-7 md:sticky md:top-24">
      <h2 className="text-xl md:text-2xl font-extrabold mb-6">Order summary</h2>

      <div className="space-y-3 text-sm">
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

      <div className="border-t border-line mt-5 pt-5 flex items-center justify-between">
        <span className="font-bold">Total</span>
        <span className="font-extrabold text-2xl">
          {formatPrice(totals.total)}
        </span>
      </div>

      {showCTA && (
        <div className="mt-7 space-y-3">
          <Button
            to={isEmpty ? undefined : '/checkout'}
            disabled={isEmpty}
            size="lg"
            arrow={!isEmpty}
            className="w-full !rounded-[12px] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Proceed to checkout
          </Button>

          {!isEmpty && (
            <button
              type="button"
              onClick={clearCart}
              className="w-full text-xs font-semibold text-muted hover:text-error transition-colors py-2"
            >
              Clear cart
            </button>
          )}
        </div>
      )}

      {/* Free delivery hint */}
      {!isEmpty && totals.discount === 0 && totals.subtotal < 20 && (
        <p className="text-xs text-muted text-center mt-4">
          Spend {formatPrice(20 - totals.subtotal)} more for a discount
        </p>
      )}

      {/* Applied discount hint */}
      {!isEmpty && totals.discount === FREE_DISCOUNT && (
        <p className="text-xs text-success text-center mt-4 font-semibold">
          You saved {formatPrice(FREE_DISCOUNT)} on this order
        </p>
      )}
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