import express, { Router, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const router = Router();
const PORT = process.env.PORT;

app.use(express.json());
// auth
import { authRoutes } from "@/routes";
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Your app is listening on port ${PORT}`);
});
