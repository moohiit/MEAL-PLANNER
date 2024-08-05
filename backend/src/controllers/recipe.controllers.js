// recipe.controllers.js
export const addRecipe = async (req, res) => {
  const newRecipe = new Recipe(req.body);
  await newRecipe.save();
  res.status(201).json(newRecipe);
};

export const getRecipes = async (req, res) => {
  const recipes = await Recipe.find();
  res.json(recipes);
};
