"use client";

import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from 'next/image';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // Set loading state
    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send your message.');
      }

      toast.success('Your message has been sent!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send your message. Please try again.');
    } finally {
      setIsSubmitting(false); // Reset loading state
    }
  };

  return (
    <section className="w-full flex justify-center mb-16">
      <section
        className="w-11/12 md:w-9/12 relative z-20 bg-cover bg-center rounded-xl"
        style={{ backgroundImage: "url('/imageBackground.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#fff] to-[#DB8A1] opacity-50"></div>
        <div className="relative z-20 p-8 h-fit grid gap-6 bg-gradient-to-b from-[#fff] via-[#CFC086] to-[#fff]">
          <div className="flex flex-col md:flex-row overflow-hidden rounded-lg">
            {/* Left side image */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
              <Image src="/contact.png" alt="Contact illustration" fill objectFit="contain" className="rounded-lg" />
            </div>
            {/* Right side form */}
            <div className="w-full md:w-1/2 p-6">
              <h2 className="text-2xl text-gray-900 font-bold mb-4 text-center">Get in touch with our team...</h2>
              <form onSubmit={onSubmit} className="space-y-4">
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full text-gray-800"
                />
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="w-full text-gray-800"
                />
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full text-gray-800"
                  rows={4}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full ${
                    isSubmitting ? 'bg-gray-400' : 'hover:bg-[#b76e15] bg-[#b76e1f]'
                  } text-white py-2 rounded-full font-bold`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContactForm;
