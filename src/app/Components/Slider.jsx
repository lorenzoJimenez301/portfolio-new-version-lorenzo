'use client'

import React, { useEffect, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Image from 'next/image'

const animation = { duration: 20000, easing: t => t }

const Slider = () => {
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
      if (s.track.details) {
        s.moveToIdx(s.track.details.abs + 5, true, animation)
      }
    },
    animationEnded (s) {
      if (s.track.details) {
        s.moveToIdx(s.track.details.abs + 5, true, animation)
      }
    }
  })

  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('/data/projects.json')
      const data = await res.json()
      setData(data)
    }
    getData()
  }, [])

  return (
    <div ref={sliderRef} className='keen-slider h-96 min-h-96 '>
      {data.map(item => (
        <div key={item.id} className='keen-slider__slide number-slide1'>
          <Image
            className='object-cover object-center h-full hover:scale-125 hover:rotate-6 duration-300 transition-all'
            src={item.image}
            width={1920}
            height={1080}
            alt='slider image'
          />
        </div>
      ))}
    </div>
  )
}

export default Slider
