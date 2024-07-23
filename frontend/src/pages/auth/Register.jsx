import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const server = "http://localhost:5000";

  const validateName = () => {
    if (!name) {
      setNameError("Name cannot be empty");
      return false;
    }
    setNameError("");
    return true;
  };

  const validateEmail = () => {
    if (!email) {
      setEmailError("Email cannot be empty");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Password cannot be empty");
      return false;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return false;
    } else if (!/(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(password)) {
      setPasswordError("one number, and one special character");
      return false;
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      setPasswordError(
        "Password must contain at least one uppercase letter, one lowercase letter"
      );
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
    if (nameError && e.target.value) {
      validateName();
    }
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
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isNameValid && isEmailValid && isPasswordValid) {
      setBtnLoading(true);
      axios
        .post(`${server}/api/user/register`, { name, email, password })
        .then((response) => {
          toast.success(response.data.message);
          localStorage.setItem(
            "activationToken",
            response.data.activationToken
          );
          setTimeout(() => {
            navigate("/verify");
          }, 5000);
          
        })
        .catch((error) => {
          setBtnLoading(false);
          toast.error(error.response.data.message);
        });
    } else {
      // Handle validation errors
      console.log("Form has validation errors");
    }
  };

  return (
    <div className="container px-4 mx-auto mt-10 font-mono">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-extrabold">Sign up</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-extrabold" htmlFor="name">
              Name
            </label>
            <input
              className={`w-full p-4 text-lg font-extrabold placeholder-black border-2 border-black rounded ${
                nameError ? "border-red-500" : ""
              }`}
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleChangeName}
            />
            {nameError && <p className="text-red-500 mt-2">{nameError}</p>}
          </div>
          <div className="mb-4">
            <label className="block font-extrabold" htmlFor="email">
              Email
            </label>
            <input
              className={`w-full p-4 text-lg font-extrabold placeholder-black border-2 border-black rounded ${
                emailError ? "border-red-500" : ""
              }`}
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleChangeEmail}
            />
            {emailError && <p className="text-red-500 mt-2">{emailError}</p>}
          </div>
          <div className="mb-4 relative">
            <label className="block font-extrabold" htmlFor="password">
              Password
            </label>
            <input
              className={`w-full p-4 text-lg font-extrabold placeholder-black border-2 border-black rounded ${
                passwordError ? "border-red-500" : ""
              }`}
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={handleChangePassword}
            />
            <button
              type="button"
              className="absolute right-0 px-4 py-3 text-lg font-extrabold focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
            {passwordError && (
              <p className="text-red-500 mt-2">{passwordError}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={btnLoading}
            className="w-full py-4 px-6 mb-4 text-center text-lg  text-white font-extrabold bg-black hover:bg-[#ffd200] rounded"
          >
            {btnLoading ? "Please Wait..." : "Sign up"}
          </button>
          <p className="text-center font-extrabold">
            Have an account?{" "}
            <Link to="/login" className="text-[#ffd200] hover:underline">
              Login
            </Link>
          </p>
        </form>
        <Toaster />
      </div>
    </div>
  );
};

export default Register;
