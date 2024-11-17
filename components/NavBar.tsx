import React from 'react'
import {
    Sheet,
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
  
  
const NavBar = () => {
  return (
    <section className="w-full flex flex-col mb-10">
          <section className="flex md:hidden w-full mt-4 justify-between items-center px-6">
                <Image src="/logo.png" alt="alt" width={150} height={150} />
                <Sheet>
                  <SheetTrigger>
                    <Menu size={36}/>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle className="mb-4"></SheetTitle>
                      <div className="flex flex-col gap-4">
                        <VoteLink link="https://www.google.com/forms/about/" title="Vote" key={2} isMobile={true}/>
                        <MobileNavLink link="/" title="Home" key={1}/>
                        <MobileNavLink link="/about" title="About" key={3}/>
                        <CategoriesButton isMobile={true}/>
                        <MobileNavLink link="/gallery" title="Gallery" key={5}/>
                        <MobileNavLink link="/contact" title="Contact" key={6}/>
                      </div>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
            </section>
            <section className="hidden md:flex flex-col w-full mt-4 items-center ">
                <Image src="/logo.png" alt="alt" width={150} height={150} />
                <section className="w-9/12 flex justify-center gap-5 mt-4">
                  <VoteLink link="https://www.google.com/forms/about/" title="Vote" key={2}/>
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