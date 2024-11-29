"use client";
import React from "react";
import Header from "./Header";
import CarouselComponent from "./Carousel";

interface ImageCardProps {
  imageUrl: string;
  caption: string;
}

interface HomeGallerySnippetProps {
  gallery: { title: string; url: string }[];
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, caption }) => {
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-lg">
      <img src={imageUrl} alt={caption} className="w-full h-full object-cover" />
    </div>
  );
};

const HomeGallerySnippet: React.FC<HomeGallerySnippetProps> = ({ gallery }) => {
  return (
    <section className="w-full flex flex-col items-center justify-center mb-6 bg-gradient-to-b from-[#fff] via-[#CFC086] to-[#fff]">
      <Header title="Gallery" description="Check out our gallery to explore past event memories" />
      <CarouselComponent
        images={gallery.map((item) => ({
          imageUrl: item.url,
          caption: item.title,
        }))}
      />
      <section className="block w-full mt-6">
        <div className="flex w-full justify-center">
          <a
            href="/gallery"
            className="hover:bg-[rgb(183,110,21)] px-6 block bg-[#b76e1f] w-fit text-white py-2 rounded-full font-bold"
          >
            View More
          </a>
        </div>
      </section>
    </section>
  );
};

export default HomeGallerySnippet;
