import Image from 'next/image'
import React from 'react'

const SingleImageComponent = ({imageUrl}:{imageUrl:string}) => {
  return (
    <div className="w-full rounded-lg">
        <div className="w-full">
            <Image src={imageUrl} alt="alt" width={180} height={250} className='w-[180px] md:w-[250px] aspect-auto object-cover' />
        </div>
    </div>
  )
}

export default SingleImageComponent