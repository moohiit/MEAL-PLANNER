import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import RecoilProvider from './context/RecoilProvider';
import { Container, CssBaseline } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Recipes from './pages/Recipes';
import RecipeSearch from './pages/RecipeSearch';
import MealPlan from './pages/MealPlan';

function App() {
  return (
    <RecoilProvider>
      <Router>
        <CssBaseline />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Add more routes as needed */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipeSearch" element={<RecipeSearch />} />
            <Route path="/mealPlan" element={<MealPlan />} />
          </Routes>
          <ToastContainer />
        </Container>
      </Router>
    </RecoilProvider>
  );
}

export default App;
