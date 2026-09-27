import { Heart } from 'lucide-react'
import EmptyState from '../common/EmptyState'
import RestaurantGrid from '../restaurant/RestaurantGrid'

export default function FavoriteRestaurants({ restaurants }) {
  if (!restaurants.length) {
    return (
      <EmptyState
        icon={Heart}
        title="No saved restaurants."
        description="Found a place you love? Tap the heart and it'll show up here."
        action="Explore restaurants"
        actionTo="/restaurants"
      />
    )
  }

  return <RestaurantGrid restaurants={restaurants} />
}