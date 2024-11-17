import React from 'react';
import Header from './Header';

interface ImageCardProps {
  imageUrl: string;
  caption: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, caption }) => {
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-lg">
      <img src={imageUrl} alt={caption} className="w-full h-full object-cover" />
    </div>
  );
};

const HomeGallerySnippet: React.FC = () => {
  const images = [
    { imageUrl: '/contact.png', caption: 'OHIO AFRICAN COMMUNITY EXCELLENCE AWARD 2024' },
    { imageUrl: '/contact.png', caption: 'OHIO AFRICAN COMMUNITY EXCELLENCE AWARD 2024' },
    { imageUrl: '/contact.png', caption: 'OHIO AFRICAN COMMUNITY EXCELLENCE AWARD 2024' },
    { imageUrl: '/contact.png', caption: 'OHIO AFRICAN COMMUNITY EXCELLENCE AWARD 2024' },
    { imageUrl: '/contact.png', caption: 'OHIO AFRICAN COMMUNITY EXCELLENCE AWARD 2024' },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center mb-6 bg-gradient-to-b from-[#fff] via-[#CFC086] to-[#fff]">  
         <Header title="Gallery" description="Check out our gallery to explore past events memories"/>
        <div className="flex w-11/12 md:w-9/12 justify-center gap-4 flex-wrap bg-white py-3 rounded-lg">
        {images.map((image, index) => (
            <div className="w-[180px] md:w-[180px]" key={index}>
            <ImageCard imageUrl={image.imageUrl} caption={image.caption} />
            </div>
        ))}
        <section className="block w-full">
            <div className="flex w-full justify-center">
                <a href="/" className="hover:bg-[rgb(183,110,21)] px-6 block bg-[#b76e1f] w-fit text-white py-2 rounded-full font-bold">View More</a>
            </div>
        </section>

        </div>
    </section>
  
  );
};

export default HomeGallerySnippet;
