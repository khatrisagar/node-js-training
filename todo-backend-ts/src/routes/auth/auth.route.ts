import { Router } from "express";
const router = Router();

import { signUpUser } from "@/controllers";

router.post("/signup", signUpUser);

export { router as authRoutes };
