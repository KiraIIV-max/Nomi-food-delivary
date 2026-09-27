import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export default function OfferCodeBox({ code }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* clipboard مش مدعوم */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={[
        'group inline-flex items-center gap-3 px-4 h-11 rounded-[10px] transition-all',
        'bg-cream border border-line hover:border-ink/30',
      ].join(' ')}
      aria-label={`Copy code ${code}`}
    >
      <span className="font-mono font-extrabold tracking-widest text-sm">
        {code}
      </span>

      <span className="w-px h-4 bg-line" aria-hidden />

      <span className="inline-flex items-center gap-1 text-xs font-semibold text-muted group-hover:text-accent transition-colors">
        {copied ? (
          <>
            <Check size={13} strokeWidth={2.8} />
            Copied
          </>
        ) : (
          <>
            <Copy size={13} strokeWidth={2.4} />
            Copy
          </>
        )}
      </span>
    </button>
  )
}