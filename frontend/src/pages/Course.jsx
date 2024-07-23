import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import { IoMdArrowDropdown } from "react-icons/io";
// import Starrating from "../components/Starrating";

const Course = () => {
  const data = [
    {
      img: img1,
      title: "OPTIONS TRADING MASTERCLAS",
      price: "₹4,999/-",
    },
    {
      img: img2,
      title: "ALGO OPTION STRATEGIES TO 100%",
      price: "₹6,999/-",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <p className="pl-[30px] lg:pl-[145px] pt-20 font-mono">
        <div className="">
          <button
            className="bg-[#5755d9] text-white font-semibold py-2 px-4 rounded inline-flex items-center"
            onClick={toggleDropdown}
          >
            <span>Category</span>
            <IoMdArrowDropdown />
          </button>

          {isOpen && (
            <div className="absolute mt-2 w-52 bg-white rounded-md shadow-2xl z-10">
              <div className="py-1">
                <a
                  href="#"
                  className="block px-2 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                >
                  Financial & Investing
                </a>
                <a
                  href="#"
                  className="block px-2 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                >
                  Option Trading
                </a>
                <a
                  href="#"
                  className="block px-2 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                >
                  Stock Market
                </a>
              </div>
            </div>
          )}
        </div>
      </p>
      <Link to={"/coursedetail"}>
        <div className="flex flex-col lg:flex-row w-[90%] lg:w-[80%] m-auto mt-12 gap-6 ">
          {data.map((item, index) => (
            <div key={index} className="hover:shadow-2xl pl-2">
              <img
                src={item.img}
                className="w-[376px] h-[212px] lg:w-[275px] lg:h-[170px] border-2"
              />
              <h1 className="text-[16px] font-semibold text-black mt-6">
                {item.title}
              </h1>
              <p className="text-[14px] text-[#9e9e9e] font-normal mt-2">
                Instructor : Utkarsh Bhargava
              </p>
              {/* <Starrating /> */}
              <p className="text-black mt-2 mb-4">
                Price{" "}
                <span className="text-[#00e99e] font-medium">{item.price}</span>
              </p>
            </div>
          ))}
        </div>
      </Link>
    </>
  );
};

export default Course;
