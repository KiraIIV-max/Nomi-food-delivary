import Button from './Button'

export default function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  actionTo,
}) {
  return (
    <div className="text-center py-16 md:py-24 max-w-md mx-auto">
      {Icon && (
        <div className="w-16 h-16 mx-auto rounded-full bg-surface border border-line flex items-center justify-center mb-6">
          <Icon size={26} strokeWidth={1.8} className="text-muted" />
        </div>
      )}

      <h3 className="text-2xl md:text-3xl font-extrabold leading-tight">
        {title}
      </h3>

      {description && (
        <p className="text-muted mt-3 text-sm md:text-base">{description}</p>
      )}

      {action && actionTo && (
        <div className="mt-8 flex justify-center">
          <Button to={actionTo} arrow>{action}</Button>
        </div>
      )}
    </div>
  )
}