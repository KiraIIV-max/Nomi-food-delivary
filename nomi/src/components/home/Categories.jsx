import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { categories } from '../../data/categories'
import SectionHeader from '../common/SectionHeader'

export default function Categories() {
  return (
    <section className="container-nomi pb-20 md:pb-32">
      <SectionHeader
        eyebrow="Categories"
        title="What are you craving?"
      />

      {/* Horizontal scroll on mobile, grid on desktop */}
      <div className="
        flex gap-4 overflow-x-auto pb-4 -mx-5 px-5 snap-x snap-mandatory
        md:grid md:grid-cols-4 lg:grid-cols-7 md:overflow-visible md:pb-0 md:mx-0 md:px-0
        [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
      ">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.04, duration: 0.45 }}
            className="snap-start shrink-0 w-[140px] md:w-auto"
          >
            <Link
              to={`/restaurants?category=${cat.id}`}
              className="group block"
            >
              <div className="aspect-square rounded-[16px] overflow-hidden bg-line">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
              </div>
              <p className="mt-3 text-sm font-semibold text-center group-hover:text-accent transition-colors">
                {cat.name}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}