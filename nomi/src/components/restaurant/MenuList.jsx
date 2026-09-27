import { UtensilsCrossed } from 'lucide-react'
import MenuListItem from './MenuListItem'
import EmptyState from '../common/EmptyState'

export default function MenuList({ items, restaurant }) {
  if (!items.length) {
    return (
      <EmptyState
        icon={UtensilsCrossed}
        title="Nothing here yet."
        description="Try a different category."
      />
    )
  }

  return (
    <div className="grid gap-3 md:gap-4">
      {items.map((food) => (
        <MenuListItem key={food.id} food={food} restaurant={restaurant} />
      ))}
    </div>
  )
}