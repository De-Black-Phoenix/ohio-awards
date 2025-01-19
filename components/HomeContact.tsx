import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import React from 'react'
import Header from './Header'

const HomeContact = () => {
  return (
    <section className="w-full flex justify-center mb-16">
    <section 
            className='w-9/12 relative bg-cover bg-center rounded-xl '
            style={{ backgroundImage: "url('/imageBackground.png')" }}
        >
            <div className='absolute inset-0 bg-gradient-to-r from-[#fff] to-[#DB8A1] opacity-50'></div>
            <div className='relative z-10 p-8 h-fit  text-white flex flex-col gap-2'>
                <Header title='Contact' description='Connect with us on the following various platforms'/>
                <section className="w-full flex gap-4 justify-center">
                    <div className=" bg-gradient-to-r from-red-700 to-yellow-400 flex justify-center items-center rounded-full w-10 h-10">
                        <a href="https://www.instagram.com/oacea_usa/" className="">
                        <Instagram/>
                        </a>
                    </div>
                    <div className=" bg-gradient-to-r from-red-700 to-yellow-400 flex justify-center items-center rounded-full w-10 h-10">
                        <a href="https://www.facebook.com/share/15raxe5f4w/?mibextid=wwXIfr" className="">
                        <Facebook/>
                        </a>
                    </div>
                    <div className=" bg-gradient-to-r from-red-700 to-yellow-400 flex justify-center items-center rounded-full w-10 h-10">
                        <Youtube/>
                    </div>
                    <div className=" bg-gradient-to-r from-red-700 to-yellow-400 flex justify-center items-center rounded-full w-10 h-10">
                        <Twitter/>
                    </div>
                </section>
                
            </div>
    </section>
</section>
  )
}

export default HomeContact