'use client'

import React from 'react'
import { useMediaQuery } from 'react-responsive'
import AnimatedCursor from 'react-animated-cursor'

export const CursorCustom = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

  return (
    <AnimatedCursor
      showSystemCursor={isMobile}
      color={'230,230,230'}
      innerStyle={{ backgroundColor: 'var(--background)', opacity: 0}}
      innerSize={10}
      outerSize={30}
      outerAlpha={1}
      innerScale={0.9}
      outerScale={1.5}
      trailingSpeed={1}
      outerStyle={{
        mixBlendMode: 'exclusion', opacity: 0
      }}
      clickables={['a', 'svg', 'button']}
    />
  )
}
