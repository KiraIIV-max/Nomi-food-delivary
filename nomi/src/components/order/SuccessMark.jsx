import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function SuccessMark() {
  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Halo rings */}
      <motion.span
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1.6, opacity: 0 }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut', delay: 0.3 }}
        className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full bg-success/25"
      />
      <motion.span
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1.35, opacity: 0 }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut', delay: 0.6 }}
        className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full bg-success/20"
      />

      {/* Circle */}
      <motion.div
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-success flex items-center justify-center"
      >
        <motion.span
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.25, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Check
            size={40}
            strokeWidth={3}
            className="text-white md:w-12 md:h-12"
          />
        </motion.span>
      </motion.div>
    </div>
  )
}