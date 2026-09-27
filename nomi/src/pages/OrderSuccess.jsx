import { useEffect, useMemo } from 'react'
import { useSearchParams, useNavigate, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'

import { useApp } from '../context/AppContext'
import Button from '../components/common/Button'
import SuccessMark from '../components/order/SuccessMark'
import OrderInfoCard from '../components/order/OrderInfoCard'
import OrderItemsList from '../components/order/OrderItemsList'

export default function OrderSuccess() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { getOrderById, clearCart } = useApp()

  const orderId = searchParams.get('id')
  const order = useMemo(
    () => (orderId ? getOrderById(orderId) : null),
    [orderId, getOrderById]
  )

  /* ===== Side effects ===== */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })

    // خلصنا الطلب → امسح السلة
    if (order) clearCart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order?.id])

  /* ===== Guards ===== */
  if (!orderId) return <Navigate to="/" replace />
  if (!order) return <Navigate to="/orders" replace />

  return (
    <div className="container-nomi pt-12 md:pt-20 pb-20 md:pb-32">

      <div className="max-w-2xl mx-auto text-center">

        {/* Mark */}
        <div className="flex justify-center mb-8 md:mb-10">
          <SuccessMark />
        </div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <p className="eyebrow mb-3">Confirmed</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
            Order confirmed.
          </h1>
          <p className="text-muted mt-5 text-base md:text-lg">
            Your order <b className="text-ink">#{order.id}</b> has been placed successfully.
            We'll be there in {order.estimatedDelivery}.
          </p>
        </motion.div>

        {/* Info cards */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 md:mt-12 text-left"
        >
          <OrderInfoCard order={order} />
        </motion.div>

        {/* Items */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="mt-5 md:mt-6 text-left"
        >
          <OrderItemsList items={order.items} />
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
<Button to={`/orders/${order.id}`} size="lg" arrow>
  View order
</Button>
          <Button
            to="/restaurants"
            variant="secondary"
            size="lg"
          >
            Continue shopping
          </Button>
        </motion.div>

      </div>
    </div>
  )
}