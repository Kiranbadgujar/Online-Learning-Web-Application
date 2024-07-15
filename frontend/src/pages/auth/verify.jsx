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
    if (isNameOtp) {
      setBtnLoading(true);
      axios
        .post(`${server}/api/user/verify`, { otp })
        .then((response) => {
          toast.success(response.data.message);
          setName("");
          setEmail("");
          setPassword("");
          setBtnLoading(false);
          navigate("/verify");
        })
        .catch((error) => {
          if (error.response) {
            // Server responded with a status code outside of 2xx range
            const { status, data } = error.response;
            if (status === 400) {
              // Handle specific validation errors from server
              if (data.errors && data.errors.length > 0) {
                data.errors.forEach((err) => {
                  if (err.param === "name") {
                    setNameError(err.msg);
                  } else if (err.param === "email") {
                    setEmailError(err.msg);
                  } else if (err.param === "password") {
                    setPasswordError(err.msg);
                  }
                });
              } else {
                toast.error(data.message || "Registration failed");
              }
            } else if (status === 500) {
              toast.error("Internal server error. Please try again later.");
            } else {
              toast.error("An error occurred. Please try again.");
            }
          } else {
            // Request was made but no response received
            toast.error(
              "Network error. Please check your internet connection."
            );
          }
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
            <label className="block mb-2 font-extrabold" htmlFor="">
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
