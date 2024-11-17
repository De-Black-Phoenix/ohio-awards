import Image from 'next/image'
import React from 'react'
import { OrganizerCard } from './OrganizerCard'

const Organizers = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center mb-4 bg-gradient-to-b from-[#fff] via-[#CFC086] to-[#fff] '>
         <section className="w-9/12">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl text-mainColor font-bold text-center">Meet the Visionaries Behind the Awards</h1>
                <p className="text-gray-700 text-center">This prestigious event is brought to life by a team of passionate leaders dedicated to celebrating excellence</p>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4 gap-5">
                <OrganizerCard imageUrl='/organizer.png' name='Michael Awuah' position='Philantropist'/>
                <OrganizerCard imageUrl='/organizer.png' name='Michael Awuah' position='Philantropist'/>
                <OrganizerCard imageUrl='/organizer.png' name='Michael Awuah' position='Philantropist'/>
                <OrganizerCard imageUrl='/organizer.png' name='Michael Awuah' position='Philantropist'/>
                <OrganizerCard imageUrl='/organizer.png' name='Michael Awuah' position='Philantropist'/>
                <OrganizerCard imageUrl='/organizer.png' name='Michael Awuah' position='Philantropist'/>
                <OrganizerCard imageUrl='/organizer.png' name='Michael Awuah' position='Philantropist'/>
                <OrganizerCard imageUrl='/organizer.png' name='Michael Awuah' position='Philantropist'/>
                <OrganizerCard imageUrl='/organizer.png' name='Michael Awuah' position='Philantropist'/>
                
            </section>
         </section>
         
    </section>
  )
}

export default Organizers