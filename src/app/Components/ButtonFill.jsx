import React from 'react'
import Link from 'next/link'

export const ButtonFill = ({ icon: Icon, children, href= '/', iconClassName = '', className = '', ...props }) => {
  return (
    <Link href={href} {...props} className={`flex min-w-max items-center justify-center gap-3 text-sm font-bold bg-lorenzo-dark dark:bg-lorenzo-green text-lorenzo-gray dark:text-lorenzo-dark p-3 px-10 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out ${className}`}>
      {children}
      {Icon && <Icon className={`text-xl ${iconClassName}`} />}
    </Link>
  )
}
