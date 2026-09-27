import { useMemo, useState } from 'react'
import { useApp } from '../context/AppContext'
import { restaurants as allRestaurants } from '../data/restaurants'
import { foods as allFoods } from '../data/foods'
import { getRestaurantById } from '../data/restaurants'

import FavoriteTabs from '../components/favorites/FavoriteTabs'
import FavoriteRestaurants from '../components/favorites/FavoriteRestaurants'
import FavoriteFoods from '../components/favorites/FavoriteFoods'
import Button from '../components/common/Button'

export default function Favorites() {
  const { favorites } = useApp()
  const [activeTab, setActiveTab] = useState('restaurants')

  /* ===== Derived lists ===== */
  const savedRestaurants = useMemo(
    () =>
      favorites.restaurants
        .map((id) => allRestaurants.find((r) => r.id === id))
        .filter(Boolean),
    [favorites.restaurants]
  )

  const savedFoods = useMemo(
    () =>
      favorites.foods
        .map((id) => {
          const food = allFoods.find((f) => f.id === id)
          if (!food) return null
          const restaurant = getRestaurantById(food.restaurantId)
          return { food, restaurant }
        })
        .filter(Boolean),
    [favorites.foods]
  )

  const counts = {
    restaurants: savedRestaurants.length,
    food: savedFoods.length,
  }

  const isEmpty = counts.restaurants === 0 && counts.food === 0

  return (
    <div className="container-nomi pt-8 md:pt-14 pb-20 md:pb-32">

      {/* Header */}
      <header className="mb-8 md:mb-10 max-w-2xl">
        <p className="eyebrow mb-3">Saved</p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
          Saved for later.
        </h1>
        <p className="text-muted mt-4 text-base md:text-lg">
          Everything you loved, in one place.
        </p>
      </header>

      {/* Empty تمامًا */}
      {isEmpty ? (
        <div className="text-center py-16 md:py-24 max-w-md mx-auto">
          <h3 className="text-2xl md:text-3xl font-extrabold">
            Nothing saved yet.
          </h3>
          <p className="text-muted mt-3 text-sm md:text-base">
            Found something you love? Save it for later.
          </p>
          <div className="mt-8 flex justify-center">
            <Button to="/restaurants" arrow>Explore restaurants</Button>
          </div>
        </div>
      ) : (
        <>
          {/* Tabs */}
          <div className="mb-8 md:mb-10">
            <FavoriteTabs
              active={activeTab}
              onChange={setActiveTab}
              counts={counts}
            />
          </div>

          {/* Content */}
          {activeTab === 'restaurants' && (
            <FavoriteRestaurants restaurants={savedRestaurants} />
          )}

          {activeTab === 'food' && (
            <FavoriteFoods foods={savedFoods} />
          )}
        </>
      )}
    </div>
  )
}