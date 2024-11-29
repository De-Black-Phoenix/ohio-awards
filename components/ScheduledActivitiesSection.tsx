import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ScheduleActivitiesSection = ({ keyActivities, timelines, expectations }: any) => {
  return (
    <section className="w-full flex flex-col items-center mt-4">
      <section className="w-11/12 md:w-9/12 relative bg-cover bg-center py-8 px-4 rounded-xl" style={{ backgroundImage: "url('/imageBackground.png')" }}>
        <h2 className="text-3xl font-bold text-center text-[#b76e1f]">Schedule & Activities</h2>
        <Tabs defaultValue="timeline" className="mt-4">
          <TabsList className="flex w-full justify-center bg-transparent md:text-lg">
            <TabsTrigger value="timeline" className="px-2 py-2 data-[state=active]:border data-[state=active]:border-mainColor rounded-3xl text-gray-800 font-bold md:text-lg">Event Timeline</TabsTrigger>
            <TabsTrigger value="activities" className="px-2 py-2 data-[state=active]:border data-[state=active]:border-mainColor rounded-3xl text-gray-800 font-bold md:text-lg">Key Activities</TabsTrigger>
            <TabsTrigger value="expect" className="px-2 py-2 data-[state=active]:border data-[state=active]:border-mainColor rounded-3xl text-gray-800 font-bold md:text-lg">What to Expect</TabsTrigger>
          </TabsList>

          <TabsContent value="timeline">
            <div className="mt-6">
              {timelines.map((event: any, index: number) => (
                <div key={index} className="mb-4 p-4 bg-[#B1AB99] hover:border hover:border-gray-900 rounded-xl hover:bg-transparent shadow-md">
                  <div className="flex items-center gap-10">
                    <div className="text-center">
                      <p className="font-bold text-lg">{new Date(event.date).toLocaleDateString()}</p>
                      <p className="text-4xl text-[#b76e1f] font-extrabold">{new Date(event.date).getDate()}</p>
                      <p className="text-md">{new Date(event.date).toLocaleString('default', { month: 'long' })} {new Date(event.date).getFullYear()}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">{event.title}</h3>
                      <p className="text-gray-700">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activities">
            <ul className="mt-4 list-disc list-inside">
              {keyActivities.map((activity: any, index: number) => (
                <li key={index} className="text-gray-800 font-bold text-lg">{activity.activity}</li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="expect">
            <ul className="mt-4 list-disc list-inside">
              {expectations.map((expectation: any, index: number) => (
                <li key={index} className="text-gray-800 font-bold text-lg">{expectation.expectation}</li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </section>
    </section>
  );
};

export default ScheduleActivitiesSection;
