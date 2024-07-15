import React from "react";
import { SlPeople } from "react-icons/sl";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { MdOutlineContentCopy } from "react-icons/md";
import { MdOutlineChangeCircle } from "react-icons/md";
import { BiLabel } from "react-icons/bi";
import { MdOutlineAccessTime } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Info = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, [])

  return (
    <section className="bg-[#111111] font-mono">
      <div data-aos="zoom-in" data-aos-delay="400" className="text-center text-white pt-[25px]">
        <div className="border-t-2 h-[55px] w-[360px] lg:w-[525px] m-auto border-white mt-12"></div>
        <h1 className="-mt-[40px] pb-3 font-bold -tracking-tighter">
          BECOME AN INDEPENDENT TRADER
        </h1>
        <div className="border-t-2 w-[360px] lg:w-[525px] m-auto border-white"></div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center py-20 gap-20">
        <div className="flex flex-col justify-center items-center">
          <SlPeople data-aos="zoom-in" data-aos-delay="400" className="text-[#0adab9] text-[55px]"/>
          <h1 className="text-white text-[18px] font-medium py-6">
            45 Hours + Of Learning Content
          </h1>
          <div className="border-t-4 w-[50px] lg:w-[50px] border-[#0adab9]"></div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <PiTelevisionSimpleLight data-aos="zoom-in" data-aos-delay="400"  className="text-[#0adab9] text-[55px] w-[65px]"/>
          <h1 className="text-white text-[18px] font-medium py-6 text-center">
          Exclusive Access To Community
          </h1>
          <div className="border-t-4 w-[50px] lg:w-[50px] border-[#0adab9]"></div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <MdOutlineContentCopy data-aos="zoom-in" data-aos-delay="400" className="text-[#0adab9] text-[55px] w-[65px]"/>
          <h1 className="text-white text-[18px] font-medium py-6">
          Community Discussions market
          </h1>
          <div className="border-t-4 w-[50px] lg:w-[50px] border-[#0adab9]"></div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center pt-4 pb-32 gap-20">
        <div className="flex flex-col justify-center items-center">
          <MdOutlineChangeCircle data-aos="zoom-in" data-aos-delay="400" className="text-[#0adab9] text-[55px]"/>
          <h1 className="text-white text-[18px] font-medium py-6">
          Extremely AFFORDABLE
          </h1>
          <div className="border-t-4 w-[50px] lg:w-[50px] border-[#0adab9]"></div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <BiLabel data-aos="zoom-in" data-aos-delay="400" className="text-[#0adab9] text-[55px] w-[65px]"/>
          <h1 className="text-white text-[18px] font-medium py-6 text-center">
          100% Automation Of Pre-Defined<br></br> Backtested Strategies (Algo Course)
          </h1>
          <div className="border-t-4 w-[50px] lg:w-[50px] border-[#0adab9]"></div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <MdOutlineAccessTime data-aos="zoom-in" data-aos-delay="400" className="text-[#0adab9] text-[55px] w-[65px]"/>
          <h1 className="text-white text-[18px] font-medium py-6">
          LEARN ANYTIME ANYWHERE
          </h1>
          <div className="border-t-4 w-[50px] lg:w-[50px] border-[#0adab9]"></div>
        </div>
      </div>
    </section>
  );
};

export default Info;
