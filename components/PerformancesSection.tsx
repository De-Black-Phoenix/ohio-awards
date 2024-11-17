import React from 'react'
import SingleImageComponent from './SingleImageComponent'
import Header from './Header'
import ImagesGrid from './ImagesGrid'

const PerformancesSection = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center mb-4 bg-gradient-to-b from-[#fff] via-[#CFC086] to-[#fff] '>
         <section className="w-9/12">
            <Header title='Performances' description="Meet the Stars of This Year’s Awards"/>
            <ImagesGrid gridNumber={3} images={['/performance.png', '/performance.png', '/performance.png']} />

         </section>
         
    </section>
  )
}

export default PerformancesSection