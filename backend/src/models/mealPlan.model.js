import mongoose from "mongoose";

const { Schema, model } = mongoose;

const daySchema = new Schema({
  day: {
    type: String,
    required: true,
  },
  recipes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Recipe",
      required: true,
    },
  ],
});

const mealPlanSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    week: {
      type: Date,
      required: true,
    },
    days: [daySchema],
  },
  {
    timestamps: true,
  }
);

const MealPlan = model("MealPlan", mealPlanSchema);

export default MealPlan;
