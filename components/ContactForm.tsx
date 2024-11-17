import React from 'react';
import { Input } from "@/components/ui/input"; // Adjust path as needed
import { Textarea } from "@/components/ui/textarea"; // Adjust path as needed
import Image from 'next/image';

const ContactForm = () => {
  return (
    
    <section className="w-full flex justify-center mb-16">
        <section 
                className='w-11/12 md:w-9/12 relative bg-cover bg-center rounded-xl '
                style={{ backgroundImage: "url('/imageBackground.png')" }}
            >
                <div className='absolute inset-0 bg-gradient-to-r from-[#fff] to-[#DB8A1] opacity-50'></div>
                <div className='relative z-20 p-8 h-fit  text-white grid  gap-6'>
                    <div className="flex relative flex-col md:flex-row bg-white shadow-lg  overflow-hidden">
                        {/* Left side image */}
                        <div className="w-full md:w-1/2 aspect-auto bg-contain bg-center" style={{ backgroundImage: "url('/contact.png')", objectFit:'contain' }}></div>
                        {/* Right side form */}
                        <div className="w-full md:w-1/2 p-6 ">
                            <h2 className="text-2xl font-bold mb-4">Get in touch with our team...</h2>
                            <form className="space-y-4">
                            <Input type="text" placeholder="Name" className="w-full" />
                            <Input type="email" placeholder="Email address" className="w-full" />
                            <Textarea placeholder="Message" className="w-full" rows={4} />
                            <button className="w-full hover:bg-[#b76e15] bg-[#b76e1f] text-white py-2 rounded-full font-bold">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
        </section>
    </section>
  );
};

export default ContactForm;
