import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import Header from './Header';
import HighLightsTabContent from './HighLightsTabContent';


interface HighlightsSectionProps {
  tags: string[];
  awardees: any[];
  performances: any[];
}

const HighlightsSection: React.FC<HighlightsSectionProps> = ({
  tags,
  awardees,
  performances,
}) => {
  

  return (
    <section className="w-full flex flex-col items-center bg-gradient-to-b from-[#fff] via-[#CFC086] to-[#fff] py-8">
      <Header title='Highlights' description='Explore highlights of past events awardees and video shots'/>

      <section className="w-11/12 md:w-9/12">
        <Tabs defaultValue='2024'>
          <TabsList className="flex w-full justify-center bg-transparent">
            {tags.map((tag, index) => (
              <TabsTrigger
                key={index}
                value={tag}
                className="px-2 py-2 data-[state=active]:border data-[state=active]:border-mainColor rounded-xl text-gray-800 font-bold text-lg"
              >
                {tag}
              </TabsTrigger>
            ))}
          </TabsList>

          {tags.map((tag, index) => {
            const filteredAwardees = awardees.filter(
              (item: any) => item.title === tag
            );
            const filteredPerformances = performances.filter(
              (item: any) => item.title === tag
            );

            return (
              <TabsContent key={index} value={tag}>
                {/* Render awardees and performances for the current tag */}
                <HighLightsTabContent awardees={filteredAwardees}  performances={filteredPerformances}/>
              </TabsContent>
            );
          })}
        </Tabs>
      </section>

    </section>
  );
};

export default HighlightsSection;
