import React,{useState} from "react";
import {Link , useNavigate} from "react-router-dom"
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Verify = () => {
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);  
  const navigate = useNavigate();
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
      const activationToken = localStorage.getItem("activationToken");
      axios
        .post(`${server}/api/user/verify`, { otp , activationToken })
        .then((response) => {
          toast.success(response.data.message);
          localStorage.clear();
          setTimeout(() => {
            navigate("/login");
          }, 5000);
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
              className={`w-full p-4 text-lg font-extrabold placeholder-black shadow border-2 border-black rounded ${
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
          <button className="w-full py-4 px-6 mb-6 text-center text-lg font-extrabold text-white bg-black hover:bg-[#ffd200] rounded">
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
