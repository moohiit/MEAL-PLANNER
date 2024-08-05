// MealPlan.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Button, TextField } from '@mui/material';

const MealPlan = () => {
  const [mealPlan, setMealPlan] = useState([]);
  const [week, setWeek] = useState(new Date().toISOString().slice(0, 10));

  const fetchMealPlan = async () => {
    const userId = localStorage.getItem('userId');
    const response = await axios.get(`/api/mealPlans/user/${userId}`);
    setMealPlan(response.data);
  };

  const createMealPlan = async () => {
    const userId = localStorage.getItem('userId');
    await axios.post('/api/mealPlans/create', { userId, week, days: [] });
    fetchMealPlan();
  };

  useEffect(() => {
    fetchMealPlan();
  }, []);

  return (
    <div>
      <Typography variant="h4">Meal Plan</Typography>
      <TextField
        type="date"
        value={week}
        onChange={(e) => setWeek(e.target.value)}
        label="Select Week"
      />
      <Button variant="contained" onClick={createMealPlan}>Create Meal Plan</Button>
      {mealPlan.map((plan) => (
        <div key={plan._id}>
          <Typography variant="h6">Week starting {new Date(plan.week).toDateString()}</Typography>
          {/* Display meal plan details here */}
        </div>
      ))}
    </div>
  );
};

export default MealPlan;
