import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Accordiansidebar from "./Accordiansidebar";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="flex justify-start items-center">
        <span className="menu-bars ml-8 text-4xl mt-6 cursor-pointer">
          <FaIcons.FaBars onClick={showSidebar} />
        </span>
      </div>
      <nav
        className={
          sidebar
            ? "bg-[#f7f9fa] w-80 lg:w-[400px] max-h-screen flex fixed top-0 transition duration-350 ease-in-out overflow-y-auto"
            : " bg-[#f7f9fa] w-80 lg:w-[400px] flex justify-center fixed top-0 -left-full transition duration-350 ease-in-out overflow-y-auto"
        }
      >
        <ul className="w-full" onClick={showSidebar}>
          <li className="bg-[#f7f9fa] w-full h-20 flex justify-start items-center gap-36">
            <Link to="/coursedetail" className="menu-bars ml-8 text-3xl">
              <FaArrowLeft />
            </Link>
            <a className="ml-28 text-4xl cursor-pointer">
              <AiIcons.AiOutlineClose />
            </a>
          </li>
          <li>
            <Accordiansidebar />
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Sidebar;
