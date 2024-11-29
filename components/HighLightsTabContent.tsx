import Image from 'next/image'
import React from 'react'
import ImagesGrid from './ImagesGrid'

const HighLightsTabContent = ({awardees,performances }:any) => {
  const awardeeImages = awardees.map((image:any) => image.url); 
  const performancesImages = performances.map((image:any) => image.url); 

  return (
    <section className="">
        <div className="mt-8">
            <h3 className="text-xl font-bold text-start mb-4">Features Awards</h3>
            <ImagesGrid gridNumber={3} images={awardeeImages}/>

        </div>
        
      <div className="mt-8">
        <h3 className="text-xl font-bold text-start mb-4">Performances</h3>
        <ImagesGrid gridNumber={3} images={performancesImages}/>
      </div>

      <div className="flex justify-center mt-6">
        <a href="/gallery" className="bg-[#b76e1f] hover:bg-[rgb(183,110,21)] text-white px-6 py-2 rounded-full font-bold">
          View More
        </a>
      </div>
    </section>
  )
}

export default HighLightsTabContent