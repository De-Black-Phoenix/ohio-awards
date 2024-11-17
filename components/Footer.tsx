// components/Footer.js
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#031A28] to-[#422F01] text-white py-8  w-full">
      <div className="container mx-auto  flex flex-col md:flex-row w-9/12 justify-between items-start px-4">
        <div className="flex items-center">
          <div className="text-2xl font-bold">
            <div className="flex items-center">
              {/* Insert image/logo here */}
              <Image src="/logo.png" alt="alt" width={150} height={150} /> 
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center space-x-16 place-content-center gap-3 text-center md:text-left">
          <div>
            <h4 className="font-semibold mb-2">About Event</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Gallery</a></li>
              <li><a href="#" className="hover:underline">Mission & Vision</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Connect with Us</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">YouTube</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Legal Agreements</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-8 pt-4 flex justify-center items-center px-4">
        <p>Copyright © 2024 | All rights reserved</p>
        <div className="flex space-x-4">
          {/* Replace with actual icons or images */}
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
