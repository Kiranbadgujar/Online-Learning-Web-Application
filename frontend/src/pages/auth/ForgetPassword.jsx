import React from "react";

const ForgetPassword = () => {
  return (
    <div className="container px-4 mx-auto mt-12 font-mono">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-extrabold">Forget password</h2>
        </div>
        <form action="">
          <div className="mb-6">
            <label className="block mb-2 font-extrabold" htmlFor="">
              Email
            </label>
            <input
              className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-black bg-white shadow border-2 border-black rounded"
              type="email"
              placeholder="email"
            />
          </div>
          <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
            <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
              
            </div>
          </div>
          <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-black hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200">
            Forget password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
