import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import menu from "../assets/icons/menu.svg";
import close from "../assets/icons/close.svg";
import logo from "../assets/img.png";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = ({ isAuth }) => {
  const [toggle, setToggle] = useState(false);
  const [icontoggle, setIconToggle] = useState(false);
  const [menuclass, setMenuClass] = useState("");

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const toggleIcon = () => {
    setIconToggle(!icontoggle);
  };

  useEffect(() => {
    setMenuClass(
      toggle
        ? "transition-opacity ease-in-out duration-300 transform translate-y-6 opacity-100"
        : "transition-opacity ease-in-out duration-300 transform translate-x-0 opacity-0"
    );
  }, [toggle]);

  // DROPDOWn

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between item-center bg-black py-3 text-white font-mono">
        <div className="pl-[35px] lg:pl-[100px]">
          <Link to="/">
            <img src={logo} className="w-[47px] h-[47px]" alt="Logo" />
          </Link>
        </div>
        <div className="hidden lg:flex ">
          <ul className="flex justify-between items-center gap-48">
            <li className="">
              <input
                type="text"
                placeholder="search"
                className="block border-0 py-3 pl-8 pr-40 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6"
              />
            </li>
            <li className="flex justify-between items-center gap-12 pr-36">
              <Link to="/course" className="font-semibold">
                Courses
              </Link>
              <p to="/course" className="font-semibold">
                {isAuth ? <Link to={"/dashboard"}>My Dashboard</Link> : ""}
              </p>
              {isAuth ? (
                <div
                  onClick={toggleDropdown}
                  className="flex justify-center items-center cursor-pointer"
                >
                  <div className="bg-white text-black p-2 rounded-full">KB</div>
                  <IoMdArrowDropdown />
                  {isOpen && (
                    <div className="absolute mt-2 w-56 bg-white rounded-md shadow-2xl top-14 mr-48">
                      <div className="py-1 px-1">
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-800 hover:bg-[black] hover:text-white"
                        >
                         My Purchase
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-800 hover:bg-[black] hover:text-white"
                        >
                         My Profile
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-800 hover:bg-[black] hover:text-white"
                        >
                          Logout
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  className="bg-[#ffd200] px-8 py-2 text-black font-semibold"
                  to={"/login"}
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
        {/*  MOBILE MENU */}
        <div className="lg:hidden flex flex-col pr-10">
          {icontoggle ? (
            <img
              src={close}
              alt="close icon"
              width={40}
              height={40}
              onClick={() => {
                toggleMenu();
                toggleIcon();
              }}
            />
          ) : (
            <img
              src={menu}
              alt="menu icon"
              width={40}
              height={40}
              onClick={() => {
                toggleMenu();
                toggleIcon();
              }}
            />
          )}
          {toggle && (
            <div
              id="mob-menu"
              className={`bg-black text-white  absolute mt-6 right-0 w-full ${menuclass}`}
            >
              <ul className="flex flex-col justify-start items-start gap-2">
                <li className="text-xl text-white font-semibold hover:text-white w-full py-3 text-center cursor-pointer">
                  <Link to="/course" className="font-semibold">
                    Courses
                  </Link>
                </li>
                {isAuth ? (
                  <Link
                    to={"/dashboard"}
                    className="ml-32 text-xl font-semibold"
                  >
                    My Dashboard
                  </Link>
                ) : (
                  ""
                )}
                <li className="text-xl text-white font-semibold hover:text-white w-full text-center cursor-pointer">
                  {isAuth ? (
                    <>
                      <li className="text-xl text-white font-semibold hover:text-white w-full py-2 text-center cursor-pointer">
                        <Link to="/course" className="font-semibold">
                          My Purchase
                        </Link>
                      </li>
                      <li className="text-xl text-white font-semibold hover:text-white w-full py-2 text-center cursor-pointer">
                        <Link to="/course" className="font-semibold">
                          My Profile
                        </Link>
                      </li>
                      <li className="text-xl text-white font-semibold hover:text-white w-full py-2 text-center cursor-pointer">
                        <Link to="/course" className="font-semibold">
                          Logout
                        </Link>
                      </li>
                    </>
                  ) : (
                    <Link
                      className="bg-[#ffd200] px-8 py-2 text-black font-semibold"
                      to={"/login"}
                    >
                      Login
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
