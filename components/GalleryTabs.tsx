import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Awardees from './Awardees'
import PerformancesSection from './PerformancesSection'
import GalleryImages from './GalleryImages'


const GalleryTabs = ({ tags, awardees, performances, gallery }:any) => {

    return (
      <section className="w-full flex flex-col items-center justify-center mb-4 ">
        <section className="w-full">
          <Tabs defaultValue="2022">
            <TabsList className="flex w-full justify-center bg-transparent">
              {tags.map((tag:any, index:any) => (
                <TabsTrigger
                  key={index}
                  value={tag}
                  className="px-2 py-2 data-[state=active]:border data-[state=active]:border-mainColor rounded-xl text-gray-800 font-bold text-lg"
                >
                  {tag}
                </TabsTrigger>
              ))}
            </TabsList>
                {tags.map((tag: string, index: number) => {
                     const filteredGallery = (gallery || []).filter((item: any) => item.title === tag);
                     const filteredAwardees = (awardees || []).filter((item: any) => item.title === tag);
                     const filteredPerformances = (performances || []).filter((item: any) => item.title === tag);
                    return (
                    <TabsContent key={index} value={tag}>
                    {/* GalleryImages filtered by the current tag */}
                    <GalleryImages gallery={filteredGallery} />
                    
                    <Awardees awardees={filteredAwardees} />

                    <PerformancesSection performances={filteredPerformances} />
                    </TabsContent>
                    )
                }
                
            )}
          </Tabs>
        </section>
      </section>
    );
  };

export default GalleryTabs