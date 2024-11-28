import React from 'react';
import ImagesGrid from './ImagesGrid';

interface ImageData {
  title: string;
  url: string;
}

interface GalleryImagesProps {
  gallery: ImageData[] | undefined; // Allow gallery to be undefined
}

const  GalleryImages = ({ gallery }: GalleryImagesProps) => {
  if (!gallery) return <p>No gallery found...</p>; // Show loading message if gallery is undefined

  const images = gallery.map(image => image.url); 

  return (
    <section className="w-full flex flex-col items-center justify-center mb-4 bg-gradient-to-b from-[#fff] via-[#CFC086] to-[#fff]">
      <section className="w-11/12 md:w-9/12">
      {images.length > 0 ? (
          <ImagesGrid gridNumber={3} images={images} />
        ) : (
          <div className="text-center text-gray-600 mt-8">
            <p>No images available at the moment. Stay tuned!</p>
          </div>
        )}
      </section>
    </section>
  );
};

export default GalleryImages;
