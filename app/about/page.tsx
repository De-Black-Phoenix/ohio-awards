import Header from '@/components/Header'
import Organizers from '@/components/Organizers'
import VisionMissionComponent from '@/components/VisionMissionComponent'
import React from 'react'

const About = () => {
  return (
    <div className="w-full flex flex-col relative min-h-screen">
        <Header title="About" description="Ohio African Community Excellence Awards"/>

        <VisionMissionComponent title='Our Vision' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur tempora iure esse culpa natus accusamus. Odit dolore ab doloribus sequi corrupti porro, minus fugiat sint odio iusto voluptatibus, voluptatem ea at officiis nostrum repudiandae! Reiciendis, ea velit. Non quos voluptatum vitae nobis numquam dicta suscipit repellat delectus nihil ipsum? Possimus.'/>
        <VisionMissionComponent title='Our Mission' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur tempora iure esse culpa natus accusamus. Odit dolore ab doloribus sequi corrupti porro, minus fugiat sint odio iusto voluptatibus, voluptatem ea at officiis nostrum repudiandae! Reiciendis, ea velit. Non quos voluptatum vitae nobis numquam dicta suscipit repellat delectus nihil ipsum? Possimus.' reverse/>
        <Organizers key={1} />
    </div>
  )
}

export default About