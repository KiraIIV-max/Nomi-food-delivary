const STYLES = {
  confirmed: 'bg-accent/10 text-accent border-accent/20',
  preparing: 'bg-amber-500/10 text-amber-700 border-amber-500/20',
  delivered: 'bg-success/10 text-success border-success/20',
  cancelled: 'bg-error/10 text-error border-error/20',
}

const LABELS = {
  confirmed: 'Confirmed',
  preparing: 'Preparing',
  delivered: 'Delivered',
  cancelled: 'Cancelled',
}

export default function OrderStatusBadge({ status = 'confirmed' }) {
  const style = STYLES[status] || STYLES.confirmed
  const label = LABELS[status] || status

  return (
    <span
      className={[
        'inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest',
        'px-2.5 py-1 rounded-full border whitespace-nowrap',
        style,
      ].join(' ')}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {label}
    </span>
  )
}