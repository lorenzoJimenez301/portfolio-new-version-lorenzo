'use client'

import React from 'react'
import data from '../../../public/data/projects.json'
import data64 from '../../../public/data/projects-with-blur.json'
import Image from 'next/image.js'
import { TitleSection } from '../about/page.jsx'
import { MoreDetails } from '../about/page.jsx'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FaGhost } from 'react-icons/fa'
import { ButtonAction } from '../Components/ButtonAction'
import { VscArrowUp } from 'react-icons/vsc'

const Work = () => {
  const [category, setCategory] = useState('all')

  const filteredData =
    category === 'all' ? data : data.filter(item => item.category === category)

  return (
    <section className='container mx-auto px-4 pt-20 lg:pt-20'>
      <article className='flex flex-col gap-14 lg:gap-20'>
        <div>
          <TitleSection
            title={'Work'}
            className2='lg:justify-start'
            className='lg:inline-block'
          />
        </div>
        <div>
          <div className='w-full flex gap-10 py-5 lg:px-10 justify-center lg:justify-start text-sm lg:text-xl font-light bg-lorenzo-lightgray dark:bg-lorenzo-lightdark'>
            <button
              className={`filter cursor-pointer ${
                category === 'all' &&
                'font-medium border-b-2 border-lorenzo-dark dark:border-lorenzo-gray '
              }`}
              onClick={() => setCategory('all')}
            >
              All
            </button>
            <button
              className={`filter cursor-pointer ${
                category === '3D Model' &&
                'font-medium border-b-2 border-lorenzo-dark dark:border-lorenzo-gray '
              }`}
              onClick={() => setCategory('3D Model')}
            >
              3D
            </button>
            <button
              className={`filter cursor-pointer ${
                category === 'Web Project' &&
                'font-medium border-b-2 border-lorenzo-dark dark:border-lorenzo-gray '
              }`}
              onClick={() => setCategory('Web Project')}
            >
              Web
            </button>
            <button
              className={`filter cursor-pointer ${
                category === 'Graphic Design' &&
                'font-medium border-b-2 border-lorenzo-dark dark:border-lorenzo-gray '
              }`}
              onClick={() => setCategory('Graphic Design')}
            >
              Graphic Design
            </button>
          </div>
        </div>
        <AnimatePresence>
          <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-20 md:gap-10 min-h-[20rem]'>
            {filteredData.length === 0 && (
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                key={`${filteredData.id} ${category}`}
                className='col-span-3 flex gap-4 flex-col items-center justify-center'
              >
                <motion.span
                  initial={{ translateY: 0 }}
                  animate={{ translateY: -10 }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut'
                  }}
                >
                  <FaGhost className='text-8xl' />
                </motion.span>
                <p className='font-bold '>{`Nothing to Show ` + `:(`}</p>
              </motion.li>
            )}
            {filteredData.map(item => {
              const blurItem = data64.find(d => d.id === item.id)
              return (
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  key={`${item.id} ${category}`}
                  className={`flex flex-col justify-between bg-lorenzo-lightgray dark:bg-lorenzo-lightdark max-w-md h-full `}
                >
                  <div className='min-h-72 h-72'>
                    <Image
                      placeholder={blurItem ? 'blur' : 'empty'}
                      blurDataURL={blurItem?.blurDataURL}
                      className='object-cover object-center h-full'
                      src={item.image2}
                      width={1920}
                      height={1080}
                      alt='image'
                    />
                  </div>
                  <div className='flex flex-col justify-between px-6 py-8 gap-12 h-full min-h-52 text-lorenzo-dark dark:text-lorenzo-gray'>
                    <div className='flex flex-col gap-1'>
                      <h3 className='text-2xl md:text-3xl font-medium tracking-tight '>
                        {item.name}
                      </h3>
                      <p className='text-lg lg:text-xl text-muted-foreground '>
                        {item.category}
                      </p>
                    </div>
                    <MoreDetails
                      className='w-max h-9'
                      href={`work/project/${encodeURIComponent(
                        item.name
                      )}/${encodeURIComponent(item.id)}`}
                    />
                  </div>
                </motion.li>
              )
            })}
          </ul>
        </AnimatePresence>
      </article>
      <ButtonAction
        className={
          'bottom-5 lg:right-15 lg:bottom-45 lg:left-auto left-5 right-auto'
        }
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        icon={VscArrowUp}
      />
    </section>
  )
}

export default Work
