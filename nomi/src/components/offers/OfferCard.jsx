import Button from '../common/Button'
import OfferCodeBox from './OfferCodeBox'

export default function OfferCard({
  badge,
  title,
  description,
  code,
  cta,
  ctaTo = '/restaurants',
  variant = 'light',
  className = '',
}) {
  const isDark = variant === 'dark'

  return (
    <article
      className={[
        'rounded-[20px] p-6 md:p-8 flex flex-col',
        'relative overflow-hidden',
        isDark
          ? 'bg-dark text-cream'
          : 'bg-surface border border-line',
        className,
      ].join(' ')}
    >
      {/* subtle glow for dark variant */}
      {isDark && (
        <div
          aria-hidden
          className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-accent/20 blur-3xl pointer-events-none"
        />
      )}

      {/* Badge */}
      {badge && (
        <span
          className={[
            'inline-block text-xs font-bold px-3 py-1.5 rounded-full self-start tracking-wide',
            isDark ? 'bg-accent text-white' : 'bg-accent/10 text-accent',
          ].join(' ')}
        >
          {badge}
        </span>
      )}

      {/* Title */}
      <h3
        className={[
          'font-extrabold leading-[1.1] mt-5',
          'text-2xl md:text-3xl',
        ].join(' ')}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={[
          'mt-3 text-sm md:text-base leading-relaxed',
          isDark ? 'text-cream/70' : 'text-muted',
        ].join(' ')}
      >
        {description}
      </p>

      {/* Code + CTA */}
      <div className="mt-6 md:mt-8 flex flex-wrap items-center gap-3 relative">
        {code && (
          <div className={isDark ? '[&_button]:!bg-dark [&_button]:!border-cream/15' : ''}>
            <OfferCodeBox code={code} />
          </div>
        )}

        <Button
          to={ctaTo}
          variant={isDark ? 'primary' : 'secondary'}
          arrow
        >
          {cta}
        </Button>
      </div>
    </article>
  )
}