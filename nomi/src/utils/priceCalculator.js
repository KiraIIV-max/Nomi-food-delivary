export const DELIVERY_FEE = 3.00
export const FREE_DISCOUNT = 5.00
export const DISCOUNT_THRESHOLD = 20.00

export function calculateTotals(items, { promoCode = null } = {}) {
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0)
  const delivery = items.length ? DELIVERY_FEE : 0

  let discount = 0
  const code = (promoCode || '').trim().toUpperCase()

  if (code === 'NOMI20') {
    discount = subtotal * 0.20
  } else if (subtotal >= DISCOUNT_THRESHOLD) {
    discount = FREE_DISCOUNT
  }

  const total = Math.max(0, subtotal + delivery - discount)

  return {
    subtotal:  +subtotal.toFixed(2),
    delivery:  +delivery.toFixed(2),
    discount:  +discount.toFixed(2),
    total:     +total.toFixed(2),
  }
}

export const formatPrice = (n) => `$${Number(n).toFixed(2)}`