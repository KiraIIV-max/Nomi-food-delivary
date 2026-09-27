import { Link } from 'react-router-dom'
import { Heart, Clock, Bike } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import Rating from '../common/Rating'

export default function RestaurantCard({ restaurant }) {
  const { isFavoriteRestaurant, toggleFavoriteRestaurant } = useApp()
  const liked = isFavoriteRestaurant(restaurant.id)

  return (
    <Link
      to={`/restaurants/${restaurant.id}`}
      className="group block bg-surface rounded-[16px] overflow-hidden border border-line hover:border-ink/20 transition-colors"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <button
          type="button"
          aria-label={liked ? 'Remove from favorites' : 'Add to favorites'}
          onClick={(e) => {
            e.preventDefault()
            toggleFavoriteRestaurant(restaurant.id)
          }}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
        >
          <Heart
            size={16}
            strokeWidth={2.5}
            className={liked ? 'fill-accent text-accent' : 'text-ink'}
          />
        </button>
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="text-lg font-bold leading-tight">{restaurant.name}</h3>
        <p className="text-sm text-muted mt-1">{restaurant.cuisine}</p>

        <div className="flex items-center gap-4 mt-4 text-sm text-muted">
          <Rating value={restaurant.rating} />
          <span className="inline-flex items-center gap-1">
            <Clock size={13} strokeWidth={2.5} />
            {restaurant.deliveryTime}
          </span>
        </div>

        {restaurant.deliveryFee === 0 && (
          <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-success">
            <Bike size={13} strokeWidth={2.5} />
            Free delivery
          </p>
        )}
      </div>
    </Link>
  )
}