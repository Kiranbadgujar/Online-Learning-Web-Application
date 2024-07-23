import express from "express";
import {
  loginUser,
  register,
  verifyUser,
  forgotPassword,
  resetPassword
} from "../controllers/userControllers.js";
// import { isAuth } from "../middlewares/isAuth.js";

const router = express.Router();

router.post("/user/register", register);
router.post("/user/verify", verifyUser);
router.post("/user/login", loginUser);
router.post("/user/forgot", forgotPassword);
router.post("/user/reset", resetPassword);
// router.get("/user/me", isAuth, myProfile);

export default router;
