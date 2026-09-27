import Button from '../common/Button'

export default function FinalCTA() {
  return (
    <section className="container-nomi pb-24 md:pb-32">
      <div className="bg-accent text-white rounded-[24px] px-8 py-16 md:px-16 md:py-24 text-center">
        <h2 className="text-3xl md:text-6xl font-extrabold leading-[1.05] max-w-3xl mx-auto">
          Your next favorite meal is{' '}
          <span className="serif font-normal">closer than you think.</span>
        </h2>

        <div className="mt-9 flex justify-center">
          <Button
            to="/restaurants"
            size="lg"
            arrow
            className="!bg-white !text-ink hover:!bg-ink hover:!text-cream"
          >
            Explore restaurants
          </Button>
        </div>
      </div>
    </section>
  )
}