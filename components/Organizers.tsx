import { OrganizerCard } from './OrganizerCard'
import Header from './Header'
interface Organizer {
  imageUrl: string;
  name: string;
  position: string;
}

interface OrganizersProps {
  team: Organizer[];
}

const Organizers: React.FC<OrganizersProps> = ({ team }) => {
  return (
    <section className='w-full flex flex-col items-center justify-center mb-10 bg-gradient-to-b from-[#fff] via-[#CFC086] to-[#fff] '>
         <section className="w-11/12 md:w-9/12">
            <Header 
              title='Meet the Visionaries Behind the Awards' 
              description="This prestigious event is brought to life by a team of passionate leaders dedicated to celebrating excellence" 
            />
        
            <section className="grid grid-cols-2 lg:grid-cols-4 mt-4 gap-5">
              {team.map((organizer, index) => (
                <OrganizerCard 
                  key={index} 
                  imageUrl={organizer.imageUrl} 
                  name={organizer.name} 
                  position={organizer.position} 
                />
              ))}
            </section>
         </section>
    </section>
  )
}

export default Organizers;
