'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { TitleSection } from '@/app/about/page'
import { ButtonFill } from '@/app/Components/ButtonFill'
import { FaGithub } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'
import { FaWordpress, FaNodeJs, FaReact, FaFigma } from 'react-icons/fa'
import {
  SiPhp,
  SiAdobecreativecloud,
  SiBlender,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiThreedotjs,
  SiNetlify,
  SiNextdotjs,
  SiTailwindcss
} from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import Escena3D from '../../../Components/Model'

export const ProjectPage = ({ project }) => {
  const IconsUsed = {
    SiPhp,
    SiAdobecreativecloud,
    SiBlender,
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiAdobeaftereffects,
    SiThreedotjs,
    SiNetlify,
    GrMysql,
    FaWordpress,
    FaNodeJs,
    FaReact,
    FaFigma,
    SiNextdotjs,
    SiTailwindcss,
    SiAdobepremierepro
  }

  function useIsMobile (maxWidth = 1020) {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= maxWidth)
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [maxWidth])

    return isMobile
  }

  const isMobile = useIsMobile()

  const renderCategory = {
    '3D Model': (
      <div className='dark:bg-lorenzo-lightdark w-full h-96 lg:h-[40rem]'>
        <Escena3D scale={project.scale} model={project.model} />
      </div>
    ),
    'Graphic Design': (
      <article className='h-96 relative flex justify-center items-center w-full'>
        <video
          poster={project.blurDataURL}
          autoPlay
          loop
          muted
          playsInline
          className='absolute h-full w-full object-cover object-center z-0'
          src={project.video}
        />
      </article>
    )
  }

  return (
    <section className='flex flex-col justify-center items-center gap-20'>
      <article className='h-96 relative flex justify-center items-center w-full'>
        {project.video === null || isMobile ? (
          <Image
            height={1080}
            width={1920}
            className={`absolute h-full w-full object-center object-cover`}
            src={project.image3}
            placeholder='blur'
            blurDataURL={project.blurDataURL}
            alt='image project'
          />
        ) : (
          <video
            poster={project.blurDataURL}
            autoPlay
            loop
            muted
            playsInline
            className='absolute h-full w-full object-cover object-center z-0'
            src={project.video}
          />
        )}
        <div className='absolute h-full w-full object-cover object-center bg-lorenzo-dark/85 z-10' />
        <h2 className='text-lorenzo-gray z-20 text-4xl lg:text-8xl font-bold text-center'>
          {project.name}
        </h2>
      </article>
      <article className='container mx-auto px-4 flex flex-col justify-center items-center'>
        <p className='font-light text-center text-xs lg:text-base w-full max-w-lg lg:max-w-xl'>
          {project.desc}
        </p>
      </article>
      <div className='container mx-auto px-4 flex flex-col justify-center items-center gap-20 lg:gap-30'>
        <article className='grid grid-cols-2 grid-rows-2 gap-3 h-96 lg:h-[45rem] w-full lg:max-w-4xl'>
          <div className='row-span-1 relative overflow-hidden '>
            <Image
              blurDataURL={project.blurDataURL}
              placeholder='blur'
              height={1080}
              width={1920}
              alt='image grid'
              src={project.image1}
              className='h-full w-full object-cover absolute object-center'
            />
          </div>
          <div className='row-span-2 relative overflow-hidden'>
            <Image
              quality={90}
              blurDataURL={project.blurDataURL}
              placeholder='blur'
              height={1920}
              width={1080}
              alt='image grid'
              src={project.image4}
              className='h-full w-full absolute object-cover object-center'
            />
          </div>
          <div className='row-span-1 relative overflow-hidden'>
            <Image
              blurDataURL={project.blurDataURL}
              placeholder='blur'
              height={1080}
              width={1920}
              alt='image grid'
              src={project.image3}
              className='h-full w-full absolute object-cover object-center'
            />
          </div>
        </article>
        <article className='flex flex-col justify-center items-center gap-15 w-full'>
          <TitleSection title={'Software'} />
          <ul className='flex flex-wrap justify-center items-center gap-y-10 gap-x-10 '>
            {project.tecnoUsed
              .filter(i => IconsUsed[i.icon])
              .map((i, index) => {
                const Icon = IconsUsed[i.icon]
                return (
                  <li
                    key={index}
                    className='flex flex-1 justify-center items-center gap-4'
                  >
                    <p className='whitespace-nowrap text-xs lg:text-lg'>
                      {i.name}
                    </p>
                    <Icon className='text-2xl' />
                  </li>
                )
              })}
          </ul>
          <div
            className={`${
              project.category != 'Web Project' ? 'hidden' : 'flex'
            } w-full flex flex-col lg:flex-row justify-center items-center gap-10`}
          >
            <ButtonFill
              target='_blank'
              href={project.github}
              className='w-full max-w-md lg:max-w-sm'
              icon={FaGithub}
            >
              Repository
            </ButtonFill>
            <ButtonFill
              target='_blank'
              href={project.netlify}
              className='w-full max-w-md lg:max-w-sm'
              icon={TbWorld}
            >
              Deploy
            </ButtonFill>
          </div>
        </article>
      </div>
      {renderCategory[project.category] ?? null}
    </section>
  )
}
