// mealPlan.routes.js
import express from "express";
import {
  createMealPlan,
  getMealPlans,
} from "../controllers/mealPlan.controllers.js";

const router = express.Router();

router.post("/create", createMealPlan);
router.get("/user/:userId", getMealPlans);

export default router;
