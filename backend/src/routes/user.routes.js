import express from "express";
import {
  registerUser,
  loginUser,
  getUserDetails,
  logoutUser,
  getUserProfile,
  updateUserPreferences,
} from "../controllers/user.controllers.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser)
router.get("/profile", authMiddleware, getUserProfile);
router.put("/preferences", authMiddleware, updateUserPreferences);
export default router;
