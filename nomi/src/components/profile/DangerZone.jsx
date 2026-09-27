import { useState } from 'react'
import { AlertTriangle } from 'lucide-react'

export default function DangerZone({ onReset }) {
  const [confirming, setConfirming] = useState(false)

  const handleConfirm = () => {
    onReset()
    setConfirming(false)
  }

  return (
    <div className="border border-error/25 bg-error/[0.03] rounded-[16px] p-5 md:p-6">
      <div className="flex items-start gap-3">
        <AlertTriangle
          size={18}
          strokeWidth={2.2}
          className="text-error shrink-0 mt-0.5"
        />

        <div className="flex-1">
          <h3 className="font-bold">Clear all data</h3>
          <p className="text-sm text-muted mt-1">
            This will remove your cart, orders, favorites, and profile
            information from this device.
          </p>

          {!confirming ? (
            <button
              type="button"
              onClick={() => setConfirming(true)}
              className="mt-4 h-10 px-4 rounded-[10px] border border-error text-error text-sm font-semibold hover:bg-error hover:text-white transition-colors"
            >
              Clear everything
            </button>
          ) : (
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-error">
                Are you sure?
              </span>

              <button
                type="button"
                onClick={handleConfirm}
                className="h-10 px-4 rounded-[10px] bg-error text-white text-sm font-semibold hover:brightness-95 transition-all"
              >
                Yes, clear it
              </button>

              <button
                type="button"
                onClick={() => setConfirming(false)}
                className="h-10 px-4 rounded-[10px] border border-line text-sm font-semibold hover:border-ink/40 transition-colors"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}