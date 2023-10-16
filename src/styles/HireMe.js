import { CircularText } from "@/components/Icons";
import React from "react";
import Link from "next/link";



const HireMe = () => {
    return (
       <div
       className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden lg:right-8 lg:left-auto lg:top-0 lg:bottom-auto lg:absolute md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:!right-2"
       >
        
            <div
            className="w-48 h-auto flex items-center justify-center relative lg:w-24 md:w-24"
            >

            <CircularText
            className={"fill-dark dark:fill-light animate-spin-slow"} 
            />
            <Link href="mailto:ateeqbhatti487@gmail.com"
            className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:border-light hover:dark:bg-dark hover:dark:text-light lg:w-12 lg:h-12 lg:text-[10px] md:w-12 md:h-12 md:text-[10px] sm:z-10"
            >
            Hire Me</Link>
            </div>

        </div>
    )
}

export default HireMe