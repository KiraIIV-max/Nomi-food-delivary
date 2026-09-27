import { Copy, Clock, Receipt } from 'lucide-react'
import { useState } from 'react'

export default function OrderInfoCard({ order }) {
  const [copied, setCopied] = useState(false)

  const copyId = async () => {
    try {
      await navigator.clipboard.writeText(order.id)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* clipboard مش مدعوم — نتجاهل */
    }
  }

  return (
    <div className="grid sm:grid-cols-3 gap-3 md:gap-4">

      {/* Order ID */}
      <div className="bg-surface border border-line rounded-[14px] p-4">
        <div className="flex items-center gap-2 text-muted mb-2">
          <Receipt size={14} strokeWidth={2.4} />
          <span className="text-[11px] uppercase tracking-widest font-semibold">
            Order ID
          </span>
        </div>

        <div className="flex items-center justify-between gap-2">
          <span className="font-extrabold text-lg">#{order.id}</span>
          <button
            type="button"
            aria-label="Copy order ID"
            onClick={copyId}
            className="w-8 h-8 rounded-full flex items-center justify-center text-muted hover:text-ink hover:bg-cream transition-colors"
          >
            <Copy size={14} strokeWidth={2.4} />
          </button>
        </div>

        {copied && (
          <p className="text-[11px] text-success font-semibold mt-1">
            Copied ✓
          </p>
        )}
      </div>

      {/* Estimated delivery */}
      <div className="bg-surface border border-line rounded-[14px] p-4">
        <div className="flex items-center gap-2 text-muted mb-2">
          <Clock size={14} strokeWidth={2.4} />
          <span className="text-[11px] uppercase tracking-widest font-semibold">
            Estimated delivery
          </span>
        </div>
        <p className="font-extrabold text-lg">{order.estimatedDelivery}</p>
      </div>

      {/* Total */}
      <div className="bg-surface border border-line rounded-[14px] p-4">
        <div className="text-muted mb-2 text-[11px] uppercase tracking-widest font-semibold">
          Total paid
        </div>
        <p className="font-extrabold text-lg">
          ${order.total.toFixed(2)}
        </p>
      </div>

    </div>
  )
}