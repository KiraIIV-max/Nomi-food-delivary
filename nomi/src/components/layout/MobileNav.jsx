import { NavLink } from 'react-router-dom'
import { Home, Heart, ShoppingBag, User } from 'lucide-react'
import { useApp } from '../../context/AppContext'

const items = [
  { to: '/',          label: 'Home',   Icon: Home },
  { to: '/favorites', label: 'Saved',  Icon: Heart },
  { to: '/cart',      label: 'Cart',   Icon: ShoppingBag, badgeKey: 'cart' },
  { to: '/profile',   label: 'Profile',Icon: User },
]

export default function MobileNav() {
  const { cartCount } = useApp()

  return (
    <nav
      className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-[rgba(247,243,236,.94)] backdrop-blur-md border-t border-line pb-[env(safe-area-inset-bottom)]"
      aria-label="Primary"
    >
      <ul className="grid grid-cols-4">
        {items.map(({ to, label, Icon, badgeKey }) => {
          const badge = badgeKey === 'cart' ? cartCount : 0
          return (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  [
                    'relative flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-semibold',
                    isActive ? 'text-accent' : 'text-ink/70',
                  ].join(' ')
                }
              >
                <span className="relative">
                  <Icon size={22} strokeWidth={2} />
                  {badge > 0 && (
                    <span className="absolute -top-1 -right-2 min-w-[16px] h-4 px-1 rounded-full bg-accent text-white text-[9px] font-bold flex items-center justify-center">
                      {badge}
                    </span>
                  )}
                </span>
                {label}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}