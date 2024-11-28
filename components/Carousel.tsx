import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImageCardProps {
    imageUrl: string;
    caption: string;
  }
  
  const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, caption }) => {
    return (
      <div className="relative rounded-3xl overflow-hidden shadow-lg mx-2"> {/* Added mx-2 here */}
        <img src={imageUrl} alt={caption} className="w-full h-full object-cover rounded-lg" />
      </div>
    );
  };
  

  const CarouselComponent = ({ images }:any) => {

    const settings = {
        infinite: true,
        centerMode: true,
        centerPadding: "5px",
        slidesToShow: 5,
        slidesToScroll: 1,
        focusOnSelect: true,
        responsive: [
          { breakpoint: 1024, settings: { slidesToShow: 3 } },
          { breakpoint: 768, settings: { slidesToShow: 2 } },
          { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
      };
    
  
    return (
      <div className="w-11/12 md:w-9/12 justify-center bg-white p-10 rounded-3xl">
        <Slider {...settings}>
        {images.map((image:any, index:any) => (
        <div key={index} className="w-[180px]"> {/* Removed mx-2 here */}
            <ImageCard imageUrl={image.imageUrl} caption={image.caption} />
        </div>
        ))}

        </Slider>
      </div>
    );
  };
  
  export default CarouselComponent;