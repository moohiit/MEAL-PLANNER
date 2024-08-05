// Recipes.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Card, CardContent } from '@mui/material';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('/api/recipes/all');
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div>
      <Typography variant="h4">Recipes</Typography>
      {recipes.map((recipe) => (
        <Card key={recipe._id} variant="outlined">
          <CardContent>
            <Typography variant="h6">{recipe.name}</Typography>
            <Typography>{recipe.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Recipes;
