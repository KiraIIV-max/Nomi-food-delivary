import Hero from '../components/home/Hero'
import Categories from '../components/home/Categories'
import PopularRestaurants from '../components/home/PopularRestaurants'
import FeaturedFood from '../components/home/FeaturedFood'
import PromoSection from '../components/home/PromoSection'
import HowItWorks from '../components/home/HowItWorks'
import FinalCTA from '../components/home/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <PopularRestaurants />
      <FeaturedFood />
      <PromoSection />
      <HowItWorks />
      <FinalCTA />
    </>
  )
}