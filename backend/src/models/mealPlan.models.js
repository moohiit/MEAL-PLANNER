// mealPlan.models.js
const mealPlanSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  week: Date,
  days: [{ day: String, recipes: [mongoose.Schema.Types.ObjectId] }], // Reference to recipe IDs
});

export default mongoose.model("MealPlan", mealPlanSchema);
