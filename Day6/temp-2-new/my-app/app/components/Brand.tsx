import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";



const Brand = () => {
  const features = [
    {
      title: 'Next day as standard',
      description: 'Order before 3pm and get your order the next day as standard.',
      icon: TbTruckDelivery,
    },
    {
      title: 'Made by true artisans',
      description: 'Hand-crafted goods made with real passion and craftsmanship.',
      icon: IoIosCheckmarkCircleOutline,
    },
    {
      title: 'Unbeatable prices',
      description: 'For our material and quality, you won’t find better prices anywhere.',
      icon: MdOutlinePriceChange,
    },
    {
      title: 'Recycled packaging',
      description: 'We use 100% recycled packaging to ensure our footprint is manageable.',
      icon: LuSprout,
    },
  ];

  return (
    <section>
      <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
        {/* Title */}
        <h1 className="text-center text-xl md:text-2xl font-semibold">
          What makes our brand different
        </h1>

        {/* Features */}
        <div className="flex flex-col md:flex-row gap-8 mt-12 text-base md:text-lg">
          {features.map((feature, index) => {
            const Icon = feature.icon; // Extract the icon
            return (
              <div key={index} className="flex flex-col md:w-[25%] p-4 rounded-lg">
                <Icon size={30} className="text-[#2A254B]" />
                <p className="py-4 font-semibold">{feature.title}</p>
                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brand;