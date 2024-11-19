import React from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import ImagesGrid from './ImagesGrid';
import Header from './Header';
import HighLightsTabContent from './HighLightsTabContent';

const HighlightsSection = () => {
  const featuredAwards = ['/awardee.png','/awardee.png','/awardee.png','/awardee.png','/awardee.png'];

  const performances = ['/performance.png','/performance.png','/performance.png','/performance.png','/performance.png'];

  return (
    <section className="w-full flex flex-col items-center bg-gradient-to-b from-[#fff] via-[#CFC086] to-[#fff] py-8">
      <Header title='Highlights' description='Explore highlights of past events awardees and video shots'/>

      <section className="w-11/12 md:w-9/12">
        <Tabs defaultValue="2022">
          <TabsList className='flex w-full justify-center bg-transparent '>
            <TabsTrigger value="2022" className='px-2 py-2 data-[state=active]:border data-[state=active]:border-mainColor rounded-3xl text-gray-800 font-bold md:text-lg'>2022</TabsTrigger>
            <TabsTrigger value="2023" className='px-2 py-2 data-[state=active]:border data-[state=active]:border-mainColor rounded-3xl text-gray-800 font-bold md:text-lg'>2023</TabsTrigger>
            <TabsTrigger value="2024" className='px-2 py-2 data-[state=active]:border data-[state=active]:border-mainColor rounded-3xl text-gray-800 font-bold md:text-lg'>2024</TabsTrigger>
          </TabsList>
          
          <TabsContent value="2022">
            <HighLightsTabContent featuredAwards={featuredAwards} performances={performances}/>
          </TabsContent>
          
          <TabsContent value="2023">
          <HighLightsTabContent featuredAwards={featuredAwards} performances={performances}/>
          </TabsContent>

          <TabsContent value="2024">
          <HighLightsTabContent featuredAwards={featuredAwards} performances={performances}/>
          </TabsContent>
        </Tabs>
      </section>

    </section>
  );
};

export default HighlightsSection;
