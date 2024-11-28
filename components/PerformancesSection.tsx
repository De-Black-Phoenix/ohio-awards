import React from 'react';
import Header from './Header';
import ImagesGrid from './ImagesGrid';

// Define props for PerformancesSection
interface PerformancesProps {
  performances: { url: string }[];
}

const PerformancesSection: React.FC<PerformancesProps> = ({ performances }) => {
  const images = performances.map((performance) => performance.url); // Extract URLs

  return (
    <section className="w-full flex flex-col mt-28 items-center justify-center mb-4 bg-gradient-to-b from-[#fff] via-[#CFC086] to-[#fff]">
      <section className="w-11/12 md:w-9/12">
        <Header title="Performances" description="Experience Spectacular Acts of the Year" />
        {images.length > 0 ? (
          <ImagesGrid gridNumber={3} images={images} />
        ) : (
          <div className="text-center text-gray-600 mt-8">
            <p>No performances available at the moment. Stay tuned!</p>
          </div>
        )}
      </section>
    </section>
  );
};

export default PerformancesSection;
