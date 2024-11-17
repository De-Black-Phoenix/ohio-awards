
import Header from "@/components/Header";
import VisionMissionComponent from "@/components/VisionMissionComponent";
import Organizers from "@/components/Organizers";
import HeroSection from "@/components/HeroSection";
import HomeGallerySnippet from "@/components/HomeGallerySnippet";
import HomeContact from "@/components/HomeContact";


export default function Home() {
  return (
    <div className="w-full flex flex-col relative min-h-screen">
        <Header title="Welcome" description="Ohio African Community Excellence Awards"/>
        <HeroSection/>
        <VisionMissionComponent title='Our Mission' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur tempora iure esse culpa natus accusamus. Odit dolore ab doloribus sequi corrupti porro, minus fugiat sint odio iusto voluptatibus, voluptatem ea at officiis nostrum repudiandae! Reiciendis, ea velit. Non quos voluptatum vitae nobis numquam dicta suscipit repellat delectus nihil ipsum? Possimus.' reverse/>
        <HomeGallerySnippet/>
        <Organizers/>
        <HomeContact/>
    </div>
  );
}
