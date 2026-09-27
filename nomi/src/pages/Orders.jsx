import { Package } from 'lucide-react'
import { useApp } from '../context/AppContext'
import EmptyState from '../components/common/EmptyState'
import OrdersList from '../components/order/OrdersList'

export default function Orders() {
  const { orders } = useApp()

  /* ===== Empty ===== */
  if (!orders.length) {
    return (
      <div className="container-nomi section">
        <EmptyState
          icon={Package}
          title="No orders yet."
          description="Your future favorites are waiting. Order something and it'll show up here."
          action="Explore restaurants"
          actionTo="/restaurants"
        />
      </div>
    )
  }

  return (
    <div className="container-nomi pt-8 md:pt-14 pb-20 md:pb-32">

      {/* Header */}
      <header className="mb-8 md:mb-12 max-w-2xl">
        <p className="eyebrow mb-3">History</p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
          Your orders.
        </h1>
        <p className="text-muted mt-4 text-base md:text-lg">
          Everything you've ordered, in one place.
        </p>
      </header>

      <OrdersList orders={orders} />

    </div>
  )
}