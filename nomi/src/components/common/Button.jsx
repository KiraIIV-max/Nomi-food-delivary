import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const variants = {
  primary:   'bg-accent text-white hover:brightness-95',
  secondary: 'bg-transparent border border-ink text-ink hover:bg-ink hover:text-cream',
  dark:      'bg-dark text-cream hover:brightness-110',
  ghost:     'bg-transparent text-ink hover:text-accent',
}

const sizes = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-12 px-6 text-sm',
  lg: 'h-[52px] px-7 text-base',
}

export default function Button({
  to,
  href,
  children,
  variant = 'primary',
  size = 'md',
  arrow = false,
  className = '',
  ...rest
}) {
  const cls = [
    'inline-flex items-center justify-center gap-2 rounded-[12px] font-semibold',
    'transition-all duration-200 whitespace-nowrap',
    variants[variant],
    sizes[size],
    className,
  ].join(' ')

  const content = (
    <>
      {children}
      {arrow && <ArrowRight size={16} strokeWidth={2.5} />}
    </>
  )

  if (to)  return <Link to={to} className={cls} {...rest}>{content}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{content}</a>
  return <button className={cls} {...rest}>{content}</button>
}