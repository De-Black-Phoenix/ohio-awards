import React from 'react';

const Header = ({ title, description }: { title: string, description: string }) => {
  return (
    <section className="flex flex-col justify-center w-full items-center gap-4 my-6 md:my-8 px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-mainColor font-bold text-center">
        {title}
      </h1>
      <p className="text-gray-700 text-center text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl">
        {description}
      </p>
    </section>
  );
};

export default Header;
