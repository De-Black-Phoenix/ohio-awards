import Header from '@/components/Header'
import Organizers from '@/components/Organizers'
import VisionMissionComponent from '@/components/VisionMissionComponent'
import { fetchAboutPage } from '@/lib/actions'
import React from 'react'

export const revalidate = 0

const About = async() => {
  const aboutPage =  await fetchAboutPage()
  if (!aboutPage) {
    return <p>About Page data is not available.</p>;
  }

  const { missionStatement, visionStatement, theTeam } = aboutPage;

  return (
    <div className="w-full flex flex-col relative min-h-screen">
        <Header title="About" description="Ohio African Community Excellence Awards"/>

        <VisionMissionComponent title='Our Vision' description={visionStatement as string}/>
        <VisionMissionComponent title='Our Mission' description={missionStatement as string} reverse/>
        <Organizers key={1} team={theTeam} />
    </div>
  )
}

export default About