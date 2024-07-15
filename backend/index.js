import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./database/dbcon.js";

import userRoutes from "./routes/userRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();

// using middlewares
app.use(express.json());
app.use(cors());

// using routes
app.use("/api", userRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  connectDb();
});
