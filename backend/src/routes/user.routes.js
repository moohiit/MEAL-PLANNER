import express from "express";
import { registerUser, loginUser, getUserDetails } from "../controllers/user.controllers.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authMiddleware, getUserDetails);
export default router;
