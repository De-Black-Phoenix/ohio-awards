import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#031A28] to-[#422F01] text-white py-8 w-full">
      <div className="container mx-auto flex flex-col md:flex-row w-11/12 lg:w-9/12 justify-between items-start px-4 md:gap-6">
        <div className="flex items-center mb-6 md:mb-0">
          <Image src="/logo.png" alt="alt" width={150} height={150} className="w-28 md:w-36" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          <div>
            <h4 className="font-semibold mb-2 text-center md:text-left">About Event</h4>
            <ul className="space-y-1 text-center md:text-left">
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Gallery</a></li>
              <li><a href="#" className="hover:underline">Mission & Vision</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-center md:text-left">Connect with Us</h4>
            <ul className="space-y-1 text-center md:text-left">
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">YouTube</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-center md:text-left">Legal Agreements</h4>
            <ul className="space-y-1 text-center md:text-left">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-8 pt-4 flex flex-col md:flex-row justify-center items-center text-center px-4">
        <p className="mb-2 md:mb-0 md:mr-4">Copyright © 2024 | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
