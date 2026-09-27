import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Star, Clock, SearchX, ShoppingBag } from 'lucide-react'

import { getFoodById } from '../data/foods'
import { getRestaurantById } from '../data/restaurants'
import { useApp } from '../context/AppContext'
import { formatPrice } from '../utils/priceCalculator'

import Button from '../components/common/Button'
import EmptyState from '../components/common/EmptyState'
import QuantitySelector from '../components/food/QuantitySelector'
import IngredientsList from '../components/food/IngredientsList'
import FoodRestaurantLink from '../components/food/FoodRestaurantLink'

export default function FoodDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useApp()

  const food = getFoodById(id)
  const restaurant = food ? getRestaurantById(food.restaurantId) : null

  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  /* ===== Not Found ===== */
  if (!food) {
    return (
      <div className="container-nomi section">
        <EmptyState
          icon={SearchX}
          title="Dish not found."
          description="It might have been removed or is no longer available."
          action="Browse restaurants"
          actionTo="/restaurants"
        />
      </div>
    )
  }

  const total = +(food.price * quantity).toFixed(2)

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) addToCart(food, restaurant)
    setAdded(true)
    setTimeout(() => setAdded(false), 1400)
  }

  const handleOrderNow = () => {
    for (let i = 0; i < quantity; i++) addToCart(food, restaurant)
    navigate('/cart')
  }

  return (
    <div className="container-nomi pt-8 md:pt-14 pb-20 md:pb-32">

      {/* Back */}
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="text-sm font-semibold text-muted hover:text-ink transition-colors mb-6 md:mb-10"
      >
        ← Back
      </button>

      <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-start">

        {/* ===== Left — Image ===== */}
        <div className="md:sticky md:top-24">
          <div className="aspect-square rounded-[20px] md:rounded-[24px] overflow-hidden bg-line">
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ===== Right — Info ===== */}
        <div className="flex flex-col gap-7 md:gap-8">

          {/* Header */}
          <div>
            {food.popular && (
              <p className="eyebrow mb-3 !text-accent">Popular</p>
            )}

            <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.08]">
              {food.name}
            </h1>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4 text-sm text-muted">
              <span className="inline-flex items-center gap-1.5">
                <Star size={15} strokeWidth={0} className="fill-accent" />
                <b className="text-ink font-semibold">{food.rating.toFixed(1)}</b>
              </span>

              {restaurant?.deliveryTime && (
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={15} strokeWidth={2.2} />
                  {restaurant.deliveryTime}
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-muted text-base md:text-lg leading-relaxed">
            {food.description}
          </p>

          {/* Price */}
          <div>
            <p className="eyebrow mb-2">Price</p>
            <p className="text-3xl md:text-4xl font-extrabold">
              {formatPrice(food.price)}
            </p>
          </div>

          {/* Ingredients */}
          <IngredientsList ingredients={food.ingredients} />

          {/* Restaurant */}
          <div>
            <p className="eyebrow mb-3">Available at</p>
            <FoodRestaurantLink restaurant={restaurant} />
          </div>

          {/* Quantity + Total */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <QuantitySelector value={quantity} onChange={setQuantity} />

            <div className="text-sm text-muted">
              Total{' '}
              <b className="text-ink font-bold text-base">{formatPrice(total)}</b>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              onClick={handleAdd}
              size="lg"
              className="flex-1 min-w-[180px]"
            >
              <ShoppingBag size={16} strokeWidth={2.5} />
              {added ? 'Added ✓' : 'Add to cart'}
            </Button>

            <Button
              onClick={handleOrderNow}
              variant="secondary"
              size="lg"
              className="flex-1 min-w-[140px]"
            >
              Order now
            </Button>
          </div>

        </div>
      </div>
    </div>
  )
}