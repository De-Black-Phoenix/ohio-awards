import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const VisionMissionComponent = ({reverse,title,description}:{reverse?: boolean, title: string, description: string}) => {
  return (
    <section className="w-full flex justify-center mb-16">
        <section 
                className='w-9/12 relative bg-cover bg-center rounded-xl '
                style={{ backgroundImage: "url('/imageBackground.png')" }}
            >
                <div className='absolute inset-0 bg-gradient-to-r from-[#fff] to-[#DB8A1] opacity-50'></div>
                <div className='relative z-10 p-8 h-fit  text-white grid grid-cols-1 md:grid-cols-2 place-content-center gap-6'>
                    <div className={cn("flex flex-col gap-2", reverse && "order-last")}>
                        <h1 className='text-3xl font-bold text-mainColor text-center'>{title}</h1>
                        <p className="text-gray-800 text-center">{description}</p>
                    </div>
                    <section className="w-full flex justify-center">
                        <Image src="/logo.png" alt="alt" width={230} height={230} />
                    </section>
                    
                </div>
        </section>
    </section>
    
  )
}

export default VisionMissionComponent