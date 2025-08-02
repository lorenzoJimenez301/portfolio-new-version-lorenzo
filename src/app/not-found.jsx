import Link from 'next/link'
import React from 'react'
import { FaRobot } from 'react-icons/fa'
import { VscArrowRight } from 'react-icons/vsc'

const NotFound = () => {
  return (
    <section className='h-screen flex flex-col justify-center lg:justify-start items-center lg:pt-24'>
      <div className='text-6xl lg:text-8xl font-black flex flex-col justify-center items-center'>
        <FaRobot className='text-[14rem] lg:text-[20rem]' />
        <h2>404 Error</h2>
        <div className='flex justify-start lg:justify-end w-full py-3'>
          <div className='flex items-center gap-3 w-max items text-xl font-light border-b-1'>
            <Link href='/'>
              Back Home
            </Link>
            <VscArrowRight className='text-xl mb-0.5' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound
