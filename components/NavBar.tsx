'use client'
import React, { useState } from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import MobileNavLink from "@/components/MobileNavLink";
  import VoteLink from "@/components/VoteLink";
  import { Menu } from "lucide-react";
  import Image from "next/image";
  import CategoriesButton from "@/components/CategoriesButton";
import NavLink from './NavLink';
import { useRouter } from 'next/navigation';
  
  
const NavBar = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter();

  const handleNavLinkClick = (link: string) => {
    router.push(link);
    setOpen(false); // Manually close the sheet
  };

  return (
    <section className="w-full flex flex-col mb-10">
          <section className="flex md:hidden w-full mt-4 justify-between items-center px-6">
                <Image src="/logo.png" alt="alt" width={150} height={150} />
                <Sheet>
                  <SheetTrigger>
                    <Menu size={36}/>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader className='flex flex-col gap-4'>
                      <SheetTitle className="mb-4"></SheetTitle>
                        <VoteLink link="https://docs.google.com/forms/d/e/1FAIpQLSc6jRUBlTUB0PtEhcD-v4rF_29GKf2egz7zvyoITXGayrckqg/viewform" title="Vote" key={2} isMobile={true}/>
                        <SheetClose asChild>
                          <MobileNavLink onClick={() => handleNavLinkClick('/')} link="/" title="Home" key={1}/>
                        </SheetClose>
                        <SheetClose asChild>
                          <MobileNavLink onClick={() => handleNavLinkClick('/about')} link="/about" title="About" key={3}/>
                        </SheetClose>
                        <CategoriesButton isMobile={true}/>

                        <SheetClose asChild>
                        <MobileNavLink onClick={() => handleNavLinkClick('/gallery')} link="/gallery" title="Gallery" key={5}/>
                        </SheetClose>
                        <SheetClose asChild>
                          <MobileNavLink onClick={() => handleNavLinkClick('/contact')} link="/contact" title="Contact" key={6}/>
                        </SheetClose>


                    </SheetHeader>
                  </SheetContent>
                </Sheet>
            </section>
            <section className="hidden md:flex flex-col w-full mt-4 items-center ">
                <Image src="/logo.png" alt="alt" width={150} height={150} />
                <section className="w-9/12 flex justify-center gap-5 mt-4">
                  <VoteLink link="https://docs.google.com/forms/d/e/1FAIpQLSc6jRUBlTUB0PtEhcD-v4rF_29GKf2egz7zvyoITXGayrckqg/viewform" title="Vote" key={2}/>
                  <NavLink link="/" title="Home" key={1}/>
                  <NavLink link="/about" title="About" key={3}/>
                  <CategoriesButton/>
                  <NavLink link="/gallery" title="Gallery" key={5}/>
                  <NavLink link="/contact" title="Contact" key={6}/>
                </section>
            </section>
        </section>
  )
}

export default NavBar