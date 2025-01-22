import React from "react"
import { Search } from "lucide-react"
import { Menu } from 'lucide-react';

import Link from "next/link";

export default function AboutMobileNavbar() {
    return (
        <section className=" md:hidden ">
            <div className="flex justify-between w-full h-[69px] mt-[20px] " >
                <h1 className="text-[#22202E] w-[65px] h-[30px] ml-[20px] text-xl ">Avion</h1>
                <div className=" flex gap-[16px] ml-[20px] ">
                    <Search className="h-[16px] w-[16px] " />
                    <Menu className="h-[16px] w-[16px] mr-[20px] " />
                </div>

            </div>

            <div className="flex justify-center  h-[22px] gap-[30px] mt-[30px] mb-[20px] text-[#726E8D] "  >
                <Link href="/about" className=" "> About Us </Link>
                <Link href="/allproducts" className=" "> All Products </Link>               
                <Link href="/" className=" "> Home </Link>
            </div>

        </section>
    )
}