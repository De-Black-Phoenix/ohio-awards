import Image from 'next/image'
import React from 'react'

export const OrganizerCard = ({ imageUrl, name, position }: { imageUrl: string, name: string, position: string }) => {
  return (
    <div className="w-full md:w-full rounded-lg overflow-hidden ">
      <div className="w-full">
        <Image
          src={imageUrl}
          alt={name}
          width={240}
          height={300}
          className="w-full h-auto aspect-[3/4] object-cover"
        />
      </div>
      <div className="flex justify-center w-full mt-2 flex-col">
        <h1 className="font-bold text-center text-sm md:text-base">{name}</h1>
        <p className="text-mainColor text-center text-sm md:text-base">{position}</p>
      </div>
    </div>
  );
};