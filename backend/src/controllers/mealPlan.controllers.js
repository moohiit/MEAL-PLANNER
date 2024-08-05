// mealPlan.controllers.js
export const createMealPlan = async (req, res) => {
  const newMealPlan = new MealPlan(req.body);
  await newMealPlan.save();
  res.status(201).json(newMealPlan);
};

export const getMealPlans = async (req, res) => {
  const mealPlans = await MealPlan.find({ userId: req.params.userId });
  res.json(mealPlans);
};
