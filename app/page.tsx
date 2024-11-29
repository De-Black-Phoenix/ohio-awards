
import Header from "@/components/Header";
import VisionMissionComponent from "@/components/VisionMissionComponent";
import Organizers from "@/components/Organizers";
import HeroSection from "@/components/HeroSection";
import HomeGallerySnippet from "@/components/HomeGallerySnippet";
import HomeContact from "@/components/HomeContact";
import HighlightsSection from "@/components/HighlightsSection";
import Sponsors from "@/components/Sponsors";
import ScheduleActivitiesSection from "@/components/ScheduledActivitiesSection";
import { fetchEventTimelines, fetchExpectations, fetchGalleryPageForHome, fetchKeyActivities, fetchMissionStatement } from "@/lib/actions";

export const revalidate = 0

export default async function Home() {
  const {missionStatement} = await fetchMissionStatement()
  const { tags, awardees, performances, gallery } = await fetchGalleryPageForHome()
  const keyActivities = await fetchKeyActivities()
  const timelines =await  fetchEventTimelines()
  const expectations = await fetchExpectations();



  console.log(timelines)
  return (
    <div className="w-full flex flex-col relative min-h-screen">
        <Header title="Welcome" description="Ohio African Community Excellence Awards"/>
        <HeroSection/>
        <VisionMissionComponent title='Our Mission' description={missionStatement? missionStatement as string: 'No mission statement found'} reverse/>
        <HomeGallerySnippet gallery={gallery}/>
        <ScheduleActivitiesSection keyActivities={keyActivities} timelines={timelines} expectations={expectations}/>
        <HighlightsSection tags={tags} awardees={awardees} performances={performances}/>
        <HomeContact/>
        <Sponsors/>
    </div>
  );
}
