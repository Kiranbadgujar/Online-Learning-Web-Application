import React, { useState } from "react";
import { useParams , useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate();
  const params = useParams();
  const server = "http://localhost:5000";

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
    const isPasswordValid = validatePassword();

    if (isPasswordValid) {
      setBtnLoading(true);
      axios
        .post(`${server}/api/user/reset?token=${params.token}`, { password })
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
          <h2 className="text-3xl md:text-4xl font-extrabold">Reset Password</h2>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="mb-6">
            <label className="block mb-2 font-extrabold" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className={`w-full p-4 text-lg font-extrabold placeholder-black border-2 border-black rounded ${
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
          <button
            disabled={btnLoading}
            type="submit"
            className="w-full py-4 px-6 mb-6 text-center text-lg text-white font-extrabold bg-black hover:bg-[#ffd200] rounded"
          >
             {btnLoading ? "Please Wait..." : "Reset Password"}
          </button>
        </form>
        <Toaster />
      </div>
    </div>
  );
};

export default ResetPassword;
