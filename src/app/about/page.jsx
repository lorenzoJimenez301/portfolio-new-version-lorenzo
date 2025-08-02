import Image from 'next/image'


const About = () => {
  return (
    <section>
      <div className='h-full'>
        <Image
          className='object-cover '
          src={'/images/mockup-lorenzo.png'}
          alt='mockup lorenzo'
          width={1920}
          height={1080}
          priority
        />
      </div>
    </section>
  )
}

export default About
