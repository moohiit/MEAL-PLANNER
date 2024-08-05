import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    
    try {
      // Remove token from local storage
      localStorage.removeItem('token');
      // Redirect to login page
      const response = await axios.post('http://localhost:5000/api/users/logout');
      if (response) {
        navigate('/login');
      }
    } catch (error) {
      console.log('Logout Error: ', error.response.data.message);
    }
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded">
      Logout
    </button>
  );
};

export default LogoutButton;
