import React from "react"
import { Search } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { CircleUser } from 'lucide-react';
import Link from "next/link";


export default function Navbar(){
    return(
        <section className="hidden md:block">

        <div className="flex justify-between mt-[20px]" >
            <Search className="h-[16px] w-[16px] ml-[20px] " />

            <h3 className="h-[30px] w-[65px] text-[24px] ml-[40px] "> Avion </h3>


            <div className="flex gap-[8px] ">
            <Link href = "/Cart">
            <ShoppingCart className="h-[16px] w-[16px] "/>
            </Link>
            <CircleUser className="h-[16px] w-[16px] ml-[15px] mr-[20px] " />
            </div> 
    
        </div>
        <div className="flex justify-center  h-[22px] gap-[30px] mt-[30px] mb-[20px] text-[#726E8D] "  > 
            <Link href="/" className=" "> Home </Link>
            <Link href="/about" className=" "> About Us </Link>            
            <Link href="" className=" "> Tables </Link>
            <Link href="" className=" "> Chairs </Link>
            <Link href="" className=" "> Crockery </Link>
            <Link href="" className=" "> Tableware </Link>
            <Link href="/allproducts" className=" "> All Products </Link>
            
           

        </div>
        </section>
    )

}