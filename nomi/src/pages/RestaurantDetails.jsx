import { useMemo, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { SearchX } from 'lucide-react'

import { getRestaurantById } from '../data/restaurants'
import { getFoodsByRestaurant } from '../data/foods'
import { getCategoryById } from '../data/categories'

import RestaurantHero from '../components/restaurant/RestaurantHero'
import MenuTabs from '../components/restaurant/MenuTabs'
import MenuList from '../components/restaurant/MenuList'
import EmptyState from '../components/common/EmptyState'

/* ==============================
   بناء التابس من أطباق المطعم
   ============================== */
function buildTabs(foods) {
  const tabs = []

  // Popular دايمًا الأول لو موجود
  const popular = foods.filter((f) => f.popular)
  if (popular.length > 0) {
    tabs.push({ id: 'popular', label: 'Popular', items: popular })
  }

  // باقي التابس حسب الـ categoryId
  const byCategory = {}
  foods.forEach((f) => {
    if (!byCategory[f.categoryId]) byCategory[f.categoryId] = []
    byCategory[f.categoryId].push(f)
  })

  Object.entries(byCategory).forEach(([catId, items]) => {
    const cat = getCategoryById(catId)
    tabs.push({
      id: catId,
      label: cat?.name || catId,
      items,
    })
  })

  return tabs
}

/* ==============================
   الصفحة
   ============================== */
export default function RestaurantDetails() {
  const { id } = useParams()
  const restaurant = getRestaurantById(id)
  const foods = useMemo(() => (restaurant ? getFoodsByRestaurant(id) : []), [id, restaurant])

  const tabs = useMemo(() => buildTabs(foods), [foods])
  const [activeTab, setActiveTab] = useState('popular')

  // تأكد إن التاب النشط موجود
  useEffect(() => {
    if (tabs.length && !tabs.find((t) => t.id === activeTab)) {
      setActiveTab(tabs[0].id)
    }
  }, [tabs, activeTab])

  /* ===== Not Found ===== */
  if (!restaurant) {
    return (
      <div className="container-nomi section">
        <EmptyState
          icon={SearchX}
          title="Restaurant not found."
          description="This place may have moved or closed."
          action="Browse restaurants"
          actionTo="/restaurants"
        />
      </div>
    )
  }

  const activeItems =
    tabs.find((t) => t.id === activeTab)?.items ?? []

  return (
    <>
      <RestaurantHero restaurant={restaurant} />

      <div className="container-nomi pt-10 md:pt-16 pb-20 md:pb-32">
        <MenuTabs
          tabs={tabs}
          active={activeTab}
          onChange={setActiveTab}
        />

        <div className="mt-6 md:mt-8">
          <MenuList items={activeItems} restaurant={restaurant} />
        </div>
      </div>
    </>
  )
}