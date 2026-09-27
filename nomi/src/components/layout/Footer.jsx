import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'Explore',
    links: [
      { label: 'Restaurants', to: '/restaurants' },
      { label: 'Popular food', to: '/restaurants' },
      { label: 'Categories',   to: '/restaurants' },
      { label: 'Offers',       to: '/offers' },
    ],
  },
  {
    title: 'Account',
    links: [
      { label: 'Orders',    to: '/orders' },
      { label: 'Favorites', to: '/favorites' },
      { label: 'Profile',   to: '/profile' },
      { label: 'Cart',      to: '/cart' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About NOMI', to: '/' },
      { label: 'Contact',    to: '/' },
      { label: 'Careers',    to: '/' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-dark text-cream mt-20">
      <div className="container-nomi py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <p className="text-3xl font-extrabold tracking-tight">NOMI</p>
            <p className="serif text-xl mt-2 text-cream/80">
              Food worth finding.
            </p>
          </div>

          {/* Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <p className="eyebrow !text-cream/50 mb-4">{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-cream/85 hover:text-accent transition-colors text-sm"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-cream/10 mt-14 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-cream/55">
          <p>© 2026 NOMI</p>
          <p>Made with care for good food.</p>
        </div>
      </div>
    </footer>
  )
}