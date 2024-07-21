import React,{useState} from "react";
import {Link} from "react-router-dom"
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Verify = () => {
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);  
  const server = "http://localhost:5000";

  const validateOtp = () => {
    if (!otp) {
      setOtpError("Otp cannot be empty");
      return false;
    }
    setOtpError("");
    return true;
  };

  const handleChangeOtp = (e) => {
    setOtp(e.target.value);
    if (otpError && e.target.value) {
      validateOtp();
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isNameOtp = validateOtp();
    // console.log(isNameOtp);
    if (isNameOtp) {
      setBtnLoading(true);
      const activationToken = localStorage.getItem("activationToken");
      axios
        .post(`${server}/api/user/verify`, { otp , activationToken })
        .then((response) => {
          toast.success(response.data.message);
          navigate("/login");
          localStorage.clear();
          setBtnLoading(false);
        })
        .catch((error) => {
          toast.error(error.response.data.message);
          setBtnLoading(false);
        });
   
    } else {
      console.log("Form has validation errors");
    }
  }
  return (
    <div className="container px-4 mx-auto mt-12 font-mono">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-extrabold">Verify Acount</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block mb-2 font-extrabold" htmlFor="otp">
              OTP
            </label>
            <input
              className={`inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-black bg-white shadow border-2 border-black rounded ${
                otpError ? "border-red-500" : ""
              }`}
              type="text"
              placeholder="Otp"
              value={otp}
              onChange={handleChangeOtp}
            />
            {otpError && <p className="text-red-500 mt-2">{otpError}</p>}
          </div>
          <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
            <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
              
            </div>
          </div>
          <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-black hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200">
          {btnLoading ? "Please Wait..." : "Verify Otp"}
          </button>
          <p className="text-center font-extrabold">
            Go To {" "}
            <Link to="/login" className="text-[#ffd200] hover:underline">
              Login
            </Link>
            {" "}Page
          </p>
        </form>
        <Toaster />
      </div>
    </div>
  );
};

export default Verify;
