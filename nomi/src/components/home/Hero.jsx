import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Button from '../common/Button'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: 0.15 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section className="container-nomi pt-8 md:pt-14 pb-20 md:pb-32">
      <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-center">

        {/* Left — Text */}
        <div className="md:col-span-7 lg:col-span-6">
          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={0}
            className="eyebrow mb-6"
          >
            Local Food · Delivered
          </motion.p>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="text-[42px] leading-[1.02] sm:text-6xl lg:text-[80px] font-extrabold tracking-[-0.03em]"
          >
            Good food.<br />
            <span className="serif font-normal">Right to your door.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="text-muted text-base md:text-lg mt-6 max-w-md"
          >
            Discover local favorites, order what you love, and enjoy every bite
            without leaving home.
          </motion.p>

          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={3}
            className="flex flex-wrap gap-3 mt-9"
          >
            <Button to="/restaurants" size="lg" arrow>Explore restaurants</Button>
            <Button to="/restaurants" size="lg" variant="secondary">Browse food</Button>
          </motion.div>
        </div>

        {/* Right — Image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="hero-visual md:col-span-5 lg:col-span-6 relative"
        >
          <div className="relative aspect-[4/5] md:aspect-[5/6] rounded-[24px] overflow-hidden bg-line shadow-[0_24px_60px_rgba(23,21,19,0.16)]">
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=80"
              alt="Signature dish"
              className="w-full h-full object-cover saturate-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/10 pointer-events-none" />
          </div>

          {/* Floating rating card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="absolute -bottom-4 left-4 md:-left-6 bg-surface rounded-[14px] shadow-[0_8px_30px_rgba(23,21,19,0.10)] px-4 py-3 flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center">
              <Star size={16} strokeWidth={0} className="fill-accent" />
            </div>
            <div>
              <p className="text-sm font-bold leading-tight">4.9</p>
              <p className="text-xs text-muted leading-tight">Pizza Roma</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}