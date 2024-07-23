import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const navigate = useNavigate();
  const server = "http://localhost:5000";

  const validateEmail = () => {
    if (!email) {
      setEmailError("Email cannot be empty");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    if (emailError && e.target.value) {
      validateEmail();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmailValid = validateEmail();

    if (isEmailValid) {
      setBtnLoading(true);
      axios
        .post(`${server}/api/user/forgot`, { email })
        .then((response) => {
          toast.success(response.data.message);
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
  };

  return (
    <div className="container px-4 mx-auto mt-12 font-mono">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-extrabold">Forget Password</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block mb-2 font-extrabold" htmlFor="email">
              Email
            </label>
            <input
              className={`w-full p-4 text-lg font-extrabold placeholder-black border-2 border-black rounded ${
                emailError ? "border-red-500" : ""
              }`}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChangeEmail}
            />
            {emailError && <p className="text-red-500 mt-2">{emailError}</p>}
          </div>
          <button
            disabled={btnLoading}
            type="submit"
            className="w-full py-4 px-6 mb-6 text-center text-lg text-white font-extrabold bg-black hover:bg-[#ffd200] rounded"
          >
             {btnLoading ? "Please Wait..." : "Forget Password"}
          </button>
        </form>
        <Toaster />
      </div>
    </div>
  );
};

export default ForgetPassword;
