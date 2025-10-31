'use client'

import { motion } from 'framer-motion'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function LayoutAnimation ({ props }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // 🔑 Mientras no está montado, devuelve un placeholder fijo
    return (
      <div className='toggle flex items-center gap-2 text-lorenzo-dark dark:text-lorenzo-gray'>
        <FaSun />

        <div className='toggle-container bg-lorenzo-medigray h-8 w-20 flex items-center p-1 rounded-full' />
        <FaMoon />

      </div>
    )
  }

  const isDark = resolvedTheme === 'dark'

  const toggleSwitch = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <div className='toggle flex items-center gap-2 text-lorenzo-dark dark:text-lorenzo-gray cursor-pointer'>
      <FaSun />
      <button
        className={`toggle-container bg-lorenzo-medigray dark:bg-lorenzo-medidark h-8 w-20 flex items-center p-1 rounded-full cursor-pointer ${
          isDark ? 'justify-end' : 'justify-start'
        }`}
        onClick={toggleSwitch}
      >
        <motion.div
          className='toggle-handle w-6 h-6 rounded-full bg-lorenzo-dark dark:bg-lorenzo-gray cursor-pointer'
          layout
          transition={{
            type: 'spring',
            duration: 0.25,
            bounce: 0.3
          }}
        />
      </button>
      <FaMoon />
    </div>
  )
}
