import { Compass } from 'lucide-react'
import Button from '../components/common/Button'

export default function NotFound() {
  return (
    <div className="container-nomi pt-16 md:pt-24 pb-24 md:pb-32">
      <div className="max-w-xl mx-auto text-center">

        {/* Big number */}
        <p
          className="serif font-normal leading-none text-[120px] md:text-[180px] text-ink/10 select-none"
          aria-hidden
        >
          404
        </p>

        {/* Icon */}
        <div className="w-16 h-16 mx-auto -mt-8 md:-mt-10 rounded-full bg-surface border border-line flex items-center justify-center mb-8">
          <Compass size={26} strokeWidth={1.8} className="text-muted" />
        </div>

        {/* Copy */}
        <p className="eyebrow mb-3">Not found</p>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1]">
          We couldn't find that page.
        </h1>
        <p className="text-muted mt-4 text-base md:text-lg">
          It may have moved, or the link might be broken. Let's get you back
          to something delicious.
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button to="/" size="lg" arrow>
            Back home
          </Button>
          <Button to="/restaurants" variant="secondary" size="lg">
            Explore restaurants
          </Button>
        </div>

      </div>
    </div>
  )
}