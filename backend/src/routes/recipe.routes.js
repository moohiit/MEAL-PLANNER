// recipe.routes.js
import express from "express";
import { addRecipe, getRecipes } from "../controllers/recipe.controllers.js";

const router = express.Router();

router.post("/add", addRecipe);
router.get("/all", getRecipes);

export default router;
