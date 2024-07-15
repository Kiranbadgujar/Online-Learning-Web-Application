import React, { useState } from "react";

const LoginModal = ({ isOpen, onClose, onSignUp }) => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
    onClose(); // Close the LoginModal
    onSignUp(); // Optional: Handle any signup-related logic
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none bg-black bg-opacity-50">
        <div className="relative w-full max-w-md mx-auto my-6 bg-white rounded-sm shadow-xl">
          <div className="p-6">
            <h1 className="text-xl font-semibold mb-2">Login</h1>
            <p className="text-lg text-black pt-4 pb-2 leading-6">
              Log in to Project Growth - Your Path To Financial Freedom
            </p>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="block w-full border-0 py-3 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="block w-full border-0 py-3 mt-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              required
            />
            <p className="text-xs text-black py-1">Forgot your password?</p>
            <button className="bg-[#ffd200] px-8 py-2 text-black font-semibold w-full">
              Login
            </button>

            {/* Sign up link */}
            <p className="text-black pt-2 text-center">
              Don’t have an account?{" "}
              <span
                onClick={openRegisterModal}
                className="font-medium cursor-pointer"
              >
                Sign up
              </span>
            </p>
            <button
              className="absolute top-0 right-0 m-4 text-gray-400 hover:text-gray-600"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
