import { useEffect, useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

import { useApp } from '../context/AppContext'
import { validateCheckout, validators } from '../utils/validation'

import Button from '../components/common/Button'
import CheckoutForm from '../components/checkout/CheckoutForm'
import CheckoutSummary from '../components/checkout/CheckoutSummary'

const INITIAL_FORM = {
  fullName: '',
  phone: '',
  email: '',
  address: '',
  city: '',
  notes: '',
}

/* رتّب الفاليديشنز حسب الترتيب في الـ form */
const FIELD_RULES = {
  fullName: [validators.required, validators.minLength(3)],
  phone:    [validators.required, validators.phone],
  email:    [validators.required, validators.email],
  address:  [validators.required, validators.minLength(8)],
  city:     [validators.required],
}

export default function Checkout() {
  const navigate = useNavigate()
  const { cart, user, createOrder } = useApp()

  const [form, setForm] = useState(() => ({
    ...INITIAL_FORM,
    fullName: user?.name || '',
    email:    user?.email || '',
  }))

  const [errors, setErrors]     = useState({})
  const [submitting, setSubmitting] = useState(false)

  /* لو السلة فاضية → رجّعه للـ cart */
  if (cart.length === 0) {
    return <Navigate to="/cart" replace />
  }

  /* ===== Helpers ===== */
  const validateField = (name, value) => {
    const rules = FIELD_RULES[name]
    if (!rules) return ''
    for (const rule of rules) {
      const msg = rule(value)
      if (msg) return msg
    }
    return ''
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))

    // لو الحقل كان فيه error، امسحه أول ما يبدأ يكتب
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    const msg = validateField(name, value)
    setErrors((prev) => ({ ...prev, [name]: msg }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (submitting) return

    // validate الكل
    const allErrors = validateCheckout(form)
    setErrors(allErrors)

    // focus على أول خطأ
    const firstError = Object.keys(allErrors)[0]
    if (firstError) {
      document.getElementById(firstError)?.focus()
      return
    }

    /* ===== Place order ===== */
    setSubmitting(true)

    const customer = {
      fullName: form.fullName.trim(),
      phone:    form.phone.trim(),
      email:    form.email.trim(),
      address:  form.address.trim(),
      city:     form.city.trim(),
      notes:    form.notes.trim(),
    }

    const order = createOrder(customer, cart)

    // استخدمنا setTimeout لسماح للـ UI يعرض حالة submitting
    setTimeout(() => {
      navigate(`/order-success?id=${order.id}`, { replace: true })
    }, 400)
  }

  /* Scroll to top عند الفتح */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="container-nomi pt-8 md:pt-14 pb-20 md:pb-32">

      {/* Back */}
      <button
        type="button"
        onClick={() => navigate('/cart')}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-ink transition-colors mb-5"
      >
        <ArrowLeft size={16} strokeWidth={2.5} />
        Back to cart
      </button>

      {/* Header */}
      <header className="mb-8 md:mb-12 max-w-2xl">
        <p className="eyebrow mb-3">Almost there</p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
          Checkout.
        </h1>
        <p className="text-muted mt-4 text-base md:text-lg">
          Tell us where to deliver your order.
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="grid lg:grid-cols-[1fr_400px] gap-8 lg:gap-12 items-start"
      >
        {/* ===== Form ===== */}
        <div className="bg-surface border border-line rounded-[20px] p-6 md:p-8">
          <p className="eyebrow mb-5">Delivery information</p>

          <CheckoutForm
            form={form}
            errors={errors}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <div className="mt-8">
            <Button
              type="submit"
              size="lg"
              disabled={submitting}
              arrow={!submitting}
              className="w-full !rounded-[12px] disabled:opacity-60 disabled:cursor-wait"
            >
              {submitting ? 'Placing order…' : 'Place order'}
            </Button>

            <p className="text-xs text-muted text-center mt-3">
              You won't be charged — this is a demo.
            </p>
          </div>
        </div>

        {/* ===== Summary ===== */}
        <CheckoutSummary />
      </form>
    </div>
  )
}