import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import Starrating from "../components/Starrating";

const Hero = () => {
  const data = [
    {
      img: img1,
      title: "OPTIONS TRADING MASTERCLAS",
      price: "₹4,999/-",
    },
    {
      img: img2,
      title: "ALGO OPTION STRATEGIES TO 100% AUTOMATE YOUR TRADING",
      price: "₹6,999/-",
    },
  ];
  return (
    <section className="bg-[#0d1624] pb-16 font-mono">
      <div className="text-center text-white pt-[25px]">
        <div className="border-t-2 h-[55px] w-[360px] lg:w-[525px] m-auto border-white mt-12"></div>
        <h1 className="-mt-[40px] pb-3 font-bold -tracking-tighter">
          WEALTH CREATION COURSES
        </h1>
        <div className="border-t-2 w-[360px] lg:w-[525px] m-auto border-white"></div>
      </div>
      <div className="flex flex-col lg:flex-row w-[90%] lg:w-[80%] m-auto mt-12 gap-6">
        {data.map((item, index) => (
          <div key={index}>
            <img
              src={item.img}
              className="w-[376px] h-[212px] lg:w-[524px] lg:h-[295px] border-2"
            />
            <h1 className="text-[16px] font-semibold text-white mt-6">
              {item.title}
            </h1>
            <p className="text-[14px] text-[#9e9e9e] font-normal mt-2">
              Instructor : Utkarsh Bhargava
            </p>
            <Starrating />
            <p className="text-white mt-2 mb-4">
              Price{" "}
              <span className="text-[#00e99e] font-medium">{item.price}</span>
            </p>
            <Link
              to="/coursedetail"
              className="text-white bg-[#07a68d] px-8 py-2 rounded-full"
            >
              Enroll Now
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
