// src/pages/RecipeSearch.jsx
import React, { useState } from 'react';
import { fetchRecipes } from '../api/recipeApi';
import { TextField, Button, Typography } from '@mui/material';

const RecipeSearch = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async () => {
    const results = await fetchRecipes(query);
    setRecipes(results);
  };

  return (
    <div>
      <Typography variant="h4">Recipe Search</Typography>
      <TextField
        label="Search for recipes"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        fullWidth
      />
      <Button onClick={handleSearch} variant="contained" color="primary">
        Search
      </Button>
      <div>
        {recipes.map((recipe, index) => (
          <div key={index}>
            <Typography variant="h6">{recipe.recipe.label}</Typography>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <Typography variant="body2">{recipe.recipe.source}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSearch;
