'use client'

import React, { useEffect, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import 'keen-slider/keen-slider.min.css'
import datos from '../../../public/data/projects.json'

const animation = { duration: 20000, easing: t => t }

export const SliderComponent = () => {
  
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 15
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: {
          perView: 2,
          spacing: 15
        }
      },
      '(min-width: 1024px)': {
        slides: {
          perView: 3,
          spacing: 20
        }
      }
    },
    renderMode: 'performance',
    drag: true,
    created (s) {
      s.moveToIdx(5, true, animation)
    },
    updated (s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded (s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    }
  })

  return (
    <div ref={sliderRef} className='keen-slider h-[30rem] min-h-[30rem]!'>
      {datos.map((item) => (
        <div key={item.id} className='keen-slider__slide number-slide1 h-96 min-h-96!'>
          <Image
            className='object-cover object-center h-full hover:scale-125 hover:rotate-6 duration-300 transition-all'
            src={item.image}
            width={1920}
            height={1080}
            alt='slider image'
            priority
          />
        </div>
      ))}
    </div>
  )
}

export default SliderComponent
