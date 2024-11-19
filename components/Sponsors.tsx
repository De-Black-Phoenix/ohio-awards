import React from 'react'
import Header from './Header'

const Sponsors = () => {
  const sponsors = [
    'Aviela Food Bevy',
    'Glory Event and Decor',
    'Glorious Studios',
    'Ekumfi Pure Juice',
    'VIGIL Mobility Foundation',
    'QASA',
    'WYATTSDOT Production',
    '360 Classy Occasions',
    'Glory African Market',
    'DJ Bonzy',
    'Afro614 Multimedia',
  ];


  return (
    <section className="w-full flex flex-col items-center justify-center mb-6 bg-gradient-to-b from-[#fff] via-[#CFC086] to-[#fff]">  
         <Header title="Sponsors" description="Check out our proud and firm sponsors"/>
        <div className="flex w-11/12 md:w-9/12 justify-center gap-4 flex-wrap  py-3 rounded-lg">
            <section className="flex flex-wrap justify-center gap-4  p-6">
              {sponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-white text-black rounded-full text-lg font-semibold shadow-md"
                >
                  {sponsor}
                </div>
              ))}
            </section>
        </div>
    </section>
  )
}

export default Sponsors