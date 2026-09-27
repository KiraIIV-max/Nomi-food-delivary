import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { foods } from '../../data/foods'
import { restaurants } from '../../data/restaurants'
import { useApp } from '../../context/AppContext'
import { formatPrice } from '../../utils/priceCalculator'
import SectionHeader from '../common/SectionHeader'

export default function FeaturedFood() {
  const { addToCart } = useApp()

  const featured = foods.filter((f) => f.popular).slice(0, 4)
  if (featured.length < 4) return null

  const [main, side1, side2, side3] = featured
  const getRestaurant = (food) => restaurants.find((r) => r.id === food.restaurantId)

  const handleAdd = (e, food) => {
    e.preventDefault()
    addToCart(food, getRestaurant(food))
  }

  return (
    <section className="container-nomi pb-20 md:pb-32">
      <SectionHeader eyebrow="Featured" title="Worth a bite." />

      <div className="grid md:grid-cols-2 gap-5 md:gap-6">
        {/* Large card */}
        <Link
          to={`/food/${main.id}`}
          className="group relative block aspect-square md:aspect-auto md:min-h-[600px] rounded-[20px] overflow-hidden bg-line"
        >
          <img
            src={main.image}
            alt={main.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 text-white">
            <p className="eyebrow !text-white/70 mb-2">Most loved</p>
            <h3 className="text-2xl md:text-4xl font-extrabold leading-tight">
              {main.name}
            </h3>
            <p className="text-white/80 mt-2 max-w-sm text-sm md:text-base">
              {main.description}
            </p>
            <div className="flex items-center justify-between mt-5">
              <span className="text-xl md:text-2xl font-bold">
                {formatPrice(main.price)}
              </span>
              <button
                type="button"
                onClick={(e) => handleAdd(e, main)}
                className="inline-flex items-center gap-1.5 bg-accent hover:brightness-95 text-white text-sm font-semibold px-4 h-10 rounded-[10px] transition-all"
              >
                <Plus size={16} strokeWidth={2.5} />
                Add
              </button>
            </div>
          </div>
        </Link>

        {/* Side cards */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-5 md:gap-6">
          {[side1, side2, side3].map((food) => (
            <FoodTile
              key={food.id}
              food={food}
              onAdd={(e) => handleAdd(e, food)}
              className={food === side3 ? 'col-span-2' : ''}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function FoodTile({ food, onAdd, className = '' }) {
  return (
    <Link
      to={`/food/${food.id}`}
      className={`group relative block rounded-[20px] overflow-hidden bg-line aspect-square ${className}`}
    >
      <img
        src={food.image}
        alt={food.name}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />

      <div className="absolute bottom-0 inset-x-0 p-4 md:p-5 text-white">
        <h4 className="font-bold text-sm md:text-base leading-tight">
          {food.name}
        </h4>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm md:text-base font-bold">
            {formatPrice(food.price)}
          </span>
          <button
            type="button"
            onClick={onAdd}
            aria-label={`Add ${food.name}`}
            className="w-8 h-8 rounded-full bg-white text-ink flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
          >
            <Plus size={14} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </Link>
  )
}