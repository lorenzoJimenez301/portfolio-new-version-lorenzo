'use client'

import Image from 'next/image'
import Link from 'next/link'
import { LiaDownloadSolid, LiaCubeSolid } from 'react-icons/lia'
import { MdOutlineDesignServices } from 'react-icons/md'
import { VscArrowRight } from 'react-icons/vsc'
import { TbWorld } from 'react-icons/tb'
import '@splidejs/react-splide/css'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import { VscArrowUp } from 'react-icons/vsc'
import { SliderAbout } from '../Components/SliderAbout'
import { ButtonFill } from '../Components/ButtonFill'
import { ButtonStroke } from '../Components/ButtonStroke'
import MenuAbout from '../Components/MenuAbout'
import mockup from '../../../public/images/mockup-lorenzo.jpg'
import photo from '../../../public/images/lorenzo.png'
import { ButtonAction } from '../Components/ButtonAction'

export const MoreDetails = ({ href, className = '', ...props }) => {
  return (
    <Link
      {...props}
      className={`font-medium underline flex items-center gap-3 hover:gap-5 transition-all duration-300 ${className}`}
      href={href}
    >
      More Details <VscArrowRight className='text-2xl' />
    </Link>
  )
}

const CardServices = ({ icon: Icon, name, text, link, className = '' }) => (
  <div className='flex flex-col justify-between items-center gap-9 max-w-xs lg:max-w-auto h-full'>
    <div className='flex flex-col justify-center items-center gap-9'>
      {Icon && <Icon className={className} />}
      <h4 className='font-medium text-2xl'>{name}</h4>
      <p className='font-light uppercase tracking-tight text-justify text-xs lg:text-base leading-relaxed break-words w-full'>
        {text}
      </p>
    </div>
    <MoreDetails
      rel='noopener noreferrer'
      target='_blank'
      className='w-full'
      href={'https://wa.me/50687861758'}
    />
  </div>
)

export const TitleSection = ({ title, className = '', className2 = '' }) => {
  return (
    <div className={`flex items-center justify-center ${className2} gap-4`}>
      <h2 className='text-5xl lg:text-6xl whitespace-nowrap'>{title}</h2>
      <hr
        className={`w-44 hidden ${className} border-lorenzo-dark dark:border-lorenzo-gray h-0.7`}
      />
    </div>
  )
}

const services = [
  {
    name: 'Graphic Design',
    text: 'We craft visual identities and creative assets that capture attention, communicate your brand’s message effectively, and leave a lasting impression.',
    icon: MdOutlineDesignServices,
    link: '/'
  },
  {
    name: 'Web Development',
    text: 'We build modern, responsive, and high-performance websites that provide a seamless user experience and align perfectly with your business goals.',
    icon: TbWorld,
    link: '/'
  },
  {
    name: '3D Modeling',
    text: 'We create realistic and highly detailed 3D models for products, visualizations, and creative projects, bringing ideas to life with precision and style.',
    icon: LiaCubeSolid,
    link: '/'
  }
]

const About = () => {
  return (
    <section className='principal flex flex-col gap-20 lg:gap-30'>
      {/* Hero Image */}
      <article className='relative overflow-hidden w-full h-[20rem] md:h-[30rem] lg:h-[35rem]'>
        <Image
          src={mockup}
          alt='3D product mockup designed by Lorenzo Jiménez'
          width={1920}
          height={1080}
          quality={80}
          priority
          placeholder='blur'
          sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 1920px'
          className='object-cover object-center absolute h-full w-full img-con-mascara'
        />
      </article>

      {/* About Section */}
      <section className='container mx-auto px-4 flex flex-col gap-24'>
        <section className='flex flex-col-reverse lg:flex-row justify-center items-center gap-14 md:gap-10'>
          <div className='flex flex-col  gap-16 lg:gap-20 max-w-xl '>
            {/* Title */}
            <TitleSection
              className2='lg:justify-start'
              className='lg:inline-block'
              title={'About me'}
            />

            {/* Paragraphs */}
            <div className='flex flex-col items-center gap-5 font-light'>
              <p className='font-light uppercase text-justify text-xs lg:text-base leading-relaxed break-words'>
                I’m Lorenzo Jiménez Abarca, a creative professional passionate
                about design, technology, and visual storytelling.
              </p>
              <p className='font-light uppercase text-justify text-xs lg:text-base leading-relaxed break-words'>
                I specialize in graphic design, web development, and 3D
                modeling, with experience leading projects and collaborating in
                multidisciplinary teams.
              </p>
              <p className='font-light uppercase text-justify text-xs lg:text-base leading-relaxed break-words'>
                I enjoy learning, building, and bringing ideas to life through
                thoughtful design and modern tools like Node.js, Figma, Blender,
                and Adobe Creative Cloud.
              </p>
            </div>

            {/* Buttons */}
            <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-7 md:gap-10 w-full '>
              <ButtonStroke href='/contact' className='w-full'>
                Contact Me
              </ButtonStroke>
              <ButtonFill
                download
                href='cv/CV Lorenzo Desarrollo web y diseño gráfico.pdf'
                icon={LiaDownloadSolid}
                className='w-full '
              >
                Download Resume
              </ButtonFill>
            </div>
          </div>

          {/* Side Image */}
          <div>
            <Image
              src={photo}
              alt='Lorenzo Jiménez working on a design project'
              width={1080}
              height={1080}
              sizes='(max-width: 1024px) 100vw, 50vw'
              className='mask-b-from-50% mask-b-to-90% filter grayscale'
            />
          </div>
        </section>

        {/* Slider Section */}
        <article className='py-10 flex flex-col gap-20 items-center bg-lorenzo-lightgray dark:bg-lorenzo-lightdark text-lorenzo-dark dark:text-lorenzo-gray mask-l-from-80% mask-r-from-80%'>
          <h2 className='text-3xl font-medium'>Clients & Partners</h2>
          <div className='container mx-auto flex justify-center items-center'>
            <SliderAbout duration={0.3} />
          </div>
        </article>
      </section>

      {/* Knowledge Section */}
      <section className='container mx-auto px-4 flex flex-col gap-20 '>
        <div className='flex flex-col justify-center gap-20'>
          <TitleSection
            className2='lg:justify-start'
            className='lg:inline-block'
            title={'Knowledge'}
          />
        </div>
        <MenuAbout />
      </section>

      {/* Services Section */}
      <section className='container mx-auto px-4 lg:h-[50rem] flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center gap-40'>
          <TitleSection
            className2='xl:justify-start'
            className='xl:inline-block'
            title={'Services'}
          />
          <div className='grid grid-cols-1 lg:grid-cols-3 divide-chart-1 place-items-center gap-20 lg:gap-20 xl:gap-40 w-full'>
            {services.map((service, i) => (
              <CardServices key={i} className='text-9xl' {...service} />
            ))}
          </div>
        </div>
      </section>
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

export default About
