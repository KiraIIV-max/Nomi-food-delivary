import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { ArrowLeft, MapPin, Phone, Mail, User } from 'lucide-react'

import { useApp } from '../context/AppContext'
import { formatDateTime } from '../utils/formatDate'

import Button from '../components/common/Button'
import OrderInfoCard from '../components/order/OrderInfoCard'
import OrderItemsList from '../components/order/OrderItemsList'
import OrderStatusBadge from '../components/order/OrderStatusBadge'

export default function OrderDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getOrderById } = useApp()

  const order = getOrderById(id)

  /* ===== Guard ===== */
  if (!order) {
    return <Navigate to="/orders" replace />
  }

  const { customer } = order

  return (
    <div className="container-nomi pt-8 md:pt-14 pb-20 md:pb-32">

      {/* Back */}
      <button
        type="button"
        onClick={() => navigate('/orders')}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-ink transition-colors mb-5"
      >
        <ArrowLeft size={16} strokeWidth={2.5} />
        All orders
      </button>

      {/* Header */}
      <header className="mb-8 md:mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <OrderStatusBadge status={order.status} />
          <span className="text-xs text-muted">
            {formatDateTime(order.createdAt)}
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
          Order #{order.id}
        </h1>
      </header>

      <div className="grid lg:grid-cols-[1fr_400px] gap-8 lg:gap-12 items-start">

        {/* ===== Main ===== */}
        <div className="space-y-5 md:space-y-6">
          <OrderInfoCard order={order} />
          <OrderItemsList items={order.items} />
        </div>

        {/* ===== Sidebar ===== */}
        <aside className="bg-surface border border-line rounded-[16px] p-5 md:p-6 lg:sticky lg:top-24">

          <p className="eyebrow mb-4">Delivering to</p>

          <ul className="space-y-3 text-sm">
            <InfoRow Icon={User}   label={customer.fullName} />
            <InfoRow Icon={Phone}  label={customer.phone} />
            <InfoRow Icon={Mail}   label={customer.email} />
            <InfoRow
              Icon={MapPin}
              label={`${customer.address}, ${customer.city}`}
            />
          </ul>

          {customer.notes && (
            <div className="mt-5 pt-5 border-t border-line">
              <p className="eyebrow mb-2">Notes</p>
              <p className="text-sm text-muted leading-relaxed">
                {customer.notes}
              </p>
            </div>
          )}

          <div className="mt-6">
            <Button to="/restaurants" variant="secondary" className="w-full">
              Order again
            </Button>
          </div>
        </aside>

      </div>
    </div>
  )
}

function InfoRow({ Icon, label }) {
  return (
    <li className="flex items-start gap-3">
      <Icon
        size={15}
        strokeWidth={2.2}
        className="text-muted shrink-0 mt-0.5"
      />
      <span className="text-ink break-words">{label}</span>
    </li>
  )
}