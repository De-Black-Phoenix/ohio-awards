import Awardees from '@/components/Awardees'
import GalleryTabs from '@/components/GalleryTabs'
import Header from '@/components/Header'
import PerformancesSection from '@/components/PerformancesSection'
import { fetchGalleryPage } from '@/lib/actions'
import React from 'react'
export const revalidate = 0
const Gallery = async() => {
  const { tags, awardees, performances, gallery } = await fetchGalleryPage();

  return (
    <div className="w-full flex flex-col relative min-h-screen mb-8 ">
        <Header title="Gallery" description="A Glimpse into Unforgettable Moments"/>
        <GalleryTabs tags={tags} awardees={awardees} performances={performances} gallery={gallery} />
    </div>
  )
}

export default Gallery