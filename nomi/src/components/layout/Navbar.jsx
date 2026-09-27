import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Search, Heart, ShoppingBag, User } from 'lucide-react'
import { useApp } from '../../context/AppContext'

const links = [
  { to: '/',            label: 'Home' },
  { to: '/restaurants', label: 'Restaurants' },
  { to: '/offers',      label: 'Offers' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { cartCount } = useApp()
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setScrolled(window.scrollY > 12), [pathname])

  return (
    <header
      className={[
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[rgba(247,243,236,.88)] backdrop-blur-md border-b border-line'
          : 'bg-transparent border-b border-transparent',
      ].join(' ')}
    >
      <div className="container-nomi">
        <div className="h-16 md:h-20 flex items-center justify-between gap-6">

          {/* Logo */}
          <Link to="/" className="text-2xl font-extrabold tracking-tight">
            NOMI
          </Link>

          {/* Center links */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  [
                    'px-4 py-2 text-sm font-semibold rounded-[10px] transition-colors',
                    isActive
                      ? 'text-accent'
                      : 'text-ink/80 hover:text-ink',
                  ].join(' ')
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <IconBtn to="/restaurants" label="Search">
              <Search size={20} strokeWidth={2} />
            </IconBtn>

            <IconBtn to="/favorites" label="Favorites" className="hidden sm:inline-flex">
              <Heart size={20} strokeWidth={2} />
            </IconBtn>

            <IconBtn to="/cart" label="Cart" badge={cartCount}>
              <ShoppingBag size={20} strokeWidth={2} />
            </IconBtn>

            <IconBtn to="/profile" label="Profile" className="hidden sm:inline-flex">
              <User size={20} strokeWidth={2} />
            </IconBtn>
          </div>
        </div>
      </div>
    </header>
  )
}

function IconBtn({ to, children, label, badge, className = '' }) {
  return (
    <Link
      to={to}
      aria-label={label}
      className={[
        'relative inline-flex items-center justify-center w-10 h-10 rounded-full',
        'text-ink/85 hover:text-accent transition-colors',
        className,
      ].join(' ')}
    >
      {children}
      {badge > 0 && (
        <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-accent text-white text-[10px] font-bold flex items-center justify-center">
          {badge}
        </span>
      )}
    </Link>
  )
}