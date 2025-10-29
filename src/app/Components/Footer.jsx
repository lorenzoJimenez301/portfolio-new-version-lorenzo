'use client'

import React from 'react'
import Link from 'next/link'
import { Logotipo } from './Logotipo'
import { usePathname } from 'next/navigation'

export const Footer = () => {
  const date = new Date().getFullYear()

  const pathSelected = usePathname()

  const rutas = [
    {
      name: 'Home',
      page: '/'
    },
    {
      name: 'About',
      page: '/about'
    },
    {
      name: 'Work',
      page: '/work'
    },
    {
      name: 'Contact',
      page: '/contact'
    }
  ]

    const isActive = (ruta, pathSelected) => {
    if (ruta === '/') {
      return pathSelected === '/'
    }
    return pathSelected.startsWith(ruta)
  }

  return (
    <footer className='container mx-auto px-4 mt-30 flex items-center justify-center lg:justify-between py-15 text-center '>
      <div>
        <div className='flex flex-col items-center gap-3'>
          <Link alt='Home' href='/'>
            <Logotipo
              className={'fill-lorenzo-dark dark:fill-lorenzo-gray h-[1.9rem]'}
            />
          </Link>
          <p className='font-light text-sm'>©{date}, ALL RIGHT RESERVED.</p>
        </div>
      </div>
      <div>
        <ul className='desktop hidden uppercase lg:flex flex-col md:flex-row md:items-center relative z-50 lg:gap-5'>
          {rutas.map((ruta, index) => {
            return (
              <li key={index} className='flex items-center h-max w-18 '>
                <Link
                  className={`${
                    isActive(ruta.page, pathSelected) &&
                    'border-b-2 font-bold border-lorenzo-dark dark:border-lorenzo-gray'
                  } inline-block hover:font-black transition-all duration-200 group`}
                  href={ruta.page}
                >
                  {ruta.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </footer>
  )
}
