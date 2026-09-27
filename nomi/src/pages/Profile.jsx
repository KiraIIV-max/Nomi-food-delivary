import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import { useApp } from '../context/AppContext'
import ProfileHeader from '../components/profile/ProfileHeader'
import ProfileStats from '../components/profile/ProfileStats'
import ProfileLinks from '../components/profile/ProfileLinks'
import DangerZone from '../components/profile/DangerZone'

export default function Profile() {
  const navigate = useNavigate()
  const { user, orders, favorites, resetAll } = useApp()

  const favoritesCount = useMemo(
    () => (favorites.restaurants?.length ?? 0) + (favorites.foods?.length ?? 0),
    [favorites]
  )

  const handleReset = () => {
    resetAll()
    navigate('/', { replace: true })
  }

  return (
    <div className="container-nomi pt-8 md:pt-14 pb-20 md:pb-32">

      {/* Header */}
      <div className="mb-10 md:mb-14">
        <ProfileHeader user={user} />
      </div>

      {/* Layout */}
      <div className="grid lg:grid-cols-[1fr_400px] gap-8 lg:gap-10 items-start">

        {/* ===== Left — Stats + Links ===== */}
        <div className="space-y-6 md:space-y-8">
          <ProfileStats
            orders={orders.length}
            favorites={favoritesCount}
            addresses={user?.address ? 1 : 1}
          />

          <ProfileLinks />
        </div>

        {/* ===== Right — Danger zone ===== */}
        <aside>
          <DangerZone onReset={handleReset} />
        </aside>

      </div>
    </div>
  )
}