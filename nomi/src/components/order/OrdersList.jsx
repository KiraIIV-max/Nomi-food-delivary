import OrderCard from './OrderCard'

export default function OrdersList({ orders }) {
  return (
    <div className="grid gap-4 md:gap-5 md:grid-cols-2 lg:grid-cols-3">
      {orders.map((o) => (
        <OrderCard key={o.id} order={o} />
      ))}
    </div>
  )
}