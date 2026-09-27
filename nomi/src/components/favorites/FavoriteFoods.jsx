import { Heart } from 'lucide-react'
import EmptyState from '../common/EmptyState'
import FoodCard from '../food/FoodCard'

export default function FavoriteFoods({ foods }) {
  if (!foods.length) {
    return (
      <EmptyState
        icon={Heart}
        title="No saved dishes."
        description="Save the dishes you love and find them fast next time."
        action="Browse food"
        actionTo="/restaurants"
      />
    )
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
      {foods.map(({ food, restaurant }) => (
        <FoodCard key={food.id} food={food} restaurant={restaurant} />
      ))}
    </div>
  )
}