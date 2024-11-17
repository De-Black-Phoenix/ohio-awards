import Awardees from '@/components/Awardees'
import GalleryTabs from '@/components/GalleryTabs'
import Header from '@/components/Header'
import PerformancesSection from '@/components/PerformancesSection'
import React from 'react'

const Gallery = () => {
  return (
    <div className="w-full flex flex-col relative min-h-screen mb-8 ">
        <Header title="Gallery" description="A Glimpse into Unforgettable Moments"/>
        <GalleryTabs/>
        <Awardees/>
        <PerformancesSection/>
    </div>
  )
}

export default Gallery