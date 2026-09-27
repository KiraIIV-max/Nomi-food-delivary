import { ShoppingBag } from 'lucide-react'
import EmptyState from '../common/EmptyState'

export default function EmptyCart() {
  return (
    <EmptyState
      icon={ShoppingBag}
      title="Your cart is waiting."
      description="Add something delicious and we'll take it from there."
      action="Explore food"
      actionTo="/restaurants"
    />
  )
}