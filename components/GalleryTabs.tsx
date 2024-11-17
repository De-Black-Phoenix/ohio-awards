import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ImagesGrid from './ImagesGrid'


const GalleryTabs = () => {
  return (
     <section className='w-full flex flex-col items-center justify-center mb-4 bg-gradient-to-b from-[#fff] via-[#CFC086] to-[#fff] '>
        <section className="w-9/12">
        <Tabs defaultValue="2022" className="">
            <TabsList className='flex w-full justify-center bg-transparent'>
                <TabsTrigger value="2022" className='px-2 py-2 data-[state=active]:border data-[state=active]:border-mainColor rounded-xl text-gray-800 font-bold text-lg'>2022</TabsTrigger>
                <TabsTrigger value="2023" className='px-2 py-2 data-[state=active]:border data-[state=active]:border-mainColor rounded-xl text-gray-800 font-bold text-lg'>2023</TabsTrigger>
            </TabsList>
            <TabsContent value="2022">
                <ImagesGrid gridNumber={4} images={['/shots.png', '/shots.png', '/shots.png']} />
            </TabsContent>
            <TabsContent value="2023">
                <ImagesGrid gridNumber={4} images={['/shots.png', '/shots.png', '/shots.png', '/shots.png', '/shots.png', '/shots.png']} />
            </TabsContent>
        </Tabs>
        </section>
     
    </section>
  )
}

export default GalleryTabs