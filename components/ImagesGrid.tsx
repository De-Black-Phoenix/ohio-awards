import React from 'react';
import SingleImageComponent from './SingleImageComponent';

interface ImagesGridProps {
  images: string[];
  gridNumber: number;
}

const ImagesGrid: React.FC<ImagesGridProps> = ({ images, gridNumber }) => {
  return (
    <section className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${gridNumber} mt-4 gap-5`}>
      {images.map((imageUrl, index) => (
        <SingleImageComponent key={index} imageUrl={imageUrl} />
      ))}
    </section>
  );
};

export default ImagesGrid;
