import React from 'react'
import Link from 'next/link'

export const ButtonStroke = ({props, children, className='', href='/' }) => {
  return (
    <Link href={href} {...props} className={`flex justify-center items-center bg-transparent border border-lorenzo-dark dark:border-lorenzo-gray p-3 px-10 font-bold text-sm cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out ${className} `}>
      {children}
    </Link>
  )
}
