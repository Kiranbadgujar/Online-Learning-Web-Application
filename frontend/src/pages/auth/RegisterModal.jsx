import React from "react";

const RegisterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none bg-black bg-opacity-50">
      <div className="relative w-full max-w-md mx-auto my-6 bg-white rounded-sm shadow-xl">
        <div className="p-6 text-black">
          <h1 className="text-xl font-semibold mb-2">Create an account</h1>
          <input
            type="text"
            placeholder="Name"
            className="block w-full border-0 py-3 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="block w-full border-0 py-3 mt-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          />
          <input
            type="password"
            placeholder="Password"
            className="block w-full border-0 py-3 my-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          />
          <button className="bg-[#ffd200] px-8 py-2 text-black font-semibold w-full">
            Register
          </button>
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
  );
};

export default RegisterModal;
