'use client'

import React from 'react'
import { useMediaQuery } from 'react-responsive'
import AnimatedCursor from 'react-animated-cursor'
import { useEffect, useState } from 'react'

export const CursorCustom = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      document.body.style.cursor = isMobile ? 'auto' : 'none'
    }
  }, [isMobile, mounted])

  // Evita renderizar nada hasta estar montado
  if (!mounted || isMobile) return null

  return (
    <AnimatedCursor
      color={'230,230,230'}
      innerStyle={{backgroundColor: 'var(--background)'}}
      innerSize={10}
      outerSize={30}
      outerAlpha={1}
      innerScale={0.9}
      outerScale={1.5}
      trailingSpeed={1}
      outerStyle={{
        mixBlendMode: 'exclusion'
      }}
      clickables={['a', 'svg', 'button']}
    />
  )
}
