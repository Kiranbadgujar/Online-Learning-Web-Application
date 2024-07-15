import { User } from "../models/userModels.js";
import sendMail from "../middlewares/sendMail.js";
import TryCatch from "../middlewares/TryCatch.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = TryCatch(async (req, res) => {

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
  const OTP = Math.floor(Math.random() * 100000);
  console.log(`otp is ${OTP}`);
  const activationToken = jwt.sign(
    {
      name,
      email,
      password: hashpassword,
      OTP,
    },
    process.env.Activation_Secret,
    {
      expiresIn: "2m",
    }
  );
  const data = {
    name,
    OTP,
  };
  await sendMail(email, "E-Learning", data);

  return res.status(200).json({
    message: "OTP Send To Your Mail",
    activationToken,
  });
});

export const verifyUser = TryCatch(async (req, res) => {

  const { OTP, activationToken } = req.body;

  const verify = jwt.verify(activationToken, process.env.Activation_Secret);
  // console.log(verify);

  if (!verify) {
    return res.status(400).json({
      message: "otp expired",
    });
  }
  if (verify.OTP !== OTP) {
    return res.status(400).json({
      message: "Wrong OTP",
    });
  }
  await User.create({
    name: verify.name,
    email: verify.email,
    password: verify.password,
  });
  res.status(200).json({
    message: "User Register Successfully",
  });
});

export const loginUser = TryCatch(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user)
    return res.status(400).json({
      message: "No User with this email",
    });

  const matchPassword = await bcrypt.compare(password, user.password);

  if (!matchPassword)
    return res.status(400).json({
      message: "wrong Password",
    });

  const token = jwt.sign({ _id: user._id }, process.env.JWT_Secret, {
    expiresIn: "55m",
  });

  res.json({
    message: `Welcome back ${user.name}`,
    token,
    user,
  });
});

// export const myProfile = TryCatch(async (req, res) => {
//   const user = await User.findById(req.user._id);

//   res.json({ user });
// });
