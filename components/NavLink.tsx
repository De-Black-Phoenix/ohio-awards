"use client"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({title, link}: {title: string, link:string}) => {
    const pathname = usePathname()
    const isActive = pathname === link
  return (
    <Link href={link} className={cn(
        "font-semibold border px-3 py-1 rounded-2xl cursor-pointer hover:bg-mainColor hover:text-white text-gray-800 w-fit border-gray-800 shadow-lg border-b-2",
        isActive && "bg-mainColor text-white")}>
     {title}
  </Link>
  )
}

export default NavLink