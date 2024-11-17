import ContactForm from '@/components/ContactForm'
import ContactUs from '@/components/ContactUs'
import Header from '@/components/Header'
import React from 'react'

const Contact = () => {
  return (
    <div className="w-full flex flex-col relative min-h-screen">
        <Header title="Contact" description="To Sponsor this noble cause, reach out to us via the form below"/>
        <ContactForm/>
       <ContactUs/>
    </div>
  )
}

export default Contact;