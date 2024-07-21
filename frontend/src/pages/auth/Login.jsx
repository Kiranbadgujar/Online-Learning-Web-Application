import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Login = ({ setIsAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 
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

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Password cannot be empty");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    if (emailError && e.target.value) {
      validateEmail();
    }
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    if (passwordError && e.target.value) {
      validatePassword();
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      setBtnLoading(true);
      axios
        .post(`${server}/api/user/login`, { email, password })
        .then((response) => {
          toast.success(response.data.message);
          localStorage.setItem("token", response.data.token);
          setIsAuth(true);
          setBtnLoading(false);
          navigate("/");
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
          <h2 className="text-3xl md:text-4xl font-extrabold">Sign in</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block mb-2 font-extrabold" htmlFor="email">
              Email
            </label>
            <input
              className={`inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-black bg-white shadow border-2 border-black rounded ${
                emailError ? "border-red-500" : ""
              }`}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChangeEmail}
            />
            {emailError && <p className="text-red-500 mt-2">{emailError}</p>}
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-extrabold" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className={`inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-black bg-white shadow border-2 border-black rounded ${
                  passwordError ? "border-red-500" : ""
                }`}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={handleChangePassword}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-4 py-3 text-lg font-extrabold focus:outline-none"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {passwordError && (
              <p className="text-red-500 mt-2">{passwordError}</p>
            )}
          </div>
          <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
            <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0"></div>
            <div className="w-full lg:w-auto px-4">
              <Link
                to="/forgetPassword"
                className="inline-block font-extrabold hover:underline"
              >
                Forgot your password?
              </Link>
            </div>
          </div>
          <button
            disabled={btnLoading}
            type="submit"
            className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-black hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
          >
             {btnLoading ? "Please Wait..." : "Sign in"}
          </button>
          <p className="text-center font-extrabold">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-[#ffd200] hover:underline"
              href="#"
            >
              Sign up
            </Link>
          </p>
        </form>
        <Toaster />
      </div>
    </div>
  );
};

export default Login;
