import Image from 'next/image'
import React from 'react'

const SingleImageComponent = ({imageUrl}:{imageUrl:string}) => {
  return (
    <div className="w-full rounded-lg">
        <div className="w-full">
            <Image src={imageUrl} alt="alt" width={240} height={300} className='w-full aspect-auto object-cover' />
        </div>
    </div>
  )
}

export default SingleImageComponent