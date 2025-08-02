import Image from 'next/image'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

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
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default About
