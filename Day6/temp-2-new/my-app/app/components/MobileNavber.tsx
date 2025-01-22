import React from "react"
import { Search } from "lucide-react"
import { Menu } from 'lucide-react';

export default function MobileNavbar(){
    return(
        <section className=" md:hidden ">
            <div className="flex justify-between w-full h-[69px] mt-[20px] " >
                <h1 className="text-[#22202E] w-[65px] h-[30px] ml-[20px] text-xl ">Avion</h1>
                <div className=" flex gap-[16px] ml-[20px] ">
                <Search className="h-[16px] w-[16px] "/>
                <Menu className="h-[16px] w-[16px] mr-[20px] "/>
                </div>

            </div>

        </section>
    )
}