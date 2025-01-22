import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";

export default function Topbar(){
    return(
        <div className=" ">
            <div className=' flex justify-center items-center bg-[#2A254B] text-white h-[54px] md:h-[41px] w-full gap-[8px] '>
            <TbTruckDelivery className='w-[16px] h-[16px] ml-[8px] md:ml-[0] ' />
            <h6 className=" text-xs" > Free delivery on all orders over £50 with code easter checkout </h6>
            </div>


        </div>
    )

}