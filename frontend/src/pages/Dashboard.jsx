import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/No data.gif";

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row w-[80%] m-auto -mb-18">
      <img src={logo} />
      <div className="lg:text-[50px] mt-32 ">
        <h1 className="">No Active Course</h1>
        <h1 className="">
          Explore Our Best Courses{" "}
          <Link
            className="bg-[#ffd200] px-8 py- text-black font-semibold"
            to={"/course"}
          >
            Explore Course
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Dashboard;
