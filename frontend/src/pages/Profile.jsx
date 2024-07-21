import React from "react";
import { CiCamera } from "react-icons/ci";

const Profile = () => {
  return (
    <>
      <div className="w-[60%] m-auto  flex flex-col lg:flex-row justify-between items-start mt-[95px]">
        <div className="text-[25px] font-medium">Profile Picture</div>
        <div className="rounded-full  bg-black w-64 h-64 flex items-center justify-center">
          <div className="text-[65px] text-white">KB</div>
        </div>
          <div className="rounded-full bg-black w-24 h-24 absolute lg:bottom-36 bottom-40 right-16 lg:right-72 flex items-center justify-center">
            <div className="text-[55px] text-white"><CiCamera /></div>
          </div>
      </div>

      <div className="w-[60%] m-auto flex flex-col lg:flex-row justify-between items-start mt-[125px]">
        <div className="text-[25px] font-medium">Update Profile Details</div>
        <div className="">
          <div className="px-4 font-mono">
            <form action="">
              <div className="mb-6">
                <label className="block mb-2 font-extrabold" htmlFor="">
                  Name
                </label>
                <input
                  className=" p-4 leading-6 text-lg font-extrabold placeholder-black bg-white shadow border-2 border-black rounded"
                  type="name"
                  placeholder="name"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 font-extrabold" htmlFor="">
                  Email
                </label>
                <input
                  className=" p-4 leading-6 text-lg font-extrabold placeholder-black bg-white shadow border-2 border-black rounded"
                  type="email"
                  placeholder="email"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 font-extrabold" htmlFor="">
                  Number
                </label>
                <input
                  className=" p-4 leading-6 text-lg font-extrabold placeholder-black bg-white shadow border-2 border-black rounded"
                  type="number"
                  placeholder="number"
                />
              </div>
              <button className="py-1 px-1 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-black hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="w-[60%] m-auto flex flex-col lg:flex-row justify-between items-start mt-[125px]">
        <div className="text-[25px] font-medium">Change Password</div>
        <div className="">
          <div className="px-4 font-mono">
            <form action="">
              <div className="mb-6">
                <label className="block mb-2 font-extrabold" htmlFor="">
                Current Password
                </label>
                <input
                  className=" p-4 leading-6 text-lg font-extrabold placeholder-black bg-white shadow border-2 border-black rounded"
                  type="Current Password"
                  placeholder="Current Password"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 font-extrabold" htmlFor="">
                New Password
                </label>
                <input
                  className=" p-4 leading-6 text-lg font-extrabold placeholder-black bg-white shadow border-2 border-black rounded"
                  type="New Password"
                  placeholder="New Password"
                />
              </div>
              <button className="py-1 px-1 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-black hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
