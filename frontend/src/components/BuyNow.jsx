import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import img from "../assets/img2.png";

function BuyNow() {
  const [sidebar, setSidebar] = useState(true); // Initially show sidebar

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <nav
        className={
          sidebar
            ? "bg-[#f7f9fa] w-80 lg:w-[400px] max-h-screen flex fixed top-0 right-0 transition duration-350 ease-in-out overflow-y-auto"
            : " bg-[#f7f9fa] w-80 lg:w-[400px] flex justify-center fixed top-0 -right-full transition duration-350 ease-in-out overflow-y-auto"
        }
      >
        <ul className="w-full h-screen" onClick={showSidebar}>
          <div className="w-[90%] m-auto flex justify-between items-center pt-8">
            <li className="font-medium text-[18px]">Order details</li>
            <li className="bg-[#f7f9fa] h-20 flex justify-start items-center">
              <a className=" text-xl cursor-pointer">
                <AiIcons.AiOutlineClose />
              </a>
            </li>
          </div>
          <div className="border-t-2 border-[#393f41]] mt-2 mb-8"></div>
          <li className="w-[90%] m-auto flex gap-1">
            <img src={img} className="w-[125px]" />
            <h1 className="font-semibold">
              ALGO Option Strategies To 100% Automate Your Trading <span className="text-[#317ae7]">₹11,863.56</span>
            </h1>
          </li>
          <li className="w-[90%] m-auto flex gap-16 lg:gap-32 font-semibold pt-12 ">
            <h1 className="lg:text-[19px]">Course Price</h1>
            <span className="">₹11,863.56</span>
          </li>
          <li className="w-[90%] m-auto flex gap-24 lg:gap-36  font-semibold pt-2">
            <h1 className="lg:text-[19px]">Promo Code</h1>
            <span className="text-[#317ae7] cursor-pointer">Apply Code</span>
          </li>
          <li className="w-[90%] m-auto flex gap-28 lg:gap-44 font-semibold pt-2">
            <h1 className="lg:text-[19px]">GST 18%</h1>
            <span className="">₹2,135.44</span>
          </li>
          <li className="w-[90%] m-auto flex gap-16 lg:gap-32 font-semibold pt-2">
            <h1 className="lg:text-[19px]">Internet fees</h1>
            <span className="">₹297.34</span>
          </li>
          <div className="border-t-2 border-[#393f41]] mt-8 mb-2"></div>
          <li className="w-[90%] m-auto flex gap-28 lg:gap-44 font-semibold mt-7">
            <h1 className="lg:text-[19px]">You pay</h1>
            <span className="">₹14,296.34</span>
          </li>
          <button className=" w-full mt-12 bg-[#317ae7] py-4">Proceed</button>
        </ul>
      </nav>
    </>
  );
}

export default BuyNow;
