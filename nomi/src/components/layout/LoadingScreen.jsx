import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const SESSION_KEY = 'nomi_loaded'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false
    return !sessionStorage.getItem(SESSION_KEY)
  })

  useEffect(() => {
    if (!visible) return
    const t = setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, '1')
      setVisible(false)
    }, 1600)
    return () => clearTimeout(t)
  }, [visible])

  const letters = ['N', 'O', 'M', 'I']

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading"
          className="fixed inset-0 z-[100] bg-cream flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 overflow-hidden">
              {letters.map((ch, i) => (
                <motion.span
                  key={i}
                  className="text-6xl md:text-7xl font-extrabold tracking-tight"
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.1 + i * 0.09,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {ch}
                </motion.span>
              ))}
            </div>

            <motion.p
              className="serif text-lg text-muted mt-4"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Food worth finding.
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}