
import Header from "@/components/Header";
import VisionMissionComponent from "@/components/VisionMissionComponent";
import Organizers from "@/components/Organizers";


export default function Home() {
  return (
    <div className="w-full flex flex-col relative min-h-screen">
        <Header title="Welcome" description="Ohio African Community Excellence Awards"/>


        <Organizers/>
    </div>
  );
}
