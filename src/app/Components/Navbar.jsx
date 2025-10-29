'use client'

import { CiMenuFries } from 'react-icons/ci'
import { RiCloseLargeFill } from 'react-icons/ri'
import { FaGithub } from 'react-icons/fa'
import { FaBehanceSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import { Logotipo } from './Logotipo'
import { Isotipo } from './Isotipo'
import { motion } from 'motion/react'
import { useState } from 'react'
import ToogleButton from './toggle-button'
import { useInView } from 'react-intersection-observer'
import { useNav } from '../Components/NavProvider'
import { useEffect } from 'react'

export const Navbar = ({ view }) => {
  const [active, setActive] = useState(false)

  const { ref, inView } = useInView({ threshold: 0 })
  const { setInView } = useNav()

  useEffect(() => {
    setInView(inView)
  }, [inView, setInView])

  view = inView

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

  const pathSelected = usePathname()

  const isActive = (ruta, pathSelected) => {
    if (ruta === '/') {
      return pathSelected === '/'
    }
    return pathSelected.startsWith(ruta)
  }

  return (
    <header ref={ref}>
      <nav className='container mx-auto px-4 py-4 font-light w-full min-w-sm text-lorenzo-dark dark:text-lorenzo-gray bg-lorenzo-gray dark:bg-lorenzo-dark flex items-center justify-between z-10 top-0'>
        <div className='flex justify-between lg:justify-start w-full gap-7 md:gap-12'>
          <div className='cursor-pointer'>
            <Link alt='Home' href={'/'}>
              <Isotipo
                className={
                  'fill-lorenzo-dark dark:fill-lorenzo-gray w-14 lg:w-16'
                }
              />
            </Link>
          </div>
          <Sheet className='z-100'>
            <SheetTrigger onClick={() => setActive(!active)}>
              <CiMenuFries className='lg:hidden block text-3xl text-lorenzo-dark dark:text-lorenzo-gray cursor-pointer' />
            </SheetTrigger>
            <SheetContent
              className={'bg-lorenzo-gray dark:bg-lorenzo-dark border-0'}
            >
              <SheetHeader
                className={'flex justify-center items-end h-[6.2rem]'}
              >
                <SheetTitle>
                  <SheetClose>
                    <motion.div
                      animate={{ rotate: active ? 180 : 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <RiCloseLargeFill
                        onClick={() => setActive(!active)}
                        className='text-3xl text-lorenzo-dark dark:text-lorenzo-gray cursor-pointer'
                      />
                    </motion.div>
                  </SheetClose>
                </SheetTitle>
              </SheetHeader>
              <div className='h-full flex flex-col justify-center items-center gap-25'>
                <Logotipo
                  className={'fill-lorenzo-dark dark:fill-lorenzo-gray h-7'}
                />
                <ul className='flex flex-col justify-center items-center gap-10 text-lorenzo-dark dark:text-lorenzo-gray '>
                  {rutas.map((ruta, index) => {
                    return (
                      <li key={index}>
                        <Link
                          className={`${
                            isActive(ruta.page, pathSelected) &&
                            'border-b-2 font-bold border-lorenzo-dark dark:border-lorenzo-gray'
                          }`}
                          href={ruta.page}
                        >
                          {ruta.name}
                        </Link>
                      </li>
                    )
                  })}
                  <ToogleButton />
                </ul>
              </div>
              <SheetFooter className='flex items-center space-x-7'>
                <ul className='flex items-center space-x-7'>
                  <li className='hover:scale-125 transition-scale duration-200 ease-out text-2xl active:scale-110'>
                    <Link
                      target='_blank'
                      href={'https://www.behance.net/lorenzojimenez4'}
                    >
                      <FaBehanceSquare />
                    </Link>
                  </li>
                  <li>
                    <Link
                      target='_blank'
                      href={'https://github.com/lorenzoJimenez301'}
                    >
                      <FaGithub className='hover:scale-125 transition-scale duration-200 ease-out text-2xl active:scale-110' />
                    </Link>
                  </li>
                  <li>
                    <Link
                      target='_blank'
                      href={
                        'https://www.linkedin.com/in/lorenzojimenezabarca301/'
                      }
                    >
                      <FaLinkedin className='hover:scale-125 transition-scale duration-200 ease-out text-2xl active:scale-110' />
                    </Link>
                  </li>
                </ul>
              </SheetFooter>
            </SheetContent>
          </Sheet>
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
        <div className='hidden lg:flex items-center'>
          <ul className='flex items-center space-x-7'>
            <li className='hover:scale-125 transition-scale duration-200 ease-out text-2xl active:scale-110'>
              <Link
                target='_blank'
                href={'https://www.behance.net/lorenzojimenez4'}
              >
                <FaBehanceSquare />
              </Link>
            </li>
            <li>
              <Link
                target='_blank'
                href={'https://github.com/lorenzoJimenez301'}
              >
                <FaGithub className='hover:scale-125 transition-scale duration-200 ease-out text-2xl active:scale-110' />
              </Link>
            </li>
            <li>
              <Link
                target='_blank'
                href={'https://www.linkedin.com/in/lorenzojimenezabarca301/'}
              >
                <FaLinkedin className='hover:scale-125 transition-scale duration-200 ease-out text-2xl active:scale-110' />
              </Link>
            </li>
            <li>
              <ToogleButton />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
