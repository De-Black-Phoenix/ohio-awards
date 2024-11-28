import React from 'react';
import Header from './Header';
import ImagesGrid from './ImagesGrid';

// Define props for the component
interface AwardeesProps {
  awardees: { url: string }[];
}

const Awardees: React.FC<AwardeesProps> = ({ awardees }) => {
  const images = awardees.map((awardee) => awardee.url); // Extract URLs

  return (
    <section className="w-full mt-28 flex flex-col items-center justify-center mb-4 bg-gradient-to-b from-[#fff] via-[#CFC086] to-[#fff]">
      <section className="w-11/12 md:w-9/12">
        <Header title="Awardees" description="Meet the Stars of This Year’s Awards" />
        {images.length > 0 ? (
          <ImagesGrid gridNumber={3} images={images} />
        ) : (
          <div className="text-center text-gray-600 mt-8">
            <p>No awardees available at the moment. Stay tuned!</p>
          </div>
        )}
      </section>
    </section>
  );
};

export default Awardees;
