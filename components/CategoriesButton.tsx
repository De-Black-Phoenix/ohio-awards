import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
   

const CategoriesButton = ({isMobile}:{isMobile?: true}) => {
  return (
    <section className="">
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className={cn(
        "font-semibold flex border px-3 py-1 cursor-pointer rounded-2xl  hover:bg-mainColor hover:text-white text-gray-800 w-fit border-gray-800 shadow-lg border-b-2 ",
        isMobile && "w-full text-center justify-center")}>
        Categories
        <span className="ml-2"><ChevronDown/></span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-y-scroll">
        
        <DropdownMenuGroup className='flex flex-col gap-4'>
            <DropdownMenuGroup>
                <DropdownMenuItem className='font-bold' >Lifetime & Special Recognition</DropdownMenuItem>

                <DropdownMenuItem>
                    Lifetime Achievement Award
                </DropdownMenuItem>
                <DropdownMenuItem>
                    Citizen of the year
                </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuGroup>
                <DropdownMenuItem className='font-bold' >Business & Professional Excellence</DropdownMenuItem>

                <DropdownMenuItem>
                Business of the year
                </DropdownMenuItem>
                <DropdownMenuItem>
                Organization of the year
                </DropdownMenuItem>
                <DropdownMenuItem>
                Pro Bono
                </DropdownMenuItem>
            </DropdownMenuGroup>
        </DropdownMenuGroup>

        <DropdownMenuGroup className='flex flex-col gap-4'>
            <DropdownMenuGroup>
                <DropdownMenuItem className='font-bold' >Arts, Culture & Events</DropdownMenuItem>

                <DropdownMenuItem>
                Arts and Culture Award
                </DropdownMenuItem>
                <DropdownMenuItem>
                Best Event of the Year
                </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuGroup>
                <DropdownMenuItem className='font-bold' >Youth  & Mentorship</DropdownMenuItem>

                <DropdownMenuItem>
                Youth Leadership Award
                </DropdownMenuItem>
                <DropdownMenuItem>
                Youth Mentor Award
                </DropdownMenuItem>
            </DropdownMenuGroup>
            </DropdownMenuGroup>

        <DropdownMenuGroup className='flex flex-col gap-4'>
            <DropdownMenuGroup>
                <DropdownMenuItem className='font-bold' >Community & Social Impact</DropdownMenuItem>

                <DropdownMenuItem>
                Philanthropy of the Year
                </DropdownMenuItem>
                <DropdownMenuItem>
                Volunteer Group of the Year
                </DropdownMenuItem>
                <DropdownMenuItem>
                Community Leadership Award
                </DropdownMenuItem>
                <DropdownMenuItem>
                Community Impact People’s Choice Award
                </DropdownMenuItem>
                <DropdownMenuItem>
                Community Collaboration of the Year
                </DropdownMenuItem>
            </DropdownMenuGroup>
            
        </DropdownMenuGroup>


    </DropdownMenuContent>
    </DropdownMenu>
    </section>
    
  )
}

export default CategoriesButton