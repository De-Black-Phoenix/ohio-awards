import Image from 'next/image'
import React from 'react'

export const OrganizerCard = ({imageUrl, name, position}:{imageUrl: string, name: string, position: string}) => {
  return (
    <div className="w-full rounded-lg">
        <div className="w-full">
            <Image src="/organizer.png" alt="alt" width={240} height={300} className='w-full aspect-auto object-cover' />
        </div>
        <div className="flex justify-center w-full mt-2 flex-col">
            <h1 className="font-bold text-center text-sm md:text-base">Micky Charles</h1>
            <p className="text-mainColor text-center text-sm md:text-base">Philanthropist</p>
        </div>
    </div>
  )
}
