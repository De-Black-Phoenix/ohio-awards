"use client";
import { cn } from '@/lib/utils';
import { useRouter, usePathname } from 'next/navigation';
import React from 'react';

const MobileNavLink = ({ title, link , onClick}: { title: string, link: string, onClick: any}) => {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = pathname === link;



  return (
    <button
      onClick={onClick}
      className={cn(
        "font-semibold border px-3 py-1 rounded-2xl cursor-pointer hover:bg-mainColor hover:text-white text-gray-800 border-gray-800 shadow-lg w-full",
        isActive && "bg-mainColor text-white"
      )}
    >
      {title}
    </button>
  );
};

export default MobileNavLink;
