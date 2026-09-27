import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getFeaturedRestaurants } from '../../data/restaurants'
import RestaurantCard from '../restaurant/RestaurantCard'
import SectionHeader from '../common/SectionHeader'

export default function PopularRestaurants() {
  const restaurants = getFeaturedRestaurants().slice(0, 4)

  return (
    <section className="container-nomi pb-20 md:pb-32">
      <SectionHeader
        eyebrow="Near you"
        title="Popular near you"
        action="View all"
        actionTo="/restaurants"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {restaurants.map((r) => (
          <RestaurantCard key={r.id} restaurant={r} />
        ))}
      </div>

      {/* Mobile only "View all" */}
      <Link
        to="/restaurants"
        className="sm:hidden mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-ink"
      >
        View all
        <ArrowRight size={16} strokeWidth={2.5} />
      </Link>
    </section>
  )
}