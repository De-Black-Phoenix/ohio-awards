"use client"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const VoteLink = ({title, link, isMobile}: {title: string, link:string, isMobile?:boolean}) => {
    const pathname = usePathname()
    const isActive = pathname === link
  return (
    <a href={`${link}`} className={cn(
        "font-semibold border px-3 py-1 rounded-2xl cursor-pointer hover:bg-mainColor hover:text-white text-gray-800 w-fit border-gray-800 shadow-lg border-b-2",
        isActive && "bg-mainColor text-white",
        isMobile && "w-full")}>
     {title}
  </a>
  )
}

export default VoteLink