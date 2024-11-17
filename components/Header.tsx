import React from 'react'

const Header = ({title, description}:{title:string, description: string}) => {
  return (
    <section className="flex flex-col justify-center w-full items-center gap-2 my-8 px-4">
        <h1 className="text-xl md:text-4xl text-mainColor font-bold">{title}</h1>
        <p className="text-gray-700 text-sm md:text-base ">{description}</p>
    </section>
  )
}

export default Header