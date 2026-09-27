import { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SearchX } from 'lucide-react'

import { restaurants } from '../data/restaurants'
import { categories } from '../data/categories'

import RestaurantFilters, {
  CUISINE_FILTERS,
  SORT_OPTIONS,
} from '../components/restaurant/RestaurantFilters'
import RestaurantGrid from '../components/restaurant/RestaurantGrid'
import EmptyState from '../components/common/EmptyState'

/* ==============================
   منطق الفلترة والترتيب
   ============================== */
function filterAndSort({ query, cuisine, sort, categoryFromUrl }) {
  const q = query.trim().toLowerCase()
  const activeCuisine = categoryFromUrl || cuisine

  let list = [...restaurants]

  // 1) Category من الـ URL (لو جاي من Home categories)
  if (categoryFromUrl) {
    list = list.filter((r) => r.categoryIds?.includes(categoryFromUrl))
  }
  // 2) Cuisine filter العادي
  else if (activeCuisine && activeCuisine !== 'all') {
    const label = CUISINE_FILTERS.find((f) => f.id === activeCuisine)?.label
    if (label) {
      list = list.filter((r) =>
        r.tags?.some((t) => t.toLowerCase() === label.toLowerCase()) ||
        r.cuisine.toLowerCase().includes(label.toLowerCase())
      )
    }
  }

  // 3) Search query
  if (q) {
    list = list.filter((r) => {
      const hay = [
        r.name,
        r.cuisine,
        ...(r.tags || []),
      ].join(' ').toLowerCase()
      return hay.includes(q)
    })
  }

  // 4) Sort
  switch (sort) {
    case 'rating':
      list.sort((a, b) => b.rating - a.rating)
      break
    case 'fastest': {
      const minTime = (r) => parseInt(r.deliveryTime.split('–')[0], 10) || 999
      list.sort((a, b) => minTime(a) - minTime(b))
      break
    }
    case 'popular':
    default:
      list.sort((a, b) => (b.featured === true) - (a.featured === true))
      break
  }

  return list
}

/* ==============================
   الصفحة
   ============================== */
export default function Restaurants() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryFromUrl = searchParams.get('category') || ''

  const [query, setQuery]     = useState('')
  const [cuisine, setCuisine] = useState(categoryFromUrl || 'all')
  const [sort, setSort]       = useState('popular')

  // لو الـ user غيّر الـ category من الرابط (مثلاً جاي من Home)
  useEffect(() => {
    if (categoryFromUrl) setCuisine('all')
  }, [categoryFromUrl])

  // تنظيف URL لو غيّر الـ cuisine يدويًا
  const handleCuisineChange = (id) => {
    setCuisine(id)
    if (categoryFromUrl) {
      const next = new URLSearchParams(searchParams)
      next.delete('category')
      setSearchParams(next, { replace: true })
    }
  }

  const results = useMemo(
    () => filterAndSort({ query, cuisine, sort, categoryFromUrl }),
    [query, cuisine, sort, categoryFromUrl]
  )

  const activeCategory = categories.find((c) => c.id === categoryFromUrl)

  return (
    <div className="container-nomi section-tight md:pt-16 md:pb-32">

      {/* Header */}
      <header className="mb-10 md:mb-14 max-w-2xl">
        <p className="eyebrow mb-3">
          {activeCategory ? `Category · ${activeCategory.name}` : 'Explore'}
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
          Explore restaurants.
        </h1>
        <p className="text-muted mt-4 text-base md:text-lg">
          Find your next favorite place to eat.
        </p>
      </header>

      {/* Filters */}
      <RestaurantFilters
        query={query}         onQueryChange={setQuery}
        cuisine={cuisine}     onCuisineChange={handleCuisineChange}
        sort={sort}           onSortChange={setSort}
      />

      {/* Results */}
      <div className="mt-10 md:mt-12">
        {/* Result count */}
        {results.length > 0 && (
          <p className="text-sm text-muted mb-6">
            {results.length} {results.length === 1 ? 'restaurant' : 'restaurants'}
          </p>
        )}

        {results.length === 0 ? (
          <EmptyState
            icon={SearchX}
            title="Nothing tasty here."
            description="Try another search or category."
            action="Clear filters"
            actionTo="/restaurants"
          />
        ) : (
          <RestaurantGrid restaurants={results} />
        )}
      </div>

    </div>
  )
}