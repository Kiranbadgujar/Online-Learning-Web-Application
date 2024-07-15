import React, { Link } from "react";
import img from "../assets/img.png";
import { FaInstagram } from "react-icons/fa";
import img1 from "../assets/download.jpg"
import img2 from "../assets/download1.png"
import img3 from "../assets/download2.jpg"

const Hero = () => {
  return (
    <section className="font-mono pb-16">
      <div className="text-center text-black pt-[25px]">
        <div className="border-t-2 h-[55px] w-[360px] lg:w-[525px] m-auto border-black mt-12"></div>
        <h1 className="-mt-[40px] pb-3 font-bold -tracking-tighter">
          MEET YOUR MENTOR
        </h1>
        <div className="border-t-2 w-[360px] lg:w-[525px] m-auto border-black"></div>
      </div>
      <div className="flex flex-col justify-center items-center pt-2">
        <img src={img} className="" />
        <h1 className="text-[25px]  py-9 font-medium">Utkarsh Bhargava</h1>
        <FaInstagram className="text-[25px] "/>
      </div>
      <div className="text-center text-black pt-[25px]">
        <div className="border-t-2 h-[55px] w-[360px] lg:w-[525px] m-auto border-black mt-12"></div>
        <h1 className="-mt-[40px] pb-3 font-bold -tracking-tighter">
          DAILY LEARNING VIDEOS ON
        </h1>
        <div className="border-t-2 w-[360px] lg:w-[525px] m-auto border-black"></div>
      </div>
      <div className="flex justify-center items-center pt-6">
        <img src={img1} className="w-[55px] h-[55px]"/>
        <img src={img2} className="w-[85px] h-[55px]"/>
      </div>

      <div className="text-center text-black pt-[25px]">
        <div className="border-t-2 h-[55px] w-[360px] lg:w-[525px] m-auto border-black mt-12"></div>
        <h1 className="-mt-[40px] pb-3 font-bold -tracking-tighter">
          INSTANTLY CHAT WITH US 
        </h1>
        <div className="border-t-2 w-[360px] lg:w-[525px] m-auto border-black"></div>
      </div>
      <div className="flex justify-center items-center pt-6">
        <img src={img3} className="w-[55px] h-[55px]"/>
      </div>
    </section>
  );
};

export default Hero;
