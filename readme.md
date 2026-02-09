# Meal Planner and Recipe Manager

## Overview

The Meal Planner and Recipe Manager is a web application designed to help users plan their meals, find and save recipes, and generate shopping lists based on meal plans. This application simplifies meal planning and grocery shopping, making it easier to maintain a healthy and organized lifestyle.

## Features

- **User Authentication**: Register, login, and manage user accounts.
- **User Profile**: View and edit profile, set dietary preferences, and save favorite recipes.
- **Recipe Management**: Browse, add, edit, delete, rate, and review recipes.
- **Meal Planning**: Create and manage weekly meal plans, view meal plans on a calendar.
- **Shopping List**: Generate shopping lists from meal plans, manage items, and track purchases.
- **Notifications and Reminders**: Receive reminders for meal preparation and shopping.
- **Social Sharing**: Share recipes and meal plans with friends.

## Tech Stack

- **Frontend**: React (Recoil for state management, Tailwind CSS for styling, Material UI for components)
- **Backend**: Node.js (Express.js)
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **APIs**: Optional integration with nutrition/recipe APIs for extended functionality

## Data Model

### User
- `id`: ObjectId
- `name`: String
- `email`: String
- `password`: String
- `profilePicture`: String
- `dietaryPreferences`: [String]
- `favoriteRecipes`: [ObjectId]

### Recipe
- `id`: ObjectId
- `name`: String
- `description`: String
- `ingredients`: [String]
- `instructions`: String
- `category`: String
- `preparationTime`: Number
- `cookingTime`: Number
- `author`: ObjectId (User)
- `ratings`: [{ userId: ObjectId, rating: Number }]
- `reviews`: [{ userId: ObjectId, review: String }]

### MealPlan
- `id`: ObjectId
- `userId`: ObjectId
- `week`: Date (start of the week)
- `days`: [{ 
    `day`: String, 
    `recipes`: [ObjectId] 
  }]

### ShoppingList
- `id`: ObjectId
- `userId`: ObjectId
- `items`: [{ name: String, quantity: Number, purchased: Boolean }]
- `createdAt`: Date

## Workflow

### 1. User Authentication
- **Register/Login**: Users can create an account or log in.
- **Token Management**: Store JWT token in Recoil state.

### 2. Profile Setup
- **Profile Information**: Set and update user profile and dietary preferences.

### 3. Recipe Management
- **CRUD Operations**: Browse, add, edit, delete, rate, and review recipes.

### 4. Meal Planning
- **Weekly Planner**: Add recipes to weekly meal planner and view on a calendar.

### 5. Shopping List Generation
- **Generate List**: Create shopping lists from meal plans and manage items.

### 6. Notifications and Reminders
- **Meal Prep & Shopping**: Receive reminders for meal preparation and shopping.

### 7. Social Sharing
- **Share**: Share recipes and meal plans with others.

## Setup

### Backend

1. **Initialize Project**
    ```bash
    mkdir backend
    cd backend
    npm init -y
    ```

2. **Install Dependencies**
    ```bash
    npm install express mongoose dotenv jsonwebtoken bcryptjs
    npm install --save-dev nodemon
    ```

3. **Basic Structure**
    ```bash
    mkdir src
    cd src
    mkdir config controllers models routes middleware
    touch server.js
    ```

4. **Example `server.js`**
    ```javascript
    const express = require('express');
    const mongoose = require('mongoose');
    const dotenv = require('dotenv');
    const cors = require('cors');

    dotenv.config();

    const app = express();
    app.use(cors());
    app.use(express.json());

    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log('MongoDB connected'))
      .catch(err => console.log(err));

    app.use('/api/users', require('./routes/users'));

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    ```

### Frontend

1. **Initialize Project**
    ```bash
    mkdir frontend
    cd frontend
    npm create vite@latest .
    ```

2. **Install Dependencies**
    ```bash
    npm install recoil @mui/material @emotion/react @emotion/styled axios react-toastify react-modal react-hook-form tailwindcss
    npx tailwindcss init
    ```

3. **Configure Tailwind CSS**
    **`tailwind.config.js`**
    ```javascript
    module.exports = {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

    **`src/index.css`**
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

4. **Basic Structure**
    ```bash
    mkdir src/components src/pages src/context
    touch src/App.jsx src/index.jsx src/context/RecoilProvider.jsx
    ```

    **Example `RecoilProvider.jsx`**
    ```javascript
    import { RecoilRoot } from 'recoil';

    const RecoilProvider = ({ children }) => (
      <RecoilRoot>
        {children}
      </RecoilRoot>
    );

    export default RecoilProvider;
    ```

    **Example `App.jsx`**
    ```javascript
    import React from 'react';
    import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
    import Home from './pages/Home';
    import Login from './pages/Login';
    import Register from './pages/Register';
    import RecoilProvider from './context/RecoilProvider';

    function App() {
      return (
        <RecoilProvider>
          <Router>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/" component={Home} />
            </Switch>
          </Router>
        </RecoilProvider>
      );
    }

    export default App;
    ```

## Running the Project

1. **Backend**:
    ```bash
    cd backend
    nodemon src/server.js
    ```

2. **Frontend**:
    ```bash
    cd frontend
    npm run dev
    ```

Visit `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend.

## Testing

- **Backend Testing**: Use Postman to test API endpoints.
- **Frontend Testing**: Test UI components and their integration with backend APIs.
- **Integration Testing**: Ensure data flows correctly between frontend and backend.

## Pending Critical Tasks

- **Wire up missing API routes**: Mount recipe and meal plan routes in `backend/server.js` so these endpoints are reachable.
- **Fix controller imports**: Add missing model imports in `backend/src/controllers/recipe.controllers.js` and `backend/src/controllers/mealPlan.controllers.js`.
- **Add input validation**: Validate request payloads for auth, recipes, and meal plans to prevent malformed data.
- **Harden auth middleware**: Handle missing/invalid `Authorization` headers gracefully to avoid runtime crashes.
- **Create shopping list endpoints**: Add routes/controllers for shopping list CRUD using `shoppingList.model.js`.
- **Connect frontend to APIs**: Implement API calls from React pages, including token handling and error states.
- **Protect authenticated routes**: Gate pages like Dashboard/Profile/MealPlan based on auth state.
- **Environment configuration**: Add `.env` templates for backend/frontend with required variables.
- **Testing coverage**: Add unit/integration tests for key backend routes and frontend components.

## Contribution

Feel free to fork this repository and submit pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
