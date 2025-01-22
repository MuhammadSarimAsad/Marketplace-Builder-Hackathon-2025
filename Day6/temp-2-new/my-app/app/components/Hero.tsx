import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
      <section>
        <div className="px-8 py-12 hidden md:block ">
          <div className="flex flex-col md:flex-row -mx-4">
            {/* Left Section */}
            <div className="w-full md:w-[60%] h-auto md:h-[580px] border border-black bg-[#2A254B] text-white px-4 md:px-12 py-6 md:py-12 flex flex-col justify-between">
              <div>
                <h1 className="text-xl md:text-3xl md:text-left leading-tight">
                  The furniture brand for the <br /> future with timeless designs
                </h1>
                <div className="flex justify-center md:justify-start mt-6">
                <Link href="/allproducts">
                  <button className="w-[170px] h-[56px] bg-[#F9F9F926] hover:bg-[#f9f9f941] text-white border border-gray-600 mt-12 transition-all duration-300 ease-in-out">
                    View collection
                  </button>
                  </Link>
                </div>
              </div>

              <div className="my-4 md:my-0">
                <p className="text-sm md:text-base md:text-left leading-relaxed">
                  A new era in eco-friendly furniture with Avion, the French luxury retail brand
                  <br /> with sleek fonts, full colors, and a beautiful way to display things digitally
                  <br /> using modern web technologies.
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-[40%] h-auto md:h-[580px] bg-[#82AAAC] flex justify-center items-center">
              <div className="relative w-[400px] h-[500px]">
                <Image
                  src="/images/chair.png"
                  layout="responsive"
                  width={400}
                  height={500}
                  alt="chair"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* To display it correctly on mobile phone making it mobile responsive */}

        <div className='block md:hidden'>
          <div className="flex flex-col md:flex-row">
            {/* Left Section */}
            <div className="w-full h-auto md:h-[580px] border border-black bg-[#2A254B] text-white px-4 py-6 md:py-12 flex flex-col justify-between">
              <div>
                <h1 className="text-xl md:text-3xl md:text-left leading-tight text-[28px]">
                  The furniture brand <br /> for the  future with <br />timeless designs
                </h1>

              </div>

              <div className="gap-32px">
                <div className="mt-12 md:my-0">
                  <p className="text-sm md:text-base md:text-left leading-relaxed">
                    A new era in eco-friendly furniture with Avion, the French luxury retail brand
                    <br /> with sleek fonts, full colors, and a beautiful way to display things digitally
                    <br /> using modern web technologies.
                  </p>
                </div>
                <div className="flex justify-center md:justify-start ">
                  <button className="w-[170px] h-[56px] bg-[#F9F9F926] hover:bg-[#f9f9f941] text-white border border-gray-600 mt-12 transition-all duration-300 ease-in-out">
                    View collection
                  </button>
                </div>
              </div>


            </div>


            {/* No Right Section on mobile phone so hiding this code */}
            {/* <div className="w-full md:w-[40%] h-auto md:h-[580px] bg-[#82AAAC] flex justify-center items-center">
              <div className="relative w-[400px] h-[500px]">
                <Image
                  src="/image/chair.jpeg"
                  layout="responsive"
                  width={400}
                  height={500}
                  alt="chair"
                  className="object-cover"
                />
              </div>
            </div> */}
          </div>
        </div>


      </section>
    </>
  );
};

export default Hero;
