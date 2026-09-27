export function generateOrderId() {
  const n = Math.floor(1000 + Math.random() * 9000)
  return `BF${n}`
}