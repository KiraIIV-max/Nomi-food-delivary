import OfferCard from '../components/offers/OfferCard'

export default function Offers() {
  return (
    <div className="container-nomi pt-8 md:pt-14 pb-20 md:pb-32">

      {/* Header */}
      <header className="mb-10 md:mb-14 max-w-2xl">
        <p className="eyebrow mb-3">Offers</p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
          Deals worth the detour.
        </h1>
        <p className="text-muted mt-4 text-base md:text-lg">
          Fresh offers picked for you — no fine print, no gimmicks.
        </p>
      </header>

      {/* Offers grid */}
      <div className="grid md:grid-cols-2 gap-5 md:gap-6">

        {/* Hero offer */}
        <OfferCard
          variant="dark"
          badge="20% OFF"
          title="First order? On us."
          description="Get 20% off your very first order with code NOMI20. One use per customer."
          code="NOMI20"
          cta="Order now"
          className="md:col-span-2"
        />

        {/* Secondary offers */}
        <OfferCard
          variant="light"
          badge="Free delivery"
          title="Free delivery on $20+"
          description="Spend $20 or more and delivery is on the house. Applies automatically at checkout."
          cta="Browse restaurants"
        />

        <OfferCard
          variant="light"
          badge="Weekend"
          title="Weekend treat"
          description="Sweet deals on desserts and drinks every Saturday and Sunday."
          cta="See desserts"
          ctaTo="/restaurants?category=desserts"
        />

      </div>

      {/* Note */}
      <p className="text-xs text-muted text-center mt-12 max-w-md mx-auto">
        Offers are applied automatically at checkout or via promo code.
        One offer per order.
      </p>

    </div>
  )
}