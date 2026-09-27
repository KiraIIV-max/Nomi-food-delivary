import { useApp } from '../context/AppContext'
import CartItem from '../components/cart/CartItem'
import CartSummary from '../components/cart/CartSummary'
import EmptyCart from '../components/cart/EmptyCart'
import Button from '../components/common/Button'
import { ArrowLeft } from 'lucide-react'

export default function Cart() {
  const { cart, cartCount } = useApp()

  /* ===== Empty ===== */
  if (!cart.length) {
    return (
      <div className="container-nomi section">
        <EmptyCart />
      </div>
    )
  }

  return (
    <div className="container-nomi pt-8 md:pt-14 pb-20 md:pb-32">

      {/* Header */}
      <header className="mb-8 md:mb-12">
        <p className="eyebrow mb-3">Your order</p>
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
            Your cart.
          </h1>
          <p className="text-sm text-muted">
            {cartCount} {cartCount === 1 ? 'item' : 'items'}
          </p>
        </div>
      </header>

      <div className="grid lg:grid-cols-[1fr_400px] gap-8 lg:gap-12 items-start">

        {/* ===== Items ===== */}
        <div>
          <div className="bg-surface border border-line rounded-[20px] px-5 md:px-7">
            {cart.map((item) => (
              <CartItem key={item.foodId} item={item} />
            ))}
          </div>

          <div className="mt-6">
            <Button
              to="/restaurants"
              variant="ghost"
              className="!px-0 text-muted hover:text-ink"
            >
              <ArrowLeft size={16} strokeWidth={2.5} />
              Continue shopping
            </Button>
          </div>
        </div>

        {/* ===== Summary ===== */}
        <CartSummary />
      </div>
    </div>
  )
}