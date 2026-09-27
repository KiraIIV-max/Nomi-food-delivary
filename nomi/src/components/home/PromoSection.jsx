import Button from '../common/Button'

export default function PromoSection() {
  return (
    <section className="container-nomi pb-20 md:pb-32">
      <div className="bg-dark text-cream rounded-[24px] px-8 py-14 md:px-16 md:py-20 relative overflow-hidden">
        {/* subtle glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-accent/20 blur-3xl pointer-events-none" />

        <div className="relative max-w-2xl">
          <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wide">
            20% OFF
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.05] mt-6">
            Hungry?<br />
            <span className="serif font-normal">We've got something for you.</span>
          </h2>

          <p className="text-cream/70 mt-5 text-base md:text-lg">
            Get 20% off your first order with code <b className="text-cream">NOMI20</b>.
          </p>

          <div className="mt-8">
            <Button to="/restaurants" variant="primary" size="lg" arrow>
              Order now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}