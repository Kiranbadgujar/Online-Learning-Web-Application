import { User } from "../models/userModels.js";
import sendMail from "../middlewares/sendMail.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    if (!email || !name || !password) {
      return res.status(400).json({
        message: "Please Fill All Input",
      });
    }

    let userValidate = await User.findOne({ email });
    if (userValidate) {
      return res.status(400).json({
        message: "User Already Exists",
      });
    }
    
    const hashpassword = await bcrypt.hash(password, 10);
    const otp = Math.floor(Math.random() * 100000);
    console.log(`otp is ${otp}`);
    const activationToken = jwt.sign(
      {
        name,
        email,
        password: hashpassword,
        otp,
      },
      process.env.Activation_Secret,
      {
        expiresIn: "10m", // Extend token expiry if necessary
      }
    );
    const data = {
      name,
      otp,
    };

    await sendMail(email, "E-Learning", data);

    return res.status(200).json({
      message: "OTP Sent To Your Mail",
      activationToken,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to register user",
      error: error.message,
    });
  }
};

export const verifyUser = async (req, res) => {
  try {
    const { otp, activationToken } = req.body;

    const verify = jwt.verify(activationToken, process.env.Activation_Secret);

    if (!verify) {
      return res.status(400).json({
        message: "Activation token expired or invalid",
      });
    }

    if (verify.otp !== otp) {
      console.log(otp);
      return res.status(400).json({
        message: "Wrong OTP",
      });
    }

    await User.create({
      name: verify.name,
      email: verify.email,
      password: verify.password,
    });

    return res.status(200).json({
      message: "User Registered Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to verify activation token",
      error: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "No User with this email",
      });
    }

    const matchPassword = await bcrypt.compare(password, user.password);

    if (!matchPassword) {
      return res.status(400).json({
        message: "Wrong Password",
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_Secret, {
      expiresIn: "1h", // Adjust token expiry as needed
    });

    return res.json({
      message: `Welcome back ${user.name}`,
      token,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Login Failed",
      error: error.message,
    });
  }
};
