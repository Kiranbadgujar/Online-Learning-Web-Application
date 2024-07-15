import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import menu from "../assets/icons/menu.svg";
import close from "../assets/icons/close.svg";
import logo from "../assets/img.png";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setIsRegisterModalOpen(false); // Ensure RegisterModal is closed
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
    setIsModalOpen(false); // Ensure LoginModal is closed
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

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

  return (
    <>
      <div className="flex justify-between item-center bg-black py-3 text-white">
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
              <button
                className="bg-[#ffd200] px-8 py-2 text-black font-semibold"
                onClick={openModal}
              >
                Login
              </button>
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
                <li className="text-xl text-white font-semibold hover:text-white w-full py-3 text-center cursor-pointer">
                  <button
                    className="bg-[#ffd200] px-8 py-2 text-black font-semibold"
                    onClick={openModal}
                  >
                    Login
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* Render LoginModal if isModalOpen is true */}
        <LoginModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSignUp={openRegisterModal} // Pass function to handle sign up
        />
        {/* Render RegisterModal if isRegisterModalOpen is true */}
        {isRegisterModalOpen && (
          <RegisterModal
            isOpen={isRegisterModalOpen}
            onClose={closeRegisterModal}
          />
        )}
      </div>
    </>
  );
};

export default Header;
