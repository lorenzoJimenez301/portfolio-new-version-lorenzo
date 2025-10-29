'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useNav } from '../../app/Components/NavProvider'

export const ButtonAction = ({ icon: Icon, onClick, className, children }) => {
  const { inView } = useNav()

  const variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <AnimatePresence>
      {!inView && (
        <motion.button
          onClick={onClick}
          initial='hidden'
          animate='visible'
          exit='hidden'
          variants={variants}
          transition={{ opacity: { duration: 0.2 }, y: { duration: 0.2 } }}
          whileHover={{
            scale: 1.2,
            rotate: 5,
            transition: { type: 'spring', stiffness: 300 }
          }}
          className={`fixed rounded-full p-6 bg-lorenzo-dark dark:bg-lorenzo-gray dark:text-lorenzo-dark text-lorenzo-gray flex items-center justify-center cursor-pointer ${className}`}
        >
          {Icon && <Icon className='text-3xl lg:text-4xl' />}
          {children}
        </motion.button>
      )}
    </AnimatePresence>
  )
}
