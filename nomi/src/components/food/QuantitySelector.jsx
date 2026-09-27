import { Minus, Plus } from 'lucide-react'

export default function QuantitySelector({ value, onChange, min = 1, max = 20 }) {
  const dec = () => onChange(Math.max(min, value - 1))
  const inc = () => onChange(Math.min(max, value + 1))

  return (
    <div className="inline-flex items-center bg-surface border border-line rounded-[12px] h-12">
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={dec}
        disabled={value <= min}
        className="w-12 h-full flex items-center justify-center text-ink hover:text-accent disabled:text-faint disabled:cursor-not-allowed transition-colors"
      >
        <Minus size={16} strokeWidth={2.5} />
      </button>

      <span
        aria-live="polite"
        className="min-w-[40px] text-center font-bold text-base select-none"
      >
        {value}
      </span>

      <button
        type="button"
        aria-label="Increase quantity"
        onClick={inc}
        disabled={value >= max}
        className="w-12 h-full flex items-center justify-center text-ink hover:text-accent disabled:text-faint disabled:cursor-not-allowed transition-colors"
      >
        <Plus size={16} strokeWidth={2.5} />
      </button>
    </div>
  )
}