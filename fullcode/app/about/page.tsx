/* eslint-disable @next/next/no-img-element */
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import AboutMobileNavbar from "../components/AboutMobileNavbar";
import Link from "next/link";

const About = () => {
  return (
    <div>

      <Topbar/>
      <div className=" md:mt-[50px]  md:mb-[70px] ">
      <Navbar/>
      </div>
      <AboutMobileNavbar/>


      {/* Hero Section */}
      <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-8">
        <div className="md:w-2/4 text-xl md:text-2xl text-center md:text-left text-custom-purple">
          A brand built on the love of craftsmanship, quality, and outstanding customer service
        </div>
        <div className="mt-6 md:mt-0">
        <Link href="/allproducts">
          <button className="bg-gray-200 h-12 w-40 rounded-sm text-custom-purple">
            View our products
          </button>
          </Link>
        </div>
      </div>

      {/* Story Section */}
      <div className="flex flex-col md:flex-row  w-full  items-center justify-center gap-[16px]  py-12 md:py-24 lg:mx-7">

        <div className="bg-[#2a254b] w-full md:w-1/2 h-[281px] md:h-[400px] lg:h-[478px] text-white p-8 md:p-16 mb-8 md:mb-0">
          <h1 className="text-xl md:text-2xl">It started with a small idea</h1>
          <p className="mt-6 ">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014.
          </p>
          <Link href="/allproducts">
          <button className="flex  text-white justify-center items-center bg-[#4e4d93] hover:bg-[#f9f9f941] h-12 w-full md:w-[60%] lg:w-[45%] rounded-sm mt-10 md:mt-[70px] lg:mt-[140px] ">
            View Collection
          </button>
          </Link>

        </div>
        <div className="w-full md:w-1/2 h-[281px] md:h-[400px] lg:h-[478px]">
          <img
            src="/images/About main.png"
            alt="About main"
            className="w-full h-[281px] md:h-[400px] lg:h-[478px] transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
          />
        </div>
      </div>

      {/* Service Section */}
      <div className="flex flex-col md:flex-row w-full h-auto items-center px-4 mb-4 mt-4 md:mt-0 ">
        <img
          src="/images/about second.png"
          alt="Service"
          className="w-full md:w-2/5 h-[325px] md:h-[450px] lg:h-[603px] mb-4 md:mb-0 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
        />
        <div className="border-2 bg-slate-200 w-full  md:w-3/5 h-[550px] md:h-[450px] lg:h-[603px] p-8 ">
          <h1 className="text-xl md:text-2xl text-custom-purple">
            Our service isn&lsquo;t just personal, it&lsquo;s actually hyper-personally exquisite
          </h1>
          <p className="text-custom-purple mt-6 mb-0 ">
            When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the
            mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so
            our Chelsea boutique became the hotbed for the London interior design community.
          </p>
          <button className="bg-white h-12 w-40  rounded-sm mt-10 lg:mt-48 text-custom-purple">Get in Touch</button>
        </div>
      </div>

      {/* Features Section */}

      <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
        {/* Title */}
        <h1 className="text-center text-xl md:text-2xl font-semibold">
          What makes our brand different
        </h1>

        {/* Features */}
        <div className="flex flex-col md:flex-row gap-8 mt-12 text-base md:text-lg">
          {/* Feature 1 */}
          <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
            <TbTruckDelivery size={30} className="text-[#2A254B]" />
            <p className="py-4 font-semibold">Next day as standard</p>
            <p>Order before 3pm and get your order the next day as standard.</p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
            <IoIosCheckmarkCircleOutline size={30} className="text-[#2A254B]" />
            <p className="py-4 font-semibold">Made by true artisans</p>
            <p>Hand-crafted goods made with real passion and craftsmanship.</p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
            <MdOutlinePriceChange size={30} className="text-[#2A254B]" />
            <p className="py-4 font-semibold">Unbeatable prices</p>
            <p>For our material and quality, you won&apos;t find better prices anywhere.</p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
            <LuSprout size={30} className="text-[#2A254B]" />
            <p className="py-4 font-semibold">Recycled packaging</p>
            <p>We use 100% recycled packaging to ensure our footprint is manageable.</p>
          </div>
        </div>
      </div>

{/* trying it using map array function will edit it soon */}

      {/* <div className="w-full h-auto pb-16">
        <h1 className="text-center mt-6 md:mt-14 text-custom-purple text-xl">What makes our brand different</h1>
        <div className="flex flex-wrap justify-center md:justify-evenly px-4 py-10 gap-8">
          {[
            {
              img: "/images/Delivery.png",
              title: "Next day as standard",
              desc: "Order before 3pm and get your order the next day as standard",
            },
            {
              img: "/images/check.png",
              title: "Made by true artisans",
              desc: "Handmade crafted goods made with real passion and craftsmanship",
            },
            {
              img: "/images/Purchase.png",
              title: "Unbeatable prices",
              desc: "For our materials and quality you won’t find better prices anywhere",
            },
            {
              img: "/images/Sprout.png",
              title: "Recycled packaging",
              desc: "We use 100% recycled materials to ensure our footprint is more manageable",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 w-72 h-auto rounded-sm px-6 py-8 text-center"
            >
              <img
                src={item.img}
                alt={item.title}
                className="mx-auto transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <h1 className="text-custom-purple text-lg mt-4">{item.title}</h1>
              <p className="text-custom-purple mt-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </div> */}

      {/* Newsletter Section */}
      <div className="w-full h-auto bg-gray-100 py-8">
        <div className="m-auto w-11/12 bg-white p-8 md:p-16">
          <h1 className="text-custom-purple text-2xl md:text-3xl text-center">Join the club and get the benefits</h1>
          <p className="text-custom-purple text-center mt-6 text-sm md:text-base">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0">
            <input
              type="text"
              placeholder="you@gmail.com"
              className="bg-gray-100 w-80 h-12 p-5 rounded-sm"
            />
            <button className="bg-custom-purple h-12 w-32 rounded-sm text-white">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


