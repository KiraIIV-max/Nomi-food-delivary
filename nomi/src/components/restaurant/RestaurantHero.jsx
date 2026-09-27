import { Heart, Star, Clock, Bike, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useApp } from '../../context/AppContext'

export default function RestaurantHero({ restaurant }) {
  const { isFavoriteRestaurant, toggleFavoriteRestaurant } = useApp()
  const liked = isFavoriteRestaurant(restaurant.id)

  return (
    <div className="container-nomi pt-6 md:pt-10">

      {/* Back */}
      <Link
        to="/restaurants"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-ink transition-colors mb-5"
      >
        <ArrowLeft size={16} strokeWidth={2.5} />
        All restaurants
      </Link>

      {/* Cover */}
      <div className="relative rounded-[20px] md:rounded-[24px] overflow-hidden bg-line">
        <div className="aspect-[16/9] md:aspect-[16/6]">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* subtle dark gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Favorite */}
        <button
          type="button"
          aria-label={liked ? 'Remove from favorites' : 'Add to favorites'}
          onClick={() => toggleFavoriteRestaurant(restaurant.id)}
          className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-sm"
        >
          <Heart
            size={18}
            strokeWidth={2.5}
            className={liked ? 'fill-accent text-accent' : 'text-ink'}
          />
        </button>
      </div>

      {/* Info */}
      <div className="mt-8 md:mt-10 grid md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-end">

        <div>
          <p className="eyebrow mb-3">{restaurant.cuisine}</p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
            {restaurant.name}
          </h1>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-5 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Star size={15} strokeWidth={0} className="fill-accent" />
              <b className="text-ink font-semibold">{restaurant.rating.toFixed(1)}</b>
              <span className="text-faint">rating</span>
            </span>

            <span className="inline-flex items-center gap-1.5">
              <Clock size={15} strokeWidth={2.2} />
              {restaurant.deliveryTime}
            </span>

            {restaurant.deliveryFee === 0 && (
              <span className="inline-flex items-center gap-1.5 text-success font-semibold">
                <Bike size={15} strokeWidth={2.2} />
                Free delivery
              </span>
            )}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 md:justify-end">
          {restaurant.tags?.map((t) => (
            <span
              key={t}
              className="text-xs font-semibold px-3 py-1.5 rounded-full bg-surface border border-line text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}