import React from 'react'

const Header = ({title, description}:{title:string, description: string}) => {
  return (
    <section className="flex flex-col justify-center w-full items-center gap-2 my-4 px-4">
        <h1 className="text-3xl text-mainColor font-bold">{title}</h1>
        <p className="text-gray-700 ">{description}</p>
    </section>
  )
}

export default Header