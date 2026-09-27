import { Link } from 'react-router-dom'
import { Receipt, Heart, MapPin } from 'lucide-react'

export default function ProfileStats({ orders, favorites, addresses }) {
  const stats = [
    {
      id: 'orders',
      label: 'Orders',
      value: orders,
      Icon: Receipt,
      to: '/orders',
    },
    {
      id: 'favorites',
      label: 'Saved',
      value: favorites,
      Icon: Heart,
      to: '/favorites',
    },
    {
      id: 'addresses',
      label: 'Addresses',
      value: addresses,
      Icon: MapPin,
      to: '/profile',
    },
  ]

  return (
    <div className="grid grid-cols-3 gap-3 md:gap-4">
      {stats.map(({ id, label, value, Icon, to }) => (
        <Link
          key={id}
          to={to}
          className="group bg-surface border border-line rounded-[16px] p-4 md:p-5 hover:border-ink/25 transition-colors"
        >
          <Icon
            size={18}
            strokeWidth={2.2}
            className="text-accent mb-3 md:mb-4"
          />
          <p className="text-2xl md:text-3xl font-extrabold leading-none">
            {value}
          </p>
          <p className="text-xs md:text-sm text-muted mt-1.5 font-medium">
            {label}
          </p>
        </Link>
      ))}
    </div>
  )
}