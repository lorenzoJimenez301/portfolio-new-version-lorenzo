'use client'

import { RiMenuFill } from 'react-icons/ri'
import { FaGithub } from 'react-icons/fa'
import { FaBehanceSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import { Logotipo } from './Logotipo'
import { Isotipo } from './Isotipo'

export const Navbar = () => {
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

  return (
    <header>
      <nav className='w-full min-w-sm bg-lorenzo-gray dark:bg-lorenzo-dark text-lorenzo-dark dark:text-lorenzo-gray px-5 py-4 lg:px-12 flex items-center justify-between z-10 top-0'>
        <div className='flex justify-between lg:justify-start w-full gap-7 md:gap-12'>
          <div className='cursor-pointer'>
            <Isotipo
              className={
                'fill-lorenzo-dark dark:fill-lorenzo-gray w-14 lg:w-16'
              }
            />
          </div>
          <Sheet className='z-100'>
            <SheetTrigger>
              <RiMenuFill className='lg:hidden block text-3xl text-lorenzo-dark dark:text-lorenzo-gray' />
            </SheetTrigger>
            <SheetContent
              className={'bg-lorenzo-gray dark:bg-lorenzo-dark border-0'}
            >
              <SheetHeader>
                <SheetTitle></SheetTitle>
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
                              ruta.page === pathSelected &&
                              'border-b-2 border-lorenzo-dark dark:border-lorenzo-gray'
                            }`}
                            href={ruta.page}
                          >
                            {ruta.name}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              <SheetFooter className='flex items-center space-x-7'>
                <ul className='flex items-center space-x-7'>
                  <li className='hover:scale-125 transition-scale duration-200 ease-out text-2xl active:scale-110'>
                    <FaBehanceSquare />
                  </li>
                  <li>
                    <FaGithub className='hover:scale-125 transition-scale duration-200 ease-out text-2xl active:scale-110' />
                  </li>
                  <li>
                    <FaLinkedin className='hover:scale-125 transition-scale duration-200 ease-out text-2xl active:scale-110' />
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
                      ruta.page === pathSelected && 'border-b-2'
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
              <FaBehanceSquare />
            </li>
            <li>
              <FaGithub className='hover:scale-125 transition-scale duration-200 ease-out text-2xl active:scale-110' />
            </li>
            <li>
              <FaLinkedin className='hover:scale-125 transition-scale duration-200 ease-out text-2xl active:scale-110' />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
